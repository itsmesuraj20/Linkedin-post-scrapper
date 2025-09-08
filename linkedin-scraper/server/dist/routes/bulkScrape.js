import { Router } from 'express';
import { scrapeLinkedInPost } from '../scraper/linkedin.js';
import Post from '../models/Post.js';
const router = Router();
router.post('/linkedin-posts', async (req, res) => {
    const { postUrls, userId } = req.body;
    if (!Array.isArray(postUrls) || !userId)
        return res.status(400).json({ error: 'Missing postUrls or userId' });
    try {
        const results = [];
        for (const url of postUrls) {
            try {
                const scraped = await scrapeLinkedInPost(url);
                const post = await Post.create({ ...scraped, postUrl: url, scrapedAt: new Date(), userId });
                results.push(post);
            }
            catch (err) {
                results.push({ error: 'Failed to scrape', url });
            }
        }
        res.json(results);
    }
    catch (err) {
        res.status(500).json({ error: 'Bulk scraping failed', details: err });
    }
});
export default router;
//# sourceMappingURL=bulkScrape.js.map