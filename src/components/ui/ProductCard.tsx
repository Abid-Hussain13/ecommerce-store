import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ProductCardProps {
  product: Product;
  index: number;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onQuickView }) => {
  const addToReveal = useScrollReveal();

  return (
    <div 
      ref={addToReveal}
      className="group relative bg-darkinner overflow-hidden reveal transition-all duration-500 ease-out"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {product.isNew && (
        <span className="absolute top-3 left-3 md:top-4 md:left-4 z-10 bg-gold text-darkbg text-[8px] md:text-[10px] uppercase font-bold px-1.5 py-0.5 md:px-2 md:py-1 tracking-tighter">
          New
        </span>
      )}

      {/* Image Container with Gold Border on Hover */}
      <div className="aspect-[4/5] overflow-hidden relative border border-transparent transition-all duration-500 group-hover:border-gold/30 bg-darkbg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1542272206-415505af9971?w=600&q=80';
          }}
        />
        
        {/* Hover Overlay - Simplified for touch devices */}
        <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
            className="hidden md:block px-8 py-3 bg-gold text-darkbg font-dm uppercase text-[10px] tracking-widestest transform translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 hover:bg-cream hover:text-darkbg"
          >
            Quick View
          </button>
          
          {/* Mobile Quick View Trigger (visible on tap or just use standard navigation) */}
          <button 
             onClick={(e) => {
               e.preventDefault();
               onQuickView(product);
             }}
             className="md:hidden absolute bottom-0 left-0 w-full py-2 bg-gold/90 text-darkbg text-[8px] uppercase font-bold tracking-widestest"
          >
            Quick View
          </button>
        </div>
      </div>

      <Link to={`/shop/${product.id}`} className="block p-3 md:p-5 text-center">
        <span className="block font-cormorant text-gold text-[8px] md:text-[10px] uppercase tracking-widestest mb-1">
          {product.brand}
        </span>
        <h3 className="font-playfair text-sm md:text-lg text-cream tracking-wide group-hover:text-gold transition-colors duration-300 line-clamp-1">
          {product.name}
        </h3>
      </Link>
    </div>
  );
};

export default ProductCard;
