import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
    return rss({
        title: 'Blog de Marcvs',
        description: 'Blog de Marcvs sobre tecnología y ciberseguridad',
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob('./blog/posts/**/*.{md,mdx}'),
        ),
        customData: `<language>es-mx</language>`,
    })
}