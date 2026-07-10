/** @type {import('next').NextConfig} */

// For a user/organization page repo named "salihcls.github.io", the site is
// served from the root domain (https://salihcls.github.io/), so NO basePath is
// needed. If you instead deploy to a PROJECT repo (e.g. "portfolio"), set
// NEXT_PUBLIC_BASE_PATH="/portfolio" so assets resolve under the subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  // Emit a fully static site into ./out so it can be hosted without a server.
  output: 'export',
  // Ensure clean URLs map to index.html files (e.g. /about -> /about/index.html).
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Required: GitHub Pages has no Next.js image optimization server.
    unoptimized: true,
  },
  // Empty for a user page; set via env for a project repo subpath.
  basePath: basePath,
  assetPrefix: basePath,
}

export default nextConfig
