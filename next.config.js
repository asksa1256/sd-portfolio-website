/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   loader: 'custom',
  //   loaderFile: './imageLoader.js',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sdlee.vercel.app',
      },
    ],
  }
}

module.exports = nextConfig
