import { Router } from 'express';
import { scrapeLinkedInPost } from '../scraper/linkedin.js';
import Post from '../models/Post.js';
const router = Router();
router.post('/linkedin-post', async (req, res) => {
    const { postUrl, userId } = req.body;
    if (!postUrl || !userId)
        return res.status(400).json({ error: 'Missing postUrl or userId' });
    try {
        const scraped = await scrapeLinkedInPost(postUrl);
        const post = await Post.create({
            ...scraped,
            postUrl,
            scrapedAt: new Date(),
            userId,
        });
        res.json(post);
    }
    catch (err) {
        res.status(500).json({ error: 'Scraping failed', details: err });
    }
});
export default router;
//# sourceMappingURL=scrape.js.map