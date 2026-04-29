"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronRight } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader'; 
import EnquiryModal from './ui/Button';

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('About the Course');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = ['About the Course', 'About the Delivery', 'Miscellaneous'];

  const faqData = {
    'About the Course': [
      { q: "What are the prerequisites for this program?", a: "No prior experience is required for our foundational modules. However, specialized tracks may require a basic understanding of logic or business principles." },
      { q: "Will I receive a professional certification?", a: "Yes, upon successful completion of all modules and the final project, you will receive a verified digital credential from Accredian." }
    ],
    'About the Delivery': [
      { q: "How are the live sessions conducted?", a: "Sessions are held via our proprietary high-performance learning ecosystem, featuring real-time interaction, breakout rooms, and collaborative whiteboards." },
      { q: "What happens if I miss a live class?", a: "All sessions are recorded in HD and uploaded to your student dashboard within 24 hours, along with all associated resources." }
    ],
    'Miscellaneous': [
      { q: "Do you offer corporate training discounts?", a: "Yes, we offer tailored pricing for teams of 5 or more. Please use the Enquiry form to request a corporate brochure." },
      { q: "Is there post-program career support?", a: "Absolutely. Graduates get 6 months of access to our exclusive job board and quarterly networking mixers with industry leaders." }
    ]
  };

  return (
    <section className="w-full py-12 md:py-20 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badgeText="Support Center"
          whiteTitle="Frequently Asked"
          blueTitle="Questions"
          description="Everything you need to know about scaling your professional journey."
          className="mb-10 md:mb-16"
        />

        {/* Responsive Grid: Stacks on mobile, Side-by-side on lg (1024px+) */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-6 md:gap-8 items-start">
          
          {/* Side Navigation - Horizontal scroll on mobile, Vertical list on desktop */}
          <div className="flex lg:flex-col gap-2 p-2 bg-slate-50/50 dark:bg-[#001141]/30 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl overflow-x-auto lg:overflow-visible no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setOpenIndex(0); }}
                className={`group flex shrink-0 items-center justify-between px-4 py-3 md:px-5 md:py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                  activeTab === cat 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/5'
                }`}
              >
                <span className="text-sm md:text-base">{cat}</span>
                <ChevronRight size={18} className={`hidden lg:block transition-transform duration-300 ${activeTab === cat ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            ))}
          </div>

          {/* FAQ Accordion Area */}
          <div className="space-y-4 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {faqData[activeTab].map((item, index) => (
                  <div 
                    key={index}
                    className="group rounded-2xl bg-white dark:bg-[#001141]/40 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                      className="w-full px-5 py-5 md:px-8 md:py-6 flex justify-between items-center text-left gap-4"
                    >
                      <span className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug">
                        {item.q}
                      </span>
                      <div className={`shrink-0 p-1.5 md:p-2 rounded-full transition-transform duration-500 ${openIndex === index ? 'rotate-45 bg-blue-600 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-500'}`}>
                        <Plus size={18} className="md:w-5 md:h-5" />
                      </div>
                    </button>
                    
                    <motion.div 
                      initial={false}
                      animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-8 md:pb-8 pt-0">
                        <div className="h-[1px] w-full bg-slate-100 dark:bg-white/10 mb-4 md:mb-6" />
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* CTA Section - Responsive scaling */}
            
          </div>

          

        </div>

        <div className="pt-6   w-full flex justify-center align-middle md:pt-10">
               <EnquiryModal />
            </div>

      </div>
    </section>
  );
};

export default FAQSection;