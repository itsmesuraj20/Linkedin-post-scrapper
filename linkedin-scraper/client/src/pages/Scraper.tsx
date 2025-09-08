import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Scraper: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleScrape = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/scrape/linkedin-post', { postUrl: url, userId: 'demo' });
      setResult(res.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Scraping failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-6">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6 text-primary">Scrape LinkedIn Post</motion.h2>
      <input
        type="url"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Paste LinkedIn post URL"
        className="w-full max-w-md p-3 rounded-lg bg-secondary text-white mb-4 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
      />
      <motion.button whileHover={{ scale: 1.05 }} onClick={handleScrape} disabled={loading || !url} className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg transition-all duration-300 hover:bg-primary-light disabled:opacity-50">
        {loading ? 'Scraping...' : 'Scrape Post'}
      </motion.button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 bg-secondary p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h3 className="text-xl font-bold text-primary mb-2">{result.author?.name}</h3>
          <p className="mb-2">{result.content}</p>
          <div className="flex gap-2 mb-2">
            {result.hashtags?.map((tag: string) => (
              <span key={tag} className="px-2 py-1 bg-accent text-white rounded-full text-xs">#{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 text-accent">
            <span>👍 {result.metrics?.likes}</span>
            <span>💬 {result.metrics?.comments}</span>
            <span>🔄 {result.metrics?.shares}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Scraper;
