import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { GlassContainer, PrimaryButton } from '../components/GlassUI';
import { Lock, AlertCircle } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError('Invalid credentials. Access denied.');
    } finally {
      setLoading(false);
    }
  };

  // Modern Input Style
  const inputClasses = "w-full bg-white/60 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 text-sarc-main dark:text-white focus:outline-none focus:border-sarc-green focus:bg-white dark:focus:bg-slate-800 transition-all font-sans placeholder-slate-400";

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <GlassContainer className="p-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-sarc-main/5 dark:bg-white/10 flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-sarc-main dark:text-white" />
          </div>
          <h2 className="text-2xl font-sans font-bold text-sarc-main dark:text-white">Admin Access</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Secure Portal Login</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-medium">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mb-2 ml-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClasses}
              placeholder="admin@sarc.edu.np"
            />
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mb-2 ml-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClasses}
              placeholder="••••••••"
            />
          </div>

          <PrimaryButton type="submit" className="w-full justify-center" disabled={loading}>
            {loading ? 'Authenticating...' : 'Enter Dashboard'}
          </PrimaryButton>
        </form>
      </GlassContainer>
    </div>
  );
};

export default Login;