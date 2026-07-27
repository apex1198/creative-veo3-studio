import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/creative-veo3-studio" : "",
  assetPrefix: isGitHubPages ? "/creative-veo3-studio/" : "",
  trailingSlash: true,
};

export default nextConfig;
