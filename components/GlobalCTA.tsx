import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const GlobalCTA: React.FC = () => {
  const location = useLocation();
  
  // We avoid showing the global CTA on the contact page itself 
  // and pages that already have a specialized large CTA at the bottom.
  const hideOn = ['/contact', '/', '/services'];
  if (hideOn.includes(location.pathname)) return null;

  return (
    <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto w-full flex flex-col items-center animate-reveal-up" style={{ animationDelay: '0.2s' }}>
      <div className="w-full p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-[#0d0d0f] md:bg-neutral-900/40 border border-white/5 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.4)] flex flex-col items-center text-center">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/[0.02] blur-[120px] pointer-events-none group-hover:bg-teal-500/[0.04] transition-colors duration-1000" />
        
        <div className="relative z-10 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest">Available Now</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]">
            Ready to engineer your<br className="hidden md:block" /> revenue infrastructure?
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Stop guessing and start building a predictable system for qualified meetings.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6 relative z-10">
          <Button to="/contact" className="px-12 py-5 text-base md:text-lg">
            Request System Audit
          </Button>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[10px] text-neutral-500 font-black uppercase tracking-[0.3em]">
              Partner-led technical review
            </p>
            <p className="text-[9px] text-neutral-700 font-bold uppercase tracking-widest">
              No sales deck. Zero obligation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;