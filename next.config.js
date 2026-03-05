/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ong-website',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
