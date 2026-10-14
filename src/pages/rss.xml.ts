import { TEXTS_GENERAL } from "@/lib/texts.ts";
import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getPublishedPosts } from '@/lib/blog/content.ts';
import { getPostUrl } from '@/lib/blog/presentation.ts';
import { SITE_DATA, SITE_LOCALE } from '@/lib/site.ts';

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
            description: post.data.description,
            pubDate: post.data.publishedAt,
            link: getPostUrl(post.id),
        })),
        customData: `<language>${SITE_LOCALE.rss}</language>`,
    })
}
