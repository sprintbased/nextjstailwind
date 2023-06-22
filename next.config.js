/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  images: {
    unoptimized: true, // when true, the source image will be served as-is (from CDN) rather than next/image cache
    domains: [
      "tailwindui.com",
    ],
  },
}

module.exports = nextConfig
