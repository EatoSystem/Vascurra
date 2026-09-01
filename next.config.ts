import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Prevent `next dev` from appending generated rules to AGENTS.md.
  agentRules: false,
};

export default nextConfig;
