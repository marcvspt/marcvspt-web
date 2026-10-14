import { SITE_DATA } from '@/lib/site.ts';
import { TEXTS_GENERAL } from '@/lib/texts.ts';
import type { LinkItem, SitePage } from '@/lib/types/site.ts';

export const SITE_PAGES = {
    Home: { id: 'home', label: TEXTS_GENERAL.pages.Home.title, title: TEXTS_GENERAL.pages.Home.title, description: SITE_DATA.description, href: '/' },
    Blog: { id: 'blog', label: TEXTS_GENERAL.pages.Blog.title, ...TEXTS_GENERAL.pages.Blog, href: '/blog' },
    About: { id: 'about', label: TEXTS_GENERAL.pages.About.title, ...TEXTS_GENERAL.pages.About, href: '/about' },
} satisfies Record<'Home' | 'Blog' | 'About', SitePage>;

export const MAIN_NAVIGATION: LinkItem[] = [SITE_PAGES.Home, SITE_PAGES.Blog, SITE_PAGES.About];
