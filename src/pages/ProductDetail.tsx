import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard, QuickViewModal, SectionReveal } from '../components/ui';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      const related = products
        .filter(p => p.category === found.category && p.id !== found.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-darkbg">
        <p className="font-playfair italic text-cream/40">Product not found...</p>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 bg-darkbg min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          {/* Image */}
          <SectionReveal className="w-full lg:w-1/2" showLine={false}>
            <div className="aspect-[3/4] overflow-hidden bg-darkinner border border-gold/10">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </SectionReveal>

          {/* Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <SectionReveal showLine={false}>
              <span className="font-cormorant text-gold uppercase tracking-[0.3em] text-sm lg:text-base">
                {product.brand}
              </span>
              <h1 className="font-playfair text-5xl lg:text-7xl italic text-cream mt-4 mb-8">
                {product.name}
              </h1>
              
              <div className="w-full h-[1px] bg-gold/20 mb-8" />
              
              <p className="text-cream/70 text-lg font-light leading-relaxed mb-12">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <span className="px-4 py-2 bg-darkinner border border-gold/20 text-gold text-[10px] uppercase tracking-widestest">Authentic</span>
                <span className="px-4 py-2 bg-darkinner border border-gold/20 text-gold text-[10px] uppercase tracking-widestest">Premium Quality</span>
                <span className="px-4 py-2 bg-darkinner border border-gold/20 text-gold text-[10px] uppercase tracking-widestest">Imported</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={`https://wa.me/920000000000?text=I am interested in ${product.name}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-gold flex-1 text-center"
                >
                  Order via WhatsApp
                </a>
                <a 
                  href="https://instagram.com/luxury_fashion" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-ghost flex-1 text-center"
                >
                  Order via Instagram
                </a>
              </div>

              <p className="mt-8 text-[11px] text-cream/40 uppercase tracking-widest font-light">
                Free delivery in Bahawalpur · Pakistan-wide shipping available · 24/7 Support
              </p>
            </SectionReveal>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <SectionReveal className="mb-12" showLine={false}>
              <h2 className="text-4xl font-playfair italic text-cream">
                You May <span className="text-gold">Also Like</span>
              </h2>
            </SectionReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p, index) => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  index={index} 
                  onQuickView={setSelectedProduct}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </main>
  );
};

export default ProductDetail;
