import mongoose, { Schema, Document } from 'mongoose';
import type { User as IUser } from '../shared/types.js';

export interface IUserDoc extends Document {
  email: string;
  username: string;
  createdAt: Date;
  subscription: 'free' | 'premium';
  scrapeCount: number;
  lastScrapeAt?: Date;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  subscription: { type: String, enum: ['free', 'premium'], default: 'free' },
  scrapeCount: { type: Number, default: 0 },
  lastScrapeAt: { type: Date },
  password: { type: String, required: true },
});

export default mongoose.model<IUserDoc>('User', UserSchema);
