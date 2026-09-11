import { canIndex, resolveSiteUrl } from "@/lib/site-url.mjs";

export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "SEO Next.js Starter";
export const title =
  process.env.NEXT_PUBLIC_TITLE || "SEO foundations for your next launch";
export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "An open-source Next.js starter with page metadata, sitemaps, social images, and practical SEO examples you can inspect and adapt.";
export const baseURL = resolveSiteUrl(process.env);
export const indexable = canIndex(process.env);
export const repository = "https://github.com/wangrunlin/seo-nextjs-starter";
export const templateURL =
  "https://github.com/new?template_name=seo-nextjs-starter&template_owner=wangrunlin";
export const deployURL = `https://vercel.com/new/clone?repository-url=${encodeURIComponent(repository)}&project-name=seo-nextjs-starter&repository-name=seo-nextjs-starter&env=NEXT_PUBLIC_URL&envDescription=${encodeURIComponent("Your production website origin, e.g. https://example.com")}`;
