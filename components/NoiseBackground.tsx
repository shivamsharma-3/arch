import React, { useEffect, useState } from 'react';

const NoiseBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let ticking = false;
    const checkMobile = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsMobile(window.innerWidth < 768);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0c0c0e] contain-strict">
      {/* Static Mesh Gradients - Increased Opacity for less darkness */}
      <div className="absolute inset-0 overflow-hidden opacity-100 transition-opacity duration-500">
        <div 
          className={`absolute top-[-20%] left-[-10%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_30%_20%,#2DD4BF33_0%,transparent_60%),radial-gradient(circle_at_70%_80%,#ffffff18_0%,transparent_60%)] ${
            isMobile ? 'blur-[60px]' : 'blur-[80px]'
          }`}
        />
      </div>

      {/* Static Grid System - Increased Opacity */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <div 
          className="absolute inset-[-100%] origin-center opacity-[0.32]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #ffffff30 1px, transparent 1px), linear-gradient(to bottom, #ffffff30 1px, transparent 1px)`,
            backgroundSize: isMobile ? '150px 150px' : '100px 100px',
            transform: 'rotateX(65deg) translateZ(-100px)',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)'
          }} 
        />
        {!isMobile && (
          <div 
            className="absolute inset-[-100%] origin-center opacity-[0.22]" 
            style={{ 
              backgroundImage: `linear-gradient(to right, #ffffff20 1px, transparent 1px), linear-gradient(to bottom, #ffffff20 1px, transparent 1px)`,
              backgroundSize: '150px 150px',
              transform: 'rotateX(-65deg) translateZ(100px)',
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)'
            }} 
          />
        )}
      </div>

      {/* Static Beams - Increased Opacity */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div 
            className="absolute top-[-30%] left-[10%] w-[2px] h-[160%] bg-gradient-to-b from-transparent via-teal-500/40 to-transparent rotate-[32deg] opacity-70" 
          />
          <div 
            className="absolute top-[-30%] right-[20%] w-[1.5px] h-[160%] bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-[32deg] opacity-50" 
          />
        </div>
      )}

      {/* Static Particles */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 12 : 35)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * (isMobile ? 1.2 : 3) + 1.2}px`,
              height: `${Math.random() * (isMobile ? 1.2 : 3) + 1.2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 4 === 0 ? '#2DD4BF88' : '#ffffff55',
              boxShadow: i % 4 === 0 ? '0 0 15px #2DD4BF44' : '0 0 10px #ffffff11',
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Static Central Glow - Softened and brightened */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] bg-teal-500/[0.18] ${isMobile ? 'blur-[80px]' : 'blur-[180px]'} rounded-full pointer-events-none`} />

      {/* Softer Vignettes for reduced darkness */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,#050506_90%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Static Signal Traces */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div 
              key={`h-signal-${i}`}
              className="absolute h-[1px] w-64 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"
              style={{
                top: `${(i * 12) + 5}%`,
                left: `${(i * 15)}%`,
                opacity: 0.5
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NoiseBackground;