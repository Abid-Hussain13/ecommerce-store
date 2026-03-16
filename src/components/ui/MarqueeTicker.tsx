import React from 'react';

const brands = [
  'DIOR', 'LOUIS VUITTON', 'GUCCI', 'RADO', 'MFK', 'ARMANI', 'CARTIER', 'TORY BURCH', 'PREMIUM AUTHENTIC'
];

const MarqueeTicker: React.FC = () => {
  const content = brands.join(' \u00B7 ') + ' \u00B7 ';

  return (
    <div className="bg-darkinner py-6 border-y border-gold/10 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-gold font-dm tracking-widest text-sm uppercase">
          {content.repeat(10)}
        </span>
      </div>
    </div>
  );
};

export default MarqueeTicker;
