import { SITE_LOCALE } from '@/lib/site.ts';
import { TEXTS_GENERAL } from '@/lib/texts.ts';

interface SortablePost {
    date: number;
    title: string;
    readTime: number;
}

const labels = TEXTS_GENERAL.blog.sort;
const collator = new Intl.Collator(SITE_LOCALE.sort);

export const BLOG_SORT_OPTIONS = [
    { value: 'date-desc', label: labels.newest, compare: (a, b) => b.date - a.date },
    { value: 'date-asc', label: labels.oldest, compare: (a, b) => a.date - b.date },
    { value: 'title-asc', label: labels.titleAscending, compare: (a, b) => collator.compare(a.title, b.title) },
    { value: 'title-desc', label: labels.titleDescending, compare: (a, b) => collator.compare(b.title, a.title) },
    { value: 'readtime-asc', label: labels.shortest, compare: (a, b) => a.readTime - b.readTime },
    { value: 'readtime-desc', label: labels.longest, compare: (a, b) => b.readTime - a.readTime },
] as const satisfies readonly {
    value: string;
    label: string;
    compare: (a: SortablePost, b: SortablePost) => number;
}[];

export type BlogSortOption = (typeof BLOG_SORT_OPTIONS)[number];
