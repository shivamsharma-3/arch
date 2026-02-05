import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Success: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center animate-reveal-up">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full animate-pulse" />
            <CheckCircle className="w-20 h-20 text-teal-500 relative z-10" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
          Request Received.
        </h1>
        
        <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
          A partner will review your current revenue infrastructure and contact you within 24 hours to schedule your audit.
        </p>

        <div className="flex flex-col items-center gap-6">
          <Button to="/" variant="primary" className="px-10">
            Return Home
          </Button>
          
          <div className="flex items-center gap-3 py-2 px-4 rounded-full bg-white/[0.02] border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping" />
            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">
              Processing in Q2 Queue
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;