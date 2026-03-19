import Head from "next/head";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Nav from "@/src/components/Nav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const COUNTRY_CODES = [
  { value: "+91", label: "🇮🇳 +91" },
  { value: "+1", label: "🇺🇸 +1" },
  { value: "+44", label: "🇬🇧 +44" },
  { value: "+61", label: "🇦🇺 +61" },
  { value: "+65", label: "🇸🇬 +65" },
];

export default function ClientVerifyPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [countryCode, setCountryCode] = useState("+91");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLabel = mode === "signup" ? "Create Account" : "Sign In";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!companyName.trim() || !email.trim() || !password.trim() || !phone.trim()) {
      toast.error("Please fill all fields before continuing.");
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    toast.success(
      `${submitLabel} captured for ${companyName}. We will notify you when client onboarding opens.`
    );
    setIsSubmitting(false);
  }

  return (
    <>
      <Head>
        <title>Client Verify - Hustlr</title>
      </Head>

      <Nav />

      <main className="min-h-screen bg-white">
        <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
          <div className="bg-white px-6 py-10 sm:px-10 md:px-14 lg:px-20 flex items-center">
            <div className="w-full font-sans text-black">
              <h1 className="text-3xl font-semibold tracking-tight">
                Let&apos;s Get Started
              </h1>
              <p className="mt-3 text-black font-semibold">
                Find top student talent for your next project
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Company Name</label>
                    <Input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      autoComplete="organization"
                      className="h-11 w-full rounded-2xl border-black/20 bg-white shadow-[-1px_2px_3px_rgba(0,0,0,0.1)]"
                    />
                  </div>

                  <div className="hidden md:block" aria-hidden="true" />

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Email</label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="h-11 w-full rounded-2xl border-black/20 bg-white shadow-[-1px_2px_3px_rgba(0,0,0,0.1)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium">
                      Password
                      <span className="text-[11px] font-normal text-black/45 whitespace-nowrap">
                        At least 6 characters, 1 uppercase, 1 number
                      </span>
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength={6}
                      autoComplete={
                        mode === "signin" ? "current-password" : "new-password"
                      }
                      className="h-11 w-full rounded-2xl border-black/20 bg-white shadow-[-1px_2px_3px_rgba(0,0,0,0.1)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Phone Number</label>
                    <div className="flex h-11 rounded-2xl border border-black/20 bg-white overflow-hidden shadow-[-1px_2px_3px_rgba(0,0,0,0.1)]">
                      <Select value={countryCode} onValueChange={setCountryCode}>
                        <SelectTrigger className="h-11 w-auto min-w-[90px] border-none border-r border-black/20 bg-white text-black text-sm rounded-none focus:ring-0 focus:ring-offset-0 px-3">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {COUNTRY_CODES.map((code) => (
                            <SelectItem key={code.value} value={code.value}>
                              {code.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        className="flex-1 h-11 border-none bg-white rounded-none outline-none px-3 text-base"
                      />
                    </div>
                  </div>

                  <div className="hidden md:block" aria-hidden="true" />
                </div>

                <div className="pt-2">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <Button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => router.push("/get-started/client/onboarding")}
                      className="h-10 w-full sm:w-[265px] rounded-2xl bg-black text-white shadow-[-1px_2px_3px_rgba(0,0,0,0.1)] hover:bg-black/90"
                    >
                      {isSubmitting && mode === "signup"
                        ? "Please wait..."
                        : "Create Account"}
                    </Button>

                    <div className="space-y-2">
                      <Button
                        type="button"
                        variant="outline"
                        disabled={isSubmitting}
                        onClick={() => {
                          setMode("signin");
                          router.push("/get-started/client/onboarding");
                        }}
                        className="h-10 w-full sm:w-[265px] rounded-2xl border-black/20 bg-white text-black shadow-[-1px_2px_3px_rgba(0,0,0,0.1)] hover:bg-black/5"
                      >
                        {isSubmitting && mode === "signin"
                          ? "Please wait..."
                          : "Sign In"}
                      </Button>
                      <p className="text-center text-xs text-black/45">
                        Already have an account?
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className="relative hidden md:block bg-[#050505] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/topo.svg')" }}
          />
        </section>
      </main>
    </>
  );
}
