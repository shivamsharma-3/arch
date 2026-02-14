import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-12 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="max-w-xs space-y-6">
            <Link to="/" className="inline-block group">
              <span className="text-2xl brand-font text-white transition-all duration-700 group-hover:text-teal-400 group-hover:tracking-[0.42em]">
                ARCH
              </span>
            </Link>
            <p className="text-neutral-500 text-sm font-medium leading-relaxed">
              Structured outbound revenue systems for scaling B2B companies. Systems over stories.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">Explore</h4>
              <ul className="space-y-3">
                <li><Link to="/how-it-works" className="text-sm text-neutral-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/roadmap" className="text-sm text-neutral-400 hover:text-white transition-colors">Roadmap</Link></li>
                <li><Link to="/system-examples" className="text-sm text-neutral-400 hover:text-white transition-colors">Examples</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="https://www.linkedin.com/company/arch-revenue" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>

            <div className="hidden sm:block space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">Action</h4>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-sm text-teal-500 font-bold hover:text-teal-400 transition-colors">Book Audit</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-bold">
            © {new Date().getFullYear()} ARCH REVENUE SYSTEMS LLC
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold">
            <Link to="/privacy" className="text-neutral-600 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-neutral-600 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;