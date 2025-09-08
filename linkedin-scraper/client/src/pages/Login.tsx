import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-secondary p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary">Login</h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mb-4 rounded bg-background text-white" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 mb-4 rounded bg-background text-white" />
        <motion.button whileHover={{ scale: 1.05 }} onClick={handleLogin} disabled={loading || !email || !password} className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg transition-all duration-300 hover:bg-primary-light disabled:opacity-50">
          {loading ? 'Logging in...' : 'Login'}
        </motion.button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="mt-6 text-center">
          <p className="text-secondary">
            Don't have an account?{' '}
            <a href="/register" className="text-primary hover:text-primary-light transition-colors">
              Register here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
