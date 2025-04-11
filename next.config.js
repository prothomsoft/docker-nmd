/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sk99foto.s3.eu-west-3.amazonaws.com',
        pathname: '/**'
      }
    ],
    deviceSizes: [600, 768, 1140, 1536]
  },
  env: {
    staticS3ImagesPath: "https://sk99foto.s3.eu-west-3.amazonaws.com/static/"
  }
}

module.exports = nextConfig;
