import React from 'react';

interface DepthCardProps {
  children: React.ReactNode;
  className?: string;
}

const DepthCard: React.FC<DepthCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative p-10 rounded-[2.5rem] bg-neutral-900/20 md:bg-neutral-900/20 border border-white/5 md:backdrop-blur-sm shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-white/10">
        {/* Inner subtle glow */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent opacity-10 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DepthCard;