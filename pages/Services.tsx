
import React from 'react';
import DepthCard from '../components/DepthCard';
import { Database, Send, Workflow } from 'lucide-react';
import Button from '../components/Button';

const Services: React.FC = () => {
  const services = [
    {
      title: "Phase 1 — Outbound Engine Build",
      subtitle: "REVENUE INFRASTRUCTURE",
      icon: Send,
      description: "Installation of the core technical and strategic architecture required for predictable outreach.",
      outcome: "A fully configured outbound engine ready to inject qualified sales meetings into your calendar.",
      includes: [
        "ICP mapping & account selection",
        "Technical outbound infrastructure",
        "Strategic sequence architecture",
        "Response-driven messaging frameworks"
      ],
      who: "Founder-led firms seeking a transition from referrals to systems."
    },
    {
      title: "Phase 2 — Pipeline & Tracking",
      subtitle: "OPERATIONAL VISIBILITY",
      icon: Database,
      description: "Alignment of outbound activity with structured pipeline stages for total revenue clarity.",
      outcome: "Total visibility into outbound ROI, lead velocity, and conversion attribution.",
      includes: [
        "Pipeline stage standardization",
        "Automated lead status synchronization",
        "Outbound performance attribution",
        "Executive-level reporting dashboards"
      ],
      who: "B2B teams requiring institutional control over lead data."
    },
    {
      title: "Phase 3 — Managed Operations",
      subtitle: "CONTINUOUS EXECUTION",
      icon: Workflow,
      description: "Ongoing management and iterative optimization of the outbound revenue system.",
      outcome: "Consistent, managed outbound flow with continuous performance refinement.",
      includes: [
        "Daily outreach monitoring",
        "Cadence & messaging iteration",
        "Market resonance data loops",
        "Continuous prospect data hygiene"
      ],
      who: "Firms viewing outbound as a critical long-term revenue asset."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <header className="mb-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">System Services.</h1>
        <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed">
          ARCH installs revenue systems in distinct layers. We move from foundational infrastructure to managed operations for long-term stability.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <DepthCard key={i} className="h-full">
            <div className="w-12 h-12 rounded-xl bg-teal-500/5 border border-teal-500/10 flex items-center justify-center mb-10">
              <service.icon className="w-5 h-5 text-teal-400" />
            </div>
            
            <div className="mb-12">
              <p className="text-[9px] text-teal-500/60 font-bold uppercase tracking-[0.3em] mb-3">
                {service.subtitle}
              </p>
              <h2 className="text-xl font-bold text-white tracking-tight">{service.title}</h2>
            </div>
            
            <div className="space-y-10">
              <div>
                <p className="text-[13px] text-neutral-400 font-medium leading-relaxed">{service.description}</p>
              </div>
              
              <div className="py-6 px-7 rounded-2xl bg-white/[0.01] border border-white/5">
                <span className="text-[8px] uppercase tracking-[0.3em] text-teal-500/40 font-bold block mb-3">EXPECTED OUTCOME</span>
                <p className="text-xs text-neutral-200 font-medium leading-relaxed">{service.outcome}</p>
              </div>

              <div>
                <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-500 font-bold block mb-5">CORE SCOPE</span>
                <ul className="space-y-4">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="text-[11px] text-neutral-400 flex items-start gap-3">
                      <div className="w-1 h-1 bg-teal-500/30 rounded-full flex-shrink-0 mt-1.5" />
                      <span className="font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-10 border-t border-white/5">
                <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-600 font-bold block mb-2">TARGET PARTNERSHIP</span>
                <p className="text-[10px] text-neutral-500 font-medium italic">{service.who}</p>
              </div>
            </div>
          </DepthCard>
        ))}
      </div>

      {/* Audit CTA Block */}
      <div className="mt-20 p-12 md:p-20 rounded-[3.5rem] bg-[#0a0a0c] md:bg-neutral-900/40 border border-white/5 shadow-2xl flex flex-col items-center gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-16">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-5 text-white tracking-tight">System Audit & Roadmap</h3>
            <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed">
              Every partnership begins with a diagnostic review. We evaluate your existing setup and map out the system architecture required for your specific market.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Button to="/contact" className="px-12 py-5 text-xs font-bold uppercase tracking-widest shadow-2xl">Request System Audit</Button>
            <p className="text-[9px] text-neutral-600 uppercase tracking-[0.2em] font-bold">Diagnostics first. Retainers later.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
