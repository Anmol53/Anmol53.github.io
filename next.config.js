/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Next.js 15.3.3 optimizations
  experimental: {
    optimizePackageImports: ["@heroicons/react", "react-icons"],
    serverExternalPackages: [],
  },
  // Optimization settings
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
