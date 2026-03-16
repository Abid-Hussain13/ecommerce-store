import React, { useEffect } from 'react';
import { Product } from '../../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-center md:justify-end transition-opacity duration-300">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-darkinner h-full md:h-full shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-in-out translate-x-0 mt-20 md:mt-0 rounded-t-3xl md:rounded-none">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gold hover:scale-110 transition-transform z-10 p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>

        <div className="p-6 md:p-8 pt-16 md:pt-20">
          <div className="aspect-[3/4] overflow-hidden mb-6 md:mb-8 bg-darkbg">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <span className="font-cormorant text-gold uppercase tracking-[0.2em] text-xs md:text-sm">
                {product.brand}
              </span>
              <h2 className="font-playfair text-2xl md:text-3xl mt-1 md:mt-2 italic text-cream">
                {product.name}
              </h2>
            </div>

            <div className="h-[1px] w-full bg-gold/20" />

            <p className="text-cream/70 leading-relaxed font-light text-sm md:text-base">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 md:px-3 md:py-1 border border-gold/30 rounded-full text-[8px] md:text-[10px] uppercase tracking-widest text-gold">Authentic</span>
              <span className="px-2 py-1 md:px-3 md:py-1 border border-gold/30 rounded-full text-[8px] md:text-[10px] uppercase tracking-widest text-gold">Premium</span>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 pt-4 pb-8">
              <a 
                href="https://wa.me/920000000000" 
                target="_blank"
                rel="noreferrer"
                className="btn-gold text-center !py-3 !text-xs"
              >
                Order via WhatsApp
              </a>
              <a 
                href="https://instagram.com/luxury_fashion" 
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-center !py-3 !text-xs"
              >
                Order via Instagram
              </a>
            </div>
            
            <p className="text-[9px] md:text-[10px] text-cream/40 uppercase tracking-widest text-center mt-4">
              Free delivery in Bahawalpur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
