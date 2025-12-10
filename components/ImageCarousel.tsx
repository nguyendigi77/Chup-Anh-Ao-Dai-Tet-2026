import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://picsum.photos/seed/tet2026v1/600/800",
  "https://picsum.photos/seed/tet2026v2/600/800",
  "https://picsum.photos/seed/tet2026v3/600/800",
  "https://picsum.photos/seed/tet2026v4/600/800",
];

export const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full mx-auto" style={{ aspectRatio: '3/4' }}>
      {/* Decorative Frame Elements - Positioned absolutely relative to the main container */}
      <div className="absolute inset-0 bg-tetGold/30 transform rotate-6 rounded-2xl blur-sm scale-95 z-0"></div>
      <div className="absolute inset-0 bg-tetRed/30 transform -rotate-3 rounded-2xl blur-sm scale-95 z-0"></div>

      {/* Main Image Container */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-tetGold shadow-2xl z-10 bg-gray-900">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Mẫu ảnh Tết ${index + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Fallback gradient/overlay in case image is slow to load */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </div>
        ))}

        {/* Gradient Overlay for Controls */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20"></div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-all z-30"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-all z-30"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                index === currentIndex ? 'bg-tetGold w-8' : 'bg-white/50 w-2 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative Badge */}
      <div className="absolute -top-4 -right-4 bg-tetRed text-white font-bold text-xs py-1 px-3 rounded-full shadow-lg border-2 border-white z-40 rotate-12">
        #Tet2026
      </div>
    </div>
  );
};