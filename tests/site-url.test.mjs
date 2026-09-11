import assert from "node:assert/strict";
import test from "node:test";
import { resolveSiteUrl, canIndex } from "../src/lib/site-url.mjs";

test("explicit origin takes priority and normalizes a trailing slash", () => {
  assert.equal(
    resolveSiteUrl({
      NEXT_PUBLIC_URL: "https://my-site.test/",
      VERCEL_PROJECT_PRODUCTION_URL: "wrong.vercel.app",
      VERCEL_ENV: "production",
    }),
    "https://my-site.test",
  );
});
test("a new Vercel project uses its production domain without a second public flag", () => {
  assert.equal(
    resolveSiteUrl({
      VERCEL_ENV: "production",
      VERCEL_PROJECT_PRODUCTION_URL: "new-project.vercel.app",
    }),
    "https://new-project.vercel.app",
  );
});
test("preview stays noindex even with a production origin configured", () => {
  const env = {
    VERCEL_ENV: "preview",
    VERCEL_URL: "branch.vercel.app",
    NEXT_PUBLIC_URL: "https://public.test",
  };
  assert.equal(canIndex(env), false);
  assert.equal(
    resolveSiteUrl({ VERCEL_ENV: "preview", VERCEL_URL: "branch.vercel.app" }),
    "https://branch.vercel.app",
  );
});
test("unconfigured local clones never index or point to the author", () => {
  assert.equal(resolveSiteUrl({}), "http://localhost:3000");
  assert.equal(canIndex({}), false);
});
test("explicit indexing opt-out and production behavior", () => {
  assert.equal(
    canIndex({
      NEXT_PUBLIC_URL: "https://public.test",
      NEXT_PUBLIC_INDEXABLE: "false",
    }),
    false,
  );
  assert.equal(canIndex({ NEXT_PUBLIC_URL: "https://public.test" }), true);
});
test("invalid configuration is rejected before emitting wrong canonical URLs", () => {
  for (const value of [
    "example.com",
    "javascript:alert(1)",
    "https://site.test/path",
    "https://user:password@site.test",
    "https://site.test/?query=1",
  ])
    assert.throws(() => resolveSiteUrl({ NEXT_PUBLIC_URL: value }));
});
