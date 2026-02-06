import React from 'react';
import { GlassContainer, SectionTitle } from '../components/GlassUI';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';

// Gallery Categories Data
const CATEGORIES = [
  { id: 'pool', title: 'Swimming Pool', sub: 'Campus', img: 'https://picsum.photos/400/300?random=10' },
  { id: 'walk', title: 'Campus Walk', sub: 'Campus', img: 'https://picsum.photos/400/300?random=11' },
  { id: 'health', title: 'Health Center', sub: 'Campus', img: 'https://picsum.photos/400/300?random=12' },
  { id: 'complab', title: 'Computer Laboratory', sub: 'Labs', img: 'https://picsum.photos/400/300?random=13' },
  { id: 'scilab', title: 'Science Laboratory', sub: 'Labs', img: 'https://picsum.photos/400/300?random=14' },
  { id: 'equip', title: 'Lab Equipment', sub: 'Labs', img: 'https://picsum.photos/400/300?random=15' },
  { id: 'project', title: 'Science Project Exhibition', sub: 'Projects', img: 'https://picsum.photos/400/300?random=16' },
  { id: 'experiment', title: 'Science Experiment', sub: 'Projects', img: 'https://picsum.photos/400/300?random=17' },
  { id: 'tour', title: 'International Tour', sub: 'Tours', img: 'https://picsum.photos/400/300?random=18' },
  { id: 'pract', title: 'Practical Tour', sub: 'Tours', img: 'https://picsum.photos/400/300?random=19' },
  { id: 'temple', title: 'Temple Visit', sub: 'Tours', img: 'https://picsum.photos/400/300?random=20' },
  { id: 'annual', title: 'Annual Function', sub: 'Events', img: 'https://picsum.photos/400/300?random=21' },
  { id: 'bike', title: 'Science Fest - Bike Show', sub: 'Events', img: 'https://picsum.photos/400/300?random=22' },
  { id: 'car', title: 'Science Fest - Car Show', sub: 'Events', img: 'https://picsum.photos/400/300?random=23' },
  { id: 'conf', title: 'International Conference', sub: 'Events', img: 'https://picsum.photos/400/300?random=24' },
];

const GalleryCard: React.FC<{ item: typeof CATEGORIES[0] }> = ({ item }) => (
  <div className="flex-shrink-0 w-[280px] md:w-[320px] mx-3 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/10 group cursor-pointer">
    <div className="h-48 overflow-hidden relative">
      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-sarc-main dark:text-white text-sm truncate">{item.title}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-medium">{item.sub}</p>
    </div>
  </div>
);

const MarqueeRow: React.FC<{ items: typeof CATEGORIES, reverse?: boolean }> = ({ items, reverse = false }) => (
  <div className="flex overflow-hidden w-full py-4 group hover:pause">
    <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {items.map((item, i) => (
        <GalleryCard key={`${item.id}-${i}-a`} item={item} />
      ))}
    </div>
    <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {items.map((item, i) => (
        <GalleryCard key={`${item.id}-${i}-b`} item={item} />
      ))}
    </div>
  </div>
);

const Gallery: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen relative">
      <SEO title="Gallery" description="Photos from SARC Education Foundation." />
      
      {/* Header */}
      <div className="text-center px-4 mb-16">
         <h1 className="text-4xl md:text-6xl font-sans font-bold text-sarc-main dark:text-white mb-4">
            Our <span className="text-emerald-500">Gallery</span>
         </h1>
         <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Explore moments of innovation, learning, and growth at SARC
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 animate-fade-in space-y-24">
        
        {/* Section 1: Glimpses of Excellence (Masonry) */}
        <div>
          <div className="text-center mb-10">
             <h2 className="text-2xl md:text-3xl font-bold text-sarc-main dark:text-white mb-2">
                Glimpses of <span className="text-blue-500">Excellence</span>
             </h2>
             <p className="text-xs text-slate-400 uppercase tracking-widest">Experience the vibrant life at SARC through our photo gallery</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]">
             {/* Large Left Item */}
             <div className="col-span-1 md:col-span-1 row-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-lg group relative">
                <img src="https://picsum.photos/400/400?random=1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
             </div>
             <div className="col-span-1 md:col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg group relative">
                <img src="https://picsum.photos/800/400?random=2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
             </div>
             <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg group relative">
                <img src="https://picsum.photos/400/400?random=3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
             </div>
             <div className="col-span-2 md:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg group relative">
                 <img src="https://picsum.photos/800/800?random=4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
             </div>
             <div className="col-span-1 row-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg group relative">
                 <img src="https://picsum.photos/400/800?random=5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
             </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg group relative">
                 <img src="https://picsum.photos/400/400?random=6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
             </div>
              <div className="col-span-2 md:col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg group relative">
                 <img src="https://picsum.photos/400/400?random=7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
             </div>
          </div>
        </div>

        {/* Section 2: Explore by Category (Scrolling Rows) */}
        <div>
           <div className="text-center mb-10">
             <h2 className="text-2xl md:text-3xl font-bold text-sarc-main dark:text-white mb-4">
                Explore by Category
             </h2>
             {/* Category Filter Pills (Visual only for now) */}
             <div className="flex flex-wrap justify-center gap-2">
               {['All', 'Campus', 'Labs', 'Projects', 'Tours', 'Events', 'Cultural', 'Others'].map(cat => (
                 <span key={cat} className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${cat === 'All' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-blue-500 hover:text-blue-500'}`}>
                   {cat}
                 </span>
               ))}
             </div>
           </div>

           {/* Alternating Scroll Rows */}
           <div className="space-y-8 overflow-hidden">
              <MarqueeRow items={CATEGORIES.slice(0, 5)} />
              <MarqueeRow items={CATEGORIES.slice(5, 10)} reverse={true} />
              <MarqueeRow items={CATEGORIES.slice(10, 15)} />
           </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;