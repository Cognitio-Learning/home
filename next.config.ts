import type { NextConfig } from "next";
const withMDX = require('@next/mdx')()

const nextConfig: NextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below,
    experimental: {
        mdxRs: true
    },
    output: 'standalone',
    turbopack: {
        
    }
}

module.exports = withMDX(nextConfig)