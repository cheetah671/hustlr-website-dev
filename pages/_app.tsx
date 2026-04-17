import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import { ovo, theSeasons, dmSans, jetbrainsMono, instrumentSerif } from "@/src/fonts";
import SmoothScrollProvider from "@/src/components/SmoothScrollProvider";
import CustomCursor from "@/src/components/CustomCursor";
import AuthCodeHandler from "@/src/components/AuthCodeHandler";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomepage = router.pathname === "/";

  return (
    <div
      className={`${ovo.variable} ${theSeasons.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <AuthCodeHandler />
      {isHomepage ? <SmoothScrollProvider /> : null}
      {isHomepage ? <CustomCursor /> : null}
      <Toaster richColors closeButton />
      <Component {...pageProps} />
    </div>
  );
}
