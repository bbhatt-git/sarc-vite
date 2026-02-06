import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Overview from './pages/Overview';
import Academics from './pages/Academics';
import Staff from './pages/Staff';
import Notice from './pages/Notice';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowUp, Sparkles } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Interactive Liquid Background - Emerald & Violet Theme
const LiquidBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#f1f5f9] dark:bg-[#020617] transition-colors duration-1000">
      <div className="absolute top-0 left-0 w-full h-full bg-noise" />
      <div 
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-emerald-500/20 dark:bg-emerald-600/10 rounded-full blur-[80px] md:blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
      />
      <div 
        className="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] bg-violet-500/20 dark:bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
      />
      <div 
        className="absolute bottom-[-20%] left-[10%] w-[60vw] h-[60vw] bg-rose-400/20 dark:bg-fuchsia-500/10 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-[#020617] dark:via-transparent dark:to-transparent duration-1000" />
    </div>
  );
};

const Footer: React.FC = () => (
  <footer className="relative mt-10 pb-10 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-[3rem] 
        bg-white/40 dark:bg-white/[0.02] 
        border border-white/60 dark:border-white/[0.05]
        backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
        p-12 md:p-16"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-sarc-green/5 dark:bg-sarc-green/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                 <img src="https://raw.githubusercontent.com/bbhatt-git/sarc-school/refs/heads/sarc/public/images/sarc.png" alt="SARC Logo" className="w-full h-full object-contain drop-shadow-sm"/>
              </div>
              <div>
                <h4 className="text-3xl font-sans font-bold text-sarc-main dark:text-white tracking-tight">SARC</h4>
                <p className="text-[10px] tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase font-bold">Education Foundation</p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-400 font-sans text-sm font-medium leading-relaxed max-w-sm">
              Forging a new paradigm where local roots nurture global visionaries. We are actively building the minds that will define the future.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 flex items-center justify-center hover:bg-sarc-main hover:text-white dark:hover:bg-white dark:hover:text-sarc-main transition-all duration-300 text-slate-600 dark:text-slate-400 shadow-sm">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sarc-main dark:text-white uppercase tracking-widest text-xs mb-6 font-bold">Explore</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600 dark:text-slate-400">
              {['About Us', 'Academics', 'Innovation', 'Achievements', 'Admissions'].map(item => (
                <li key={item}><a href="#" className="hover:text-sarc-green hover:pl-2 transition-all duration-300 block">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-sarc-main dark:text-white uppercase tracking-widest text-xs mb-6 font-bold">Programs</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-sarc-green hover:pl-2 transition-all duration-300 block">Primary School</a></li>
              <li><a href="#" className="hover:text-sarc-green hover:pl-2 transition-all duration-300 block">Secondary School</a></li>
              <li><a href="#" className="hover:text-sarc-green hover:pl-2 transition-all duration-300 block text-emerald-600 dark:text-emerald-400 font-bold">10+2 Science</a></li>
              <li><a href="#" className="hover:text-sarc-green hover:pl-2 transition-all duration-300 block">10+2 Management</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-sarc-main dark:text-white uppercase tracking-widest text-xs mb-6 font-bold">Visit Us</h4>
            <div className="space-y-5 text-sm font-medium text-slate-600 dark:text-slate-400">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-sarc-green/10 dark:bg-sarc-green/20 flex items-center justify-center text-sarc-green flex-shrink-0"><MapPin className="w-4 h-4" /></div>
                  <p className="leading-relaxed">Bheemdatt-6, Mahendranagar,<br/>Kanchanpur, Nepal</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 rounded-full bg-sarc-green/10 dark:bg-sarc-green/20 flex items-center justify-center text-sarc-green flex-shrink-0"><Phone className="w-4 h-4" /></div>
                  <p>099-525271</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 rounded-full bg-sarc-green/10 dark:bg-sarc-green/20 flex items-center justify-center text-sarc-green flex-shrink-0"><Mail className="w-4 h-4" /></div>
                  <p>contact@sarc.edu.np</p>
                </div>
            </div>
          </div>
        </div>
        <div className="border-t border-sarc-main/5 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-xs text-slate-500 dark:text-slate-500 font-bold tracking-wide">
          <p className="text-center md:text-left">&copy; 2026 SARC Education Foundation.</p>
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
             <Sparkles className="w-3 h-3 text-sarc-green animate-pulse" />
             <span>Designed & Crafted by <a href="https://bbhatt.com.np" target="_blank" rel="noopener noreferrer" className="text-sarc-main dark:text-white hover:text-sarc-green transition-colors">Bhupesh Bhatt</a></span>
             <Sparkles className="w-3 h-3 text-sarc-green animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const BackToTopButton = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) setShowBtn(true);
      else setShowBtn(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-sarc-main text-sarc-green dark:bg-white dark:text-sarc-main shadow-[0_8px_30px_rgba(15,23,42,0.3)] flex items-center justify-center transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(5,150,105,0.4)] ${showBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}
    >
      <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <LiquidBackground />
        <div className="min-h-screen font-sans selection:bg-sarc-green selection:text-white flex flex-col relative">
          <Navbar />
          <main className="relative z-10 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* About Section Pages */}
              <Route path="/about/us" element={<About type="us" />} />
              <Route path="/about/vision" element={<About type="vision" />} />
              <Route path="/about/staffs" element={<Staff />} />
              <Route path="/about/why-us" element={<About type="why-us" />} />
              
              {/* Overview Section Pages */}
              <Route path="/overview/board" element={<Overview type="board" />} />
              <Route path="/overview/founder" element={<Overview type="founder" />} />
              <Route path="/overview/principal" element={<Overview type="principal" />} />

              {/* Academics Section Pages */}
              <Route path="/academics/programs" element={<Academics type="programs" />} />
              <Route path="/academics/services" element={<Academics type="services" />} />
              <Route path="/academics/faculties" element={<Academics type="faculties" />} />
              <Route path="/academics/achievements" element={<Academics type="achievements" />} />

              {/* Notice Section Pages */}
              <Route path="/notice/general" element={<Notice type="general" />} />
              <Route path="/notice/holiday" element={<Notice type="holiday" />} />
              <Route path="/notice/exams" element={<Notice type="exams" />} />

              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
              
              {/* Fallbacks */}
              <Route path="/about" element={<Navigate to="/about/us" />} />
              <Route path="/overview" element={<Navigate to="/overview/board" />} />
              <Route path="/academics" element={<Navigate to="/academics/programs" />} />
              <Route path="/notice" element={<Navigate to="/notice/general" />} />
              
              {/* Catch-all Redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;