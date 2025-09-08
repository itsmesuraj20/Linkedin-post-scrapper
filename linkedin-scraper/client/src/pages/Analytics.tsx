import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

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
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1c1c1c] text-white flex flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col items-center justify-center px-4 py-10"
      >
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#6dd5ed] to-[#2193b0] mb-8 drop-shadow-lg">Analytics Dashboard</motion.h2>
        {loading ? (
          <div className="text-gray-300 text-xl">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
            {[
              { label: 'Posts Scraped', value: stats.totalPosts, icon: '🕵️‍♂️', color: 'from-[#43cea2] to-[#185a9d]' },
              { label: 'Total Likes', value: stats.totalLikes, icon: '👍', color: 'from-[#ffaf7b] to-[#d76d77]' },
              { label: 'Total Comments', value: stats.totalComments, icon: '💬', color: 'from-[#6dd5ed] to-[#2193b0]' },
              { label: 'Total Shares', value: stats.totalShares, icon: '🔄', color: 'from-[#f7971e] to-[#ffd200]' },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                whileHover={{ rotateY: 10, scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                className={`relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-8 rounded-2xl flex flex-col items-center transition-all duration-500 hover:shadow-3xl`}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  initial={{ rotateY: -10 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.7 }}
                  className={`text-5xl mb-4 drop-shadow-lg animate-bounce`}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#6dd5ed] to-[#2193b0]">{card.label}</h3>
                <span className="text-4xl font-extrabold text-white drop-shadow-xl">{card.value}</span>
                <div className={`absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br ${card.color} opacity-30 z-0`} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Analytics;
