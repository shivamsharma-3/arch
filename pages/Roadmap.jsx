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
      title: "Phase 02 — Pipeline Structure & Visibility",
      description: "Once outbound flow is stable, we bring structure to how opportunities move through your pipeline. No complex CRM rebuilds — just clarity.",
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
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-10">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-4 leading-tight">
          The ARCH Revenue System Roadmap.
        </h1>
        <p className="text-teal-500 font-bold uppercase tracking-[0.2em] mb-4">
          A structured, phased approach to installing and operating predictable outbound revenue systems.
        </p>
        <p className="text-lg text-neutral-400 font-medium leading-relaxed mb-8">
          ARCH builds revenue in layers — starting with outbound pipeline control and expanding into long-term operational stability.
        </p>
        <Button to="/contact" className="px-12 py-5 text-lg">
          Request System Audit
        </Button>
      </section>

      {/* Overview Section */}
      <section className="text-center max-w-2xl mx-auto py-6">
        <h2 className="text-3xl font-bold mb-2">Phase-Based Revenue Development</h2>
        <p className="text-neutral-400 font-medium leading-relaxed">
          We don’t deploy everything at once. We build in structured layers — ensuring each stage is operational before expanding.
        </p>
      </section>

      {/* Phases Section */}
      <section className="space-y-8">
        {phases.map((phase, i) => (
          <DepthCard key={i} className="group">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-extrabold text-white mb-3">{phase.title}</h3>
                <p className="text-neutral-400 font-medium leading-relaxed mb-6">
                  {phase.description}
                </p>
                <div className="p-5 rounded-2xl bg-teal-500/5 border border-teal-500/10">
                  <h4 className="text-xs font-black uppercase tracking-widest text-teal-400 mb-1">Outcome</h4>
                  <p className="text-white font-bold">{phase.outcome}</p>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 mb-4">Deliverables</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {phase.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {i === 1 && (
                  <p className="mt-6 text-[10px] text-neutral-600 font-bold uppercase tracking-widest italic">
                    Note: This phase does NOT include deep CRM overhauls or enterprise automation engineering.
                  </p>
                )}
              </div>
            </div>
          </DepthCard>
        ))}
      </section>

      {/* Long-Term Section */}
      <section className="max-w-4xl mx-auto py-12 border-t border-white/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Long-Term Evolution</h2>
          <p className="text-neutral-400 text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-6">
            As your outbound system matures, ARCH can expand into deeper revenue structuring — including advanced tracking, automation logic, and process refinement.
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-white/[0.02] border border-white/5">
            <p className="text-xs text-neutral-500 font-medium">
              These advanced layers are introduced only once outbound fundamentals are stable.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-12 flex flex-col items-center text-center">
        <div className="w-full max-w-4xl p-10 md:p-14 rounded-[4rem] bg-gradient-to-b from-neutral-900/40 to-neutral-900/10 border border-white/5 shadow-2xl">
          <h3 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tighter leading-[1]">
            Install Your Outbound<br />Revenue System.
          </h3>
          <p className="text-neutral-400 text-lg font-medium mb-10">
            Start with a structured audit. Build from foundation to scale.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;