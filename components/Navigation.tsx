
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Services', path: '/services' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'System Examples', path: '/system-examples' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-7xl flex items-center justify-between px-8 py-3 rounded-full bg-neutral-900 md:bg-neutral-900/40 md:backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/50 transition-all duration-500 hover:border-white/10 relative z-50">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
            {/* EXACT BRAND MARK REPLACEMENT FROM IMAGE */}
            <svg viewBox="0 0 100 100" fill="white" className="w-full h-full drop-shadow-[0_0_8px_rgba(45,212,191,0.3)]">
              <path d="M50 2 L56 12 L50 22 L44 12 Z" /> {/* Top Diamond */}
              <path d="M43 28 L12 95 L38 95 L48 55 Z" /> {/* Left Wing */}
              <path d="M57 28 L88 95 L62 95 L52 55 Z" /> {/* Right Wing */}
              <path d="M49 28 L51 28 L51 65 L49 65 Z" /> {/* Center Stem */}
              <path d="M50 75 L56 85 L50 95 L44 85 Z" /> {/* Bottom Diamond */}
            </svg>
            <div className="absolute inset-0 bg-teal-500/5 blur-xl rounded-full opacity-60"></div>
          </div>
          <span className="text-white text-xl brand-font antialiased transition-all duration-500 ease-out group-hover:tracking-[0.5em]">ARCH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group py-1 text-[13px] font-medium transition-colors duration-300 ${
                isActive(item.path) ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.name}
              <span 
                className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-teal-500 via-teal-400 to-transparent transition-all duration-500 ease-out rounded-full ${
                  isActive(item.path) 
                    ? 'w-full opacity-100 shadow-[0_0_8px_rgba(45,212,191,0.4)]' 
                    : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:block px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:shadow-white/5 active:scale-95"
          >
            Request Audit
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors focus:outline-none relative z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} className="animate-in fade-in duration-300" /> : <Menu size={24} className="animate-in fade-in duration-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black md:bg-black/95 md:backdrop-blur-2xl md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pt-24 pb-12 overflow-y-auto">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-2xl font-bold tracking-tighter transition-all duration-500 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${isActive(item.path) ? 'text-teal-400' : 'text-white/60 hover:text-white'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          
          <div className={`w-full max-w-xs h-[1px] bg-white/5 transition-all duration-700 ${isMobileMenuOpen ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: '300ms' }} />
          
          <Link
            to="/contact"
            className={`w-full max-w-xs text-center py-5 rounded-3xl bg-white text-black font-bold text-lg transition-all duration-700 transform shadow-[0_20px_40px_rgba(255,255,255,0.05)] ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Request System Audit
          </Link>

          <div className={`mt-8 flex gap-8 transition-all duration-700 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
            <a 
              href="https://www.linkedin.com/company/arch-revenue" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase">X / Twitter</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
