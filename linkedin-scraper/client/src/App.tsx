
import React from 'react';
import ScheduleScraper from './pages/ScheduleScraper';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Scraper from './pages/Scraper';

import BulkScraper from './pages/BulkScraper';
import Analytics from './pages/Analytics';
import Export from './pages/Export';

const App: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scraper" element={<Scraper />} />
        <Route path="/bulk-scraper" element={<BulkScraper />} />
        <Route path="/analytics" element={<Analytics />} />
            <Route path="/export" element={<Export />} />
            <Route path="/schedule-scraper" element={<ScheduleScraper />} />
      </Routes>
    </Router>
  </ErrorBoundary>
);

export default App;
