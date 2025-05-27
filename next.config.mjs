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
  i18n: {
    locales: ["en", "am"], // 'en' for English, 'am' for Amharic
    defaultLocale: "en",
  },
  output: "export",
  assetPrefix: "/",
  trailingSlash: true,
};

export default nextConfig;
