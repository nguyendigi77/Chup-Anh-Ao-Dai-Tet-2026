import React from 'react';
import { Camera, Smile, Users, User, Sun } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { RevealOnScroll } from './RevealOnScroll';

const poses = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Dáng Cá Nhân",
    desc: "Xoay nhẹ người, cười má lúm, nghiêng vai tạo đường nét thanh thoát."
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Tự Nhiên & Động",
    desc: "Bước chân tự nhiên, dáng tay che nắng, vuốt tóc, bắt khoảnh khắc chuyển động."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Tạo Dáng Nhóm",
    desc: "Bước đều, chạm ly cà phê, xếp dáng V-line, tạo mood 'best friend vibe'."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Phụ Kiện",
    desc: "Tương tác với hoa, bao lì xì, quạt Tết. Tay chạm nhẹ, mắt nhìn xa xăm."
  }
];

export const PosingGuide: React.FC = () => {
  return (
    <section className="py-20 bg-tetRed-dark text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <SectionTitle title="Không Biết Diễn? Đừng Lo!" subtitle="Hướng Dẫn Pose Dáng" light centered />
          
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-200">
             Nhiếp ảnh sẽ hướng dẫn bạn từ A-Z. Style ảnh Cinematic, Vintage hay Pastel Tết đều có thể chọn trước khi chụp.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {poses.map((pose, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group h-full hover:-translate-y-2">
                <div className="w-12 h-12 bg-tetGold rounded-full flex items-center justify-center text-tetRed-dark mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-tetGold/20">
                  {pose.icon}
                </div>
                <h4 className="text-xl font-bold font-serif mb-2 text-tetGold-light">{pose.title}</h4>
                <p className="text-gray-200 text-sm leading-relaxed">{pose.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={600}>
          <div className="mt-12 text-center">
              <span className="inline-block px-6 py-2 border border-white/30 rounded-full text-sm font-light tracking-wide hover:bg-white/10 transition-colors cursor-default">
                  📸 Hỗ trợ chỉnh dáng chi tiết từng ngón tay
              </span>
          </div>
        </RevealOnScroll>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-tetGold rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-8 border-tetGold rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};