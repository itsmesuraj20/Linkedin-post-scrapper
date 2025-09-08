import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    setError('');
    try {
      await api.post('/auth/register', { email, username, password });
      window.location.href = '/login';
    } catch (err: any) {
      setError(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-secondary p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary">Register</h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mb-4 rounded bg-background text-white" />
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="w-full p-3 mb-4 rounded bg-background text-white" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 mb-4 rounded bg-background text-white" />
        <motion.button whileHover={{ scale: 1.05 }} onClick={handleRegister} disabled={loading || !email || !username || !password} className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg transition-all duration-300 hover:bg-primary-light disabled:opacity-50">
          {loading ? 'Registering...' : 'Register'}
        </motion.button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </motion.div>
    </div>
  );
};

export default Register;
