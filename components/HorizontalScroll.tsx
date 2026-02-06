import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Department } from "../types";
import { ArrowRight } from "lucide-react";

interface HorizontalScrollProps {
  items: Department[];
}

export default function HorizontalScroll({ items }: HorizontalScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] hidden md:block">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-20">
          {/* Intro Card */}
          <div className="h-[500px] w-[300px] flex flex-col justify-center shrink-0">
             <h2 className="text-5xl font-bold text-sarc-main dark:text-white mb-6">
                Our <br/>
                <span className="text-sarc-green">Faculties</span>
             </h2>
             <p className="text-slate-600 dark:text-slate-400 text-lg">
                Explore the specialized streams designed to launch careers.
             </p>
          </div>

          {items.map((dept, i) => (
            <Card key={dept.id} dept={dept} index={i} />
          ))}
          
          {/* Outro Card */}
           <div className="h-[500px] w-[300px] flex flex-col justify-center items-center shrink-0 opacity-50">
             <p className="text-xl font-bold text-sarc-main dark:text-white">More coming soon...</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const Card: React.FC<{ dept: Department; index: number }> = ({ dept, index }) => {
  const Icon = dept.icon;
  return (
    <div
      className="group relative h-[500px] w-[450px] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 border border-white/20 shadow-xl shrink-0 transition-transform duration-300 hover:scale-[1.02]"
    >
      <div
        style={{
          backgroundImage: `url(https://picsum.photos/800/600?random=${index + 50})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
         <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white border border-white/20 mb-6 group-hover:bg-sarc-green group-hover:border-sarc-green transition-colors duration-300">
            <Icon className="w-10 h-10" />
         </div>

         <span className="text-sarc-green font-mono text-sm font-bold uppercase tracking-widest mb-3 block">
            0{index + 1}
         </span>
         
        <h3 className="text-4xl font-bold text-white mb-4">{dept.name}</h3>
        
        <p className="text-slate-200 line-clamp-3 mb-8 font-medium text-lg max-w-sm">
            {dept.description}
        </p>
        
        <button className="flex items-center gap-2 text-white font-bold uppercase text-sm tracking-widest hover:text-sarc-green transition-colors border-b border-transparent hover:border-sarc-green pb-1">
            View Curriculum <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};