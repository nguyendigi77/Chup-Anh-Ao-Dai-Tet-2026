import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, centered = true, light = false }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className={`uppercase tracking-widest text-sm font-bold mb-2 block ${light ? 'text-tetGold-light' : 'text-tetRed'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold relative inline-block pb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 rounded-full ${light ? 'bg-tetGold' : 'bg-tetRed'}`}></span>
      </h2>
    </div>
  );
};