import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT, FACILITIES, TESTIMONIALS, STATS, NEWS_ITEMS, MESSAGES, ABOUT_LONG_DESC, ACADEMIC_PROGRAMS } from '../constants';
import { GlassContainer, SectionTitle } from '../components/GlassUI';
import { Quote, ArrowRight, BookOpen, GraduationCap, Users, Calendar, ArrowUpRight, Atom, TrendingUp } from 'lucide-react';
import { Testimonial } from '../types';
import { SEO } from '../components/SEO';
import MobileScrollCards from '../components/MobileScrollCards';

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="w-[85vw] sm:w-[400px] md:w-[450px] flex-shrink-0 mx-2 md:mx-4">
    <GlassContainer 
      className="p-5 md:p-8 h-full hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
      hoverEffect={true}
    >
      <div className="absolute top-4 right-4 text-sarc-green/5 transform scale-100 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
        <Quote size={80} strokeWidth={0.5} fill="currentColor" />
      </div>

      <div className="relative z-10">
        <div className="mb-4">
          <Quote size={24} className="text-sarc-green fill-sarc-green/20 md:w-7 md:h-7" />
        </div>
        
        <p className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed mb-6 italic min-h-[60px] md:min-h-[80px]">
          "{t.text}"
        </p>
        
        <div className="flex items-center gap-4 pt-4 border-t border-sarc-main/5 dark:border-white/10 mt-auto">
          <img 
            src={t.image} 
            alt={t.author} 
            className="w-10 h-10 rounded-full object-cover ring-2 ring-sarc-green/10 shadow-sm" 
          />
          <div>
            <h4 className="text-sarc-main dark:text-white font-bold text-sm">{t.author}</h4>
            <p className="text-slate-500 text-[10px] md:text-sm uppercase tracking-wider font-bold">{t.role}</p>
          </div>
        </div>
      </div>
    </GlassContainer>
  </div>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const heroData = HERO_CONTENT[0];
  const principal = MESSAGES.principal;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const firstRow = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const secondRow = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
      <SEO 
        title="Home"
        fullTitle="SARC Education Foundation | Premier +2 Science & Management College"
        description="SARC Education Foundation in Mahendranagar is a leading institution for Grade 11 & 12 Science and Management streams. Committed to excellence since 2014."
        keywords="SARC, SARC Education Foundation, Mahendranagar College, Science College Kanchanpur, Management College, NEB, +2 Science, Best College in Far West"
      />
      
      {/* HERO SECTION */}
      <div ref={heroRef} className="relative h-[100dvh] overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out"
                style={{
                  backgroundImage: `url('https://raw.githubusercontent.com/bbhatt-git/sarc-school/refs/heads/sarc/public/images/${index}.jpg')`,
                  opacity: currentSlide === index ? 1 : 0,
                  transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)', 
                }}
              />
            ))}
            <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-80 bg-gradient-to-b from-transparent to-[#f1f5f9] dark:to-[#020617] z-20 pointer-events-none" />
        
        <motion.div style={{ opacity }} className="relative z-30 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-6 text-center pt-16 md:pt-20">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-sarc-green/90 backdrop-blur-xl border border-white/20 shadow-2xl mb-6 md:mb-8">
                <span className="text-white font-bold text-[10px] md:text-sm tracking-widest uppercase">Affiliated to NEB | Estd. 2071 BS</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white mb-4 md:mb-6 leading-[1.2] md:leading-[1.1] tracking-tight drop-shadow-xl max-w-5xl mx-auto">
              {heroData.headline}
            </h1>
            
            <p className="text-sm md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed text-shadow-sm opacity-90 px-2 md:px-4">
              {heroData.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/academics/programs">
                 <button className="px-8 py-3 md:py-4 bg-sarc-green text-white font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-sarc-main transition-all duration-300 shadow-lg hover:shadow-sarc-green/50 flex items-center justify-center gap-2 w-full sm:w-auto">
                    Explore Programs
                 </button>
               </Link>
               <Link to="/admissions">
                 <button className="px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-sarc-main transition-all duration-300 w-full sm:w-auto">
                    Online Admission
                 </button>
               </Link>
            </div>
        </motion.div>
      </div>

      {/* INTRODUCTION SECTION */}
      <section className="relative -mt-16 z-40 px-4">
         <div className="max-w-6xl mx-auto">
            <GlassContainer className="p-8 md:p-12 shadow-2xl mb-16">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200 dark:divide-white/10">
                  {STATS.map((stat, i) => (
                    <div key={i} className="px-2">
                       <h3 className="text-2xl md:text-4xl font-bold text-sarc-green mb-2">{stat.value}</h3>
                       <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </GlassContainer>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
               <div className="space-y-6">
                  <span className="text-sarc-green font-bold text-xs uppercase tracking-widest">Introduction</span>
                  <h2 className="text-3xl md:text-5xl font-sans font-bold text-sarc-main dark:text-white">A Legacy of Excellence</h2>
                  <div className="prose prose-slate dark:prose-invert text-slate-700 dark:text-slate-300">
                    <p className="leading-relaxed">{ABOUT_LONG_DESC.split('\n')[1]}</p>
                    <p className="leading-relaxed">{ABOUT_LONG_DESC.split('\n')[2]}</p>
                  </div>
                  <Link to="/about/us" className="inline-flex items-center gap-2 text-sarc-green font-bold uppercase text-xs tracking-widest hover:text-sarc-main dark:hover:text-white transition-colors">
                     Read More About Us <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
               <div className="relative">
                  <div className="absolute -inset-4 bg-sarc-green/20 rounded-3xl rotate-3"></div>
                  <img src="https://raw.githubusercontent.com/bbhatt-git/sarc-school/refs/heads/sarc/public/images/0.jpg" alt="SARC Building" className="relative rounded-2xl shadow-2xl w-full h-auto object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* ACADEMIC PROGRAMS */}
      <section className="py-16 md:py-24 bg-white/40 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle title="Our Programs" subtitle="Academic Streams" />
          <div className="grid md:grid-cols-2 gap-8">
            {ACADEMIC_PROGRAMS.map((program) => (
              <GlassContainer key={program.id} className="p-8 md:p-12 flex flex-col h-full group hover:border-sarc-green/30" hoverEffect={true}>
                 <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold text-sarc-main dark:text-white">{program.level}</h3>
                    <div className="p-3 bg-sarc-green/10 text-sarc-green rounded-full">
                       {program.id === 'science' ? <Atom className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
                    </div>
                 </div>
                 <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-grow">
                   {program.desc}
                 </p>
                 <div className="space-y-4 border-t border-slate-100 dark:border-white/10 pt-6">
                    <div>
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Subjects</span>
                       <div className="flex flex-wrap gap-2">
                         {program.subjects.slice(0, 4).map(sub => (
                           <span key={sub} className="px-2 py-1 bg-slate-100 dark:bg-white/10 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">{sub}</span>
                         ))}
                         <span className="px-2 py-1 bg-slate-100 dark:bg-white/10 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">+{program.subjects.length - 4} more</span>
                       </div>
                    </div>
                 </div>
                 <div className="mt-8">
                   <Link to="/academics/programs">
                     <button className="w-full py-4 rounded-xl bg-sarc-main dark:bg-white text-white dark:text-sarc-main font-bold uppercase text-xs tracking-widest hover:bg-sarc-green dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                        View Details <ArrowUpRight className="w-4 h-4" />
                     </button>
                   </Link>
                 </div>
              </GlassContainer>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-4 relative flex justify-center items-center py-4 order-2 md:order-1">
                  <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                          src={principal.image} 
                          alt={principal.name} 
                          className="w-full h-full object-cover" 
                      />
                  </div>
              </div>

              <div className="md:col-span-8 order-1 md:order-2 text-center md:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-sarc-green/10 text-sarc-green text-[10px] font-bold tracking-widest uppercase mb-4 md:mb-6">Message from Campus Chief</span>
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-sarc-main dark:text-white mb-8 leading-tight">
                  "Education is a transformative journey."
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium mb-8">
                  {principal.message.split('\n').slice(0, 4).map((line, i) => (
                    line.trim() && <p key={i} className="mb-4">{line}</p>
                  ))}
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                   <div className="text-left">
                      <h4 className="font-bold text-xl text-sarc-main dark:text-white">{principal.name}</h4>
                      <p className="text-xs text-sarc-green uppercase tracking-wide font-bold">{principal.title}</p>
                   </div>
                   <Link to="/overview/principal">
                      <button className="ml-8 px-6 py-3 rounded-full border border-slate-200 dark:border-white/20 hover:bg-sarc-green hover:text-white hover:border-sarc-green transition-all text-xs font-bold uppercase tracking-widest">Read Full Message</button>
                   </Link>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* LATEST NOTICES & NEWS */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-sarc-main/5 dark:bg-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-10">
               <div>
                 <span className="text-sarc-green font-bold text-xs uppercase tracking-widest">Latest Updates</span>
                 <h2 className="text-3xl font-bold text-sarc-main dark:text-white mt-2">Notice Board</h2>
               </div>
               <Link to="/notice/general" className="hidden md:block text-sm font-bold text-slate-500 hover:text-sarc-green transition-colors">View All &rarr;</Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {NEWS_ITEMS.slice(0, 3).map((item) => (
                  <GlassContainer key={item.id} className="p-6 hover:bg-white transition-colors cursor-pointer group" hoverEffect={true}>
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-sarc-green/10 rounded-lg text-sarc-green group-hover:bg-sarc-green group-hover:text-white transition-colors shrink-0">
                           <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
                           <h3 className="text-lg font-bold text-sarc-main dark:text-white my-2 leading-tight group-hover:text-sarc-green transition-colors">{item.title}</h3>
                           <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{item.excerpt}</p>
                        </div>
                     </div>
                  </GlassContainer>
               ))}
            </div>
            <div className="mt-8 text-center md:hidden">
               <Link to="/notice/general" className="text-sm font-bold text-slate-500 hover:text-sarc-green transition-colors">View All Notices &rarr;</Link>
            </div>
         </div>
      </section>

      {/* FACILITIES */}
      <section className="py-12 md:py-24 px-4 md:px-6 relative bg-transparent">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle title="Campus Infrastructure" subtitle="Facilities" />
          
          {/* Mobile Scroll Animation View (Hidden on Desktop) */}
          <div className="md:hidden">
            <MobileScrollCards />
          </div>

          {/* Desktop Grid View (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {FACILITIES.slice(0, 4).map((facility) => {
              const Icon = facility.icon;
              return (
                <div 
                  key={facility.id}
                  className="spotlight-card group rounded-[2rem] p-1 h-full"
                  onMouseMove={handleMouseMove}
                >
                  <div className="content bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[1.8rem] p-6 md:p-8 h-full flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-sarc-green/20 to-sarc-main/5 dark:from-sarc-green/20 dark:to-white/5 text-sarc-main dark:text-white flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-sarc-main group-hover:text-sarc-green shadow-sm">
                      <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
                    </div>
                    <h3 className="text-base md:text-lg font-sans font-bold text-sarc-main dark:text-white mb-2 md:mb-3 group-hover:text-sarc-green transition-colors">
                      {facility.title}
                    </h3>
                     <p className="text-sm text-slate-500 line-clamp-3">{facility.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/academics/services">
               <button className="text-sarc-green text-xs font-bold uppercase tracking-widest hover:underline">View All Facilities</button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-900/50 pointer-events-none -z-10" />
        <div className="relative z-10 w-full">
           <div className="text-center mb-10 md:mb-16 px-6">
              <span className="inline-block py-1 px-3 rounded-full bg-sarc-main/5 dark:bg-white/10 text-sarc-main dark:text-white text-[10px] font-bold tracking-widest uppercase mb-4">Student Voices</span>
              <h2 className="text-3xl md:text-6xl font-sans font-bold text-sarc-main dark:text-white">Success <span className="text-emerald-600 dark:text-emerald-400">Stories</span></h2>
           </div>
           <div className="flex mb-8 overflow-hidden group">
             <div className="flex animate-marquee group-hover:pause">
                {firstRow.map((t) => <TestimonialCard key={`a-${t.id}`} t={t} />)}
                {firstRow.map((t) => <TestimonialCard key={`b-${t.id}`} t={t} />)}
             </div>
           </div>
           <div className="flex overflow-hidden group">
             <div className="flex animate-marquee-reverse group-hover:pause">
                {secondRow.map((t) => <TestimonialCard key={`c-${t.id}`} t={t} />)}
                {secondRow.map((t) => <TestimonialCard key={`d-${t.id}`} t={t} />)}
             </div>
           </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-32 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sarc-main to-slate-900 opacity-95 transform -skew-y-1 origin-top-left scale-110"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-4 md:mb-6 drop-shadow-md">
            Shape Your Future With Us
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Admissions open for Grade XI (Science & Management). Scholarships available for deserving students.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link to="/admissions">
              <button className="bg-white text-sarc-main px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold tracking-widest uppercase hover:scale-105 transition-transform shadow-2xl border-2 border-white w-full sm:w-auto text-xs md:text-sm">
                Apply for Admission
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;