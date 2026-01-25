const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed "output: export" to enable API routes
  // API routes require server-side rendering
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "."),
    };
    return config;
  },
};

module.exports = nextConfig;
