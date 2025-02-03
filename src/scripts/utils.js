
export function getFormatedDate(pubDate, format) {
    if (!pubDate) return "";

    if (format && format === 'plain') {
        const newPubDate = new Date(pubDate).toISOString().split("T")[0].toString();
        return newPubDate;
    }

    if (format && format === 'iso') {
        const newPubDate = new Date(pubDate).toISOString();
        return newPubDate;
    }

    if (format && format === 'epoch') {
        const newPubDate = new Date(pubDate).getTime();
        return newPubDate;
    }

    const newPubDate = new Date(pubDate).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });

    return newPubDate;
};

export function getAllPosts() {
    const allPosts = Object.values(
        import.meta.glob("@/pages/blog/posts/**/*.md", { eager: true })
    );

    return allPosts;
};

export function sortPostsByDate(posts) {
    return posts.slice().sort((a, b) => {
        const dateA = getFormatedDate(a.frontmatter.pubDate, 'epoch');
        const dateB = getFormatedDate(b.frontmatter.pubDate, 'epoch');
        return dateB - dateA; // Orden descendente (más reciente primero)
        // return dateA - dateB; // Orden ascendente (más antiguo primero)
    });
}

export function getUniqueTags() {
    const allPosts = getAllPosts();
    return [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
};
