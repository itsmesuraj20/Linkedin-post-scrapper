import mongoose, { Schema, Document } from 'mongoose';
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    subscription: { type: String, enum: ['free', 'premium'], default: 'free' },
    scrapeCount: { type: Number, default: 0 },
    lastScrapeAt: { type: Date },
    password: { type: String, required: true },
});
export default mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map