"use client";
import React from 'react';
import EnquiryModal from './ui/Button';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500 min-h-[600px] lg:h-[75vh] flex items-center">
      
      {/* --- BACKGROUND AMBIANCE --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-400/10 dark:bg-blue-600/5 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-[5%] right-[-5%] w-[25%] h-[25%] bg-indigo-400/10 dark:bg-indigo-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-0 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* --- IMAGE VISUAL (Top on Mobile) --- */}
          <div className="relative group w-full lg:col-span-5 order-1 lg:order-2">
            <div className="relative z-10 flex items-center justify-center lg:justify-end pr-4 lg:pr-0">
              
              {/* Floating Badge - Active Users */}
              <div className="absolute top-4 left-4 lg:-left-8 z-20 animate-bounce-slow">
                <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-3 rounded-xl border border-white/20 dark:border-white/10 shadow-xl">
                  <p className="text-[9px] uppercase font-bold text-slate-400 tracking-tighter">Active Users</p>
                  <p className="text-xl font-black text-blue-600 leading-none">10k+</p>
                </div>
              </div>

              {/* Overlapping Image Gallery */}
              <div className="relative flex items-end">
                <div className="w-[220px] h-[280px] lg:w-[280px] lg:h-[360px] rounded-3xl overflow-hidden rotate-[-2deg] border-2 border-white dark:border-slate-800 shadow-2xl relative z-10 transition-transform group-hover:rotate-0 duration-500">
                   <img src="/1.png" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="w-[160px] h-[220px] lg:w-[220px] lg:h-[300px] rounded-3xl overflow-hidden rotate-[6deg] border-2 border-white dark:border-slate-800 shadow-2xl ml-[-60px] lg:ml-[-100px] mb-[-15px] relative z-0 transition-transform group-hover:rotate-0 duration-500">
                   <img src="/2.png" alt="Workspace" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Background Glow for Image */}
            <div className="absolute inset-0 z-0 flex justify-center items-center">
               <div className="w-[80%] h-[80%] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[60px]" />
            </div>
          </div>

          {/* --- TEXT CONTENT (Bottom on Mobile) --- */}
          <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:col-span-7 order-2 lg:order-1">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative rounded-full h-1.5 w-1.5 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
                Enterprise Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Expertise</span><br />
              <span className="text-slate-400 dark:text-slate-500">For Your Team.</span>
            </h1>

            <p className="max-w-md text-base lg:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              We empower industry leaders with professional learning ecosystems tailored for high-performance scale.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
             <EnquiryModal/>
             
            </div>

            {/* Minimalist Feature List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 pt-4 w-full">
               <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Industry Insights</span>
               </div>
               <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Expert Guidance</span>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Global CSS for minor animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}