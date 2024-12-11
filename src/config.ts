export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "SEO Next.js Starter";

export const title =
  process.env.NEXT_PUBLIC_TITLE ||
  "SEO Next.js Starter - A Starter Template for SEO Optimized Next.js Projects";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "A simple and easy-to-use starter template for building SEO optimized Next.js applications with best practices and performance in mind.";

// Last baseURL
const defaultBaseURL = "https://seo-nextjs-starter.vercel.app";

// Vercel baseURL, make sure it's a valid URL
const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL &&
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

// meta base url
export const baseURL =
  process.env.NEXT_PUBLIC_URL ||
  VERCEL_URL ||
  (globalThis.location && globalThis.location.origin) ||
  defaultBaseURL;
