import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FACILITIES } from '../constants';
import { LucideIcon } from 'lucide-react';

// Color themes matching the SARC aesthetic but with variety for the cards
const THEMES = [
  { from: '#059669', to: '#10b981' }, // Green (SARC)
  { from: '#0f172a', to: '#334155' }, // Slate
  { from: '#2563eb', to: '#60a5fa' }, // Blue
  { from: '#d97706', to: '#fbbf24' }, // Amber
  { from: '#7c3aed', to: '#a78bfa' }, // Violet
];

export default function MobileScrollCards() {
  // Use first 5 facilities for the mobile showcase
  const items = FACILITIES.slice(0, 5);

  return (
    <div className="w-full max-w-[500px] mx-auto pb-24 overflow-hidden">
      {items.map((facility, i) => {
        const theme = THEMES[i % THEMES.length];
        return (
          <Card 
            key={facility.id} 
            i={i} 
            title={facility.title}
            description={facility.description}
            Icon={facility.icon}
            theme={theme}
          />
        );
      })}
    </div>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  theme: { from: string; to: string };
}

const Card: React.FC<CardProps> = ({ i, title, description, Icon, theme }) => {
  const background = `linear-gradient(306deg, ${theme.from}, ${theme.to})`;

  return (
    <motion.div
      className={`card-container-${i} flex justify-center items-center relative pt-5 -mb-[100px]`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6, once: false }}
    >
      {/* Background Splash Shape */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-30"
        style={{ 
          background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
          transform: 'scale(0.85)', // Slightly smaller to fit mobile widths comfortably
        }} 
      />
      
      {/* The Card */}
      <motion.div 
        variants={cardVariants} 
        className="
          relative w-[280px] h-[360px] 
          flex flex-col justify-center items-center text-center p-6
          bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl
          border border-white/40 dark:border-white/10
          rounded-[20px] shadow-2xl
          origin-[10%_60%]
        "
      >
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white"
          style={{ background }}
        >
          <Icon size={32} strokeWidth={2} />
        </div>

        <h3 className="text-xl font-sans font-bold text-sarc-main dark:text-white mb-3">
          {title}
        </h3>

        <p className="text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>

        {/* Decorative elements on the card */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-50" style={{ background: theme.to }} />
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-50" style={{ background: theme.from }} />

      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
    rotate: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};