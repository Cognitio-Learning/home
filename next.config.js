/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below,
    experimental: {
        mdxRs: true
    },
    output: 'standalone'
}

module.exports = withMDX(nextConfig)