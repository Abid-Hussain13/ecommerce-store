import React, { useState } from 'react';
import SectionReveal from "../components/ui/SectionReveal"

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-darkbg min-h-screen pt-48 pb-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-24 relative z-10">
        {/* Left Panel */}
        <div className="lg:w-1/2">
          <SectionReveal showLine={true}>
            <h1 className="text-7xl lg:text-9xl font-playfair italic text-cream leading-tight mb-12">
              Contact <br />
              <span className="text-gold">Luxe</span>
            </h1>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-dm uppercase text-xs tracking-widestest text-gold mb-4">Location</h3>
                <p className="text-cream text-xl font-light">Bahawalpur, Pakistan</p>
              </div>
              
              <div>
                <h3 className="font-dm uppercase text-xs tracking-widestest text-gold mb-4">Social</h3>
                <div className="flex flex-col space-y-4">
                  <a href="https://instagram.com/luxury_fashion" className="text-cream text-xl font-light hover:text-gold transition-colors">@luxury_fashion_pk</a>
                  <a href="https://wa.me/920000000000" className="text-cream text-xl font-light hover:text-gold transition-colors">+92 300 0000000</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-dm uppercase text-xs tracking-widestest text-gold mb-4">Email</h3>
                <p className="text-cream text-xl font-light">concierge@luxefashion.com</p>
              </div>

              <div className="pt-8 border-t border-gold/10">
                <h3 className="font-dm uppercase text-xs tracking-widestest text-gold mb-4">Visit Our Boutique</h3>
                <p className="text-cream/70 text-sm leading-relaxed font-light mb-2 uppercase tracking-widest">Monday — Saturday</p>
                <p className="text-cream text-lg font-light mb-6 italic font-playfair">10:00 AM — 09:00 PM</p>
                <p className="text-cream/60 text-xs leading-relaxed font-light max-w-xs uppercase tracking-widestest">
                  Experience our curated collection in person at our flagship store in the heart of Bahawalpur.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Right Panel: Form */}
        <div className="lg:w-1/2">
          <SectionReveal showLine={false}>
            <div className="bg-darkinner p-10 lg:p-16 border border-gold/10 relative overflow-hidden">
              {/* Noise Texture */}
              <div className="absolute inset-0 noise-texture opacity-[0.02]" />
              
              {submitted ? (
                <div className="text-center py-20 relative z-10">
                  <div className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 className="font-playfair italic text-4xl text-cream mb-4">Message Received</h3>
                  <p className="text-cream/60 font-light">Our concierge will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="space-y-2">
                    <label className="font-dm uppercase text-[10px] tracking-widestest text-gold">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-cream focus:border-gold outline-none transition-colors font-light"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-dm uppercase text-[10px] tracking-widestest text-gold">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-cream focus:border-gold outline-none transition-colors font-light"
                      placeholder="jane@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-dm uppercase text-[10px] tracking-widestest text-gold">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-cream focus:border-gold outline-none transition-colors font-light resize-none"
                      placeholder="I'm interested in the Dior Sunglasses..."
                    />
                  </div>
                  
                  <button type="submit" className="btn-gold w-full mt-8">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </main>
  );
};

export default Contact;
