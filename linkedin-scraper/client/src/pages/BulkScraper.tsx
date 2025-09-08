import React, { useState } from 'react';
import api from '../utils/api';
import { motion } from 'framer-motion';

const BulkScraper: React.FC = () => {
  const [urls, setUrls] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState('');

  const handleBulkScrape = async () => {
    setLoading(true);
    setError('');
    try {
      const postUrls = urls.split('\n').map(u => u.trim()).filter(Boolean);
      const res = await api.post('/scrape/linkedin-posts', { postUrls, userId: 'demo' });
      setResults(res.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Bulk scraping failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-6">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6 text-primary">Bulk LinkedIn Scraper</motion.h2>
      <textarea
        value={urls}
        onChange={e => setUrls(e.target.value)}
        placeholder="Paste LinkedIn post URLs, one per line"
        className="w-full max-w-md p-3 rounded-lg bg-secondary text-white mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
      />
      <motion.button whileHover={{ scale: 1.05 }} onClick={handleBulkScrape} disabled={loading || !urls} className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg transition-all duration-300 hover:bg-primary-light disabled:opacity-50">
        {loading ? 'Scraping...' : 'Bulk Scrape'}
      </motion.button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {results.length > 0 && (
        <div className="mt-8 w-full max-w-lg">
          {results.map((r, i) => (
            <div key={i} className="bg-secondary p-4 rounded-lg mb-2">
              {r.error ? (
                <span className="text-red-400">{r.error} ({r.url})</span>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-primary mb-2">{r.author?.name}</h3>
                  <p>{r.content}</p>
                  <div className="flex gap-2 mb-2">
                    {r.hashtags?.map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-accent text-white rounded-full text-xs">#{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-accent">
                    <span>👍 {r.metrics?.likes}</span>
                    <span>💬 {r.metrics?.comments}</span>
                    <span>🔄 {r.metrics?.shares}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BulkScraper;
