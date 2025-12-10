import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang Chủ', href: '#' },
    { name: 'Gói Chụp', href: '#pricing' },
    { name: 'Ưu Đãi', href: '#offer' },
    { name: 'Địa Điểm', href: '#locations' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group z-50 relative">
          <div className={`p-2 rounded-full border-2 transition-colors duration-300 ${
            isScrolled 
              ? 'border-tetRed text-tetRed bg-red-50' 
              : 'border-white text-white bg-white/10 backdrop-blur-sm'
          }`}>
             <Camera size={20} />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-lg leading-none tracking-widest ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              THO NGUYEN
            </span>
            <span className={`text-[10px] font-sans tracking-[0.2em] font-bold uppercase ${
              isScrolled ? 'text-tetRed' : 'text-tetGold'
            }`}>
              Photography
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm uppercase tracking-wide hover:text-tetGold transition-colors relative group ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tetGold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="https://zalo.me/0986467014" 
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg ${
              isScrolled 
                ? 'bg-tetRed text-white hover:bg-tetRed-dark shadow-tetRed/30' 
                : 'bg-white text-tetRed hover:bg-gray-100 shadow-black/20'
            }`}
          >
            Đặt Lịch Ngay
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 relative z-50 transition-colors ${
            isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 transform ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
          <div className="flex flex-col items-center gap-8 text-center">
             {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-serif font-bold text-gray-800 hover:text-tetRed transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
             <div className="w-10 h-1 bg-tetGold rounded-full my-2"></div>
             <a 
                href="https://zalo.me/0986467014"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-tetRed text-white rounded-full font-bold text-lg shadow-xl shadow-tetRed/30 active:scale-95 transition-transform"
                onClick={() => setIsMenuOpen(false)}
             >
                Nhắn Zalo Tư Vấn
             </a>
          </div>
          
          {/* Decorative elements for mobile menu */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-tetRed via-tetGold to-tetRed"></div>
      </div>
    </header>
  );
};