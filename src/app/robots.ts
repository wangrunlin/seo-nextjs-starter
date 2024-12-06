import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${
      process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_VERCEL_URL
    }/sitemap.xml`,
  };
}
