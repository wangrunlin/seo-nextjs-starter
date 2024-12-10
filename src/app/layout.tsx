import "@/app/globals.css";

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "SEO Next.js Starter";
export const title =
  process.env.NEXT_PUBLIC_TITLE ||
  "SEO Next.js Starter - A Starter Template for SEO Optimized Next.js Projects";
export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "A simple and easy-to-use starter template for building SEO optimized Next.js applications with best practices and performance in mind.";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon?<generated>",
    shortcut: "/icon?<generated>",
    apple: "/icon?<generated>",
  },
  // todo)) Vercel build error use this instead
  // metadataBase: new URL(
  //   process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_VERCEL_URL || ""
  // ),
  openGraph: {
    title,
    description,
    siteName,
    images: [
      {
        url: "/api/og",
        alt: `${siteName} Open Graph Image`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>

        <Footer />

        {/* <Analytics /> */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
