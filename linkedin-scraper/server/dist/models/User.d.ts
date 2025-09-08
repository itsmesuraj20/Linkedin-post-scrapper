import mongoose, { Document } from 'mongoose';
export interface IUserDoc extends Document {
    email: string;
    username: string;
    createdAt: Date;
    subscription: 'free' | 'premium';
    scrapeCount: number;
    lastScrapeAt?: Date;
    password: string;
}
declare const _default: mongoose.Model<IUserDoc, {}, {}, {}, mongoose.Document<unknown, {}, IUserDoc, {}, {}> & IUserDoc & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=User.d.ts.map