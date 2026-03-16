import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkbg pt-16 md:pt-24 pb-8 px-6 lg:px-12 border-t border-gold/10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand - Span 2 columns on mobile */}
        <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
          <Link to="/">
            <span className="font-playfair italic text-2xl md:text-3xl text-cream tracking-tight">
              Luxe<span className="text-gold italic">Fashion</span>
            </span>
          </Link>
          <p className="text-cream/50 text-[11px] md:text-sm font-light leading-relaxed max-w-xs">
            Premium luxury reseller in Pakistan. Curating the world's finest designer items.
          </p>
        </div>

        {/* Shop */}
        <div className="space-y-4 md:space-y-6">
          <h4 className="font-dm uppercase text-[9px] md:text-xs tracking-widestest text-gold">Collection</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><Link to="/shop?category=sunglasses" className="text-cream/60 hover:text-gold text-[11px] md:text-sm transition-colors">Sunglasses</Link></li>
            <li><Link to="/shop?category=bags" className="text-cream/60 hover:text-gold text-[11px] md:text-sm transition-colors">Designer Bags</Link></li>
            <li><Link to="/shop?category=watches" className="text-cream/60 hover:text-gold text-[11px] md:text-sm transition-colors">Timepieces</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4 md:space-y-6">
          <h4 className="font-dm uppercase text-[9px] md:text-xs tracking-widestest text-gold">Company</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><Link to="/about" className="text-cream/60 hover:text-gold text-[11px] md:text-sm transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="text-cream/60 hover:text-gold text-[11px] md:text-sm transition-colors">Contact Us</Link></li>
            <li><Link to="/shop" className="text-cream/60 hover:text-gold text-[11px] md:text-sm transition-colors">Shipping</Link></li>
          </ul>
        </div>

        {/* Social - Span 2 columns on mobile if needed or just align */}
        <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6 pt-4 lg:pt-0 border-t border-gold/5 lg:border-none">
          <h4 className="font-dm uppercase text-[9px] md:text-xs tracking-widestest text-gold">Follow Us</h4>
          <div className="flex space-x-6">
            <a href="https://instagram.com" className="text-cream/60 hover:text-gold text-[11px] md:text-sm transition-colors">Instagram</a>
            <a href="https://wa.me" className="text-cream/60 hover:text-gold text-[11px] md:text-sm transition-colors">WhatsApp</a>
          </div>
          <p className="text-[9px] text-cream/30 uppercase tracking-[0.2em] font-light">
            Bahawalpur, Pakistan
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto mt-12 md:mt-24 pt-6 md:pt-8 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[8px] md:text-[10px] text-cream/30 uppercase tracking-widestest text-center">
          © {new Date().getFullYear()} Luxe Fashion Store.
        </p>
        <p className="hidden md:block text-[10px] text-cream/30 uppercase tracking-widestest">
          Designed for Excellence
        </p>
      </div>
    </footer>
  );
};

export default Footer;
