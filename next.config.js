const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,

  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "/pwa-test" : "",
});
