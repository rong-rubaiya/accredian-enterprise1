"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/Badge';
import { SectionHeader } from './ui/SectionHeader';

const partners = [
  { name: 'Reliance', logo: '/RELIANCE.NS_BIG.png' },
  { name: 'HCL', logo: 'https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png' },
  { name: 'IBM', logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg' },
  { name: 'ADP', logo: 'https://www.vectorlogo.zone/logos/adp/adp-ar21.svg' },
  { name: 'Bayer', logo: 'https://download.logo.wine/logo/Bayer/Bayer-Logo.wine.png' },
  // Adding an extra one for variety
  { name: 'CRIF', logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' }, 
];

export default function Partnerships() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="w-full py-16 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
       <SectionHeader
  badgeText="Trusted Network"
  whiteTitle="Our Proven"
  blueTitle="Partnerships"
  className="mb-12"
/>

        <div className="relative flex overflow-hidden py-8">
          {/* Side Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-20" />

          <motion.div 
            className="flex space-x-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 10, // Faster duration for a better feel
              repeat: Infinity,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[200px] lg:min-w-[250px] h-16 lg:h-20 rounded-lg bg-white/80 dark:bg-[#001141]/80 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-md">
  <img 
    src={partner.logo} 
    alt={partner.name}
    className="h-16 lg:h-20 w-auto object-contain  grayscale-0 opacity-100 transition-all duration-300 dark:brightness-150"
  />
</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}