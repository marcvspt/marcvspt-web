import { TEXTS_GENERAL } from "@/scripts/texts";
import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getPublishedPosts, getPostUrl } from '@/scripts/blog'
import { SITE_DATA } from '@/scripts/data.js'

export const GET: APIRoute = async (context) => {
    if (!context.site) {
        throw new Error(TEXTS_GENERAL.errors.rssSite)
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
        customData: `<language>${TEXTS_GENERAL.locale.rss}</language>`,
    })
}
