import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const isElectron = process.env.ELECTRON_BUILD === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/creative-veo3-studio" : "",
  assetPrefix: isGitHubPages
    ? "/creative-veo3-studio/"
    : isElectron
      ? "."
      : "",
  trailingSlash: true,
};

export default nextConfig;
