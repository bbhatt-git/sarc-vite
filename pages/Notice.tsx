import React from 'react';
import { GlassContainer, SectionTitle } from '../components/GlassUI';
import { SEO } from '../components/SEO';
import { Calendar, Bell, FileText } from 'lucide-react';
import { NEWS_ITEMS } from '../constants';

interface NoticeProps {
  type: 'general' | 'holiday' | 'exams';
}

const Notice: React.FC<NoticeProps> = ({ type }) => {
  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen px-4 md:px-6 relative">
      
      {type === 'general' && (
        <>
          <SEO title="General Notices" description="Latest announcements from SARC." />
          <div className="max-w-6xl mx-auto relative z-10 animate-fade-in">
            <SectionTitle title="Notice Board" subtitle="Stay Updated" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NEWS_ITEMS.map((item) => (
                <GlassContainer key={item.id} className="p-8 flex flex-col items-center text-center h-full" hoverEffect={true}>
                  <div className="bg-sarc-green/10 text-sarc-green p-4 rounded-2xl mb-6">
                    <Bell className="w-8 h-8" />
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">{item.date}</span>
                     <h3 className="text-xl font-bold text-sarc-main dark:text-white mb-3 leading-tight">{item.title}</h3>
                     <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.excerpt}</p>
                  </div>
                  <button className="mt-6 text-xs font-bold text-sarc-green uppercase tracking-widest hover:text-sarc-main transition-colors">Read More</button>
                </GlassContainer>
              ))}
            </div>
          </div>
        </>
      )}

      {type === 'holiday' && (
        <>
          <SEO title="Holiday Notices" description="School holiday calendar." />
          <div className="max-w-4xl mx-auto relative z-10 animate-fade-in">
            <SectionTitle title="Academic Calendar" subtitle="Holidays & Breaks" />
            <GlassContainer className="p-8">
               <div className="space-y-6">
                 {[
                   { date: "Oct 24 - Nov 1", event: "Dashain Vacation" },
                   { date: "Nov 15 - Nov 18", event: "Tihar Vacation" },
                   { date: "Dec 25", event: "Christmas Day" },
                   { date: "Jan 15", event: "Maghe Sankranti" }
                 ].map((h, i) => (
                   <div key={i} className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <Calendar className="w-5 h-5 text-sarc-green" />
                        <span className="font-bold text-sarc-main dark:text-white">{h.event}</span>
                      </div>
                      <span className="text-sm font-medium text-slate-500">{h.date}</span>
                   </div>
                 ))}
               </div>
            </GlassContainer>
          </div>
        </>
      )}

      {type === 'exams' && (
        <>
          <SEO title="Exams & Results" description="Examination schedules and result announcements." />
          <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
            <SectionTitle title="Exams & Results" subtitle="Performance Center" />
            <div className="grid md:grid-cols-2 gap-6">
               <GlassContainer className="p-8 flex flex-col items-center text-center" hoverEffect={true}>
                 <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full inline-flex">
                    <FileText className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Exam Schedule</h3>
                 <p className="text-slate-600 dark:text-slate-400 mb-4">Second Terminal Examinations for Grade 1-10 begin from Dec 15th.</p>
                 <button className="text-xs font-bold uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full text-blue-600 dark:text-blue-300">Download Routine</button>
               </GlassContainer>
               
               <GlassContainer className="p-8 flex flex-col items-center text-center" hoverEffect={true}>
                 <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full inline-flex">
                    <FileText className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-2">Result Published</h3>
                 <p className="text-slate-600 dark:text-slate-400 mb-4">First Terminal Examination results have been published. Collect report cards from administration.</p>
                 <button className="text-xs font-bold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-full text-emerald-600 dark:text-emerald-300">Check Online</button>
               </GlassContainer>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default Notice;
