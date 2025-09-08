// ...existing code...
// ...existing code...
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { logger } from './logger.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(logger);
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
});
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import scrapeRoutes from './routes/scrape.js';
import bulkScrapeRoutes from './routes/bulkScrape.js';
import scheduleScrapeRoutes from './routes/scheduleScrape.js';
import analyticsRoutes from './routes/analytics.js';
import exportRoutes from './routes/export.js';
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/scrape', scrapeRoutes);
app.use('/api/scrape', bulkScrapeRoutes);
app.use('/api/schedule', scheduleScrapeRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/export', exportRoutes);
import monitoringRoutes from './monitoring.js';
app.use('/api/monitor', monitoringRoutes);
export default app;
//# sourceMappingURL=app.js.map