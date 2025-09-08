import React from 'react';
import Navbar from '../components/Navbar';

const Export: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-bold mb-6 text-primary">Export Data</h2>
        <div className="flex gap-6">
          <a href="/api/export/json" download className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg transition-all duration-300 hover:bg-primary-light">Export JSON</a>
          <a href="/api/export/csv" download className="px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow-lg transition-all duration-300 hover:bg-accent">Export CSV</a>
        </div>
      </div>
    </div>
  );
};

export default Export;
