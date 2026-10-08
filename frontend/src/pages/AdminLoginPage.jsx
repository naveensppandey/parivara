import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Sprout, Lock, Mail, ArrowRight } from 'lucide-react';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('admin@parivaranatural.com');
  const [password, setPassword] = useState('parivara123');
  const { loginAdmin } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const res = loginAdmin(email, password);
    if (res.success) {
      addToast('Logged in as Admin', 'success');
      navigate('/admin/dashboard');
    } else {
      addToast(res.message, 'error');
    }
  };

  return (
    <div className="min-h-screen bg-parivara-950 flex flex-col justify-center items-center p-4 font-sans text-white">
      <div className="w-full max-w-md bg-parivara-900 p-8 rounded-3xl border border-parivara-800 shadow-card space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-parivara-800 text-amberGold-400 flex items-center justify-center mx-auto border border-parivara-700">
            <Sprout className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold font-sans tracking-wide">PARIVARA Admin</h1>
          <p className="text-xs text-stone-400">Business Management Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase mb-1">Email / Username</label>
            <div className="relative">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-parivara-950 border border-parivara-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-amberGold-500"
              />
              <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-parivara-950 border border-parivara-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-amberGold-500"
              />
              <Lock className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amberGold-500 hover:bg-amberGold-400 text-stone-950 font-extrabold py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
          >
            <span>Login to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="p-3 bg-parivara-950/60 rounded-xl border border-parivara-800 text-[11px] text-stone-400 space-y-1">
          <p>🔑 <strong>Demo Admin Credentials:</strong></p>
          <p>Email: <code className="text-amberGold-400">admin@parivaranatural.com</code></p>
          <p>Password: <code className="text-amberGold-400">parivara123</code></p>
        </div>

      </div>
    </div>
  );
};

export default AdminLoginPage;
