import React from 'react';
import { Link } from 'react-router-dom';
import { SectionReveal } from '../components/ui';

const About: React.FC = () => {
  return (
    <main className="bg-darkbg min-h-screen overflow-hidden">
      {/* Editorial Header */}
      <section className="pt-48 pb-24 px-6 lg:px-12 relative">
        <div className="absolute top-48 -left-12 lg:-left-24 select-none pointer-events-none">
          <h1 className="text-[120px] lg:text-[250px] font-playfair italic text-gold/5 leading-none whitespace-nowrap">
            Our Story
          </h1>
        </div>

        <div className="max-w-screen-2xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:items-end">
          <div className="lg:w-1/2">
            <h1 className="text-7xl lg:text-[120px] font-playfair italic text-cream leading-[0.85] mb-12">
              Our <br />
              <span className="text-gold italic">Story</span>
            </h1>
          </div>
          <div className="lg:w-1/2 lg:pb-8">
            <SectionReveal showLine={false} key="about-1">
              <p className="text-cream/70 text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                Founded in the heart of Pakistan, Luxe Fashion was born from a singular vision: to bridge the gap between global luxury fashion and the local connoisseur. We curate pieces that aren't just accessories, but statements of legacy and craftsmanship.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Full Width Image Strip */}
      <section className="h-[500px] w-full relative overflow-hidden my-24">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80" 
          alt="Luxury Workshop" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-12 bg-darkinner">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="reveal">
            <div className="w-12 h-[1px] bg-gold mb-6" />
            <h3 className="font-playfair italic text-3xl text-gold mb-6">Authenticity</h3>
            <p className="text-cream/60 font-light leading-relaxed">
              Every item is guaranteed 100% authentic. Our team of experts meticulously verifies every stitch, serial number, and hardware piece before it reaches you.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <div className="w-12 h-[1px] bg-gold mb-6" />
            <h3 className="font-playfair italic text-3xl text-gold mb-6">Premium Quality</h3>
            <p className="text-cream/60 font-light leading-relaxed">
              We source only the highest grade of luxury goods. From vintage classics to the latest runway releases, quality is our uncompromising standard.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <div className="w-12 h-[1px] bg-gold mb-6" />
            <h3 className="font-playfair italic text-3xl text-gold mb-6">Curated Selection</h3>
            <p className="text-cream/60 font-light leading-relaxed">
              Our collection is not just a catalog; it's a curated gallery of the world's most desired pieces from Dior, LV, Gucci, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 lg:px-12 text-center bg-darkbg border-t border-gold/10">
        <SectionReveal showLine={false} key="about-2">
          <h2 className="text-4xl lg:text-6xl font-playfair italic text-cream mb-12">Ready to define your style?</h2>
          <Link to="/shop" className="btn-gold">Explore the Collection</Link>
        </SectionReveal>
      </section>
    </main>
  );
};

export default About;
