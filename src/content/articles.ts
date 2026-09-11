export const articles = [
  {
    slug: "canonical-urls",
    title: "Give every page its own canonical URL",
    summary:
      "A small metadata decision that tells search engines which version of a page you want indexed.",
    date: "2026-09-11",
    category: "METADATA",
    body: [
      {
        heading: "Start with the page, not just the domain",
        text: "A canonical URL identifies the preferred address for a piece of content. The homepage, documentation, and each article describe different things, so each should point to its own preferred URL.",
      },
      {
        heading: "Keep the URL consistent",
        text: "Use your production origin, preserve the page path, and choose one trailing-slash convention. Tracking parameters can point back to the clean article URL when they do not change its content.",
      },
      {
        heading: "Inspect the response",
        text: "Open the page source and find the canonical link. Compare it with the page you are visiting, its sitemap entry, and its Open Graph URL. They should describe the same page.",
      },
    ],
    code: `pageMetadata(\n  'Give every page its own canonical URL',\n  '/examples/articles/canonical-urls'\n)`,
  },
  {
    slug: "social-images",
    title: "Make your next link worth sharing",
    summary:
      "Build a useful Open Graph card from the same title and description as your page.",
    date: "2026-09-11",
    category: "SOCIAL IMAGES",
    body: [
      {
        heading: "One identity, several surfaces",
        text: "Your page title helps visitors understand the content. A social card carries that identity into a conversation, a feed, or a saved link. Keep the text specific to the page being shared.",
      },
      {
        heading: "Generate a real image",
        text: "The included image endpoint uses Next.js ImageResponse to return a 1200 by 630 image. Open the endpoint directly to check that the title fits and the response is an image.",
      },
      {
        heading: "Test the published URL",
        text: "A social platform needs to fetch your image from a public URL. Preview deployments may require authentication, so inspect the final published image before sharing your launch.",
      },
    ],
    code: `openGraph: {\n  images: [{\n    url: '/api/og?title=Make%20your%20next%20link%20worth%20sharing',\n    width: 1200, height: 630\n  }]\n}`,
  },
];
