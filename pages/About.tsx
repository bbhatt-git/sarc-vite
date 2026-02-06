import React, { useRef } from 'react';
import { GlassContainer, SectionTitle } from '../components/GlassUI';
import { 
  Eye, Rocket, CheckCircle2, 
  MapPin, Building2, Users, Globe, Award,
  BookOpen, Gavel, Briefcase, FlaskConical, Wrench,
  Microscope, Lightbulb, Handshake, GraduationCap, Zap, Heart
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ABOUT_LONG_DESC } from '../constants';

interface AboutProps {
  type: 'us' | 'vision' | 'why-us';
}

const About: React.FC<AboutProps> = ({ type }) => {
  // Simple scroll effect for the image in "About Us" - kept for potential reuse or other sections
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen px-4 md:px-6 relative">
      
      {/* ----------------- ABOUT US ----------------- */}
      {type === 'us' && (
        <>
          <SEO 
            title="About Us" 
            description="SARC Education Foundation - A modern school in Mahendranagar started in 2017. Explore our campuses, programs, and unique approach." 
          />
          
          <div className="max-w-7xl mx-auto space-y-20 md:space-y-32 relative z-10 animate-fade-in">
             
             {/* 1. Intro Section */}
             <div className="max-w-4xl mx-auto text-center space-y-8">
               <SectionTitle title="About Our School" subtitle="SARC Education Foundation" />
               <GlassContainer className="p-8 md:p-12 text-left md:text-center" hoverEffect={false}>
                 <div className="prose prose-lg dark:prose-invert mx-auto text-slate-600 dark:text-slate-300 font-medium leading-relaxed space-y-6">
                    <p>
                      SARC Education Foundation is a growing and modern school in Mahendranagar, Kanchanpur. It started in 2017 to provide quality education that helps students learn new skills, think creatively, and become responsible citizens.
                    </p>
                    <p>
                      We believe education should be fun, practical, and useful for real life. We focus not only on books but also on activities, projects, and technology to make learning more interesting and meaningful.
                    </p>
                    <p>
                      The school provides a safe, friendly, and supportive environment where students can learn, explore, and grow with confidence.
                    </p>
                 </div>
               </GlassContainer>
             </div>

             {/* 2. Our Campuses */}
             <div>
                <SectionTitle title="Our Campuses" subtitle="Two dedicated buildings serving holistic education from ECD to +2" />
                <div className="grid md:grid-cols-2 gap-8">
                   {/* Campus 1 */}
                   <GlassContainer className="p-8 md:p-10 h-full flex flex-col justify-center" hoverEffect={true}>
                      <h3 className="text-2xl font-bold text-sarc-main dark:text-white mb-2">School Section (ECD to Grade 10)</h3>
                      <div className="flex items-center gap-2 text-sarc-green font-bold text-xs uppercase tracking-widest mb-6">
                         <MapPin className="w-4 h-4" />
                         <span>Bheemdatt-4, Kanchanpur</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        Focus on building a strong base through fun activities, teamwork, and practical lessons.
                      </p>
                   </GlassContainer>

                   {/* Campus 2 */}
                   <GlassContainer className="p-8 md:p-10 h-full flex flex-col justify-center" hoverEffect={true}>
                      <h3 className="text-2xl font-bold text-sarc-main dark:text-white mb-2">+2 Section (Higher Secondary)</h3>
                      <div className="flex items-center gap-2 text-sarc-green font-bold text-xs uppercase tracking-widest mb-6">
                         <MapPin className="w-4 h-4" />
                         <span>Aithpur, Bheemdatt-4, Kanchanpur</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        Modern classrooms and labs to prepare students for higher studies and careers.
                      </p>
                   </GlassContainer>
                </div>
             </div>

             {/* 3. What Makes Us Unique */}
             <div>
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-sans font-bold text-sarc-main dark:text-white mb-4">
                    What Makes Us <span className="text-emerald-500">Unique</span>
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                    Excellence in academics combined with real-world skill development
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: "Modern Infrastructure", 
                        desc: "Separate buildings for school and higher secondary with state-of-the-art facilities designed for optimal learning experiences.",
                        icon: Building2,
                        color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      },
                      { 
                        title: "Expert Faculty", 
                        desc: "Dedicated team of experienced educators passionate about nurturing innovation and practical skills in every student.",
                        icon: Users,
                        color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                      },
                      { 
                        title: "Global Perspective", 
                        desc: "Educational tours and international exposure programs that broaden horizons and inspire global thinking.",
                        icon: Globe,
                        color: "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
                      },
                      { 
                        title: "Excellence in Education", 
                        desc: "Proven track record of academic excellence combined with practical skill development for real-world success.",
                        icon: Award,
                        color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
                      }
                    ].map((item, i) => {
                       const Icon = item.icon;
                       return (
                         <GlassContainer key={i} className="p-8 flex flex-col md:flex-row gap-6 items-start" hoverEffect={true}>
                             <div className={`p-4 rounded-2xl shrink-0 ${item.color}`}>
                                <Icon className="w-8 h-8" />
                             </div>
                             <div>
                               <h3 className="text-xl font-bold text-sarc-main dark:text-white mb-3">{item.title}</h3>
                               <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                             </div>
                         </GlassContainer>
                       )
                    })}
                </div>
             </div>

             {/* 4. Programs Offered */}
             <div>
                <div className="relative text-center mb-12">
                   <h2 className="text-3xl md:text-5xl font-sans font-bold text-sarc-main dark:text-white relative inline-block z-10 px-4">
                     Programs Offered
                     <svg className="absolute w-[110%] h-[120%] -top-[10%] -left-[5%] -z-10 text-sarc-green/20" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 40 C 50 10, 150 10, 190 40 C 180 55, 20 55, 10 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                     </svg>
                   </h2>
                   <p className="mt-6 text-slate-500 dark:text-slate-400 font-medium tracking-wide">Pathways that fit every learner</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                   {[
                     { title: "School Level", desc: "ECD / Montessori to Grade 10" },
                     { title: "Bridge Course Programs", desc: "Physical classes only" },
                     { title: "+2 Management", desc: "Commerce and management stream" },
                     { title: "+2 Science", desc: "Science stream with labs" },
                     { title: "+2 Law", desc: "Law stream" },
                     { title: "CTEVT Programs", desc: "Career and technical education" },
                     { title: "Other Preparatory Courses", desc: "Focused preparatory offerings to support student goals.", full: true }
                   ].map((prog, i) => (
                      <GlassContainer key={i} className={`p-8 ${prog.full ? 'sm:col-span-2 lg:col-span-3 text-center' : ''} flex flex-col justify-center`} hoverEffect={true}>
                         <h3 className="text-lg font-bold text-sarc-main dark:text-white mb-2">{prog.title}</h3>
                         <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{prog.desc}</p>
                      </GlassContainer>
                   ))}
                </div>
             </div>

          </div>
        </>
      )}

      {/* ----------------- VISION & MISSION ----------------- */}
      {type === 'vision' && (
        <>
          <SEO title="Vision & Mission" description="Our roadmap to deliver world-class, practical education that serves society." />
          
          <div className="max-w-7xl mx-auto space-y-24 relative z-10 animate-fade-in">
            
            {/* Future Goals & Strategies */}
            <div>
              <div className="text-center mb-12">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-sarc-main dark:text-white mb-4">
                  Future Goals & <span className="text-emerald-500">Strategies</span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                  Our roadmap to deliver world-class, practical education that serves society
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Upgrade Labs & ICT", desc: "Expand robotics, AI and science labs; smart classrooms in all grades." },
                  { title: "International Partnerships", desc: "Collaborate with universities, research centers and industries." },
                  { title: "Scholarship Expansion", desc: "Increase merit and need-based scholarships to support deserving students.", link: "Explore scholarships →" },
                  { title: "Career & Entrepreneurship", desc: "Career counseling, internships, startup incubation and mentorship." },
                  { title: "Community Outreach", desc: "Service-learning projects and social impact programs in the region." },
                  { title: "Faculty Development", desc: "Continuous training in modern pedagogy and educational technology." }
                ].map((item, i) => (
                  <GlassContainer key={i} className="p-8 h-full flex flex-col" hoverEffect={true}>
                     <h3 className="text-lg font-bold text-sarc-main dark:text-white mb-3">{item.title}</h3>
                     <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                     {item.link && <span className="text-blue-600 dark:text-blue-400 text-xs font-bold cursor-pointer hover:underline">{item.link}</span>}
                  </GlassContainer>
                ))}
              </div>
            </div>

            {/* Our Vision */}
            <div className="relative">
              {/* Decorative connecting lines background */}
              <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
                 <svg width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" className="text-sarc-green" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern-circles)" />
                 </svg>
              </div>

              <div className="text-center py-12 md:py-20">
                 <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-6 h-6" />
                 </div>
                 <h2 className="text-3xl md:text-5xl font-sans font-bold text-sarc-main dark:text-white mb-6">
                   Our <span className="text-blue-500">Vision</span>
                 </h2>
                 <p className="text-lg md:text-2xl font-bold text-sarc-main dark:text-white max-w-4xl mx-auto leading-normal">
                   To become a leading school in Nepal that gives students knowledge, skills, and values to achieve success and serve society.
                 </p>

                 <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
                    {[
                      { icon: Rocket, title: "Future-Ready Education", desc: "Preparing students for careers and challenges that don't exist yet through adaptive learning and innovation." },
                      { icon: Globe, title: "Global Citizens", desc: "Nurturing responsible, empathetic individuals who think globally and act locally to make a positive impact." },
                      { icon: Lightbulb, title: "Innovation Leaders", desc: "Cultivating creative problem solvers who can turn ideas into reality and lead technological advancement." }
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <GlassContainer key={i} className="p-8" hoverEffect={true}>
                           <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-4">
                              <Icon className="w-5 h-5" />
                           </div>
                           <h3 className="text-lg font-bold text-sarc-main dark:text-white mb-3">{item.title}</h3>
                           <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                        </GlassContainer>
                      )
                    })}
                 </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="max-w-4xl mx-auto">
               <div className="text-center mb-10">
                 <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-6 h-6" />
                 </div>
                 <h2 className="text-3xl md:text-5xl font-sans font-bold text-sarc-main dark:text-white">
                   Our <span className="text-emerald-500">Mission</span>
                 </h2>
               </div>

               <div className="space-y-4">
                  {[
                    { 
                      title: "Provide Modern, Practical, Digital Education", 
                      desc: "We use hands-on, project-based learning with technology to build real-life skills.",
                      color: "border-blue-500",
                      iconBg: "bg-blue-100 dark:bg-blue-900/30",
                      iconColor: "text-blue-600 dark:text-blue-400",
                      Icon: Zap
                    },
                    { 
                      title: "Build Creative Thinkers & Problem Solvers", 
                      desc: "We encourage curiosity and innovation through labs, workshops, and projects.",
                      color: "border-emerald-500",
                      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
                      iconColor: "text-emerald-600 dark:text-emerald-400",
                      Icon: Lightbulb
                    },
                    { 
                      title: "Discipline, Confidence, Leadership", 
                      desc: "We focus on values and character so students grow as responsible citizens.",
                      color: "border-red-500",
                      iconBg: "bg-red-100 dark:bg-red-900/30",
                      iconColor: "text-red-600 dark:text-red-400",
                      Icon: Award
                    },
                    { 
                      title: "Technology & Innovation for Effective Learning", 
                      desc: "Digital tools, AI, and ICT make classrooms smarter and learning more engaging.",
                      color: "border-blue-500",
                      iconBg: "bg-blue-100 dark:bg-blue-900/30",
                      iconColor: "text-blue-600 dark:text-blue-400",
                      Icon: LaptopIcon
                    }
                  ].map((item, i) => (
                    <GlassContainer key={i} className={`p-6 md:p-8 flex gap-6 items-center border-l-4 ${item.color}`} hoverEffect={true}>
                       <div className={`w-12 h-12 shrink-0 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center`}>
                          <item.Icon className="w-6 h-6" />
                       </div>
                       <div>
                         <h3 className={`text-lg md:text-xl font-bold mb-2 ${item.iconColor}`}>{item.title}</h3>
                         <p className="text-slate-600 dark:text-slate-300 font-medium text-sm">{item.desc}</p>
                       </div>
                    </GlassContainer>
                  ))}
               </div>
            </div>

          </div>
        </>
      )}

      {/* ----------------- WHY CHOOSE US ----------------- */}
      {type === 'why-us' && (
        <>
          <SEO title="Why Choose Us" description="Reasons to choose SARC Education Foundation for your child's future." />
          <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
            <SectionTitle title="Why SARC?" subtitle="The SARC Advantage" />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Academic Excellence", desc: "Consistently excellent results in NEB examinations with district toppers in Science and Management." },
                { title: "Expert Faculty", desc: "A team of highly qualified and experienced teachers dedicated to student success." },
                { title: "Modern Infrastructure", desc: "Well-equipped science labs, computer labs, and e-library to support practical learning." },
                { title: "Holistic Development", desc: "Focus on extra-curricular activities, sports, and personality development alongside academics." },
                { title: "Career Guidance", desc: "Regular counseling and entrance preparation classes for Medical, Engineering, and Management fields." },
                { title: "Scholarships", desc: "Merit-based and need-based scholarships for deserving students to ensure education for all." }
              ].map((item, idx) => (
                <GlassContainer key={idx} className="p-8 flex flex-col items-center text-center gap-4" hoverEffect={true}>
                  <div className="w-12 h-12 rounded-full bg-sarc-green/10 flex items-center justify-center text-sarc-green mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sarc-main dark:text-white mb-3">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </GlassContainer>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Helper icon component for use inside map
const LaptopIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>
);

export default About;