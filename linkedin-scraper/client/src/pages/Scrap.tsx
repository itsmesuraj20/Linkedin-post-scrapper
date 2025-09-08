import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import api from '../utils/api';

const Scrap: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleScrap = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    try {
      // Use a demo userId or get from auth context/localStorage if available
      const userId = localStorage.getItem('userId') || 'demo';
      const res = await api.post('/scrape/linkedin-post', { postUrl: url, userId });
      setResult(res.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Scraping failed');
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
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#43cea2] to-[#185a9d] mb-8 drop-shadow-lg">Scrap LinkedIn Post</motion.h2>
        <motion.input
          type="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Paste LinkedIn post URL"
          className="w-full max-w-md p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-xl"
          whileFocus={{ scale: 1.03 }}
        />
        <motion.button whileHover={{ scale: 1.08, rotateY: 8 }} onClick={handleScrap} disabled={loading || !url} className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white font-bold shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-3xl text-xl disabled:opacity-50">
          {loading ? 'Scraping...' : 'Scrap Post'}
        </motion.button>
        {error && <p className="text-red-500 mt-6">{error}</p>}
        {result && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-lg">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffaf7b] to-[#d76d77] mb-2">{result.author?.name}</h3>
            <p className="mb-2 text-white">{result.content}</p>
            <div className="flex gap-2 mb-2">
              {result.hashtags?.map((tag: string) => (
                <span key={tag} className="px-2 py-1 bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white rounded-full text-xs shadow">#{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 text-accent">
              <span>👍 {result.metrics?.likes}</span>
              <span>💬 {result.metrics?.comments}</span>
              <span>🔄 {result.metrics?.shares}</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Scrap;
