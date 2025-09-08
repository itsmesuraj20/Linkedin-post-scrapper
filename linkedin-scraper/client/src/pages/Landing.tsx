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
    <main className="min-h-screen bg-background text-white flex flex-col items-center justify-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl font-poppins font-bold mb-6 text-primary">
        LinkedIn Post Scraper
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-secondary mb-8 max-w-xl text-center">
        Extract post content, hashtags, author info, and engagement metrics from LinkedIn. Fast, secure, and beautifully designed.
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        onClick={handleGetStarted}
        className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg transition-all duration-300 hover:bg-primary-light"
      >
        Get Started
      </motion.button>
    </main>
  );
};

export default Landing;
