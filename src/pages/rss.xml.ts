import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getPublishedPosts, getPostUrl } from '@/scripts/blog'
import { SITE_DATA } from '@/scripts/data.js'

export const GET: APIRoute = async (context) => {
    if (!context.site) {
        throw new Error('Define site en astro.config.mjs para generar el RSS.')
    }
    const posts = await getPublishedPosts()

    return rss({
        title: SITE_DATA.name,
        description: SITE_DATA.description,
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.excerpt,
            pubDate: post.data.date,
            link: getPostUrl(post.id),
        })),
        customData: `<language>es-mx</language>`,
    })
}
