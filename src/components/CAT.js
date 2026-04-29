"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cog, Wrench } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

const steps = [
  {
    letter: "C",
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
    icon: <Lightbulb size={32} />,
    color: "#3b82f6"
  },
  {
    letter: "A",
    title: "Application",
    desc: "Practical implementation through real-world scenarios.",
    icon: <Cog size={32} />,
    color: "#2563eb"
  },
  {
    letter: "T",
    title: "Tools",
    desc: "Resources and techniques for effective skill mastery.",
    icon: <Wrench size={32} />,
    color: "#1d4ed8"
  }
];

export default function CATFramework() {
  return (
    <section className="py-20 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
       <SectionHeader
       badgeText="The CAT Framework"
  whiteTitle="Our Proven Approach to "
  blueTitle="Learning Excellence"
  className="mb-12"
          
        />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Animated SVG Connector Line (Desktop Only) */}
          <svg className="absolute top-1/4 left-0 w-full h-24 hidden md:block" preserveAspectRatio="none">
            <motion.path
              d="M 100 50 Q 300 -50 500 50 T 900 50"
              fill="transparent"
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeDasharray="10 10"
              className="dark:stroke-slate-800"
            />
            <motion.path
              d="M 100 50 Q 300 -50 500 50 T 900 50"
              fill="transparent"
              stroke="#3b82f6"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center group w-full md:w-1/3"
            >
              {/* The "Circle" Container */}
              <div className="relative mb-8">
                <motion.div 
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                  className="w-32 h-32 rounded-full border-2 border-dashed border-blue-200 dark:border-blue-900 absolute -inset-2"
                />
                <div className="w-28 h-28 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center relative z-10 border border-slate-100 dark:border-slate-800 group-hover:border-blue-500 transition-colors duration-500">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Letter Badge */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white dark:border-slate-950">
                  {step.letter}
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center px-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>

              {/* Mobile Connector (Vertical) */}
              {idx !== steps.length - 1 && (
                <div className="h-12 w-px bg-blue-200 dark:bg-blue-900 my-4 md:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}