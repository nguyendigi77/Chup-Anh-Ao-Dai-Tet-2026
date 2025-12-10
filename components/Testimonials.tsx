import React from 'react';
import { Quote } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Testimonial } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

const reviews: Testimonial[] = [
  {
    content: "Ảnh lên màu đẹp – dáng được hướng dẫn rất dễ hiểu – ekip siêu vui tính! Mình rất ngại chụp hình mà chụp xong thấy tự tin hẳn.",
    author: "Bạn Lan Anh (TP. HCM)"
  },
  {
    content: "File giao cực nhanh, album Tết năm nay quá xịn luôn! Giá này mà chất lượng vầy là quá hời.",
    author: "Cặp đôi Minh & Thư"
  },
  {
    content: "Nhóm mình 5 người mà nhiếp cân hết, không ai bị ‘lạc quẻ’ trong khung hình! Sẽ giới thiệu bạn bè.",
    author: "Nhóm Bạn Thân (Quy Nhơn)"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <SectionTitle title="Khách Hàng Nói Gì?" subtitle="Review Thực Tế" centered />
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <RevealOnScroll key={idx} delay={idx * 200}>
              <div className="bg-stone-50 p-8 rounded-2xl relative border border-stone-100 hover:shadow-xl hover:border-tetGold/30 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                <Quote className="absolute top-6 left-6 text-tetRed/20 w-10 h-10 rotate-180" />
                <p className="text-gray-700 italic mb-6 relative z-10 pt-6 flex-grow">"{review.content}"</p>
                <div className="flex items-center gap-3 mt-auto border-t border-gray-200 pt-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                     <img src={`https://picsum.photos/100/100?random=${idx + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h5 className="font-bold text-sm text-gray-900">{review.author}</h5>
                     <div className="flex text-yellow-400">
                       {[1,2,3,4,5].map(i => <span key={i} className="text-xs">★</span>)}
                     </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};