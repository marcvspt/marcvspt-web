import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import { SITE_DATA } from '@/scripts/data.js'

export async function GET(context) {
    return rss({
        title: SITE_DATA.name,
        description: SITE_DATA.description,
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob('./blog/**/*.{md,mdx}'),
        ),
        customData: `<language>es-mx</language>`,
    })
}