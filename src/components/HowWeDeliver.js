"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Presentation, MonitorPlay, Section } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

const steps = [
  {
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
    icon: <BarChart3 size={28} />,
    position: "justify-start",
  },
  {
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
    icon: <Presentation size={28} />,
    position: "justify-center",
  },
  {
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: <MonitorPlay size={28} />,
    position: "justify-end",
  },
];

export default function HowWeDeliver() {
  return (
    <section className="py-24 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
       <SectionHeader
          badgeText="How We Deliver?"
          whiteTitle="Our Proven Approach to "
          blueTitle="Effective Training"
          className="mb-16 text-center"
        />  

        {/* The Path Container */}
        <div className="relative">
          
          {/* Central Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden lg:block rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-400 to-blue-700"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="w-full lg:w-1/3 flex flex-col items-center"
              >
                {/* The Interactive Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-blue-500/5 border border-slate-100 dark:border-slate-800 relative group text-center"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg border-4 border-white dark:border-[#020617]">
                    {idx + 1}
                  </div>

                  {/* Icon with Glowing Base */}
                  <div className="relative mb-6 inline-flex">
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Decorative Side Accents from image_b4f463.png style */}
                  <div className="absolute top-1/2 -left-px h-12 w-1 bg-blue-600 rounded-r-full" />
                  <div className="absolute top-1/2 -right-px h-12 w-1 bg-blue-600 rounded-l-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}