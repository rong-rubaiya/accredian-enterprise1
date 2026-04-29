"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';

const segments = [
  {
    title: "Program Specific",
    details: "Certificate, Executive, Post Graduate Certificate",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Industry Specific",
    details: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Topic Specific",
    details: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Level Specific",
    details: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function CourseSegmentation() {
  return (
    <section className="w-full py-16 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badgeText="Course Segmentation"
          whiteTitle="Tailored Learning Paths for Every"
          blueTitle="Professional Journey"
          className="mb-16 text-center"
        />  

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[350px] overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.div 
                  className="transition-all duration-500 transform translate-y-8 group-hover:translate-y-0"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-slate-300 text-xs leading-relaxed border-t border-white/20 pt-3">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
                
                {/* Visual Accent */}
                <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}