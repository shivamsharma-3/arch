
import React from 'react';
import Button from '../components/Button';

const HowItWorks: React.FC = () => {
  const phases = [
    {
      title: "Outbound System Audit",
      description: "We evaluate your current outbound efforts, targeting logic, and pipeline performance to identify structural gaps.",
      details: ["Outreach gap analysis", "Market fit verification", "Pipeline performance review"]
    },
    {
      title: "ICP & Messaging Architecture",
      description: "We define your ideal customer profile and design messaging frameworks built for response.",
      details: ["ICP architecture", "Messaging logic", "Response pattern validation"]
    },
    {
      title: "Outbound Engine Deployment",
      description: "We build prospect lists, launch outreach campaigns, and manage follow-ups on your behalf.",
      details: ["Outreach infrastructure configuration", "Campaign deployment", "Follow-up management"]
    },
    {
      title: "Optimization & Scaling",
      description: "We refine targeting, messaging, and cadence to increase meeting volume and consistency.",
      details: ["Messaging iteration", "Target account refinement", "Performance scaling"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Outbound Protocol.</h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
          Our methodology is rooted in systems thinking. We build outbound pipelines for long-term predictability and scale.
        </p>
      </header>

      <div className="space-y-6">
        {phases.map((phase, i) => (
          <div 
            key={i}
            className="group relative"
          >
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-[#0d0d0f] md:bg-neutral-900/40 border border-white/5 md:backdrop-blur-md transition-all duration-500 hover:border-white/20 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                <div className="md:w-3/5">
                  <div className="text-[10px] font-bold text-teal-500/60 mb-3 uppercase tracking-[0.3em]">PHASE 0{i+1}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{phase.title}</h2>
                  <p className="text-neutral-400 font-medium leading-relaxed text-sm md:text-base">
                    {phase.description}
                  </p>
                </div>
                <div className="md:w-2/5 flex flex-col justify-center">
                  <ul className="grid grid-cols-1 gap-5">
                    {phase.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[13px] text-neutral-300 font-medium">
                        <div className="w-1 h-1 rounded-full bg-teal-500/40 mt-2 flex-shrink-0" />
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20 text-center">
        <p className="text-neutral-500 text-sm font-medium tracking-wide">Ready to see the blueprint for your outbound growth?</p>
      </section>
    </div>
  );
};

export default HowItWorks;
