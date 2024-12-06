import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
