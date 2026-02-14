import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-6xl mb-8 brand-font">ARCH</h1>
        <div className="w-12 h-1 bg-teal-500/60 mx-auto rounded-full" />
      </header>

      <div className="space-y-16">
        {/* Section 1: Core Narrative */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-8">THE LOGIC</h2>
          <p className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-8 max-w-2xl">
            Systems Over Stories.
          </p>
          <div className="space-y-6 text-lg text-neutral-300 font-medium leading-relaxed max-w-3xl">
            <p>
              Outbound revenue is a designed operation—not a random event. ARCH replaces inconsistent prospecting with engineering-grade outbound systems that produce predictable, qualified sales flow.
            </p>
            <p>
              We bridge the gap between strategy and execution. By architecting targeting logic and managing complex outreach cadences, we transform outbound from a manual chore into a compounding revenue asset.
            </p>
          </div>
        </section>

        {/* Section 2: Key Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Systems Engineering", d: "We treat outreach as a technical stack, ensuring data hygiene and technical deliverability." },
            { t: "Operational Rigor", d: "Managed execution that replaces referral dependency with controlled, measurable growth." },
            { t: "Long-term Assets", d: "We build systems that live inside your firm, providing permanent control over your pipeline." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">{item.t}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 3: Identity Markers */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-8">ARCH IS:</h3>
            <ul className="space-y-4 text-neutral-200 font-medium">
              <li className="flex gap-4 items-center">
                <span className="text-teal-400">/</span>
                <span className="text-sm uppercase tracking-widest font-bold">Systematically Focused</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-teal-400">/</span>
                <span className="text-sm uppercase tracking-widest font-bold">Outbound Operators</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-teal-400">/</span>
                <span className="text-sm uppercase tracking-widest font-bold">Revenue Architects</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-teal-400">/</span>
                <span className="text-sm uppercase tracking-widest font-bold">Performance Rigorous</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-8">ARCH IS NOT:</h3>
            <ul className="space-y-4 text-neutral-400 font-medium">
              <li className="flex gap-4 items-center">
                <span className="text-neutral-700">-</span>
                <span className="text-sm uppercase tracking-widest font-bold">A Lead-Gen Agency</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-neutral-700">-</span>
                <span className="text-sm uppercase tracking-widest font-bold">An Ads / SEO Shop</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-neutral-700">-</span>
                <span className="text-sm uppercase tracking-widest font-bold">AI Hype Merchants</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-neutral-700">-</span>
                <span className="text-sm uppercase tracking-widest font-bold">A Volume Spammer</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Final Positioning */}
        <section className="p-12 md:p-16 rounded-[4rem] bg-neutral-900/60 border border-white/10 text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Built for scale.</h2>
          <p className="text-neutral-300 font-medium max-w-xl mx-auto leading-relaxed">
            We partner with B2B organizations that view outbound systems as a critical growth asset and require an operational partner to build and manage them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;