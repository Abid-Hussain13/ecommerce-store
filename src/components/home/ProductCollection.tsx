import React, { useState } from 'react';
import { products } from '../../data/products';
import { ProductCard, QuickViewModal, SectionReveal } from '../ui';
import { Product } from '../../types';

const ProductCollection: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 lg:px-12 bg-darkbg overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 md:mb-24">
          <SectionReveal className="lg:w-1/2" showLine={true}>
            <span className="text-gold text-[10px] uppercase tracking-widestest mb-3 block">Exclusives</span>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-playfair italic text-cream leading-[0.8]">
              The <br />
              <span className="text-gold">Art of</span> <br />
              Style.
            </h2>
          </SectionReveal>
          
          <div className="lg:w-1/3 mt-6 lg:mt-0">
             <p className="text-cream/40 font-light leading-relaxed text-xs md:text-base border-l border-gold/20 pl-6 md:pl-8">
               Our curated selection represents the pinnacle of luxury, featuring hand-picked masterpieces that define contemporary elegance.
             </p>
          </div>
        </div>

        {/* Responsive Layout: 2 columns on mobile, unique asymmetric on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-y-24 md:gap-x-12 lg:gap-x-20">
          
          {/* Item 1 */}
          <div className="col-span-1 md:col-span-7 lg:col-span-6">
            {featuredProducts[0] && (
              <ProductCard product={featuredProducts[0]} index={0} onQuickView={setSelectedProduct} />
            )}
          </div>

          {/* Item 2 */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 md:mt-32">
            {featuredProducts[1] && (
              <ProductCard product={featuredProducts[1]} index={1} onQuickView={setSelectedProduct} />
            )}
          </div>

          {/* Item 3 */}
          <div className="col-span-1 md:col-span-5 md:col-start-2 lg:col-span-5 lg:col-start-2 md:-mt-12">
            {featuredProducts[2] && (
              <ProductCard product={featuredProducts[2]} index={2} onQuickView={setSelectedProduct} />
            )}
          </div>

          {/* Item 4 */}
          <div className="col-span-1 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8 md:-mt-48">
            {featuredProducts[3] && (
              <ProductCard product={featuredProducts[3]} index={3} onQuickView={setSelectedProduct} />
            )}
          </div>

          {/* Item 5 */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 md:mt-12">
            {featuredProducts[4] && (
              <ProductCard product={featuredProducts[4]} index={4} onQuickView={setSelectedProduct} />
            )}
          </div>

          {/* Item 6 */}
          <div className="col-span-1 md:col-span-7 lg:col-span-6 md:-mt-24">
            {featuredProducts[5] && (
              <ProductCard product={featuredProducts[5]} index={5} onQuickView={setSelectedProduct} />
            )}
          </div>
        </div>
      </div>

      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default ProductCollection;
