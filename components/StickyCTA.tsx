import React from 'react';
import { Phone } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://zalo.me/0986467014"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 animate-bounce-subtle"
      >
        <span className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-serif font-black text-xs">
           Zalo
        </span>
        <span className="hidden sm:inline">Tư vấn ngay</span>
        <span>0986 467 014</span>
      </a>
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite;
        }
      `}</style>
    </div>
  );
};