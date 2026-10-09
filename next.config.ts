import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  images: { qualities: [75, 90, 100] },
  // Prevent `next dev` from appending generated rules to AGENTS.md.
  agentRules: false,
};

export default nextConfig;
