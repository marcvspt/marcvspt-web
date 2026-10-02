import { getCollection } from 'astro:content';
import type { BlogPostCard } from './types';

export async function getPublishedPosts() {
    const posts = await getCollection('blog', ({ data }) => !data.draft);
    return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPublishedPostCards(): Promise<BlogPostCard[]> {
    return (await getPublishedPosts()).map((post) => ({ ...post.data, slug: post.id }));
}

export function getPostUrl(slug: string): string {
    return `/blog/${slug}/`;
}

const dateFormatter = new Intl.DateTimeFormat('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
});

export function formatPostDate(date: Date): string {
    return dateFormatter.format(date);
}

export function getReadTimeMinutes(readTime: string): number {
    const minutes = Number.parseInt(readTime, 10);
    return Number.isFinite(minutes) && minutes > 0 ? minutes : 0;
}
