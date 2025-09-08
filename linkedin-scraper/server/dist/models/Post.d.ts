import mongoose, { Document } from 'mongoose';
export interface IPost extends Document {
    content: string;
    author: {
        name: string;
        title: string;
        profileUrl: string;
        avatar: string;
    };
    publishDate: Date;
    hashtags: string[];
    metrics: {
        likes: number;
        comments: number;
        shares: number;
        views?: number;
    };
    postUrl: string;
    images?: string[];
    scrapedAt: Date;
    userId: string;
}
declare const _default: mongoose.Model<IPost, {}, {}, {}, mongoose.Document<unknown, {}, IPost, {}, {}> & IPost & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Post.d.ts.map