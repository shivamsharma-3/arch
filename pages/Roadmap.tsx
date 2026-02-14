import React from 'react';
import Button from '../components/Button';
import DepthCard from '../components/DepthCard';

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: "Phase 01 — Outbound Foundation",
      description: "We define your ideal customer profile, build structured prospect lists, design outbound messaging, and launch managed outreach campaigns.",
      deliverables: [
        "ICP definition",
        "Prospect architecture",
        "Outreach sequence design",
        "Campaign launch",
        "Follow-up management",
        "Meeting booking"
      ],
      outcome: "Consistent flow of qualified sales meetings."
    },
    {
      title: "Phase 02 — Pipeline Structure",
      description: "Once outbound flow is stable, we bring structure to how opportunities move through your pipeline for total visibility.",
      deliverables: [
        "Clean pipeline stage definition",
        "Clear meeting-to-proposal tracking",
        "Lead source tagging",
        "Basic reporting visibility"
      ],
      outcome: "Clear understanding of outbound performance and conversion rates."
    },
    {
      title: "Phase 03 — Optimization & Scaling",
      description: "We refine targeting, messaging, and cadence to increase meeting volume while maintaining quality.",
      deliverables: [
        "Targeting refinement",
        "Messaging iteration",
        "Follow-up cadence tuning",
        "Volume scaling strategy"
      ],
      outcome: "Predictable, scalable outbound pipeline growth."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Revenue System Roadmap.
        </h1>
        <p className="text-teal-400 font-bold uppercase tracking-[0.3em] mb-6 text-xs">
          STAGING AND DEPLOYMENT PHASES
        </p>
        <p className="text-lg md:text-xl text-neutral-300 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
          ARCH builds revenue in layers—starting with outbound pipeline control and expanding into long-term operational stability.
        </p>
        <Button to="/contact" className="px-12 py-5 text-base">Request System Audit</Button>
      </section>

      {/* Phases Section */}
      <section className="space-y-12">
        {phases.map((phase, i) => (
          <DepthCard key={i} className="group">
            <div className="flex flex-col md:flex-row gap-16 p-2">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{phase.title}</h3>
                <p className="text-neutral-300 font-medium leading-relaxed mb-10 text-sm md:text-base">
                  {phase.description}
                </p>
                <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 inline-block w-full">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400 mb-2">OUTCOME</h4>
                  <p className="text-white font-semibold text-sm">{phase.outcome}</p>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-8">DELIVERABLES</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  {phase.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] text-neutral-200 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DepthCard>
        ))}
      </section>

      {/* Long-Term Section */}
      <section className="max-w-5xl mx-auto py-24 border-t border-white/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Long-Term Evolution</h2>
          <p className="text-neutral-300 text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            As outbound volume increases, systems mature. ARCH supports deeper performance visibility, advanced tracking discipline, and long-term outbound stability.
          </p>
          <div className="inline-block px-8 py-3 rounded-full bg-white/[0.04] border border-white/10">
            <p className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">
              STABILITY-FIRST DEPLOYMENT PROTOCOL
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 flex flex-col items-center text-center">
        <div className="w-full max-w-5xl p-16 md:p-24 rounded-[4rem] bg-neutral-900/60 border border-white/10 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-tight">
            Install Your Outbound<br />Revenue System.
          </h2>
          <p className="text-neutral-300 text-lg font-medium mb-12">
            Start with a structured audit. Build from foundation to scale.
          </p>
          <Button to="/contact" className="px-12 py-5 text-base">Request System Audit</Button>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;