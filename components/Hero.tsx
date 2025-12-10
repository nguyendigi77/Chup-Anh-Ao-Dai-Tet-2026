import React from 'react';
import { Camera, MapPin, Calendar } from 'lucide-react';
import { ImageCarousel } from './ImageCarousel';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-tetRed-dark overflow-hidden text-white pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10 animate-pulse">
        <img 
          src="https://dinhtho.com.vn/wp-content/uploads/2025/12/cho-ben-thanh-ao-dai.jpg" 
          alt="Ao Dai Tet Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tetGold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <RevealOnScroll>
              <div className="inline-block border border-tetGold/50 rounded-full px-4 py-1 mb-6 bg-black/20 backdrop-blur-sm hover:scale-105 transition-transform cursor-default">
                <span className="text-tetGold font-semibold text-sm tracking-wider uppercase">🎉 Chào Xuân 2026</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Chụp Ảnh Áo Dài <br />
                <span className="text-tetGold italic">Tết 2026</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
                Giữ trọn khoảnh khắc thanh xuân rực rỡ tại <span className="font-bold text-white">Sài Gòn</span> & <span className="font-bold text-white">Quy Nhơn</span>.
                <br className="hidden md:block"/>
                Nhiếp ảnh vui tính – Hướng dẫn tận tâm – Màu ảnh hiện đại.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                  <Camera className="text-tetGold w-4 h-4 md:w-5 md:h-5" />
                  <span>Concept Chuẩn Tết</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                  <MapPin className="text-tetGold w-4 h-4 md:w-5 md:h-5" />
                  <span>SG & Quy Nhơn</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#pricing" className="px-8 py-4 bg-tetGold hover:bg-tetGold-dark text-tetRed-dark font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-tetGold/30 hover:shadow-tetGold/50">
                  Xem Gói Chụp
                </a>
                <a href="https://zalo.me/0986467014" target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-tetRed-dark font-bold rounded-full transition-all hover:scale-105">
                  Tư Vấn Zalo Ngay
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="order-1 md:order-2 flex justify-center w-full">
             <div className="w-full max-w-sm animate-fade-in-up">
                <ImageCarousel />
             </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};