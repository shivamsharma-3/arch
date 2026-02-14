
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, to, onClick, variant = 'primary', className = "" }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 transform-gpu active:scale-95 active:translate-y-1 active:shadow-inner";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1",
    secondary: "bg-neutral-900 text-white border border-white/10 hover:border-white/20 hover:bg-neutral-800 shadow-2xl hover:-translate-y-1"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/5 to-transparent opacity-0 hover:opacity-100" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
