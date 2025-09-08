import mongoose, { Schema, Document } from 'mongoose';
import type { LinkedInPost } from '../shared/types.js';

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

const PostSchema: Schema = new Schema({
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

export default mongoose.model<IPost>('Post', PostSchema);
