import React from 'react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => (
  <div className="min-h-screen bg-background text-white p-6">
    <header className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-poppins font-bold text-primary">Dashboard</h2>
      <div className="flex items-center gap-4">
        <span className="text-secondary">User</span>
        <img src="/avatar.png" alt="User" className="w-10 h-10 rounded-full" />
      </div>
    </header>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Statistics cards */}
      <motion.div whileHover={{ scale: 1.03 }} className="bg-secondary p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Total Scrapes</h3>
        <span className="text-3xl font-bold text-accent">42</span>
      </motion.div>
      <motion.div whileHover={{ scale: 1.03 }} className="bg-secondary p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Posts Saved</h3>
        <span className="text-3xl font-bold text-accent">17</span>
      </motion.div>
      <motion.div whileHover={{ scale: 1.03 }} className="bg-secondary p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Premium Features</h3>
        <span className="text-3xl font-bold text-accent">Active</span>
      </motion.div>
    </section>
    {/* Main content area for posts */}
    <section>
      <h3 className="text-xl font-bold mb-4">Scraped Posts</h3>
      {/* Post cards will go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example post card */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-secondary p-4 rounded-lg shadow-md">
          <h4 className="font-semibold text-primary mb-2">Post Title</h4>
          <p className="text-sm text-secondary mb-2">#hashtag1 #hashtag2</p>
          <p className="text-white">This is a sample LinkedIn post content...</p>
          <div className="flex gap-4 mt-2 text-accent">
            <span>👍 123</span>
            <span>💬 45</span>
            <span>🔄 7</span>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Dashboard;
