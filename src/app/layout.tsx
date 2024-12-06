import type { Metadata } from "next";
import "./globals.css";

const title = "SEO Next.js Starter";
const description = "SEO Next.js Starter";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/icon?<generated>",
    shortcut: "/icon?<generated>",
    apple: "/icon?<generated>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
