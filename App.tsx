import React, { useEffect, useState, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import NoiseBackground from './components/NoiseBackground';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Services from './pages/Services';
import SystemExamples from './pages/SystemExamples';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState('INITIALIZING_BOOT_SEQUENCE...');
  
  const logs = useMemo(() => [
    'PARSING_BLUEPRINT_V4...',
    'CALIBRATING_OUTBOUND_NODES...',
    'SYNCING_REVENUE_CHANNELS...',
    'ESTABLISHING_DATA_TRACERS...',
    'ARCHITECTURE_VALIDATED'
  ], []);

  useEffect(() => {
    let frameId: number;
    let startTimestamp: number | null = null;
    // Added 1000ms to duration
    const duration = window.innerWidth < 768 ? 2400 : 3000;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const p = Math.min(elapsed / duration, 1);
      
      // Smoother easing function
      const easedP = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setProgress(Math.round(easedP * 100));

      if (p < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    const logInterval = setInterval(() => {
      setCurrentLog(logs[Math.floor(Math.random() * logs.length)]);
    }, 600);

    const timer = setTimeout(() => {
      setFade(true);
      clearInterval(logInterval);
    }, duration + 200);

    const finishTimer = setTimeout(() => onComplete(), duration + 1200);
    
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
      clearTimeout(finishTimer);
      clearInterval(logInterval);
    };
  }, [onComplete, logs]);

  const brand = "ARCH".split("");

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050506] transition-all duration-[1000ms] cubic-bezier(0.23, 1, 0.32, 1) ${fade ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}>
      
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="flex flex-col items-center gap-14 w-full max-w-lg px-8 relative will-change-transform">
        <div className="relative w-28 h-28 md:w-36 md:h-36 mb-2 flex items-center justify-center">
          {/* Enhanced Visibility Background Animations */}
          <div className="absolute inset-0 border-[1.5px] border-teal-500/40 rounded-full animate-[orbital-slow_15s_linear_infinite]" />
          <div className="absolute inset-4 border border-white/20 rotate-12 animate-[orbital-slow_10s_linear_infinite_reverse]" />
          <div className="absolute inset-8 border border-teal-500/60 rounded-sm rotate-45 animate-[breathe_4s_ease-in-out_infinite]" />
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full animate-pulse pointer-events-none" />
          
          {/* Logo SVG with increased shadow and visibility */}
          <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24 relative z-10 drop-shadow-[0_0_25px_rgba(45,212,191,0.8)] will-change-transform">
             <path d="M50 2 L56 12 L50 22 L44 12 Z" fill="white" />
             <path d="M43 28 L12 95 L38 95 L48 55 Z" fill="white" />
             <path d="M57 28 L88 95 L62 95 L52 55 Z" fill="white" />
             <path d="M49 28 L51 28 L51 65 L49 65 Z" fill="white" />
             <path d="M50 75 L56 85 L50 95 L44 85 Z" fill="white" />
          </svg>
        </div>

        <div className="flex items-center gap-4 md:gap-6 overflow-hidden h-20 md:h-28">
          {brand.map((char, i) => (
            <span 
              key={i}
              className="brand-font text-white text-5xl md:text-8xl tracking-widest inline-block animate-[char-glide_1.2s_cubic-bezier(0.23,1,0.32,1)_forwards] will-change-transform"
              style={{ 
                animationDelay: `${0.1 + (i * 0.1)}s`,
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 w-full relative">
          <div className="flex justify-between w-full px-2">
             <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
               <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.2em]">Deployment: {progress}%</span>
             </div>
             <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.2em]">Status: OK</span>
          </div>
          
          <div className="relative w-full h-[1px] md:h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-teal-400/80 transition-all duration-300 ease-out will-change-[width]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex flex-col items-center gap-2 h-8">
            <div className="text-[9px] font-mono text-teal-400/50 uppercase tracking-[0.4em]">
              {currentLog}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes char-glide {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes orbital-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1) rotate(45deg); opacity: 0.3; }
          50% { transform: scale(1.15) rotate(45deg); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen selection:bg-teal-500/30 selection:text-teal-200 bg-[#050506]">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <NoiseBackground />
      <Navigation />
      
      <main className={`relative z-10 pt-20 transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1) ${isLoading ? 'opacity-0 translate-y-4 blur-xl' : 'opacity-100 translate-y-0 blur-0'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/system-examples" element={<SystemExamples />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      {!isLoading && (
        <>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;