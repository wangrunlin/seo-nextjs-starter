/** Resolve only public origins; never inherit the template author's domain. */
export function resolveSiteUrl(env = {}) {
  const explicit = env.NEXT_PUBLIC_URL?.trim();
  const host =
    env.VERCEL_ENV === "production"
      ? env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL
      : env.VERCEL_URL;
  const candidate =
    explicit || (host ? `https://${host}` : "http://localhost:3000");
  let url;
  try {
    url = new URL(candidate);
  } catch {
    throw new Error("NEXT_PUBLIC_URL must be a full http(s) URL.");
  }
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "NEXT_PUBLIC_URL must be an http(s) origin without a path, credentials, query or fragment.",
    );
  }
  return url.origin;
}

export function canIndex(env = {}) {
  if (env.VERCEL_ENV === "preview" || env.VERCEL_ENV === "development")
    return false;
  const origin = new URL(resolveSiteUrl(env));
  return (
    env.NEXT_PUBLIC_INDEXABLE !== "false" &&
    !["localhost", "127.0.0.1", "[::1]"].includes(origin.hostname)
  );
}
