import React, { useState } from 'react';
import api from '../utils/api';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-6">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6 text-primary">Schedule LinkedIn Scraping</motion.h2>
      <input
        type="url"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Paste LinkedIn post URL"
        className="w-full max-w-md p-3 rounded-lg bg-secondary text-white mb-4 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
      />
      <input
        type="text"
        value={cronTime}
        onChange={e => setCronTime(e.target.value)}
        placeholder="Cron time (e.g. 0 9 * * *)"
        className="w-full max-w-md p-3 rounded-lg bg-secondary text-white mb-4 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
      />
      <motion.button whileHover={{ scale: 1.05 }} onClick={handleSchedule} disabled={loading || !url || !cronTime} className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg transition-all duration-300 hover:bg-primary-light disabled:opacity-50">
        {loading ? 'Scheduling...' : 'Schedule Scrape'}
      </motion.button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-400 mt-4">{success}</p>}
    </div>
  );
};

export default ScheduleScraper;
