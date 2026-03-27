/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Static export configuration for Cloudflare Pages (production only)
  output: isDev ? undefined : 'export',
  trailingSlash: true,
  distDir: isDev ? '.next' : 'out',
}

export default nextConfig
