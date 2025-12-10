import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-tetGold mb-6">
          Chụp Áo Dài Tết 2026
        </h2>
        <p className="text-xl md:text-2xl mb-8 font-light">
          "Chụp một lần – Đẹp lung linh cả mùa Tết."
        </p>

        <div className="max-w-md mx-auto bg-gray-800 rounded-2xl p-8 border border-gray-700">
           <h3 className="text-xl font-bold mb-4 text-white">Đặt Lịch Ngay Hôm Nay</h3>
           <div className="space-y-3 mb-6">
              <p className="flex items-center justify-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Trọn gói chỉ 1.200.000đ
              </p>
              <p className="flex items-center justify-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Giữ lịch tặng ngay gói in Ảnh
              </p>
              <p className="flex items-center justify-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Số lượng giới hạn
              </p>
           </div>
           
           <a 
             href="https://zalo.me/0986467014" 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center justify-center gap-2 w-full py-4 bg-tetGold hover:bg-tetGold-dark text-gray-900 font-bold rounded-xl transition-all"
           >
             <Phone size={20} />
             Nhắn Zalo: 0986 467 014
           </a>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          <p>© 2026 Photography Service. TP. Hồ Chí Minh & TP. Quy Nhơn.</p>
        </div>
      </div>
    </footer>
  );
};