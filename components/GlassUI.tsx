import React from 'react';

interface GlassProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassContainer: React.FC<GlassProps> = ({ children, className = '', hoverEffect = false }) => (
  <div className={`
    relative overflow-hidden
    
    /* Light Mode - "Porcelain" Look */
    bg-white/98
    border border-slate-200
    shadow-[0_4px_20px_rgb(0,0,0,0.04)]
    
    /* Dark Mode - "Obsidian" Look */
    dark:bg-[#0f172a]/95
    dark:border dark:border-white/10
    dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]

    rounded-[1.5rem] md:rounded-[2rem]
    antialiased
    
    transition-all duration-300 ease-out
    ${hoverEffect ? 'hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:border-sarc-green/30 dark:hover:border-white/20 hover:-translate-y-1' : ''}
    ${className}
  `}>
    <div className="relative z-10 h-full">
      {children}
    </div>
  </div>
);

export const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-10 md:mb-16 relative z-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-bold text-sarc-main dark:text-white mb-2 md:mb-4 tracking-tight leading-[1.1] drop-shadow-sm">
      {title}
    </h2>
    {subtitle && (
      <div className={`inline-block px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/60 dark:bg-white/10 shadow-sm border border-sarc-main/5 dark:border-white/10`}>
         <p className="text-sarc-green font-sans text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold">{subtitle}</p>
      </div>
    )}
  </div>
);

export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...props }) => (
  <button 
    className={`
      relative group overflow-hidden
      px-8 py-3 md:px-10 md:py-4 rounded-full
      bg-sarc-main dark:bg-white
      text-white dark:text-sarc-main
      font-sans font-bold tracking-widest uppercase text-[10px] md:text-xs
      shadow-[0_10px_20px_rgba(15,23,42,0.2)]
      hover:shadow-[0_15px_30px_rgba(15,23,42,0.3)]
      dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]
      transition-all duration-300 hover:-translate-y-0.5
      ${className}
    `}
    {...props}
  >
    <span className="relative z-10 flex items-center gap-2 group-hover:text-sarc-green dark:group-hover:text-sarc-main transition-colors duration-300">
      {children}
    </span>
    {/* Shine effect */}
    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] group-hover:animate-[shine_1s_ease-in-out]" />
  </button>
);