import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { GlassContainer, SectionTitle } from '../components/GlassUI';
import { SEO } from '../components/SEO';

const News: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen px-6 relative">
      <SEO 
        title="News & Events" 
        description="Stay updated with the latest news, events, and achievements from SARC Education Foundation."
        keywords="SARC News, School Events, Results, Activities, Sports Day"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="The Pulse" subtitle="Life at SARC" />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {NEWS_ITEMS.map((item, idx) => (
            <GlassContainer key={item.id} className="overflow-hidden group cursor-pointer" hoverEffect={true}>
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-sarc-main/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-8">
                <p className="text-sarc-green text-[10px] font-bold tracking-widest uppercase mb-3">{item.date}</p>
                <h3 className="text-2xl font-sans font-bold text-sarc-main dark:text-white mb-3 group-hover:text-sarc-green transition-colors leading-tight">{item.title}</h3>
                {/* Enhanced contrast for excerpt */}
                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed font-medium">{item.excerpt}</p>
              </div>
            </GlassContainer>
          ))}
        </div>

        {/* Mini Gallery Grid */}
        <div>
          <SectionTitle title="Moments" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
              <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative shadow-lg group">
                   <img src="https://picsum.photos/800/800?random=100" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
              </div>
              <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative shadow-lg group">
                   <img src="https://picsum.photos/400/400?random=101" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
              </div>
               <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative shadow-lg group">
                   <img src="https://picsum.photos/400/400?random=102" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
              </div>
              <div className="col-span-2 row-span-1 rounded-[2rem] overflow-hidden relative shadow-lg group">
                   <img src="https://picsum.photos/800/400?random=103" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;