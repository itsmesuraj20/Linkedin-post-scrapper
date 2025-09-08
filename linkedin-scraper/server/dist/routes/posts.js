import { Router } from 'express';
import Post from '../models/Post.js';
const router = Router();
router.get('/', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const posts = await Post.find()
        .sort({ publishDate: -1 })
        .skip((+page - 1) * +limit)
        .limit(+limit);
    res.json(posts);
});
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post)
        return res.status(404).json({ error: 'Post not found' });
    res.json(post);
});
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});
export default router;
//# sourceMappingURL=posts.js.map