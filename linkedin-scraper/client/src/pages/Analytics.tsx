import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { motion } from 'framer-motion';

const Analytics: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/analytics').then(res => {
      setStats(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-6">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6 text-primary">Analytics Dashboard</motion.h2>
      {loading ? (
        <div className="text-secondary">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col items-center">
            <span className="text-2xl font-bold text-accent">{stats.totalPosts}</span>
            <span className="text-sm text-gray-400">Posts Scraped</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col items-center">
            <span className="text-2xl font-bold text-accent">{stats.totalLikes}</span>
            <span className="text-sm text-gray-400">Total Likes</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col items-center">
            <span className="text-2xl font-bold text-accent">{stats.totalComments}</span>
            <span className="text-sm text-gray-400">Total Comments</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col items-center">
            <span className="text-2xl font-bold text-accent">{stats.totalShares}</span>
            <span className="text-sm text-gray-400">Total Shares</span>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
