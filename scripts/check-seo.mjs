import assert from "node:assert/strict";
const base = (process.env.SEO_CHECK_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);
const pages = [
  "/",
  "/docs",
  "/docs/zh",
  "/about",
  "/examples",
  "/examples/articles",
  "/examples/articles/canonical-urls",
  "/examples/articles/social-images",
  "/examples/product",
];
const decode = (s) =>
  s
    ?.replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"');
const attr = (tag, name) =>
  decode(tag.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1]);
const tags = (html, name) =>
  html.match(new RegExp(`<${name}\\b[^>]*>`, "g")) || [];
const meta = (html, name) =>
  attr(
    tags(html, "meta").find(
      (t) => attr(t, "name") === name || attr(t, "property") === name,
    ) || "",
    "content",
  );
const canonical = (html) =>
  attr(
    tags(html, "link").find((t) => attr(t, "rel") === "canonical") || "",
    "href",
  );
let count = 0;
const check = (condition, message) => {
  assert.ok(condition, message);
  count++;
};
const results = await Promise.all(
  pages.map(async (path) => {
    const response = await fetch(base + path);
    check(response.status === 200, `${path}: status ${response.status}`);
    return [path, await response.text()];
  }),
);
const origin = new URL(canonical(results[0][1])).origin;
const indexable = !meta(results[0][1], "robots")?.includes("noindex");
for (const [path, html] of results) {
  const expected = new URL(path, origin).href;
  check(
    new URL(canonical(html)).href === expected,
    `${path}: canonical must be ${expected}`,
  );
  check(new URL(meta(html, "og:url")).href === expected, `${path}: OG URL`);
  check(meta(html, "description")?.length > 20, `${path}: description`);
  check(
    meta(html, "twitter:card") === "summary_large_image",
    `${path}: Twitter card`,
  );
  check(
    meta(html, "robots")?.includes(indexable ? "index" : "noindex"),
    `${path}: indexing`,
  );
  check(tags(html, "h1").length === 1, `${path}: one H1`);
  check(
    meta(html, "og:image")?.startsWith(origin + "/api/og?title="),
    `${path}: page-specific OG`,
  );
  for (const [, json] of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    JSON.parse(json);
    count++;
  }
}
for (const path of ["/", "/docs", "/docs/zh", "/about"]) {
  const html = results.find(([p]) => p === path)[1];
  for (const domain of ["h3run.com", "h3maxlive.com", "image-2-5.com"]) {
    const tag = tags(html, "a").find(
      (t) => attr(t, "href") === `https://${domain}`,
    );
    check(
      Boolean(tag) && !attr(tag, "rel")?.includes("nofollow"),
      `${path}: author link ${domain}`,
    );
  }
}
for (const path of ["/docs", "/docs/zh"]) {
  const html = results.find(([p]) => p === path)[1];
  check(
    tags(html, "link").some(
      (t) =>
        attr(t, "hreflang") === "zh-CN" &&
        attr(t, "href") === `${origin}/docs/zh`,
    ),
    `${path}: Chinese alternate`,
  );
  check(
    tags(html, "link").some(
      (t) =>
        attr(t, "hreflang") === "en" && attr(t, "href") === `${origin}/docs`,
    ),
    `${path}: English alternate`,
  );
  check(
    !html.includes('href="README-zh.md"'),
    `${path}: no broken README link`,
  );
  for (const tag of tags(html, "a")) {
    const href = attr(tag, "href");
    if (href?.startsWith("#"))
      check(html.includes(`id="${href.slice(1)}"`), `${path}: anchor ${href}`);
  }
}
const sitemap = await fetch(base + "/sitemap.xml");
check(sitemap.status === 200, "sitemap status");
const xml = await sitemap.text();
for (const path of pages)
  check(
    xml.includes(`<loc>${new URL(path, origin).href}</loc>`) === indexable,
    `${path}: sitemap index policy`,
  );
const robots = await fetch(base + "/robots.txt");
check(robots.status === 200, "robots status");
const robotsText = await robots.text();
check(
  robotsText.includes("Allow: /"),
  "robots allows reading noindex directives",
);
check(robotsText.includes("Sitemap:") === indexable, "robots sitemap policy");
for (const path of [
  "/missing-seo-check-page",
  "/examples/articles/missing-article",
]) {
  const res = await fetch(base + path);
  check(res.status === 404, `${path}: real 404`);
}
for (const path of [
  "/api/og?title=An%20inspectable%20social%20image",
  "/icon",
]) {
  const res = await fetch(base + path);
  check(
    res.status === 200 &&
      res.headers.get("content-type")?.includes("image/png"),
    `${path}: PNG response`,
  );
  const bytes = new Uint8Array(await res.arrayBuffer());
  check(
    bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71,
    `${path}: PNG bytes`,
  );
}
for (const path of ["/brands/h3run.png", "/brands/image25.svg"])
  check((await fetch(base + path)).status === 200, `${path}: brand asset`);
const legacy = await fetch(base + "/README-zh.md", { redirect: "manual" });
check(
  [307, 308].includes(legacy.status) &&
    legacy.headers.get("location")?.endsWith("/docs/zh"),
  "legacy README route",
);
console.log(
  `Passed ${count} SEO response checks against ${base}; canonical origin ${origin}; indexable=${indexable}.`,
);
