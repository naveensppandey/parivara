import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Sprout, Lock, Mail, ArrowRight, Eye, EyeOff, ShieldAlert } from 'lucide-react';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { loginAdmin } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      addToast('Invalid email or password.', 'error');
      return;
    }

    setLoading(true);
    try {
      const res = await loginAdmin(email, password);
      if (res.success) {
        addToast('Welcome to Parivara Admin Dashboard', 'success');
        navigate('/admin/dashboard');
      } else {
        addToast('Invalid email or password.', 'error');
      }
    } catch (err) {
      addToast('Invalid email or password.', 'error');
    } finally {
      setLoading(false);
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
            <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
              Admin Email
            </label>
            <div className="relative">
              <input
                type="email"
                required
                autoComplete="username"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-parivara-950 border border-parivara-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-amberGold-500 placeholder:text-stone-600"
              />
              <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-parivara-950 border border-parivara-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-amberGold-500 placeholder:text-stone-600"
              />
              <Lock className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-stone-500 hover:text-stone-300 transition"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amberGold-500 hover:bg-amberGold-400 text-stone-950 font-extrabold py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm disabled:opacity-50"
          >
            <span>{loading ? 'Signing in...' : 'Login to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="p-3 bg-parivara-950/60 rounded-xl border border-parivara-800 text-[11px] text-stone-400 flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amberGold-500 shrink-0" />
          <span>Authorized personnel only. Secure portal access.</span>
        </div>

      </div>
    </div>
  );
};

export default AdminLoginPage;
