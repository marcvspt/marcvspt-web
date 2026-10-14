import { getCollection } from 'astro:content';
import type { BlogPostCard, BlogPostEntry } from '@/lib/types/blog.ts';

export async function getPublishedPosts(): Promise<BlogPostEntry[]> {
    const posts = await getCollection('blog', ({ data }) => !data.draft);
    return posts.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export async function getPublishedPostCards(): Promise<BlogPostCard[]> {
    return (await getPublishedPosts()).map((post) => ({ ...post.data, slug: post.id }));
}
