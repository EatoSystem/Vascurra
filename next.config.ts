import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { qualities: [75, 90] },
  // Prevent `next dev` from appending generated rules to AGENTS.md.
  agentRules: false,
};

export default nextConfig;
