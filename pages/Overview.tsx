import React from 'react';
import { GlassContainer, SectionTitle } from '../components/GlassUI';
import { SEO } from '../components/SEO';
import { TextReveal } from '../components/TextReveal';
import { MESSAGES } from '../constants';

interface OverviewProps {
  type: 'board' | 'founder' | 'principal';
}

const Overview: React.FC<OverviewProps> = ({ type }) => {
  const chairperson = MESSAGES.chairperson;
  const principal = MESSAGES.principal;

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen px-4 md:px-6 relative">
      
      {type === 'board' && (
        <>
          <SEO title="Board of Directors" description="Meet the leadership team behind SARC Education Foundation." />
          <div className="max-w-6xl mx-auto relative z-10 animate-fade-in">
            <SectionTitle title="Governance" subtitle="Guided by Experience" />
            <GlassContainer className="p-8 md:p-16 text-center">
               <div className="text-xl md:text-2xl text-sarc-main dark:text-white font-serif italic mb-8 max-w-3xl mx-auto">
                 <TextReveal>
                   "Our responsibility is not just to run a school, but to steward a community trust. We are dedicated to transparent, ethical, and visionary leadership."
                 </TextReveal>
               </div>
               <div className="grid md:grid-cols-3 gap-8 mt-12">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="flex flex-col items-center">
                     <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 mb-4 overflow-hidden border-4 border-white shadow-lg">
                        <img src={`https://picsum.photos/200?random=${i+50}`} alt="Board Member" className="w-full h-full object-cover" />
                     </div>
                     <h3 className="text-lg font-bold text-sarc-main dark:text-white">Board Member Name</h3>
                     <p className="text-sarc-green text-xs font-bold uppercase tracking-widest">Director</p>
                   </div>
                 ))}
               </div>
            </GlassContainer>
          </div>
        </>
      )}

      {type === 'founder' && (
        <>
          <SEO title="Message from Chairperson" description="A message from the Chairperson of SARC Education Foundation." />
          <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
            <SectionTitle title="Chairperson's Message" subtitle="Visionary Leadership" />
            <GlassContainer className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shrink-0">
                  <img src={chairperson.image} alt="Chairperson" className="w-full h-full object-cover" />
                </div>
                <div className="font-sans text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-lg flex-1">
                  
                  {chairperson.message.split('\n').map((para, i) => (
                      para.trim() && <p key={i}>{para}</p>
                  ))}

                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6">
                    <p className="font-bold text-sarc-main dark:text-white text-xl">{chairperson.name}</p>
                    <p className="text-sm text-sarc-green uppercase tracking-wider font-bold">{chairperson.title}</p>
                  </div>
                </div>
              </div>
            </GlassContainer>
          </div>
        </>
      )}

      {type === 'principal' && (
        <>
          <SEO title="Message from Campus Chief" description="A message from the Campus Chief of SARC Education Foundation." />
          <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
            <SectionTitle title="From the Campus Chief" subtitle="Academic Leadership" />
            <GlassContainer className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
                <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shrink-0">
                  <img src={principal.image} alt="Principal" className="w-full h-full object-cover" />
                </div>
                <div className="font-sans text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-lg flex-1">
                  
                   {principal.message.split('\n').map((para, i) => (
                      para.trim() && <p key={i}>{para}</p>
                  ))}

                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6">
                    <p className="font-bold text-sarc-main dark:text-white text-xl">{principal.name}</p>
                    <p className="text-sm text-sarc-green uppercase tracking-wider font-bold">{principal.title}</p>
                  </div>
                </div>
              </div>
            </GlassContainer>
          </div>
        </>
      )}

    </div>
  );
};

export default Overview;