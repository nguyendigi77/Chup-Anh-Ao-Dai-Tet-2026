import React from 'react';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Features } from './components/Features';
import { Locations } from './components/Locations';
import { PosingGuide } from './components/PosingGuide';
import { Testimonials } from './components/Testimonials';
import { Offer } from './components/Offer';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { Navbar } from './components/Navbar';
import { MusicPlayer } from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <div className="antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Pricing />
      <Features />
      <Offer />
      <Locations />
      <PosingGuide />
      <Testimonials />
      <Footer />
      <MusicPlayer />
      <StickyCTA />
    </div>
  );
};

export default App;