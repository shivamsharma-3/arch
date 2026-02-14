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
      details: ["Technical stack setup", "Campaign deployment", "Follow-up management"]
    },
    {
      title: "Optimization & Scaling",
      description: "We refine targeting, messaging, and cadence to increase meeting volume and consistency.",
      details: ["Messaging iteration", "Database maintenance", "Performance scaling"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      <header className="mb-8">
        <h1 className="text-5xl font-bold tracking-tighter mb-2">The Outbound Protocol.</h1>
        <p className="text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
          Our methodology is rooted in systems engineering. We build outbound pipelines for long-term predictability and scale.
        </p>
      </header>

      <div className="space-y-4">
        {phases.map((phase, i) => (
          <div 
            key={i}
            className="group relative"
            style={{ 
              transform: `translateZ(${i * 10}px)`,
              zIndex: phases.length - i 
            }}
          >
            <div className="p-8 md:p-10 rounded-[2rem] bg-[#0d0d0f] md:bg-neutral-900/40 border border-white/5 md:backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/60 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                <div className="md:w-3/5">
                  <div className="text-xs font-bold text-teal-500 mb-2 uppercase tracking-widest">Phase 0{i+1}</div>
                  <h2 className="text-3xl font-bold mb-4">{phase.title}</h2>
                  <p className="text-neutral-400 font-medium leading-relaxed max-w-prose">
                    {phase.description}
                  </p>
                </div>
                <div className="md:w-2/5 flex flex-col justify-center">
                  <ul className="grid grid-cols-1 gap-4">
                    {phase.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                        <span className="leading-tight">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12 text-center">
        <p className="text-neutral-500 italic font-medium">Ready to see the blueprint for your outbound growth?</p>
      </section>
    </div>
  );
};

export default HowItWorks;