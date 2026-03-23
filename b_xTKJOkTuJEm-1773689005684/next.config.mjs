/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Static export configuration for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
}

export default nextConfig
