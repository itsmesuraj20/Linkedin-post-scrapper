import mongoose, { Schema, Document } from 'mongoose';
const PostSchema = new Schema({
    content: { type: String, required: true },
    author: {
        name: String,
        title: String,
        profileUrl: String,
        avatar: String,
    },
    publishDate: { type: Date, required: true },
    hashtags: [String],
    metrics: {
        likes: Number,
        comments: Number,
        shares: Number,
        views: Number,
    },
    postUrl: { type: String, required: true },
    images: [String],
    scrapedAt: { type: Date, default: Date.now },
    userId: { type: String, required: true },
});
export default mongoose.model('Post', PostSchema);
//# sourceMappingURL=Post.js.map