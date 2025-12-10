import React, { useState, useRef } from 'react';
import { Pause, Play, Music2 } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Link nhạc Demo (Bạn có thể thay thế bằng link mp3 nhạc Tết khác)
  // Sử dụng nhạc không bản quyền vui tươi cho không khí Tết
  const musicUrl = "https://dinhtho.com.vn/wp-content/uploads/2025/12/nhac-tet-tui-2026.mp3"; 

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Playback failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-center">
      <audio ref={audioRef} src={musicUrl} loop />

      {/* Animation Notes (Only visible when playing) */}
      {isPlaying && (
        <div className="absolute bottom-10 right-0 pointer-events-none w-12 h-20 overflow-visible">
          <div className="absolute animate-float-note text-tetRed font-bold text-xl" style={{ right: '10%', animationDelay: '0s' }}>♪</div>
          <div className="absolute animate-float-note text-tetGold font-bold text-lg" style={{ right: '50%', animationDelay: '0.6s' }}>♫</div>
          <div className="absolute animate-float-note text-tetRed font-bold text-xl" style={{ right: '20%', animationDelay: '1.2s' }}>♩</div>
        </div>
      )}

      <button
        onClick={togglePlay}
        className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isPlaying 
            ? 'bg-white border-tetRed text-tetRed' 
            : 'bg-white/90 backdrop-blur-sm border-gray-200 text-gray-600 hover:text-tetRed hover:border-tetRed'
        }`}
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc nền"}
      >
        {/* Spinning border effect when playing */}
        {isPlaying && (
           <div className="absolute inset-[-4px] rounded-full border border-dashed border-tetGold/60 animate-spin-slow pointer-events-none"></div>
        )}
        
        {isPlaying ? (
          <Pause size={20} fill="currentColor" />
        ) : (
          <Play size={20} fill="currentColor" className="ml-1" />
        )}
      </button>

      {/* Tooltip hint initially */}
      {!isPlaying && (
         <span className="absolute right-14 top-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 animate-fade-in-out pointer-events-none">
            Bật nhạc Tết 🎵
         </span>
      )}

      <style>{`
        @keyframes float-note {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-50px) rotate(20deg); opacity: 0; }
        }
        .animate-float-note {
          animation: float-note 2s ease-out infinite;
          position: absolute;
          bottom: 0;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes fade-in-out {
            0%, 100% { opacity: 0; transform: translateX(5px); }
            20%, 80% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-out {
            animation: fade-in-out 4s ease-in-out infinite;
            animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};