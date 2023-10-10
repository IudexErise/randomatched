/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/randomatched/**',
      },
    ],
  },
}