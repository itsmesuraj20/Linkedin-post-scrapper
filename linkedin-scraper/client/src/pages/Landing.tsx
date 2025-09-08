import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1c1c1c] text-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl p-10 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex flex-col items-center"
      >
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-6xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#6dd5ed] to-[#2193b0] mb-6 drop-shadow-lg">
          LinkedIn Post Scraper
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-gray-300 mb-8 max-w-xl text-center">
          Extract post content, hashtags, author info, and engagement metrics from LinkedIn. Fast, secure, and beautifully designed.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.08, rotateY: 8 }} 
          onClick={handleGetStarted}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white font-bold shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-3xl text-xl"
        >
          Get Started
        </motion.button>
      </motion.div>
    </main>
  );
};

export default Landing;
