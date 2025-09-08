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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1c1c1c] text-white">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-md flex flex-col items-center">
        <h2 className="text-4xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#ffaf7b] to-[#d76d77] mb-8 drop-shadow-lg">Register</h2>
        <motion.input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-4 mb-4 rounded-xl bg-white/10 border border-white/20 text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all" whileFocus={{ scale: 1.03 }} />
        <motion.input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="w-full p-4 mb-4 rounded-xl bg-white/10 border border-white/20 text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all" whileFocus={{ scale: 1.03 }} />
        <motion.input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-4 mb-4 rounded-xl bg-white/10 border border-white/20 text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all" whileFocus={{ scale: 1.03 }} />
        <motion.button whileHover={{ scale: 1.08, rotateY: 8 }} onClick={handleRegister} disabled={loading || !email || !username || !password} className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#ffaf7b] to-[#d76d77] text-white font-bold shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-3xl text-xl disabled:opacity-50">
          {loading ? 'Registering...' : 'Register'}
        </motion.button>
        {error && <p className="text-red-500 mt-6">{error}</p>}
        <div className="mt-8 text-center">
          <p className="text-gray-300">
            Already have an account?{' '}
            <a href="/login" className="text-[#ffaf7b] hover:text-[#d76d77] transition-colors font-bold">
              Login here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
