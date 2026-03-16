import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Navigation Links
  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Determine navbar appearance
  const isScrolled = !isAtTop;
  const isHidden = scrollDirection === 'down' && isScrolled && !isMenuOpen;
  
  // Navbar background color logic
  const bgClass = (isScrolled || !isHome) && !isMenuOpen
    ? 'bg-darkbg/90 backdrop-blur-xl border-b border-gold/10 py-4 shadow-2xl' 
    : 'bg-transparent py-8 lg:py-4';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-500 ease-in-out px-6 lg:px-16 ${bgClass} ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          
          {/* Left: Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-10 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group font-dm uppercase text-[11px] tracking-widestest transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-gold' : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-start lg:justify-center">
            <Link to="/" className="group relative">
              <span className="font-playfair italic text-2xl lg:text-3xl tracking-tighter text-cream flex items-center">
                Luxe<span className="text-gold mx-0.5">.</span>Fashion
              </span>
              <div className="h-[1px] w-0 bg-gold/50 transition-all duration-500 group-hover:w-full absolute -bottom-1 left-0" />
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center justify-end space-x-8 flex-1">
            <button className="text-cream/80 hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link 
              to="/shop" 
              className="px-6 py-2 border border-gold/30 text-[10px] uppercase tracking-widestest text-gold hover:bg-gold hover:text-darkbg transition-all duration-500 rounded-full"
            >
              Collection
            </Link>
          </div>

          {/* Mobile: Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-[130] w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-6 h-[1.5px] bg-cream transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-1/2 -rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1.5px] bg-cream transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 w-6 h-[1.5px] bg-cream transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-1/2 rotate-45' : 'bottom-0'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div 
        className={`fixed inset-0 z-[105] bg-darkbg transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div className="h-full w-full flex flex-col justify-center items-center px-10 relative overflow-hidden">
          {/* Animated background element */}
          <div className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gold/5 blur-[120px] transition-transform duration-1000 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} />
          <div className={`absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gold/5 blur-[120px] transition-transform duration-1000 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} />

          <nav className="relative z-10 flex flex-col items-center space-y-10">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold/60 mb-4 block">Navigation</span>
            {[{ name: 'Home', path: '/' }, ...navLinks].map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`group relative overflow-hidden transition-all duration-500 delay-[${idx * 100}ms] ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <span className={`font-playfair text-3xl italic hover:text-gold transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-gold' : 'text-cream'
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
            
            <Link 
              to="/shop" 
              onClick={() => setIsMenuOpen(false)}
              className={`mt-12 btn-gold rounded-none !px-12 !py-4 transition-all duration-700 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              Shop Collection
            </Link>
          </nav>

          <div className="absolute bottom-12 left-0 w-full text-center">
            <p className="text-[9px] uppercase tracking-widest text-cream/40">© 2024 Luxe Fashion. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
