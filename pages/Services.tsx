
import React from 'react';
import DepthCard from '../components/DepthCard';
import { Database, Send, Workflow } from 'lucide-react';
import Button from '../components/Button';

const Services: React.FC = () => {
  const services = [
    {
      title: "Outbound Revenue Systems",
      phase: "Phase 1: Revenue Engine",
      icon: Send,
      description: "Managed pipelines generating qualified sales meetings.",
      outcome: "We design and operate structured outbound pipelines that consistently generate qualified sales meetings for B2B service companies.",
      includes: [
        "ICP mapping & targeting",
        "Outreach infrastructure setup",
        "Sequence logic design",
        "Managed multi-channel delivery"
      ],
      who: "Founder-led firms seeking a predictable outbound engine."
    },
    {
      title: "Pipeline Structure",
      phase: "Phase 2: Lead Tracking",
      icon: Database,
      description: "Clear tracking and visibility for outbound leads.",
      outcome: "We bring structure to your sales pipeline by aligning outbound activity with clear tracking and stage visibility for total clarity.",
      includes: [
        "Outbound pipeline stage alignment",
        "Automated lead status tracking",
        "Outbound attribution logic",
        "Performance visibility dashboards"
      ],
      who: "B2B teams requiring control over outbound lead data."
    },
    {
      title: "Ongoing Operations",
      phase: "Phase 3: Managed Management",
      icon: Workflow,
      description: "Continuous system optimization and operation.",
      outcome: "We continue operating and optimizing your outbound engine—refining targeting and messaging to maintain a steady flow of meetings.",
      includes: [
        "Outreach health monitoring",
        "Messaging & logic refinement",
        "Prospect data hygiene & refinement",
        "Continuous performance loops"
      ],
      who: "Firms viewing outbound as a critical long-term growth asset."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">System Services.</h1>
        <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Our systems are deployed progressively, starting with an Outbound Audit and expanding as your pipeline matures.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <DepthCard key={i} className="h-full">
            <div className="w-12 h-12 rounded-xl bg-teal-500/5 border border-teal-500/10 flex items-center justify-center mb-8">
              <service.icon className="w-6 h-6 text-teal-400" />
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-bold text-white tracking-tight mb-2">{service.title}</h2>
              <p className="text-[10px] text-teal-500/60 font-bold uppercase tracking-[0.2em]">
                {service.phase}
              </p>
            </div>
            
            <div className="space-y-10">
              <div>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">{service.description}</p>
              </div>
              
              <div className="py-5 px-6 rounded-2xl bg-white/[0.01] border border-white/5">
                <span className="text-[9px] uppercase tracking-[0.3em] text-teal-500/50 font-bold block mb-3">OUTCOME</span>
                <p className="text-xs text-white font-semibold leading-relaxed">{service.outcome}</p>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-bold block mb-4">SCOPE</span>
                <ul className="space-y-3">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="text-[11px] text-neutral-400 flex items-center gap-3">
                      <div className="w-1 h-1 bg-teal-500/40 rounded-full flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/5">
                <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-600 font-bold block mb-2">TARGET PROFILE</span>
                <p className="text-[10px] text-neutral-500 font-medium italic">{service.who}</p>
              </div>
            </div>
          </DepthCard>
        ))}
      </div>

      {/* Audit CTA Block */}
      <div className="mt-16 p-10 md:p-16 rounded-[3rem] bg-[#0d0d0f] md:bg-neutral-900/40 border border-white/5 shadow-2xl flex flex-col items-center gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Start with an Outbound System Audit</h3>
            <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed">
              Every partnership begins with a diagnostic audit to define scope, targeting, and system fit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button to="/contact" className="px-10 py-4 text-xs font-bold uppercase tracking-widest">Request Audit</Button>
            <p className="text-[9px] text-neutral-600 uppercase tracking-[0.2em] font-bold">No retainers discussed before the audit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
