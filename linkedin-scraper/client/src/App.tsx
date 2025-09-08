
import React from 'react';
import ScheduleScraper from './pages/ScheduleScraper';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Scraper from './pages/Scraper';
import BulkScraper from './pages/BulkScraper';
import Analytics from './pages/Analytics';
import Export from './pages/Export';
import Scrap from './pages/Scrap';

const App: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
  <Route path="/scraper" element={<ProtectedRoute><Scraper /></ProtectedRoute>} />
  <Route path="/bulk-scraper" element={<ProtectedRoute><BulkScraper /></ProtectedRoute>} />
  <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
  <Route path="/export" element={<ProtectedRoute><Export /></ProtectedRoute>} />
  <Route path="/schedule-scraper" element={<ProtectedRoute><ScheduleScraper /></ProtectedRoute>} />
  <Route path="/scrap" element={<ProtectedRoute><Scrap /></ProtectedRoute>} />
      </Routes>
    </Router>
  </ErrorBoundary>
);

export default App;
