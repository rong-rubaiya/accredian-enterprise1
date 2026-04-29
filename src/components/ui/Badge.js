import React from 'react';


export const Badge = ({ children, className = "" }) => {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40 ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
        {children}
      </span>
    </div>
  );
};