import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Sun, Moon, ArrowUpRight, ChevronDown, 
  Users, Target, Briefcase, Star, 
  MessageCircle, School, BookOpen, 
  LayoutGrid, Trophy, Bell, Calendar, 
  FileText, GraduationCap 
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Navigation Data Structure with Icons and Descriptions
  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about/us', // Placeholder, prevents nav
      children: [
        { name: 'About Us', path: '/about/us', icon: Users, description: "Discover our campus and history" },
        { name: 'Vision & Mission', path: '/about/vision', icon: Target, description: "The principles that guide us" },
        { name: 'Staffs', path: '/about/staffs', icon: Briefcase, description: "Meet our dedicated team" },
        { name: 'Why Choose Us?', path: '/about/why-us', icon: Star, description: "The SARC advantage" }
      ]
    },
    { 
      name: 'Overview', 
      path: '/overview/board',
      children: [
        { name: 'Board', path: '/overview/board', icon: Users, description: "Governance and leadership" },
        { name: 'Message from Founder', path: '/overview/founder', icon: MessageCircle, description: "Words from the visionary" },
        { name: 'Message from Principal', path: '/overview/principal', icon: School, description: "Academic leadership" }
      ]
    },
    { 
      name: 'Academics', 
      path: '/academics/programs',
      children: [
        { name: 'Academic Programs', path: '/academics/programs', icon: BookOpen, description: "Science & Management streams" },
        { name: 'Services', path: '/academics/services', icon: LayoutGrid, description: "Facilities and infrastructure" },
        { name: 'Faculties', path: '/academics/faculties', icon: GraduationCap, description: "Our specialized departments" },
        { name: 'Achievements', path: '/academics/achievements', icon: Trophy, description: "Student success stories" }
      ]
    },
    { 
      name: 'Notice', 
      path: '/notice/general',
      children: [
        { name: 'General Notice', path: '/notice/general', icon: Bell, description: "Latest announcements" },
        { name: 'Holiday Notice', path: '/notice/holiday', icon: Calendar, description: "Academic calendar events" },
        { name: 'Exam & Results', path: '/notice/exams', icon: FileText, description: "Schedules and grades" }
      ]
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isLinkActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    const section = path.split('/')[1];
    return location.pathname.startsWith(`/${section}`);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50 flex justify-center
        transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        ${scrolled ? 'pt-2 md:pt-6' : 'pt-0'}
      `}>
        <div className={`
          flex justify-between items-center 
          relative
          backdrop-blur-3xl saturate-[1.2]
          transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${scrolled 
            ? 'w-[96%] md:w-[95%] lg:w-auto rounded-full border border-white/40 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-4 py-2 md:px-6 md:py-3 lg:px-8 gap-4 lg:gap-8' 
            : 'w-full rounded-none border-b border-white/20 dark:border-white/5 bg-white/40 dark:bg-slate-900/40 px-4 py-2.5 md:px-6 md:py-4 lg:px-12'
          }
        `}>
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center">
               <img 
                src="https://raw.githubusercontent.com/bbhatt-git/sarc-school/refs/heads/sarc/public/images/sarc.png" 
                alt="SARC Logo" 
                className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
               />
            </div>
            <div className="flex flex-col items-start leading-none justify-center">
              <span className="font-sans text-sm md:text-base text-sarc-main dark:text-white font-bold tracking-tight group-hover:text-sarc-green transition-colors duration-300">SARC EDU.</span>
              <span className="font-sans text-[0.5rem] md:text-[0.55rem] tracking-[0.27em] text-slate-500 dark:text-slate-400 uppercase font-bold group-hover:text-sarc-main dark:group-hover:text-white transition-colors duration-300 -ml-[1px]">FOUNDATION</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 shrink-0">
            {navItems.map((item) => (
              <div key={item.name} className="relative group/menu">
                {/* Parent Item - Conditionally Render Button or Link */}
                {item.children ? (
                  <button
                    className={`
                      flex items-center gap-1 px-4 py-3 rounded-full font-sans text-[12px] font-bold tracking-wider uppercase transition-all duration-300 cursor-default
                      ${isLinkActive(item.path) 
                        ? 'text-sarc-green' 
                        : 'text-slate-700 dark:text-slate-200 hover:text-sarc-green dark:hover:text-sarc-green'
                      }
                    `}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.name}
                    <ChevronDown className="w-3 h-3 opacity-50 group-hover/menu:opacity-100 transition-opacity" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`
                      flex items-center gap-1 px-4 py-3 rounded-full font-sans text-[12px] font-bold tracking-wider uppercase transition-all duration-300
                      ${isLinkActive(item.path) 
                        ? 'text-sarc-green' 
                        : 'text-slate-700 dark:text-slate-200 hover:text-sarc-green dark:hover:text-sarc-green'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Card */}
                {item.children && (
                   <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 transform group-hover/menu:translate-y-0 translate-y-4 z-50">
                      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden w-80 p-2 ring-1 ring-black/5 dark:ring-white/5">
                        <div className="flex flex-col gap-1">
                          {item.children.map((child) => {
                            const Icon = child.icon || ArrowUpRight; // Fallback icon
                            return (
                              <Link 
                                key={child.name} 
                                to={child.path}
                                className="group/item flex items-start gap-4 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/5"
                              >
                                <div className="mt-1 w-8 h-8 rounded-lg bg-sarc-green/10 dark:bg-sarc-green/20 flex items-center justify-center text-sarc-green group-hover/item:bg-sarc-green group-hover/item:text-white transition-colors duration-300 shrink-0">
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover/item:text-sarc-green dark:group-hover/item:text-sarc-green transition-colors">
                                    {child.name}
                                  </span>
                                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5 leading-snug">
                                    {child.description}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                   </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/10 hover:text-sarc-green transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={16} strokeWidth={2.5} /> : <Sun size={16} strokeWidth={2.5} />}
            </button>

            {/* Apply Button */}
            <Link to="/admissions">
              <button className="px-8 py-3 rounded-full bg-sarc-main dark:bg-white text-white dark:text-sarc-main font-sans text-xs font-bold tracking-widest uppercase hover:bg-sarc-green dark:hover:bg-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-transparent">
                Admissions
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
             <button 
                onClick={toggleTheme}
                className="p-1.5 md:p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
             </button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="text-sarc-main dark:text-white p-1.5 md:p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors group shrink-0"
            >
              <Menu className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-[85%] sm:w-[350px] 
        bg-white/90 dark:bg-slate-900/90 backdrop-blur-3xl z-[70] 
        shadow-[-20px_0_40px_rgba(0,0,0,0.1)] border-l border-white/40 dark:border-white/10
        flex flex-col
        transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
         
         <div className="flex justify-between items-center p-6 border-b border-black/5 dark:border-white/5 shrink-0">
             <div className="flex items-center gap-3">
                 <div className="w-8 h-8 flex items-center justify-center">
                    <img 
                      src="https://raw.githubusercontent.com/bbhatt-git/sarc-school/refs/heads/sarc/public/images/sarc.png" 
                      alt="SARC Logo" 
                      className="w-full h-full object-contain"
                    />
                 </div>
                 <span className="font-sans text-lg font-bold text-sarc-main dark:text-white tracking-tight">SARC</span>
             </div>
             <button 
               onClick={() => setMobileMenuOpen(false)}
               className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors"
             >
                <X className="w-5 h-5" />
             </button>
         </div>

         {/* Mobile Menu Items */}
         <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="overflow-hidden">
                {item.children ? (
                  <>
                    <button 
                      onClick={() => handleMobileDropdown(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left"
                    >
                      <span className="font-sans text-sm font-bold uppercase tracking-wider text-sarc-main dark:text-white">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}>
                      {item.children.map((child) => {
                        const Icon = child.icon || ArrowUpRight;
                        return (
                          <Link 
                            key={child.name}
                            to={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`
                              flex items-start gap-3 px-4 py-3 rounded-lg
                              ${location.pathname === child.path 
                                ? 'bg-sarc-green/10 text-sarc-green' 
                                : 'text-slate-600 dark:text-slate-400 hover:text-sarc-main dark:hover:text-white'
                              }
                            `}
                          >
                             <div className="mt-0.5">
                                <Icon className="w-4 h-4 opacity-70" />
                             </div>
                             <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-wide">{child.name}</span>
                                <span className="text-[10px] text-slate-500 dark:text-slate-500 font-medium leading-tight mt-0.5">{child.description}</span>
                             </div>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Link 
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      block px-4 py-3 rounded-xl font-sans text-sm font-bold uppercase tracking-wider
                      ${location.pathname === item.path 
                        ? 'bg-sarc-green text-white shadow-lg shadow-sarc-green/20' 
                        : 'text-sarc-main dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
         </div>

         <div className="p-6 border-t border-black/5 dark:border-white/5 bg-white/10 dark:bg-black/10 shrink-0">
             <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                <button className={`
                  w-full py-3.5 rounded-xl flex items-center justify-center gap-3
                  bg-sarc-main dark:bg-white text-white dark:text-sarc-main
                  font-sans text-xs font-bold uppercase tracking-widest
                  shadow-lg shadow-sarc-main/20 dark:shadow-none
                  hover:-translate-y-0.5 transition-all
                `}>
                  <span>Admissions Portal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
             </Link>
         </div>
      </div>
    </>
  );
};

export default Navbar;