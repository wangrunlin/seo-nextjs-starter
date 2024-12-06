import type { Metadata } from "next";

const shortName = process.env.NEXT_PUBLIC_SHORT_NAME || "";

export const metadata: Metadata = {
  title: `${shortName} | About`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
