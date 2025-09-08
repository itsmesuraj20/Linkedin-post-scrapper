import { Router } from 'express';
import cron from 'node-cron';
import { scrapeLinkedInPost } from '../scraper/linkedin.js';
import Post from '../models/Post.js';

const router = Router();

router.post('/schedule', (req, res) => {
  const { postUrl, userId, cronTime } = req.body;
  if (!postUrl || !userId || !cronTime) return res.status(400).json({ error: 'Missing fields' });
  cron.schedule(cronTime, async () => {
    try {
      const scraped = await scrapeLinkedInPost(postUrl);
      await Post.create({ ...scraped, postUrl, scrapedAt: new Date(), userId });
    } catch (err) {
      // Log error
    }
  });
  res.json({ success: true, scheduled: cronTime });
});

export default router;
