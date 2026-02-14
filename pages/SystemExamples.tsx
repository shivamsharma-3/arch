
import React from 'react';
import DepthCard from '../components/DepthCard';

const SystemExamples: React.FC = () => {
  const examples = [
    {
      type: "B2B SaaS Firm",
      problem: "Heavy reliance on referrals and sporadic inbound leads with inconsistent volume.",
      system: "Structured Outbound Engine targeting high-LTV enterprise decision makers with automated multi-channel logic.",
      outcome: "Predictable pipeline growth with 6-10 qualified sales meetings booked per month consistently."
    },
    {
      type: "B2B Tech Agency",
      problem: "Founder was conducting all manual outreach, leading to dry spells between project deliveries.",
      system: "Managed Outbound Architecture focused on niche-market mapping and automated follow-up logic.",
      outcome: "Standardized outreach process that maintains a full pipeline without founder involvement."
    },
    {
      type: "Consulting Services",
      problem: "Lack of targeting clarity and inconsistent messaging led to low outreach response rates.",
      system: "ICP Redefinition and Outbound Messaging overhaul combined with managed multi-channel sequences.",
      outcome: "3x increase in meeting set-rate and improved lead quality from high-fit target accounts."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold tracking-tighter mb-4">System Outcomes.</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-medium">
          Operational outbound systems built for real growth. We focus on qualified meetings and pipeline injection.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {examples.map((example, i) => (
          <DepthCard key={i} className="group cursor-default">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  {example.type}
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Problem</h2>
                <p className="text-neutral-400 font-medium leading-relaxed italic text-sm">{example.problem}</p>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">The System Installed</h3>
                  <p className="text-neutral-300 font-medium leading-relaxed mb-6 text-sm">{example.system}</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-teal-500/70 mb-1">Measurable Result</h4>
                  <p className="text-neutral-400 font-medium text-sm">{example.outcome}</p>
                </div>
              </div>
            </div>
          </DepthCard>
        ))}
      </div>
    </div>
  );
};

export default SystemExamples;
