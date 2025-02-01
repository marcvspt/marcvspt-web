export const getFormatedDate = (pubDate) => {
    const newPubDate = new Date(pubDate).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });

    return newPubDate;
};

export const getAllPosts = () => {
    const allPosts = Object.values(
        import.meta.glob("@/pages/blog/posts/*.md", { eager: true })
    );
    return allPosts;
};



export const getUniqueTags = () => {
    const allPosts = getAllPosts();
    return [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
};
