import React from 'react';
import { CheckCircle2, Gift, Star } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { PackageItem } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

const benefits: PackageItem[] = [
  { text: "Toàn bộ file gốc – giao đầy đủ ngay sau buổi chụp." },
  { text: "15 ảnh chỉnh màu & retouch da đẹp lung linh.", highlight: true },
  { text: "Hỗ trợ chỉnh thêm +20 ảnh nếu set đẹp & đủ bố cục." },
  { text: "Tư vấn concept, bối cảnh & trang phục từ A–Z." },
  { text: "Hướng dẫn pose dáng cực chi tiết, không lo bị đơ." },
  { text: "Phù hợp: Cá nhân / Couple / Nhóm 3–5 người / Gia đình." },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-cream relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-tetRed-dark/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <SectionTitle 
            title="Gói Chụp Tết 2026" 
            subtitle="Chất lượng & Tiết kiệm"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-tetGold/20 flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-500">
            {/* Left Side: Visual/Price */}
            <div className="md:w-2/5 bg-tetRed text-white p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 ornament-pattern opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                <h3 className="text-2xl font-serif mb-2">Trọn Gói Chỉ</h3>
                <div className="text-5xl font-bold text-tetGold mb-2 drop-shadow-md">1.200k</div>
                <p className="text-sm opacity-90 mb-6">VNĐ / Gói chụp</p>
                
                <div className="w-16 h-1 bg-white/30 rounded mx-auto mb-6"></div>
                
                <p className="text-sm mb-4 italic">Giữ lịch không cần cọc</p>
                <div className="flex items-center justify-center gap-2 text-xs bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  <Star className="w-3 h-3 text-tetGold" fill="currentColor" />
                  <span>Giá chưa bao gồm makeup & phụ kiện</span>
                </div>
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-6 h-6 text-tetRed animate-bounce" />
                <h3 className="text-xl font-bold text-gray-800">Quyền Lợi Của Bạn</h3>
              </div>
              
              <ul className="space-y-4">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${item.highlight ? 'text-tetRed' : 'text-gray-400 group-hover:text-tetGold'}`} />
                    <span className={`${item.highlight ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                 <p className="text-gray-500 text-sm mb-4">
                   <span className="font-bold text-tetRed">*Địa điểm:</span> Outdoor, Phố ông đồ, Công viên, Studio Tết...
                 </p>
                 <a 
                   href="https://zalo.me/0986467014" 
                   target="_blank"
                   rel="noreferrer"
                   className="block w-full py-3 bg-tetRed hover:bg-tetRed-dark text-white text-center font-bold rounded-xl transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
                 >
                   Đặt Lịch Ngay: 0986 467 014
                 </a>
                 <p className="text-center text-xs text-gray-400 mt-2">Lịch Tết thường kín nhanh, bạn nên đặt sớm!</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};