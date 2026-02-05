import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import DepthCard from '../components/DepthCard';

const Success: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 animate-reveal-up">
      {/* Header Section matching other pages */}
      <header className="mb-16 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-teal-500/5 border border-teal-500/10 mb-8 shadow-[inset_0_0_20px_rgba(45,212,191,0.05)]">
          <CheckCircle className="w-12 h-12 text-teal-500" strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white leading-[0.9]">
          Request Received.
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed">
          A partner will review your current revenue infrastructure and contact you within 24 hours to schedule your audit.
        </p>
      </header>

      {/* Content Structure matching services/home patterns */}
      <div className="flex flex-col items-center gap-12">
        <DepthCard className="w-full max-w-3xl">
          <div className="flex flex-col md:flex-row gap-12 items-center p-4">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">The Process Ahead.</h2>
              <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                Our audit team will examine the CRM and system constraints mentioned in your submission to prepare a technical diagnosis. We prioritize engineering-grade solutions over tactical fixes.
              </p>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-1 gap-3">
               {[
                 "Data Environment Analysis",
                 "Pipeline Logic Review",
                 "Technical Routing Check"
               ].map((step, i) => (
                 <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 transition-colors hover:bg-white/[0.04]">
                   <div className="w-1.5 h-1.5 rounded-full bg-teal-500/60" />
                   <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{step}</span>
                 </div>
               ))}
            </div>
          </div>
        </DepthCard>

        {/* Footer Action matching general page flows */}
        <div className="flex flex-col items-center gap-8">
          <Button to="/" className="px-14 py-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            Return Home
          </Button>
          
          <div className="flex flex-col items-center gap-3">
             <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
               <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.4em]">Node Status: Confirmed</span>
             </div>
             <p className="text-[9px] text-neutral-800 font-bold uppercase tracking-widest">
               Submission ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;