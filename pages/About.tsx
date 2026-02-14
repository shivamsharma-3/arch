import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-6xl mb-6 brand-font">ARCH</h1>
        <div className="w-12 h-1 bg-teal-500 mx-auto rounded-full" />
      </header>

      <div className="space-y-12">
        {/* Section 1: Philosophy */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-4">The Philosophy</h2>
          <p className="text-3xl font-medium leading-tight text-neutral-200 mb-6 max-w-2xl">
            Outbound revenue is a designed output, not a random event.
          </p>
          <div className="mt-4 space-y-4 text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl">
            <p>
              We treat outbound as a structured operating system — not a marketing experiment. Our focus is building predictable meeting generation systems for B2B service companies.
            </p>
            <p>
              ARCH was founded to treat outbound systems with the same rigor as systems engineering. We build the operational pipelines required to sustain growth beyond personal networks and referrals.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 2: Why ARCH Exists */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-4">The Rationale</h2>
          <div className="space-y-4 text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl">
            <p>
              The gap between outbound strategy and technical execution is where pipeline growth stalls. Strategy lives in slides, while execution remains trapped in manual, unrecorded processes. 
            </p>
            <p>
              We exist to bridge this gap by building revenue assets—not just running lead-gen campaigns. By centralizing targeting logic, outreach sequences, and performance data into a unified system, we transform outbound into a predictable operation.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 3: Methodology */}
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-4">The Methodology</h2>
          <div className="space-y-4 text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl">
            <p>
              Our methodology is rooted in systems thinking. We map your target market, architect outreach sequences that handle complex branching, and configure tracking structures to serve as a single source of truth for outbound performance. 
            </p>
            <p>
              This is a process of continuous execution and refinement. We deploy feedback loops where every interaction informs the next, ensuring your outbound engine evolves in lockstep with buyer behavior.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 4: What we are / aren't */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-4">What we are</h3>
            <ul className="space-y-3 text-neutral-300 font-medium">
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                <span>Systematically focused</span>
              </li>
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                <span>Outbound revenue operators</span>
              </li>
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                <span>Logic-driven architects</span>
              </li>
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                <span>Performance-rigorous</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-4">What we aren't</h3>
            <ul className="space-y-3 text-neutral-500 font-medium">
              <li className="flex gap-4">
                <span>-</span>
                <span>An ads agency</span>
              </li>
              <li className="flex gap-4">
                <span>-</span>
                <span>A source of AI hype</span>
              </li>
              <li className="flex gap-4">
                <span>-</span>
                <span>A one-off lead shop</span>
              </li>
              <li className="flex gap-4">
                <span>-</span>
                <span>A full CRM consulting firm</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Long-term Positioning */}
        <section className="p-8 rounded-[3rem] bg-neutral-900/50 border border-white/5 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-2xl font-bold mb-2">Built for scale.</h2>
          <p className="text-neutral-400 font-medium max-w-xl mx-auto leading-relaxed">
            We partner with B2B organizations that view outbound systems as a critical growth asset and require an operational partner to build and manage them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;