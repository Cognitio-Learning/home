import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/donations/', '/team/'],
        },
        sitemap: 'https://cognitiolearning.org/sitemap.xml',
    }
}