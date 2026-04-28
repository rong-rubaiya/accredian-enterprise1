"use client";
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/constants/content';

export default function SubNavbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleScroll = (id) => {
    setActiveTab(id);
    setIsOpen(false); // Close menu on click
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-[#001141] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start select-none">
          <span className="font-black text-2xl text-blue-600 dark:text-blue-500 tracking-tighter uppercase">
            accredian
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 -mt-1 ml-0.5">
            credentials that matter
          </span>
        </div>

        {/* Desktop Navigation & Actions */}
        <div className="flex items-center gap-2 lg:gap-4">
          <nav className="hidden lg:flex items-center gap-1 mr-2">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeTab === id;
              
              return (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className={`px-4 py-2 text-[14px] font-bold transition-all duration-300 rounded-full ${
                    isActive 
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30" 
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Brightness"
            className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-gray-300 dark:bg-white/10 dark:border-white/20 dark:text-yellow-400 dark:hover:bg-white/20 dark:hover:border-white/30 active:scale-90 shadow-sm"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform duration-500 rotate-0">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 5.106a.75.75 0 0 0-1.061 0l-1.591 1.591a.75.75 0 1 0 1.061 1.061l1.591-1.591a.75.75 0 0 0 0-1.061ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.833 18.894a.75.75 0 0 0 1.061-1.061l-1.591-1.591a.75.75 0 1 0-1.061 1.061l1.591 1.591ZM12 18.75a.75.75 0 0 1 .75.75V21.75a.75.75 0 0 1-1.5 0V19.5a.75.75 0 0 1 .75-.75ZM5.106 18.894a.75.75 0 0 1 0-1.061l1.591-1.591a.75.75 0 1 1 1.061 1.061l-1.591 1.591a.75.75 0 0 1-1.061 0ZM3 12a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 0 0-1.5H3.75A.75.75 0 0 0 3 12ZM6.157 5.106a.75.75 0 0 1 1.061 0l1.591 1.591a.75.75 0 1 1-1.061 1.061L6.157 6.167a.75.75 0 0 1 0-1.061Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-700 transition-transform duration-500 -rotate-12">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100 border-t border-gray-200 dark:border-slate-800" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col p-4 bg-white dark:bg-[#001141]">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                  isActive 
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" 
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}