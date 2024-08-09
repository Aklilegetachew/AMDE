/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Rule for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
