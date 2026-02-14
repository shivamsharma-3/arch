
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StickyMobileCTA: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (location.pathname !== '/contact') {
      setIsVisible(true);
      return;
    }

    // Intersection Observer to hide when the actual form is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById('audit-form-container');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [location.pathname]);

  const handleClick = () => {
    if (location.pathname === '/contact') {
      const element = document.getElementById('audit-form-container');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/contact');
    }
  };

  return (
    <div 
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 transition-all duration-300 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={handleClick}
        className="w-full py-4 rounded-2xl bg-white text-black font-bold text-sm uppercase tracking-widest shadow-[0_10px_40px_rgba(0,0,0,0.5)] active:scale-95 transition-transform"
      >
        Request Audit
      </button>
      {/* Safe Area Spacer */}
      <div className="h-[env(safe-area-inset-bottom,0)]" />
    </div>
  );
};

export default StickyMobileCTA;