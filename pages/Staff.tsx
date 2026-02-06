import React from 'react';
import { STAFF_MEMBERS } from '../constants';
import { GlassContainer, SectionTitle } from '../components/GlassUI';
import { SEO } from '../components/SEO';

const Staff: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen px-4 md:px-6 relative">
      <SEO 
        title="Our Faculty" 
        description="Meet the world-class educators and mentors at SARC Education Foundation. Our staff is dedicated to student growth and excellence."
        keywords="SARC Teachers, Faculty, Principal, Science Teachers, Management Faculty"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="The Mentors" subtitle="World-class educators. Lifelong learners." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STAFF_MEMBERS.map((staff, idx) => (
            <GlassContainer key={staff.id} className="group p-6 md:p-8 text-center hover:bg-white dark:hover:bg-slate-800 transition-colors duration-300" hoverEffect={true}>
              {/* Softened Image Border */}
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-5 md:mb-6 rounded-full overflow-hidden ring-4 ring-sarc-green/20 p-1 shadow-lg">
                <img 
                  src={staff.image} 
                  alt={staff.name} 
                  className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg md:text-xl font-sans font-bold text-sarc-main dark:text-white mb-1">{staff.name}</h3>
              <p className="text-sarc-green text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4 font-bold">{staff.designation}</p>
              
              <div className="min-h-[30px] md:min-h-[40px] mb-3 md:mb-4">
                  {/* Darkened text-slate-400 to text-slate-500 for better light mode visibility */}
                  <p className="text-slate-500 dark:text-slate-500 text-[10px] md:text-xs italic font-sans font-medium">{staff.credentials}</p>
              </div>
              
              <div className="border-t border-sarc-main/10 dark:border-white/10 pt-4 mt-4">
                  {/* Darkened text-slate-600 to text-slate-700 */}
                  <p className="text-slate-700 dark:text-slate-300 text-xs md:text-sm font-sans font-medium leading-snug line-clamp-4">
                    "{staff.philosophy}"
                  </p>
              </div>
            </GlassContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;