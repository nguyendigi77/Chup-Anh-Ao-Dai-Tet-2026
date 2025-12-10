import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Location } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

const locations: Location[] = [
  {
    id: 'hcm',
    name: 'TP. Hồ Chí Minh',
    spots: [
      'Phố ông đồ - Nhà Văn Hóa Thanh Niên',
      'Đường Hoa Nguyễn Huệ',
      'Chợ Lớn – Concept Tết truyền thống',
      'Studio Tết setup background Đỏ – Vàng',
      'Công viên – Bến Bạch Đằng – Góc phố Vintage'
    ]
  },
  {
    id: 'quynhon',
    name: 'TP. Quy Nhơn',
    spots: [
      'Quảng trường Nguyễn Tất Thành',
      'Khu phố Tết – Đường hoa Xuân',
      'Cổng chào – Dãy phố Vintage Quy Nhơn',
      'Studio Tết tone Đỏ – Vàng – Gỗ nâu',
      'Chụp biển concept Áo dài cách tân độc đáo'
    ]
  }
];

export const Locations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('hcm');

  const activeLoc = locations.find(l => l.id === activeTab);

  return (
    <section id="locations" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <SectionTitle title="Khu Vực Chụp Ảnh" subtitle="Địa điểm hot nhất" />
        </RevealOnScroll>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Tabs / Selectors */}
          <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4">
            {locations.map((loc, idx) => (
              <RevealOnScroll key={loc.id} delay={idx * 100}>
                <button
                  onClick={() => setActiveTab(loc.id)}
                  className={`flex-1 p-6 rounded-2xl text-left transition-all border-2 flex items-center justify-between group w-full ${
                    activeTab === loc.id
                      ? 'border-tetRed bg-red-50 shadow-md transform scale-105'
                      : 'border-gray-100 bg-white hover:border-red-100 hover:bg-gray-50'
                  }`}
                >
                  <div>
                    <h3 className={`text-xl font-bold mb-1 ${activeTab === loc.id ? 'text-tetRed' : 'text-gray-700'}`}>
                      {loc.name}
                    </h3>
                    <span className="text-sm text-gray-500">{loc.spots.length} địa điểm gợi ý</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === loc.id ? 'bg-tetRed text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-red-100 group-hover:text-red-500'}`}>
                    <MapPin size={16} />
                  </div>
                </button>
              </RevealOnScroll>
            ))}
            
            {/* Image Placeholder specific to selection with ZOOM Effect */}
             <RevealOnScroll delay={300} className="hidden md:block">
               <div className="mt-4 rounded-2xl overflow-hidden aspect-[4/3] relative group shadow-lg">
                   <img 
                      src={activeTab === 'hcm' ? "https://picsum.photos/600/800?random=1" : "https://picsum.photos/600/800?random=2"} 
                      alt="Location Preview" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-serif italic text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          {activeTab === 'hcm' ? "Nét đẹp Sài Gòn xưa & nay" : "Nắng gió biển Quy Nhơn"}
                      </p>
                   </div>
               </div>
             </RevealOnScroll>
          </div>

          {/* List of Spots */}
          <div className="w-full md:w-2/3">
            <RevealOnScroll delay={200}>
              <div className="bg-cream rounded-3xl p-8 border border-gray-100 relative overflow-hidden shadow-xl">
                 <div className="absolute -right-10 -top-10 text-9xl text-black/5 font-serif font-bold pointer-events-none select-none">
                    {activeTab === 'hcm' ? 'HCM' : 'QN'}
                 </div>

                 <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 relative z-10 flex items-center gap-2">
                    <MapPin className="text-tetRed" /> 
                    Các điểm chụp tại {activeLoc?.name}
                 </h3>

                 <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                    {activeLoc?.spots.map((spot, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-orange-100/50 hover:shadow-md hover:border-tetGold/50 transition-all cursor-default group">
                         <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-tetRed group-hover:text-white transition-colors">
                            {index + 1}
                         </span>
                         <p className="text-gray-700 font-medium pt-1 group-hover:text-black">{spot}</p>
                      </div>
                    ))}
                 </div>
                 
                 <div className="mt-8 p-4 bg-tetRed/5 rounded-xl border border-tetRed/10 relative z-10">
                    <p className="text-tetRed-dark text-sm text-center italic">
                       *Bạn có thể đề xuất địa điểm mong muốn khác, ekip sẽ hỗ trợ khảo sát!
                    </p>
                 </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};