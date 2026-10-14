import { TEXTS_GENERAL } from '@/lib/texts.ts';
import type { SiteData } from '@/lib/types/site.ts';

export const SITE_DATA: SiteData = {
    name: TEXTS_GENERAL.site.name,
    description: TEXTS_GENERAL.site.description,
};

export const SITE_LOCALE = {
    html: 'es',
    date: 'es-MX',
    sort: 'es-MX',
    rss: 'es-mx',
    timeZone: 'UTC',
} as const;
