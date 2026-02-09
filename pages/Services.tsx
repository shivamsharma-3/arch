import React from 'react';
import DepthCard from '../components/DepthCard';
import { Database, Send, Workflow } from 'lucide-react';
import Button from '../components/Button';

const Services: React.FC = () => {
  const services = [
    {
      title: "Outbound Revenue Systems",
      phase: "Phase 1: Revenue Generation Engine",
      icon: Send,
      whatIs: "Managed outbound infrastructure.",
      friction: "Manual prospecting, inconsistent outreach, low response rates, and an unreliable sales pipeline.",
      outcome: "A managed outbound engine that consistently produces qualified sales conversations and feeds them directly into your pipeline.",
      includes: [
        "Ideal customer profile mapping logic",
        "Technical outbound node deployment",
        "Sequence architecture & logic branching",
        "Managed delivery & reputation monitoring",
        "Qualified pipeline injection"
      ],
      who: "Founder-led B2B service companies ($1k+ ACV) looking for predictable outbound results."
    },
    {
      title: "CRM & Pipeline Architecture",
      phase: "Phase 2: Revenue Visibility & Control",
      icon: Database,
      whatIs: "Revenue visibility & data plumbing.",
      friction: "Messy CRM data, unclear pipeline stages, and no reliable view of what is driving revenue.",
      outcome: "A high-integrity CRM structure where every interaction is tracked from first touch to close.",
      includes: [
        "CRM restructuring for scale",
        "Automated pipeline stage logic",
        "Multi-source lead attribution",
        "Executive revenue visibility dashboards"
      ],
      who: "Growing B2B teams requiring institutional data grade."
    },
    {
      title: "Revenue Ops Management",
      phase: "Phase 3: Long-Term System Stability",
      icon: Workflow,
      whatIs: "Long-term system stability.",
      friction: "Revenue systems that degrade over time due to technical debt or lack of oversight.",
      outcome: "Continuous operational stability without the overhead of an internal Ops team.",
      includes: [
        "Ongoing system health monitoring",
        "Protocol & tool stack optimization",
        "Technical documentation maintenance",
        "Scaling logic adjustments"
      ],
      who: "Teams that view their revenue stack as a critical long-term asset."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-white">Infrastructure-Grade Services.</h1>
        <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed">
          These systems are deployed progressively, beginning with a System Audit and expanding as revenue maturity increases.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <DepthCard key={i} className="h-full">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5">
              <service.icon className="w-5 h-5 text-teal-400" />
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white tracking-tight">{service.title}</h2>
              <p className="text-[9px] text-teal-500 font-black uppercase tracking-[0.2em] mt-1.5">
                {service.phase}
              </p>
              <p className="text-[8px] text-neutral-600 font-mono mt-2 font-bold uppercase tracking-widest">{service.whatIs}</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-black block mb-1.5">The Friction</span>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">{service.friction}</p>
              </div>
              
              <div className="py-3 px-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[9px] uppercase tracking-[0.3em] text-teal-500/80 font-black block mb-1.5">The Outcome</span>
                <p className="text-xs text-white font-bold leading-relaxed">{service.outcome}</p>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-black block mb-2">Scope</span>
                <ul className="space-y-1.5">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="text-[10px] text-neutral-400 flex items-center gap-2">
                      <div className="w-1 h-1 bg-teal-500/30 rounded-full flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-700 font-black block mb-1">Target Profile</span>
                <p className="text-[10px] text-neutral-500 font-medium italic leading-snug">{service.who}</p>
              </div>
            </div>
          </DepthCard>
        ))}
      </div>

      {/* Audit CTA Block */}
      <div className="mt-12 p-8 md:p-12 rounded-[2.5rem] bg-[#0d0d0f] md:bg-neutral-900/40 border border-white/5 md:backdrop-blur-xl flex flex-col items-center gap-10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-white tracking-tight">Start with a Revenue System Audit</h3>
            <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed">
              Every partnership begins with a system audit to define scope, priorities, and architectural fit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button to="/contact" className="px-10 py-4 text-xs font-black uppercase tracking-widest">Request System Audit</Button>
            <p className="text-[8px] text-neutral-600 uppercase tracking-[0.3em] font-black">No retainers discussed before the audit.</p>
          </div>
        </div>

        {/* Technical Signals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/5 w-full">
          {[
            "Built for B2B service companies with high-LTV contracts. Not a fit for early-stage experiments.",
            "Architectural focus on building managed systems, not running one-off marketing campaigns.",
            "The System Audit provides a clear technical roadmap for your outbound engine before any commitment.",
            "Direct partner-led audits. We operate without account managers or sales representatives."
          ].map((text, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="w-1 h-1 rounded-full bg-teal-500/20" />
              <p className="text-[10px] text-neutral-500 font-medium leading-relaxed tracking-tight">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;