import { Router } from 'express';
import Post from '../models/Post.js';
import { Parser } from 'json2csv';

const router = Router();

router.get('/json', async (_req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get('/csv', async (_req, res) => {
  const posts = await Post.find();
  const parser = new Parser();
  const csv = parser.parse(posts.map(post => post.toObject()));
  res.header('Content-Type', 'text/csv');
  res.attachment('linkedin-posts.csv');
  res.send(csv);
});

export default router;
