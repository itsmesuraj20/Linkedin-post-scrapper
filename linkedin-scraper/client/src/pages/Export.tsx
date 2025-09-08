import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Export: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1c1c1c] text-white flex flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col items-center justify-center px-4 py-10"
      >
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#43cea2] to-[#185a9d] mb-8 drop-shadow-lg">Export Data</motion.h2>
        <div className="flex gap-8">
          <motion.a
            whileHover={{ scale: 1.08, rotateY: 8 }}
            href="/api/export/json"
            download
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white font-bold shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-3xl text-xl"
          >
            Export JSON
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08, rotateY: 8 }}
            href="/api/export/csv"
            download
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ffaf7b] to-[#d76d77] text-white font-bold shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-3xl text-xl"
          >
            Export CSV
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Export;
