"use client";
import React from 'react';
import { motion } from 'framer-motion'; //
import { SectionHeader } from './ui/SectionHeader';
import { Lightbulb, Users, Settings, Globe, MoveUpRight, Target, Package, ChevronRight } from 'lucide-react';

const features = [
  { title: "Tailored Solutions", description: "Programs customized to your organization's goals and challenges.", icon: <Lightbulb className="w-6 h-6" />, position: "top" },
  { title: "Expert Guidance", description: "Learn from industry leaders with real-world success.", icon: <Users className="w-6 h-6" />, position: "bottom" },
  { title: "Innovative Framework", description: "Proprietary methods for impactful, application-driven results.", icon: <Settings className="w-6 h-6" />, position: "top" },
  { title: "Advanced Technology", description: "State-of-the-art LMS for seamless learning experiences.", icon: <Globe className="w-6 h-6" />, position: "bottom" },
  { title: "Diverse Offerings", description: "Courses across industries, skill levels, and emerging fields.", icon: <MoveUpRight className="w-6 h-6" />, position: "top" },
  { title: "Proven Impact", description: "Trusted by leading organizations for measurable ROI.", icon: <Target className="w-6 h-6" />, position: "bottom" },
  { title: "Flexible Delivery", description: "Online and offline options tailored to your needs.", icon: <Package className="w-6 h-6" />, position: "top" },
];

// Animation variants for the containers
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Staggers the entrance of each feature
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AccredianEdge() {
  return (
    <section className="py-24 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <SectionHeader
          badgeText="The Accredian Edge"
          whiteTitle="Key Aspects of"
          blueTitle="Our Strategic Training"
          className="mb-20 text-center"
        />

        <div className="relative">
          {/* Animated Connecting Dotted Line (Desktop) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-1/2 left-0 h-px border-t-2 border-dashed border-slate-200 dark:border-slate-800 -translate-y-1/2 z-0" 
          />

          {/* Features Grid with Staggered Entrance */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-4 relative z-10"
          >
            {features.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="flex flex-col items-center group"
              >
                
                {/* Top Content */}
                <div className={`hidden lg:flex flex-col items-start mb-8 h-32 transition-all duration-300 ${item.position === 'bottom' ? 'invisible opacity-0' : 'visible opacity-100'}`}>
                   <div className="pl-4 border-l-2 border-blue-500">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm whitespace-nowrap">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed max-w-[140px]">{item.description}</p>
                   </div>
                </div>

                {/* Central Icon Circle with Hover Animation */}
                <div className="relative flex items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-50 dark:border-slate-800 flex items-center justify-center shadow-xl group-hover:border-blue-500 transition-colors duration-500 z-10"
                  >
                    <div className="text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </div>
                  </motion.div>
                  
                  {/* Arrows */}
                  {idx !== features.length - 1 && (
                    <div className="hidden lg:block absolute -right-6 text-slate-300 dark:text-slate-700">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </div>

                {/* Bottom Content */}
                <div className={`hidden lg:flex flex-col items-start mt-8 h-32 transition-all duration-300 ${item.position === 'top' ? 'invisible opacity-0' : 'visible opacity-100'}`}>
                   <div className="pl-4 border-l-2 border-blue-500">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm whitespace-nowrap">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed max-w-[140px]">{item.description}</p>
                   </div>
                </div>

                {/* Mobile/Tablet Content */}
                <div className="lg:hidden mt-4 text-center">
                   <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h4>
                   <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{item.description}</p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}