import type { MetadataRoute } from "next";
import { baseURL, indexable } from "@/config";
import { articles } from "@/content/articles";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  return [
    "/",
    "/docs",
    "/docs/zh",
    "/about",
    "/examples",
    "/examples/articles",
    "/examples/product",
  ]
    .map((path) => ({ url: new URL(path, baseURL).href }))
    .concat(
      articles.map((article) => ({
        url: new URL(`/examples/articles/${article.slug}`, baseURL).href,
        lastModified: article.date,
      })),
    );
}
