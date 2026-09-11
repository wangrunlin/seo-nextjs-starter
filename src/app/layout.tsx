import "@/app/globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  baseURL,
  description,
  deployURL,
  indexable,
  repository,
  siteName,
} from "@/config";
export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  robots: { index: indexable, follow: true },
};
const themeScript = `try{const t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch{}`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header deployURL={deployURL} repository={repository} />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
