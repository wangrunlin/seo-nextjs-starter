import type { Metadata } from "next";
import { siteName } from "@/config";

export const metadata: Metadata = {
  title: `About | ${siteName}`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
