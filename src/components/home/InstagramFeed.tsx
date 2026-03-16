import React from 'react';
import SectionReveal from '../ui/SectionReveal';

// High quality luxury fashion IDs
const instaImages = [
  '1539103356333-d897f74472b0', // Fashion
  '1483985988311-c1f9a0998f9a', // Bags
  '1558618657-6efc6a67c033', // Editorial
  '1512436991444-63d6891db0ef', // Watch
  '1469334524256-4215950c0571', // Jewelry
  '1503252207-6a4d79d40900'  // Editorial
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-darkbg overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <SectionReveal className="text-center mb-10 md:mb-16" showLine={false}>
          <h2 className="text-3xl md:text-6xl font-playfair italic text-cream mb-4">Follow Our Journey</h2>
          <a 
            href="https://instagram.com/luxury_fashion" 
            target="_blank" 
            rel="noreferrer"
            className="text-gold font-dm tracking-widestest uppercase text-[10px] md:text-xs hover:opacity-70 transition-opacity"
          >
            @luxury_fashion_pk
          </a>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4" showLine={false}>
          {instaImages.map((id, index) => (
            <div 
              key={id} 
              className="aspect-square overflow-hidden bg-darkinner reveal"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img 
                src={`https://images.unsplash.com/photo-${id}?w=400&q=70`} 
                alt="Instagram Feed" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&q=70';
                }}
              />
            </div>
          ))}
        </SectionReveal>

        <div className="mt-10 md:mt-16 text-center">
          <a 
            href="https://instagram.com/luxury_fashion" 
            target="_blank" 
            rel="noreferrer"
            className="btn-ghost inline-block !px-6 !py-3 !text-[10px]"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
