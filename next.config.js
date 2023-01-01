/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['sk99foto.s3.eu-west-3.amazonaws.com'],
    deviceSizes: [640, 750, 828, 1080, 1140, 1920]
  },
  env: {
    staticImagesPath: "/static/"
  }
}

module.exports = nextConfig
