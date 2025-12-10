import React from 'react';
import { Heart, Image, Share2, SmilePlus, Gift } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { RevealOnScroll } from './RevealOnScroll';

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <SectionTitle title="Vì Sao Nên Chọn Chụp Tết 2026?" subtitle="Giá trị bạn nhận được" />
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid gap-6">
             <RevealOnScroll delay={100}>
               <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-tetRed flex-shrink-0 group-hover:bg-tetRed group-hover:text-white transition-colors duration-300">
                    <Heart />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Lưu giữ khoảnh khắc</h4>
                    <p className="text-gray-600 text-sm">Bộ ảnh rực rỡ đầu năm, lưu giữ thanh xuân tươi đẹp.</p>
                  </div>
               </div>
             </RevealOnScroll>

             <RevealOnScroll delay={200}>
               <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-tetRed flex-shrink-0 group-hover:bg-tetRed group-hover:text-white transition-colors duration-300">
                    <Share2 />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Đăng MXH cực chỉn chu</h4>
                    <p className="text-gray-600 text-sm">Có ảnh đẹp đăng Facebook, TikTok, Instagram để "flex" Tết này.</p>
                  </div>
               </div>
             </RevealOnScroll>

             <RevealOnScroll delay={300}>
               <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-tetRed flex-shrink-0 group-hover:bg-tetRed group-hover:text-white transition-colors duration-300">
                    <Gift />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Quà tặng ý nghĩa</h4>
                    <p className="text-gray-600 text-sm">Món quà tinh thần tuyệt vời cho ba mẹ, người yêu và bạn bè.</p>
                  </div>
               </div>
             </RevealOnScroll>

             <RevealOnScroll delay={400}>
               <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-tetRed flex-shrink-0 group-hover:bg-tetRed group-hover:text-white transition-colors duration-300">
                    <SmilePlus />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Trải nghiệm vui vẻ</h4>
                    <p className="text-gray-600 text-sm">Buổi chụp thoải mái, không gượng gạo, nhiếp ảnh siêu hòa đồng.</p>
                  </div>
               </div>
             </RevealOnScroll>
          </div>

          <RevealOnScroll delay={300}>
            <div className="relative group">
               <div className="absolute inset-0 bg-tetGold transform rotate-6 rounded-3xl opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
               <div className="relative rounded-3xl shadow-2xl w-full aspect-square overflow-hidden border-4 border-white">
                 <img 
                   src="https://picsum.photos/600/600?random=3" 
                   alt="Happy Customer" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-tetRed animate-bounce-subtle">
                 <div className="flex items-center gap-1 mb-1">
                   {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                 </div>
                 <p className="text-xs font-bold text-gray-800">"Ảnh sang - xịn - mịn"</p>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);