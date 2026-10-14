import { SITE_LOCALE } from '@/lib/site.ts';
import { TEXTS_GENERAL } from '@/lib/texts.ts';

export function getPostUrl(slug: string): string {
    return `/blog/${slug}/`;
}

const dateFormatter = new Intl.DateTimeFormat(SITE_LOCALE.date, {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: SITE_LOCALE.timeZone,
});

export function formatPostDate(date: Date): string {
    return dateFormatter.format(date);
}

export function formatReadTime(minutes: number): string {
    return TEXTS_GENERAL.post.readTime(minutes);
}
