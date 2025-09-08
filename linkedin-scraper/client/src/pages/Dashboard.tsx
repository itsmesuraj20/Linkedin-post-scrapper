
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const glass = "bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1c1c1c] text-white flex flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col items-center justify-center px-4 py-10"
      >
        <motion.header
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#6dd5ed] to-[#2193b0] drop-shadow-lg">Dashboard</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mt-4"
          >
            Welcome to your LinkedIn Post Scraper dashboard
          </motion.p>
        </motion.header>

        {/* 3D Animated Statistics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-5xl">
          {[
            { label: 'Total Scrapes', value: 42, icon: '🕵️‍♂️', color: 'from-[#43cea2] to-[#185a9d]' },
            { label: 'Posts Saved', value: 17, icon: '📄', color: 'from-[#ffaf7b] to-[#d76d77]' },
            { label: 'Premium Features', value: 'Active', icon: '💎', color: 'from-[#f7971e] to-[#ffd200]' },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              whileHover={{ rotateY: 10, scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className={`relative ${glass} p-8 rounded-2xl flex flex-col items-center transition-all duration-500 hover:shadow-3xl`}
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
        </section>

        {/* Main content area for posts */}
        <section className="w-full max-w-6xl">
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#43cea2] to-[#185a9d]">Scraped Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example post card with 3D effect */}
            <motion.div
              whileHover={{ scale: 1.04, rotateY: 8 }}
              className={`${glass} p-6 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-3xl relative`}
              style={{ perspective: 1000 }}
            >
              <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ffaf7b] to-[#d76d77] mb-2 text-xl">Post Title</h4>
              <p className="text-sm text-gray-400 mb-2">#hashtag1 #hashtag2</p>
              <p className="text-white mb-2">This is a sample LinkedIn post content...</p>
              <div className="flex gap-4 mt-2 text-accent">
                <span>👍 123</span>
                <span>💬 45</span>
                <span>🔄 7</span>
              </div>
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-[#ffaf7b] to-[#d76d77] opacity-20 z-0" />
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Dashboard;
