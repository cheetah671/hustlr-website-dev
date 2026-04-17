"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "@/src/lib/supabase/auth/component";

function firstQueryValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function sanitizeNext(next: string | undefined, fallback: string) {
  if (!next) return fallback;
  if (!next.startsWith("/") || next.startsWith("//") || next.includes(":")) {
    return fallback;
  }
  return next;
}

export default function AuthCodeHandler() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const authSessionMarker = firstQueryValue(router.query.sb);
    const authError = firstQueryValue(router.query.error);
    const authErrorCode = firstQueryValue(router.query.error_code);
    const authErrorDescription = firstQueryValue(router.query.error_description);
    const authCode = firstQueryValue(router.query.code);

    const hasAuthErrorContext =
      !!authSessionMarker ||
      !!authErrorCode ||
      !!authCode ||
      authError === "access_denied";

    if (hasAuthErrorContext && (authError || authErrorCode || authErrorDescription)) {
      const message =
        authErrorDescription ||
        authErrorCode ||
        authError ||
        "Confirmation_link_expired";
      void router.replace(
        `/error?message=${encodeURIComponent(message.replace(/\s+/g, "_"))}`
      );
      return;
    }

    if (!authCode) return;

    let cancelled = false;

    async function exchangeCode() {
      const code = authCode;
      if (!code) return;

      const supabase = createClient();
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (cancelled) return;

      if (error || !data.session?.access_token || !data.user?.email) {
        void router.replace("/error?message=Confirmation_link_expired");
        return;
      }

      const role =
        data.user.user_metadata?.role === "client" ? "client" : "user";
      const exchangePath =
        role === "client" ? "/api/client/auth/exchange" : "/api/auth/exchange";

      const exchangeResponse = await fetch(exchangePath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_token: data.session.access_token }),
      });

      if (cancelled) return;

      if (!exchangeResponse.ok) {
        if (exchangeResponse.status === 403) {
          void router.replace("/error?message=Email_not_confirmed");
          return;
        }
        void router.replace("/error");
        return;
      }

      if (role === "client") {
        try {
          const profileResponse = await fetch("/api/client/profile/get");
          if (profileResponse.ok) {
            void router.replace(
              sanitizeNext(
                firstQueryValue(router.query.next),
                "/get-started/client/dashboard"
              )
            );
            return;
          }
        } catch {
          // fall through to onboarding if profile lookup fails
        }

        void router.replace("/get-started/client/onboarding");
        return;
      }

      void router.replace(
        sanitizeNext(
          firstQueryValue(router.query.next),
          "/get-started/student/application"
        )
      );
    }

    void exchangeCode();

    return () => {
      cancelled = true;
    };
  }, [router]);

  return null;
}
