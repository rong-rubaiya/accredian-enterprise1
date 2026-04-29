"use client";
import React from 'react';

const statsData = [
  {
    value: "10K+",
    label: "Professionals Trained",
    description: "For Exceptional Career Success",
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    value: "200+",
    label: "Sessions Delivered",
    description: "With Unmatched Learning Excellence",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    value: "5K+",
    label: "Active Learners",
    description: "Engaged In Dynamic Courses",
    gradient: "from-indigo-600 to-blue-500",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="relative w-full py-20 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden border-t border-slate-100 dark:border-slate-900">
      
      {/* --- BACKGROUND AMBIANCE (Matching Hero) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[20%] h-[40%] bg-blue-400/5 dark:bg-blue-600/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[25%] h-[30%] bg-indigo-400/5 dark:bg-indigo-600/5 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
              Our Track Record
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            The Numbers Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Our Success.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />
          
          {statsData.map((stat, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center group">
              {/* Stat Circle Card (Smaller, refined) */}
              <div className={`
                w-36 h-36 rounded-full p-[1.5px] mb-6 transition-all duration-500 group-hover:-translate-y-2
                bg-gradient-to-tr ${stat.gradient} shadow-lg shadow-blue-500/10
              `}>
                <div className="w-full h-full rounded-full bg-white dark:bg-[#020617] flex items-center justify-center text-center">
                  <span className={`text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
                    {stat.value}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center space-y-1">
                <h3 className="text-slate-900 dark:text-white font-bold text-base">{stat.label}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-[13px] font-medium leading-snug max-w-[180px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer highlight section */}
        
      </div>
    </section>
  );
}