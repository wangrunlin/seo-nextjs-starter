import type { MetadataRoute } from "next";

const baseURL =
  process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
