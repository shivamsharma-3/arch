import React, { useEffect, useState } from 'react';
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
import Success from './pages/Success';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState('');
  
  const logs = [
    'PARSING_BLUEPRINT_V4...',
    'CALIBRATING_OUTBOUND_NODES...',
    'SYNCING_REVENUE_CHANNELS...',
    'ESTABLISHING_DATA_TRACERS...',
    'ARCHITECTURE_VALIDATED'
  ];

  useEffect(() => {
    let frameId: number;
    let startTimestamp: number | null = null;
    const duration = window.innerWidth < 768 ? 1600 : 2400;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const p = Math.min(elapsed / duration, 1);
      
      const easedP = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setProgress(Math.round(easedP * 100));

      if (p < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    const logInterval = setInterval(() => {
      setCurrentLog(logs[Math.floor(Math.random() * logs.length)]);
    }, 500);

    const timer = setTimeout(() => {
      setFade(true);
      clearInterval(logInterval);
    }, duration + 400);

    const finishTimer = setTimeout(() => onComplete(), duration + 1400);
    
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
      clearTimeout(finishTimer);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  const brand = "ARCH".split("");

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050506] transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1) ${fade ? 'opacity-0 scale-105 blur-3xl pointer-events-none' : 'opacity-100 scale-100'}`}>
      
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:120px:120px] animate-[pulse_10s_ease-in-out_infinite]" />

      <div className="flex flex-col items-center gap-14 w-full max-w-lg px-8 relative">
        <div className="relative w-32 h-32 mb-2 flex items-center justify-center">
          <div className={`absolute inset-0 border border-teal-500/30 rounded-full animate-[orbital-slow_12s_linear_infinite] shadow-[0_0_15px_rgba(45,212,191,0.1)]`} />
          <div className="absolute inset-4 border border-white/15 rotate-12 animate-[orbital-slow_8s_linear_infinite_reverse]" />
          <div className={`absolute inset-8 border border-teal-500/40 rounded-sm rotate-45 animate-[breathe_4s_ease-in-out_infinite] shadow-[inset_0_0_10px_rgba(45,212,191,0.2)]`} />
          
          <svg viewBox="0 0 100 100" className="w-20 h-20 relative z-10 drop-shadow-[0_0_15px_rgba(45,212,191,0.4)]">
             <path d="M50 2 L56 12 L50 22 L44 12 Z" fill="white" />
             <path d="M43 28 L12 95 L38 95 L48 55 Z" fill="white" />
             <path d="M57 28 L88 95 L62 95 L52 55 Z" fill="white" />
             <path d="M49 28 L51 28 L51 65 L49 65 Z" fill="white" />
             <path d="M50 75 L56 85 L50 95 L44 85 Z" fill="white" />
          </svg>
          
          <div className="absolute w-2 h-2 bg-teal-400 rounded-full blur-[4px] animate-pulse" />
        </div>

        <div className="flex items-center gap-6 overflow-hidden">
          {brand.map((char, i) => (
            <span 
              key={i}
              className="brand-font text-white text-6xl md:text-8xl tracking-widest inline-block animate-[char-glide_1.4s_cubic-bezier(0.23,1,0.32,1)_forwards]"
              style={{ 
                animationDelay: `${0.2 + (i * 0.12)}s`,
                opacity: 0,
                transform: 'translateY(20px) scale(0.9)'
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
             <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.2em]">Node_Status: OK</span>
          </div>
          
          <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500/0 via-teal-400/80 to-teal-500/0 transition-all duration-500 ease-out"
              style={{ width: `${progress}%`, transform: 'translateX(-10%)' }}
            />
            <div 
              className="absolute top-0 left-0 h-full bg-teal-400/20 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex flex-col items-center gap-2 h-8">
            <div className="text-[9px] font-mono text-teal-400/60 uppercase tracking-[0.4em] transition-all duration-500 transform">
              {currentLog}
            </div>
            <div className="text-[8px] uppercase tracking-[1em] text-neutral-700 font-black animate-pulse">
              SYS_BOOT
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes char-glide {
          0% { opacity: 0; transform: translateY(24px) scale(0.85); filter: blur(12px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes orbital-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1) rotate(45deg); opacity: 0.3; }
          50% { transform: scale(1.1) rotate(45deg); opacity: 0.6; }
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
      
      <main className={`relative z-10 pt-20 transition-all duration-[1500ms] cubic-bezier(0.23, 1, 0.32, 1) ${isLoading ? 'opacity-0 translate-y-6 blur-2xl' : 'opacity-100 translate-y-0 blur-0'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/system-examples" element={<SystemExamples />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
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