import { Router } from 'express';
import Post from '../models/Post.js';
const router = Router();
router.get('/', async (_req, res) => {
    const totalPosts = await Post.countDocuments();
    const totalLikes = await Post.aggregate([{ $group: { _id: null, likes: { $sum: '$metrics.likes' } } }]);
    const totalComments = await Post.aggregate([{ $group: { _id: null, comments: { $sum: '$metrics.comments' } } }]);
    const totalShares = await Post.aggregate([{ $group: { _id: null, shares: { $sum: '$metrics.shares' } } }]);
    res.json({
        totalPosts,
        totalLikes: totalLikes[0]?.likes || 0,
        totalComments: totalComments[0]?.comments || 0,
        totalShares: totalShares[0]?.shares || 0,
    });
});
export default router;
//# sourceMappingURL=analytics.js.map