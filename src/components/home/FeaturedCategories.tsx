import React from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '../ui/SectionReveal';

const categories = [
  { name: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80', path: '/shop?category=sunglasses' },
  { name: 'Bags', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', path: '/shop?category=bags' },
  { name: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80', path: '/shop?category=shoes' },
  { name: 'Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80', path: '/shop?category=watches' },
  { name: 'Perfumes', image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80', path: '/shop?category=perfumes' },
  { name: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80', path: '/shop?category=jewelry' },
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-darkbg overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <SectionReveal className="mb-10 md:mb-16">
          <h2 className="text-4xl lg:text-7xl font-playfair italic text-cream">
            The <span className="text-gold">Collections</span>
          </h2>
          <p className="text-cream/50 mt-3 max-w-lg font-light tracking-widest text-[10px] uppercase">
            Meticulously curated categories featuring the world's most desired labels.
          </p>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8" showLine={false}>
          {categories.map((cat, index) => (
            <Link 
              key={cat.name} 
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden bg-darkinner transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&q=80';
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-700" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.1),transparent_70%)]" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-gold text-[8px] md:text-[10px] uppercase tracking-widestest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Browse</span>
                  <h3 className="font-playfair italic text-2xl md:text-5xl text-cream group-hover:text-gold transition-colors duration-300 mt-1 md:mt-2">
                    {cat.name}
                  </h3>
                </div>
                <div className="w-10 h-10 md:w-14 md:h-14 border border-gold/30 rounded-full flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-200 bg-darkbg/50 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" md:width="24" md:height="24" fill="none" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-[-45deg]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] md:border-t-[60px] border-l-[40px] md:border-l-[60px] border-t-gold/10 border-l-transparent transition-all duration-500 group-hover:border-t-gold/30" />
            </Link>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
};

export default FeaturedCategories;
