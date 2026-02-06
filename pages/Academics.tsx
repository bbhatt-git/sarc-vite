import React from 'react';
import { GlassContainer, SectionTitle } from '../components/GlassUI';
import { DEPARTMENTS, FACILITIES } from '../constants';
import { SEO } from '../components/SEO';
import { Trophy, Star, BookOpen, Microscope, TrendingUp, Lightbulb, Globe, Settings, Users, ClipboardCheck, Building2, Briefcase } from 'lucide-react';
import HorizontalScroll from '../components/HorizontalScroll';

interface AcademicsProps {
  type: 'programs' | 'services' | 'faculties' | 'achievements';
}

const Academics: React.FC<AcademicsProps> = ({ type }) => {
  return (
    <div className={`min-h-screen relative ${type === 'faculties' ? '' : 'pt-24 md:pt-32 pb-20 px-4 md:px-6'}`}>
      
      {type === 'programs' && (
        <>
          <SEO title="Academic Programs" description="SARC academic levels from School Level to +2 Science & Management." />
          <div className="max-w-7xl mx-auto relative z-10 animate-fade-in space-y-20">
            
            {/* School Program */}
            <div>
               <GlassContainer className="p-8 md:p-12" hoverEffect={true}>
                 <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-blue-500/30">
                       <BookOpen className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                       <h2 className="text-2xl md:text-3xl font-bold text-sarc-main dark:text-white mb-2">School Program (to Class 10)</h2>
                       <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">Foundation years focusing on holistic development and core academic excellence</p>
                       <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                          {[
                            "Comprehensive curriculum aligned with national standards",
                            "Hands-on science and math labs",
                            "Cultural and artistic development programs",
                            "Sports and physical education",
                            "Early exposure to coding and robotics",
                            "Character building and leadership skills"
                          ].map((item, i) => (
                             <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                {item}
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
               </GlassContainer>
            </div>

            {/* 10+2 Specializations */}
            <div>
               <div className="text-center mb-10">
                 <h2 className="text-3xl md:text-5xl font-sans font-bold text-sarc-main dark:text-white mb-4">
                   10+2 <span className="text-blue-500">Specializations</span>
                 </h2>
                 <p className="text-slate-500 dark:text-slate-400">Choose your path and prepare for university and career success</p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {/* Science Stream */}
                  <GlassContainer className="p-8 h-full border-l-4 border-blue-500" hoverEffect={true}>
                     <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                        <Microscope className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-bold text-sarc-main dark:text-white mb-2">Science Stream</h3>
                     
                     <div className="mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Core Subjects</span>
                        <div className="flex flex-wrap gap-2">
                           {["Physics", "Chemistry", "Biology", "Mathematics", "English", "Nepali"].map(sub => (
                              <span key={sub} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300">{sub}</span>
                           ))}
                        </div>
                     </div>
                     
                     <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Special Features</span>
                        <ul className="space-y-2">
                           {[
                             "Advanced laboratory facilities",
                             "Research project opportunities",
                             "Preparation for medical and engineering entrance exams",
                             "Biotechnology workshops"
                           ].map((feat, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                 <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 shrink-0" />
                                 {feat}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </GlassContainer>

                  {/* Management Stream */}
                  <GlassContainer className="p-8 h-full border-l-4 border-emerald-500" hoverEffect={true}>
                     <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                        <TrendingUp className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-bold text-sarc-main dark:text-white mb-2">Management Stream</h3>
                     
                     <div className="mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Core Subjects</span>
                        <div className="flex flex-wrap gap-2">
                           {["Business Studies", "Accountancy", "Economics", "Marketing", "English", "Nepali"].map(sub => (
                              <span key={sub} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300">{sub}</span>
                           ))}
                        </div>
                     </div>
                     
                     <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Special Features</span>
                        <ul className="space-y-2">
                           {[
                             "Entrepreneurship workshops",
                             "Business simulation projects",
                             "Industry visits and internships",
                             "Financial literacy programs"
                           ].map((feat, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                 <div className="w-1 h-1 bg-emerald-500 rounded-full mt-2 shrink-0" />
                                 {feat}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </GlassContainer>
               </div>
            </div>

            {/* Our Teaching Approach */}
            <div>
               <div className="text-center mb-10">
                 <h2 className="text-3xl md:text-5xl font-sans font-bold text-sarc-main dark:text-white mb-4">
                   Our <span className="text-emerald-500">Teaching Approach</span>
                 </h2>
                 <p className="text-slate-500 dark:text-slate-400">Learning methods designed for the 21st century and beyond</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Lightbulb, title: "Project-Based Learning", desc: "Students work on real-world problems and create tangible solutions.", color: "text-emerald-500", bg: "bg-emerald-500" },
                    { icon: Globe, title: "Experiential Tours", desc: "Regular visits to research labs, industries, and science exhibitions.", color: "text-blue-500", bg: "bg-blue-500" },
                    { icon: Settings, title: "Technology Integration", desc: "AI, robotics, and digital tools embedded in daily learning.", color: "text-red-500", bg: "bg-red-500" },
                    { icon: Users, title: "Collaborative Environment", desc: "Group projects, peer learning, and mentorship programs.", color: "text-emerald-500", bg: "bg-emerald-500" },
                    { icon: ClipboardCheck, title: "Assessment Beyond Exams", desc: "Portfolio-based evaluation, presentations, and project demonstrations.", color: "text-blue-500", bg: "bg-blue-500" },
                    { icon: Building2, title: "Industry Connect", desc: "Guest lectures from innovators, entrepreneurs, and researchers.", color: "text-red-500", bg: "bg-red-500" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <GlassContainer key={i} className="p-6 border-l-4 border-transparent hover:border-l-4" style={{ borderColor: 'inherit' }} hoverEffect={true}>
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mb-4 ${item.bg}`}>
                            <Icon className="w-5 h-5" />
                         </div>
                         <h3 className="text-lg font-bold text-sarc-main dark:text-white mb-2">{item.title}</h3>
                         <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                         <div className={`h-1 w-0 group-hover:w-full transition-all duration-300 mt-4 ${item.bg}`} />
                      </GlassContainer>
                    )
                  })}
               </div>
            </div>

            {/* +2 Subject Groups Table */}
            <div>
               <div className="text-center mb-10">
                 <h2 className="text-3xl md:text-5xl font-sans font-bold text-sarc-main dark:text-white mb-4">
                   +2 <span className="text-emerald-500">Subject Groups</span>
                 </h2>
                 <p className="text-slate-500 dark:text-slate-400">Official combinations for Science and Management (Grade XI/XII)</p>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8">
                  {/* Science Group */}
                  <div className="bg-white/60 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-white/10 p-6 md:p-8 border-l-4 border-l-blue-500">
                     <h3 className="text-xl font-bold text-sarc-main dark:text-white mb-6">Science</h3>
                     <div className="grid grid-cols-2 gap-8">
                        <div>
                           <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Grade XI</h4>
                           <ul className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                              <li>Com. English</li>
                              <li>Com. Nepali</li>
                              <li>Physics</li>
                              <li>Chemistry</li>
                              <li>Mathematics</li>
                              <li>Biology/Computer Science</li>
                           </ul>
                        </div>
                        <div>
                           <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Grade XII</h4>
                           <ul className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                              <li>Com. English</li>
                              <li>Com. Nepali</li>
                              <li>Physics</li>
                              <li>Chemistry</li>
                              <li>Biology/Mathematics</li>
                              <li>Computer Science</li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* Management Group */}
                  <div className="bg-white/60 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-white/10 p-6 md:p-8 border-l-4 border-l-emerald-500">
                     <h3 className="text-xl font-bold text-sarc-main dark:text-white mb-6">Management</h3>
                     <div className="grid grid-cols-2 gap-8">
                        <div>
                           <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Grade XI</h4>
                           <ul className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                              <li>Com. English</li>
                              <li>Com. Nepali</li>
                              <li>Accountancy</li>
                              <li>Economics</li>
                              <li>Hotel Management / Business Studies / Mathematics</li>
                              <li>Computer Science (Any 1)</li>
                           </ul>
                        </div>
                        <div>
                           <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Grade XII</h4>
                           <ul className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                              <li>Com. English</li>
                              <li>Com. Nepali</li>
                              <li>Business Mathematics/Marketing</li>
                              <li>Accountancy</li>
                              <li>Economics</li>
                              <li>Hotel Management / Business Studies / Mathematics</li>
                              <li>Computer Science (Any 1)</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </>
      )}

      {type === 'services' && (
        <>
          <SEO title="Services & Facilities" description="World-class facilities at SARC." />
          <div className="max-w-7xl mx-auto relative z-10 animate-fade-in">
            <SectionTitle title="Campus Facilities" subtitle="Infrastructure" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FACILITIES.map((facility) => {
                const Icon = facility.icon;
                return (
                  <GlassContainer key={facility.id} className="p-6 text-center h-full flex flex-col items-center" hoverEffect={true}>
                    <div className="w-14 h-14 rounded-2xl bg-sarc-green/10 flex items-center justify-center mb-4 text-sarc-green">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-sarc-main dark:text-white mb-2">{facility.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{facility.description}</p>
                  </GlassContainer>
                );
              })}
            </div>
          </div>
        </>
      )}

      {type === 'faculties' && (
        <>
          <SEO title="Faculties" description="Our specialized departments." />
          
          {/* Desktop Horizontal Scroll */}
          <HorizontalScroll items={DEPARTMENTS} />

          {/* Mobile Vertical Fallback */}
          <div className="md:hidden pt-24 pb-20 px-4">
             <SectionTitle title="Our Departments" subtitle="Specialized Faculties" />
             <div className="space-y-8">
              {DEPARTMENTS.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <GlassContainer key={dept.id} className="p-8 md:p-12" hoverEffect={true}>
                    <div className="flex flex-col gap-8 items-center text-center">
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col items-center gap-3">
                          <div className="p-3 bg-sarc-main dark:bg-white/10 rounded-xl text-white">
                            <Icon className="w-8 h-8" />
                          </div>
                          <h3 className="text-3xl font-bold text-sarc-main dark:text-white">{dept.name}</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                          {dept.description}
                        </p>
                        {dept.subjects && (
                             <div className="flex flex-wrap justify-center gap-2 mt-4">
                                {dept.subjects.map((sub, i) => (
                                    <span key={i} className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                        {sub}
                                    </span>
                                ))}
                             </div>
                        )}
                      </div>
                      <div className="flex-1 w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                        <img src={`https://picsum.photos/800/600?random=${index + 20}`} alt={dept.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </GlassContainer>
                );
              })}
            </div>
          </div>
        </>
      )}

      {type === 'achievements' && (
        <>
          <SEO title="Achievements" description="Celebrating student success." />
          <div className="max-w-6xl mx-auto relative z-10 animate-fade-in">
            <SectionTitle title="Hall of Fame" subtitle="Excellence in Action" />
            <div className="grid md:grid-cols-2 gap-8">
               <GlassContainer className="p-8 flex flex-col items-center text-center gap-4" hoverEffect={true}>
                  <div className="p-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 rounded-full">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sarc-main dark:text-white mb-2">District Topper 2080</h3>
                    <p className="text-slate-600 dark:text-slate-400">Our student secured the highest GPA in Kanchanpur district for the NEB Grade 12 examinations.</p>
                  </div>
               </GlassContainer>
               <GlassContainer className="p-8 flex flex-col items-center text-center gap-4" hoverEffect={true}>
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full">
                    <Star className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sarc-main dark:text-white mb-2">Best College Award</h3>
                    <p className="text-slate-600 dark:text-slate-400">Recognized as the best private +2 institution in Sudurpaschim Province for academic excellence.</p>
                  </div>
               </GlassContainer>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default Academics;