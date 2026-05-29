import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages deployment
  output: "export",
  // Required when using next/image with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
