import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="text-xl font-bold text-primary">
              LinkedIn Scraper
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/dashboard"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/scraper"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Scraper
              </Link>
              <Link
                to="/bulk-scraper"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Bulk Scraper
              </Link>
              <Link
                to="/schedule-scraper"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Schedule
              </Link>
              <Link
                to="/analytics"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Analytics
              </Link>
              <Link
                to="/export"
                className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Export
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-white text-sm">Welcome back!</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Logout
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
