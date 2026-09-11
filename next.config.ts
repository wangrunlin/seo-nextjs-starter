import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/README.md", destination: "/docs", permanent: true },
      { source: "/README-zh.md", destination: "/docs/zh", permanent: true },
    ];
  },
};
export default nextConfig;
