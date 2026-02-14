
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-6xl mb-8 brand-font">ARCH</h1>
        <div className="w-12 h-1 bg-teal-500/40 mx-auto rounded-full" />
      </header>

      <div className="space-y-24">
        {/* Section 1: Philosophy */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600 mb-8">THE PHILOSOPHY</h2>
          <p className="text-3xl md:text-4xl font-semibold leading-tight text-neutral-200 mb-8 max-w-2xl">
            Outbound revenue is a designed system — not a random event.
          </p>
          <div className="space-y-6 text-lg text-neutral-400 font-medium leading-relaxed max-w-3xl">
            <p>
              We build structured outbound operating models that produce predictable meeting flow for B2B service companies.
            </p>
            <p>
              ARCH was founded to treat outbound systems with the same rigor as systems engineering. We build the operational pipelines required to sustain growth beyond personal networks and referrals.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Section 2: Why ARCH Exists */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600 mb-8">THE RATIONALE</h2>
          <div className="space-y-6 text-lg text-neutral-400 font-medium leading-relaxed max-w-3xl">
            <p>
              The gap between outbound strategy and technical execution is where pipeline growth stalls. Strategy lives in slides, while execution remains trapped in manual, unrecorded processes. 
            </p>
            <p>
              We exist to bridge this gap by building revenue assets—not just running lead-gen campaigns. By centralizing targeting logic and outreach sequences into a unified system, we transform outbound into a predictable operation.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Section 3: Methodology */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600 mb-8">THE METHODOLOGY</h2>
          <div className="space-y-6 text-lg text-neutral-400 font-medium leading-relaxed max-w-3xl">
            <p>
              Our methodology is rooted in systems thinking. We map your target market, architect outreach sequences that handle complex branching, and configure tracking structures to serve as a single source of truth for outbound performance. 
            </p>
            <p>
              This is a process of continuous execution and refinement. Every interaction informs the next, ensuring your outbound engine evolves in lockstep with buyer behavior.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Section 4: What we are / aren't */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600 mb-8">WHAT WE ARE</h3>
            <ul className="space-y-4 text-neutral-300 font-medium">
              <li className="flex gap-4 items-center">
                <span className="text-teal-500/50">/</span>
                <span className="text-sm uppercase tracking-widest font-bold">Systematically focused</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-teal-500/50">/</span>
                <span className="text-sm uppercase tracking-widest font-bold">Outbound operators</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-teal-500/50">/</span>
                <span className="text-sm uppercase tracking-widest font-bold">Logic-driven architects</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-teal-500/50">/</span>
                <span className="text-sm uppercase tracking-widest font-bold">Performance-rigorous</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600 mb-8">WHAT WE AREN'T</h3>
            <ul className="space-y-4 text-neutral-500 font-medium">
              <li className="flex gap-4 items-center">
                <span className="text-neutral-800">-</span>
                <span className="text-sm uppercase tracking-widest font-bold">Generic lead-gen agency</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-neutral-800">-</span>
                <span className="text-sm uppercase tracking-widest font-bold">An ads agency</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-neutral-800">-</span>
                <span className="text-sm uppercase tracking-widest font-bold">A source of AI hype</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-neutral-800">-</span>
                <span className="text-sm uppercase tracking-widest font-bold">A one-off lead shop</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Long-term Positioning */}
        <section className="p-12 md:p-16 rounded-[4rem] bg-neutral-900/30 border border-white/5 text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Built for scale.</h2>
          <p className="text-neutral-400 font-medium max-w-xl mx-auto leading-relaxed">
            We partner with B2B organizations that view outbound systems as a critical growth asset and require an operational partner to build and manage them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
