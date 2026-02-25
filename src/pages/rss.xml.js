import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_DATA } from '@/scripts/data.js'

export async function GET(context) {
    const posts = await getCollection('blog', ({ data }) => !data.draft)

    return rss({
        title: SITE_DATA.name,
        description: SITE_DATA.description,
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.excerpt,
            pubDate: new Date(post.data.date),
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>es-mx</language>`,
    })
}