import type { Metadata } from "next";
import {
  baseURL,
  description as defaultDescription,
  indexable,
  siteName,
} from "@/config";

export function pageMetadata(
  title: string,
  path: string,
  description = defaultDescription,
): Metadata {
  const url = new URL(path, baseURL).href;
  const image = new URL(`/api/og?title=${encodeURIComponent(title)}`, baseURL)
    .href;
  return {
    title: { absolute: `${title} | ${siteName}` },
    description,
    alternates: { canonical: url },
    robots: { index: indexable, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, baseURL).href,
    })),
  };
}
