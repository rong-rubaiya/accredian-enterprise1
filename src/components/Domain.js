"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, BrainCircuit, Users, BarChart3, Settings2, Globe2, WalletCards } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

const domains = [
  { title: "Product & Innovation Hub", icon: <Lightbulb /> },
  { title: "Gen-AI Mastery", icon: <BrainCircuit /> },
  { title: "Leadership Elevation", icon: <Users /> },
  { title: "Tech & Data Insights", icon: <BarChart3 /> },
  { title: "Operations Excellence", icon: <Settings2 /> },
  { title: "Digital Enterprise", icon: <Globe2 /> },
  { title: "Fintech Innovation Lab", icon: <WalletCards /> },
];

export default function DomainExpertise() {
  return (
    <section className="w-full py-16 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <SectionHeader
        badgeText="Our Domain Expertise"
  whiteTitle="Specialized Programs Designed to Fuel"
  blueTitle="Innovation"
  className="mb-12"
          
        />

        <div className="flex flex-wrap justify-center gap-4">
          {domains.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="w-full sm:w-72 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all group"
            >
              <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon, { size: 38, strokeWidth: 1.5 })}
              </div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}