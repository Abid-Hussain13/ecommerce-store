import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const HeroSection: React.FC = () => {
  const addToReveal = useScrollReveal();

  return (
    <section className="relative min-h-[600px] h-[85vh] md:h-screen w-full overflow-hidden flex flex-col md:flex-row bg-darkbg">
      {/* Navbar Safety Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-40 bg-gradient-to-b from-black/80 to-transparent z-[20] pointer-events-none" />

      {/* Image: Top on mobile, Left on desktop */}
      <div className="relative w-full md:w-[55%] h-[45%] md:h-full overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80" 
          alt="Luxury Fashion Editorial" 
          className="w-full h-full object-cover scale-105"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1400&q=80';
          }}
        />
        <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gold/20 z-20 hidden md:block" />
      </div>

      {/* Content: Bottom on mobile, Right on desktop */}
      <div className="w-full md:w-[45%] h-[55%] md:h-full flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-24 bg-darkbg relative border-t md:border-t-0 md:border-l border-gold/10 py-10 md:py-0 pt-20 md:pt-32">
        <div className="max-w-md" ref={addToReveal}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] leading-[0.9] font-playfair italic text-cream mb-6 md:mb-8 reveal">
            Wear <br />
            <span className="text-gold">What They</span> <br />
            Covet.
          </h1>
          
          <div className="w-16 md:w-24 h-[1px] bg-gold mb-6 md:mb-8 reveal" />
          
          <p className="font-dm text-cream/60 tracking-widestest text-[9px] md:text-[10px] uppercase mb-8 md:mb-12 max-w-xs leading-loose reveal">
            Curated authentic designer luxury from the world's most iconic fashion houses.
          </p>
          
          <div className="flex reveal">
            <Link to="/shop" className="btn-gold text-center !px-10 !py-3 text-xs">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Decorative corner element - smaller on mobile */}
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 reveal">
          <span className="font-cormorant italic text-gold/10 text-5xl md:text-8xl select-none">Est. 2024</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
