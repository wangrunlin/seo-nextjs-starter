import type { MetadataRoute } from "next";

const baseURL =
  process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
