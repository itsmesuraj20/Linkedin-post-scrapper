import React, { useState } from 'react';
import api from '../utils/api';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

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
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1c1c1c] text-white flex flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col items-center justify-center px-4 py-10"
      >
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#ffaf7b] to-[#d76d77] mb-8 drop-shadow-lg">Bulk LinkedIn Scraper</motion.h2>
        <motion.textarea
          value={urls}
          onChange={e => setUrls(e.target.value)}
          placeholder="Paste LinkedIn post URLs, one per line"
          className="w-full max-w-md p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white mb-6 h-40 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-xl"
          whileFocus={{ scale: 1.03 }}
        />
        <motion.button whileHover={{ scale: 1.08, rotateY: 8 }} onClick={handleBulkScrape} disabled={loading || !urls} className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ffaf7b] to-[#d76d77] text-white font-bold shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-3xl text-xl disabled:opacity-50">
          {loading ? 'Scraping...' : 'Bulk Scrape'}
        </motion.button>
        {error && <p className="text-red-500 mt-6">{error}</p>}
        {results.length > 0 && (
          <div className="mt-10 w-full max-w-lg">
            {results.map((r, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03, rotateY: 6 }} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl mb-4 shadow-2xl">
                {r.error ? (
                  <span className="text-red-400">{r.error} ({r.url})</span>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#43cea2] to-[#185a9d] mb-2">{r.author?.name}</h3>
                    <p className="text-white">{r.content}</p>
                    <div className="flex gap-2 mb-2">
                      {r.hashtags?.map((tag: string) => (
                        <span key={tag} className="px-2 py-1 bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white rounded-full text-xs shadow">#{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-accent">
                      <span>👍 {r.metrics?.likes}</span>
                      <span>💬 {r.metrics?.comments}</span>
                      <span>🔄 {r.metrics?.shares}</span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BulkScraper;
