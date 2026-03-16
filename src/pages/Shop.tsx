import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard, QuickViewModal, SectionReveal } from '../components/ui';
import { Product, Category } from '../types';

const categories: Category[] = ['sunglasses', 'bags', 'shoes', 'watches', 'perfumes', 'jewelry'];
const brands = ['Dior', 'Louis Vuitton', 'Gucci', 'Rado', 'MFK', 'Emporio Armani', 'Cartier-Style', 'Zara'];

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const selectedCategories = useMemo(() => searchParams.getAll('category'), [searchParams]);
  const selectedBrands = useMemo(() => searchParams.getAll('brand'), [searchParams]);

  const toggleFilter = (type: 'category' | 'brand', value: string) => {
    const current = searchParams.getAll(type);
    if (current.includes(value)) {
      const next = current.filter(v => v !== value);
      searchParams.delete(type);
      next.forEach(v => searchParams.append(type, v));
    } else {
      searchParams.append(type, value);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const catMatch = selectedCategories.length === 0 || 
                       selectedCategories.some(c => c.toLowerCase() === p.category.toLowerCase());
      const brandMatch = selectedBrands.length === 0 || 
                         selectedBrands.some(b => b.toLowerCase() === p.brand.toLowerCase());
      return catMatch && brandMatch;
    });
  }, [selectedCategories, selectedBrands]);

  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 bg-darkbg min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <SectionReveal className="mb-12" showLine={false}>
          <h1 className="text-6xl font-playfair italic text-cream">Shop <span className="text-gold">Collection</span></h1>
          <p className="text-cream/50 mt-4 tracking-widest text-xs uppercase font-light">
            {filteredProducts.length} exquisite pieces available
          </p>
        </SectionReveal>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden btn-ghost w-full flex justify-between items-center"
          >
            Filters
            <span>{isFilterOpen ? '-' : '+'}</span>
          </button>

          {/* Sidebar */}
          <aside className={`lg:w-64 space-y-12 shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            {/* Categories */}
            <div className="space-y-6">
              <h3 className="font-dm uppercase text-xs tracking-widestest text-gold border-b border-gold/10 pb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleFilter('category', cat)}
                    />
                    <div className={`w-4 h-4 border border-gold/30 flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-gold' : 'bg-transparent'}`}>
                      {selectedCategories.includes(cat) && (
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3L3 5L7 1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm font-light uppercase tracking-widest transition-colors ${selectedCategories.includes(cat) ? 'text-gold' : 'text-cream/60 group-hover:text-cream'}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="space-y-6">
              <h3 className="font-dm uppercase text-xs tracking-widestest text-gold border-b border-gold/10 pb-4">Brands</h3>
              <div className="space-y-3">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleFilter('brand', brand)}
                    />
                    <div className={`w-4 h-4 border border-gold/30 flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-gold' : 'bg-transparent'}`}>
                      {selectedBrands.includes(brand) && (
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3L3 5L7 1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm font-light uppercase tracking-widest transition-colors ${selectedBrands.includes(brand) ? 'text-gold' : 'text-cream/60 group-hover:text-cream'}`}>
                      {brand}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
              <button 
                onClick={clearFilters}
                className="text-gold text-[10px] uppercase tracking-widestest underline underline-offset-4 hover:text-cream transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <SectionReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 revealed-mobile" showLine={false}>
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index} 
                    onQuickView={setSelectedProduct}
                  />
                ))}
              </SectionReveal>
            ) : (
              <div className="py-32 text-center border border-gold/10 bg-darkinner">
                <p className="font-playfair italic text-2xl text-cream/40">No pieces match your selection.</p>
                <button 
                  onClick={clearFilters}
                  className="mt-6 btn-ghost"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </main>
  );
};

export default Shop;
