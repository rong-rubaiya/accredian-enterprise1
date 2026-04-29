import React from 'react';
import { Badge } from './Badge';

export const SectionHeader = ({ badgeText, whiteTitle, blueTitle, className = "" }) => {
  return (
    <div className={`flex flex-col items-center text-center mb-12 space-y-3 ${className}`}>
      
    
      <div className="flex flex-col items-center text-center space-y-3">
        <Badge>{badgeText}</Badge>
      </div>

      
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
        {whiteTitle}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
          {blueTitle}
        </span>
      </h2>
      
    </div>
  );
};