import React, { useState } from 'react';
import api from '../utils/api';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const ScheduleScraper: React.FC = () => {
  const [url, setUrl] = useState('');
  const [cronTime, setCronTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSchedule = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await api.post('/schedule/schedule', { postUrl: url, userId: 'demo', cronTime });
      setSuccess('Scraping scheduled successfully!');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Scheduling failed');
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
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#f7971e] to-[#ffd200] mb-8 drop-shadow-lg">Schedule LinkedIn Scraping</motion.h2>
        <motion.input
          type="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Paste LinkedIn post URL"
          className="w-full max-w-md p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-xl"
          whileFocus={{ scale: 1.03 }}
        />
        <motion.input
          type="text"
          value={cronTime}
          onChange={e => setCronTime(e.target.value)}
          placeholder="Cron time (e.g. 0 9 * * *)"
          className="w-full max-w-md p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-xl"
          whileFocus={{ scale: 1.03 }}
        />
        <motion.button whileHover={{ scale: 1.08, rotateY: 8 }} onClick={handleSchedule} disabled={loading || !url || !cronTime} className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#f7971e] to-[#ffd200] text-white font-bold shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-3xl text-xl disabled:opacity-50">
          {loading ? 'Scheduling...' : 'Schedule Scrape'}
        </motion.button>
        {error && <p className="text-red-500 mt-6">{error}</p>}
        {success && <p className="text-green-400 mt-6">{success}</p>}
      </motion.div>
    </div>
  );
};

export default ScheduleScraper;
