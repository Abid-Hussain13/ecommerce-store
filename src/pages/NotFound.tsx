import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-darkbg px-6">
      <div className="text-center">
        <h1 className="text-[150px] lg:text-[250px] font-playfair italic text-gold/10 leading-none select-none">404</h1>
        <div className="mt-[-60px] lg:mt-[-100px] relative z-10">
          <h2 className="text-4xl lg:text-6xl font-playfair italic text-cream mb-8">Lost in <span className="text-gold">Luxury</span></h2>
          <p className="text-cream/50 mb-12 font-light uppercase tracking-widest text-xs">The page you are looking for has been moved or does not exist.</p>
          <Link to="/shop" className="btn-gold">Back to Collection</Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
