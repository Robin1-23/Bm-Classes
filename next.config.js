/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/calculator', destination: '/programs', permanent: true }];
  },
};

module.exports = nextConfig;
