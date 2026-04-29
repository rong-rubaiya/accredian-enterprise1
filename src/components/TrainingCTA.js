"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Headset, ChevronRight } from 'lucide-react';
// Import your modal/button component
import EnquiryModal from './ui/Button'; 

const TrainingCTA = () => {
  return (
    <section className="w-full py-12 px-4 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Banner: Uses the vibrant blue from the image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-[#155CF9] shadow-lg shadow-blue-500/20"
        >
          {/* 
            The "Concentric Circles" Pattern from the image.
            Using opacity so it looks good in both themes.
          */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -bottom-[20%] right-[10%] w-[500px] h-[500px] border-[40px] border-white/10 rounded-full" />
            <div className="absolute -bottom-[40%] right-[0%] w-[600px] h-[600px] border-[40px] border-white/5 rounded-full" />
            <div className="absolute -bottom-[60%] -right-[10%] w-[700px] h-[700px] border-[40px] border-white/5 rounded-full" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 px-8 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* White Icon Box - Matches Image */}
              <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md">
                <Headset className="text-[#155CF9] w-12 h-12" />
              </div>

              {/* Text Area */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                  Want to Learn More About Our Training Solutions?
                </h2>
                <p className="mt-2 text-white/90 text-lg font-medium">
                  Get Expert Guidance for Your Team’s Success!
                </p>
              </div>
            </div>

            {/* CTA Button Area */}
            <div className="flex-shrink-0">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-20"
              >
                {/* 
                  I am wrapping the EnquiryModal. 
                  Ensure EnquiryModal itself is just a <button> or <div> with an onClick.
                */}
                <div className="relative rounded-[14px] bg-white border-2 border-white">
  <EnquiryModal className="" />
</div>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrainingCTA;