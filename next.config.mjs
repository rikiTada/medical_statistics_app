import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkBreaks from "remark-breaks";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: `export`, //cloudflare workers setting
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.usedExports = true;
    }
    config.resolve.fallback = { fs: false };
    return config;
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [[rehypePrettyCode]],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
