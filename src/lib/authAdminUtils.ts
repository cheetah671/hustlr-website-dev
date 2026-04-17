import type { User } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/src/lib/supabase-admin";

const AUTH_USERS_PAGE_SIZE = 1000;

export async function findAuthUserByEmail(email: string): Promise<User | null> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) return null;

  let page = 1;

  while (true) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({
      page,
      perPage: AUTH_USERS_PAGE_SIZE,
    });

    if (error) {
      throw error;
    }

    const users = data?.users ?? [];
    const match =
      users.find(
        (user) => (user.email || "").trim().toLowerCase() === normalizedEmail
      ) ?? null;

    if (match) {
      return match;
    }

    if (!data?.nextPage || users.length === 0) {
      return null;
    }

    page = data.nextPage;
  }
}
