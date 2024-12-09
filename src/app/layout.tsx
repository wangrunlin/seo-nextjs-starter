import "@/app/globals.css";

import type { Metadata } from "next";
import Footer from "@/components/Footer";

const siteName = "SEO Next.js Starter";
const title = "SEO Next.js Starter";
const description = "SEO Next.js Starter";

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
      </body>
    </html>
  );
}
