"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

const testimonials = [
  {
    company: 'ADP',
    logo: 'https://www.vectorlogo.zone/logos/adp/adp-ar21.svg',
    text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    company: 'Bayer',
    logo: 'https://download.logo.wine/logo/Bayer/Bayer-Logo.wine.png',
    text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    company: 'IBM',
    logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg',
    text: "The specialized tracks offered provided our team with a basic understanding of logic and business principles that were immediately applicable to our high-stakes projects.",
  },
  {
    company: 'HCL',
    logo: 'https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png',
    text: "The proprietary high-performance learning ecosystem is a game changer. Real-time interaction and collaborative whiteboards made the virtual delivery feel incredibly personal.",
  }
];

const TestimonialsPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for window resize to handle responsiveness
  useEffect(() => {
    const checkRes = () => setIsMobile(window.innerWidth < 768);
    checkRes();
    window.addEventListener('resize', checkRes);
    return () => window.removeEventListener('resize', checkRes);
  }, []);

  const cardsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const nextSide = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevSide = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  // Auto-reset page if switching from desktop to mobile to prevent empty states
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  return (
    <section className="w-full py-5 md:py-10 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <SectionHeader
          badgeText="Success Stories"
          whiteTitle="Testimonials from"
          blueTitle="Our Partners"
          description="What our clients are saying about their journey with us."
          className="mb-8 md:mb-12"
        />

        <div className="relative group">
          {/* Main Content Carousel */}
          <div className="relative overflow-hidden py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPage}-${isMobile}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {testimonials
                  .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
                  .map((item, index) => (
                    <div 
                      key={index} 
                      className="p-6 md:p-10 rounded-3xl bg-white dark:bg-[#001141]/40 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl dark:shadow-blue-900/10 hover:border-blue-500/40 transition-all duration-300 relative min-h-[320px] flex flex-col justify-between"
                    >
                      <div className="flex flex-col gap-4 md:gap-6 relative z-10">
                        <div className="h-8 md:h-12 w-fit mb-2">
                          <img 
                            src={item.logo} 
                            alt={item.company}
                            className="h-full w-auto object-contain dark:brightness-125"
                          />
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                          "{item.text}"
                        </p>
                      </div>
                      
                      {/* Stylized background quote icon */}
                      <Quote 
                        className="absolute bottom-4 right-6 md:bottom-6 md:right-8 text-slate-100 dark:text-white/5 z-0" 
                        size={isMobile ? 60 : 80} 
                        strokeWidth={1}
                      />
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-6 md:gap-8 mt-8 md:mt-12">
            
            {/* Dots Pagination - Matches image_9997d9.png layout */}
            <div className="flex items-center gap-2.5">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`transition-all duration-500 rounded-full ${
                    currentPage === i 
                    ? 'w-8 md:w-10 h-2 md:h-2.5 bg-blue-600 shadow-lg shadow-blue-500/40' 
                    : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-blue-400'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            {/* Responsive Arrow Controls */}
            <div className="flex gap-4">
              <button 
                onClick={prevSide}
                className="p-2.5 md:p-3 rounded-full border border-slate-200 dark:border-white/10 hover:bg-blue-600 hover:text-white transition-all text-slate-500 active:scale-90"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              <button 
                onClick={nextSide}
                className="p-2.5 md:p-3 rounded-full border border-slate-200 dark:border-white/10 hover:bg-blue-600 hover:text-white transition-all text-slate-500 active:scale-90"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPagination;