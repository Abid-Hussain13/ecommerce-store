import React from 'react';
import SectionReveal from '../ui/SectionReveal';

const BrandStory: React.FC = () => {
  return (
    <section className="relative py-16 md:py-32 bg-darkbg overflow-hidden border-y border-gold/10">
      {/* Noise Texture */}
      <div className="absolute inset-0 noise-texture opacity-[0.03]" />
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
        <SectionReveal className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <div className="relative inline-block">
            <span className="text-[80px] md:text-[180px] font-playfair italic text-gold leading-none">100%</span>
            <div className="absolute -bottom-2 md:-bottom-4 right-0 font-dm uppercase tracking-widestest text-[10px] md:text-sm text-cream/50">
              Guaranteed
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="w-full lg:w-2/3" showLine={false}>
          <h2 className="text-2xl md:text-5xl font-playfair italic text-cream mb-6 md:mb-8 leading-tight">
            Our commitment to <span className="text-gold">Authenticity</span> is absolute. Every piece in our collection is meticulously verified.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <p className="text-cream/60 font-light leading-relaxed text-xs md:text-base">
              Based in Bahawalpur, Luxe Fashion began as a passion for high-end editorial style. We believe luxury should be accessible without compromising on the security of authenticity.
            </p>
            <p className="hidden md:block text-cream/60 font-light leading-relaxed text-xs md:text-base">
              From the iconic stitching of a Louis Vuitton trunk to the precision movement of a Rado timepiece, we celebrate the craftsmanship that makes these items timeless investments.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default BrandStory;
