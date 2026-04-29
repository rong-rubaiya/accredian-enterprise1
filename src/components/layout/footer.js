"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiMapPin, FiArrowUpRight } from 'react-icons/fi';

import EnquiryModal from '../ui/Button'; 

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-white dark:bg-[#0F172A] text-black dark:text-slate-300 pt-12 md:pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <div className="group cursor-pointer">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                accredian<span className="text-blue-500">.</span>
              </h2>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-500 font-bold">
                credentials that matter
              </p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed text-sm md:text-base">
              Empowering professionals with world-class certifications and career-transforming skills. Join our elite community today.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg">Company</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:space-y-4">
              {['About', 'Blog', 'Careers', 'Why Accredian'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center text-sm md:text-base group hover:text-blue-500 transition-colors">
                    {item}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 ml-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section: Responsive fixes applied here */}
          <div className="lg:col-span-6 space-y-8 bg-slate-50 dark:bg-slate-900/50 p-5 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 backdrop-blur-sm">
            <div className="flex flex-col xl:flex-row justify-between gap-8">
              <div className="space-y-6 w-full">
                <h4 className="text-slate-900 dark:text-white font-bold text-lg">Get in Touch</h4>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2.5 md:p-3 bg-blue-500/10 rounded-xl text-blue-500 shrink-0">
                      <HiOutlineMailOpen size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Email Us</p>
                      <a href="mailto:enterprise@accredian.com" className="text-slate-900 dark:text-white font-medium hover:text-blue-500 transition-colors block truncate text-sm md:text-base">
                        enterprise@accredian.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2.5 md:p-3 bg-blue-500/10 rounded-xl text-blue-500 shrink-0">
                      <FiMapPin size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Global Head Office</p>
                      <p className="text-slate-900 dark:text-white font-medium text-xs md:text-sm leading-relaxed">
                        4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center xl:items-end justify-center space-y-4 border-t xl:border-t-0 xl:border-l border-slate-200 dark:border-slate-800 pt-8 xl:pt-0 xl:pl-8">
                <p className="text-slate-500 text-xs md:text-sm text-center  mb-1">
                  Ready to transform your career?
                </p>
                <EnquiryModal 
                  label="Enquire Now" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 text-sm md:text-base"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-slate-500 text-center md:text-left">
          <p>© {year} Accredian. A Brand of FullStack Education Pvt Ltd.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}