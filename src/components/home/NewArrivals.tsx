import React, { useState } from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import SectionReveal from '../ui/SectionReveal';
import QuickViewModal from '../ui/QuickViewModal';
import { Product } from '../../types';

const NewArrivals: React.FC = () => {
  const newProducts = products.filter(p => p.isNew).slice(0, 8);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-darkinner relative overflow-hidden">
      {/* Giant background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="text-[150px] sm:text-[300px] lg:text-[500px] font-playfair italic text-gold/5 leading-none">
          New
        </span>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <SectionReveal className="mb-10 md:mb-16">
          <h2 className="text-4xl lg:text-7xl font-playfair italic text-cream">
            Latest <span className="text-gold italic">Desires</span>
          </h2>
          <p className="text-cream/50 mt-3 max-w-lg font-light tracking-widest text-[10px] uppercase">
            The freshest pieces from the world's fashion capitals.
          </p>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12" showLine={false}>
          {newProducts.map((product, index) => (
            <div key={product.id}>
              <ProductCard 
                product={product} 
                index={index} 
                onQuickView={setSelectedProduct}
              />
            </div>
          ))}
        </SectionReveal>
      </div>

      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default NewArrivals;
