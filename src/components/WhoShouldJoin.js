"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MonitorCheck, MonitorX, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

const targets = [
  {
    title: "Tech Pros",
    desc: "Enhance expertise and drive innovation.",
    icon: <MonitorCheck />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Non-Tech",
    desc: "Adapt and collaborate in tech spaces.",
    icon: <MonitorX />,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Emerging",
    desc: "Rapid skills for career growth.",
    icon: <GraduationCap />,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Seniors",
    desc: "Strengthen strategic leadership.",
    icon: <Briefcase />,
    color: "from-cyan-600 to-blue-700"
  },
];

export default function StrategicSkillEnhancement() {
  return (
    <section className="lg:h-[80vh] flex items-center justify-center py-12 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="relative rounded-[2.5rem] bg-slate-900 dark:bg-slate-950 overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px]">
          
          {/* LEFT PANEL: Visual & Identity */}
          <div className="lg:w-5/12 relative p-8 lg:p-12 flex flex-col justify-center bg-blue-600 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                Target Audience
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-[1.1] mb-6">
                Strategic <br /> 
                <span className="text-blue-200">Skill Growth</span>
              </h2>
              <p className="text-blue-100/80 text-sm max-w-xs mb-8">
                A program tailored for those ready to lead the next digital frontier.
              </p>
              
              {/* Overlapping Image Elements */}
              <div className="relative h-32 mt-4 hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200" 
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-white/20 rotate-[-10deg] absolute left-0"
                  alt="Pro 1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" 
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-white/20 rotate-[10deg] absolute left-16 z-20"
                  alt="Pro 2"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT PANEL: Interactive Grid */}
          <div className="lg:w-7/12 p-6 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-slate-900">
            {targets.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-5 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:rotate-12 transition-transform`}>
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} className="text-blue-600" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}