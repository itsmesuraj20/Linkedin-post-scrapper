export declare function scrapeLinkedInPost(postUrl: string): Promise<{
    content: string;
    hashtags: string[];
    author: {
        name: string;
        title: string;
        profileUrl: string;
        avatar: string;
    };
    publishDate: string;
    metrics: {
        likes: number;
        comments: number;
        shares: number;
        views: number;
    };
    images: string[];
}>;
//# sourceMappingURL=linkedin.d.ts.map