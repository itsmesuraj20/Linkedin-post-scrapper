// Shared TypeScript types for LinkedIn Scraper

export interface LinkedInPost {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    profileUrl: string;
    avatar: string;
  };
  publishDate: Date;
  hashtags: string[];
  metrics: {
    likes: number;
    comments: number;
    shares: number;
    views?: number;
  };
  postUrl: string;
  images?: string[];
  scrapedAt: Date;
  userId: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
  subscription: 'free' | 'premium';
  scrapeCount: number;
  lastScrapeAt?: Date;
}
