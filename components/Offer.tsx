import React from 'react';
import { Sparkles, Video, Aperture } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="bg-gradient-to-r from-tetRed-dark to-tetRed rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
            {/* Confetti Effect */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20" style={{backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tetGold blur-[60px] opacity-40 animate-pulse"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2 text-center md:text-left">
                <div className="inline-block bg-white text-tetRed font-bold px-4 py-1 rounded-full text-sm mb-4 animate-pulse shadow-lg">
                  HẠN CHÓT 31/12/2025
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 drop-shadow-md">Ưu Đãi Đặt Lịch Sớm</h2>
                <p className="text-lg opacity-90 mb-6">Đăng ký ngay hôm nay để nhận trọn bộ quà tặng độc quyền.</p>
              </div>

              <div className="md:w-1/2 w-full">
                <div className="space-y-4">
                  <RevealOnScroll delay={200}>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 border border-white/20 hover:bg-white/20 transition-colors">
                      <div className="w-12 h-12 bg-white text-tetRed rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                        -100k
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-tetGold">Giảm trực tiếp 100.000đ</h4>
                        <p className="text-sm text-gray-200">Áp dụng cho nhóm từ 3–5 người.</p>
                      </div>
                    </div>
                  </RevealOnScroll>

                  <RevealOnScroll delay={300}>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 border border-white/20 hover:bg-white/20 transition-colors">
                       <div className="w-12 h-12 bg-white text-tetRed rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                         <Video size={20} />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg text-tetGold">Tặng Video Short 10-15s</h4>
                         <p className="text-sm text-gray-200">Quay bằng điện thoại/máy ảnh tùy set chụp.</p>
                       </div>
                    </div>
                  </RevealOnScroll>

                  <RevealOnScroll delay={400}>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 border border-white/20 hover:bg-white/20 transition-colors">
                       <div className="w-12 h-12 bg-white text-tetRed rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                         <Aperture size={20} />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg text-tetGold">Tặng Preset Màu Tết</h4>
                         <p className="text-sm text-gray-200">Để bạn tự chỉnh ảnh selfie theo tone album.</p>
                       </div>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};