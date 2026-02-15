import React from 'react';
import Button from '../components/Button';
import SystemFlow from '../components/SystemFlow';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col pb-16">
      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-12 flex flex-col items-center text-center max-w-7xl mx-auto perspective-2000">
        
        {/* Eyebrow / Qualification */}
        <div className="group relative inline-flex items-center gap-3 px-5 py-2 rounded-full border border-teal-500/20 bg-[#0a1211] md:bg-teal-500/10 md:backdrop-blur-xl mb-8 overflow-hidden transition-all duration-700 hover:border-teal-500/40 animate-reveal-up shadow-[0_0_30px_rgba(45,212,191,0.05)]">
          <div className="relative w-1.5 h-1.5">
            <div className="absolute inset-0 bg-teal-500 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
            <div className="relative w-1.5 h-1.5 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
          </div>
          <span className="text-teal-400 text-[10px] font-bold tracking-[0.3em] uppercase leading-none antialiased">
            B2B SERVICE FIRMS • $5K+ ACV
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="relative text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tight mb-8 text-white animate-reveal-up" style={{ animationDelay: '0.05s' }}>
          Outbound Revenue Systems, Not Revenue Luck.
        </h1>

        {/* Bridge Line */}
        <div className="max-w-4xl mb-8 animate-reveal-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-teal-400 text-sm md:text-base font-semibold uppercase tracking-[0.2em]">
            ARCH installs and operates structured outbound systems that generate consistent, qualified sales meetings.
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-base md:text-xl text-neutral-300 max-w-3xl mb-12 font-medium tracking-tight leading-relaxed animate-reveal-up" style={{ animationDelay: '0.15s' }}>
          We replace inconsistent prospecting with disciplined pipeline execution. ARCH maps your target market, builds a managed outbound engine, and injects qualified sales conversations into your sales calendar.
        </p>

        {/* CTA Block */}
        <div className="flex flex-col items-center gap-6 mb-24 animate-reveal-up" style={{ animationDelay: '0.2s' }}>
          <Button to="/contact" className="px-12 py-5 text-base shadow-xl">
            Request System Audit
          </Button>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.3em]">
              Partner-led diagnostic review
            </p>
          </div>
        </div>

        {/* Audit Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full animate-reveal-up" style={{ animationDelay: '0.3s' }}>
          {[
            { label: "Technical Review", val: "30–45 min System Audit" },
            { label: "Pipeline Diagnosis", val: "Identify targeting leaks" },
            { label: "Strategic Blueprint", val: "Written Outbound Plan" },
            { label: "Zero Friction", val: "Direct audit, not a sales pitch" }
          ].map((item, i) => (
            <div key={i} className="px-6 py-6 rounded-2xl bg-white/[0.04] border border-white/10 text-left transition-colors hover:bg-white/[0.06]">
              <div className="text-[9px] font-bold text-teal-400 uppercase tracking-widest mb-1.5">{item.label}</div>
              <div className="text-sm text-white font-bold">{item.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Audit Cover Section */}
      <section className="px-6 max-w-7xl mx-auto w-full py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4 text-white">
          The System Audit Covers.
        </h2>
        <p className="text-neutral-300 text-center mb-16 font-medium uppercase tracking-[0.15em] text-xs">A diagnostic review of your outbound pipeline.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "ICP Clarity & Market Mapping", d: "We identify exactly who you should be targeting based on deal size, industry fit, and buyer intent." },
            { t: "Prospect Architecture", d: "We design structured prospect lists built for outbound performance — not scraped chaos." },
            { t: "Messaging Validation", d: "We evaluate your outreach messaging against real market response patterns." },
            { t: "Follow-Up Logic Review", d: "We analyze your current follow-up structure and identify drop-off points." },
            { t: "Pipeline Injection Plan", d: "We outline how structured outbound will feed qualified meetings into your sales pipeline." },
            { t: "Outbound System Blueprint", d: "You receive a clear roadmap for installing and operating a predictable outbound engine." }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-3xl bg-neutral-900/40 border border-white/10 shadow-xl hover:border-white/20 transition-colors">
              <h3 className="text-teal-400 font-semibold mb-4 text-lg flex items-center gap-3">
                <span className="text-[10px] text-teal-500/50 font-mono">0{i+1}</span>
                {item.t}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Rigor Section */}
      <section className="px-6 max-w-7xl mx-auto w-full py-24 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white leading-tight">
              Operational Rigor in Cold Outreach.
            </h2>
            <p className="text-neutral-300 text-lg font-medium mb-10 leading-relaxed max-w-lg">
              Most outbound fails due to inconsistent execution, weak targeting, and poor follow-up discipline. We operate outreach with controlled targeting, structured cadence, and measurable output.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { t: "Systems over Volume", d: "Spam is a tactic. A unified outbound system is an asset that compounds in value." },
              { t: "Execution over Gimmicks", d: "We focus on targeting logic and market resonance, not fleeting AI hacks." },
              { t: "Predictability over Sprints", d: "A reliable pipeline injection beats sporadic referral spikes every time." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex gap-6 hover:bg-white/[0.05] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0 text-teal-400 font-bold">/</div>
                <div>
                  <h4 className="text-white font-semibold mb-1.5">{item.t}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Outcome Section */}
      <section className="px-6 max-w-7xl mx-auto w-full py-24 border-y border-white/10 bg-white/[0.01]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-teal-400 mb-6 block">PHASE-1 RESULT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Replacing Inconsistent Prospecting with Structured Outbound Execution.</h2>
            <p className="text-neutral-300 text-lg font-medium leading-relaxed">
              We install a managed outbound engine that operates continuously to produce qualified sales conversations while providing full visibility into your revenue pipeline.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Structured outreach cadence",
              "Managed multi-channel operations",
              "Injection of qualified sales meetings",
              "Clear pipeline tracking & reporting"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-neutral-900/60 border border-white/10">
                <div className="w-1 h-1 rounded-full bg-teal-400" />
                <span className="text-[11px] text-neutral-200 font-bold uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="px-6 max-w-7xl mx-auto w-full py-24">
        <div className="p-12 md:p-16 rounded-[4rem] border border-white/10 bg-neutral-900/90 md:backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-teal-500/[0.02] pointer-events-none" />
          <h2 className="text-2xl font-bold text-center mb-16 text-white tracking-wide">TARGET PARTNERSHIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h3 className="text-teal-400 font-bold text-[11px] uppercase tracking-[0.3em] mb-10">IDEAL PARTNERS</h3>
              <ul className="space-y-6">
                {[
                  "Average deal size above $3,000",
                  "B2B Service companies with high-LTV contracts",
                  "Firms with a validated offer seeking to scale outreach",
                  "Leadership who values long-term systems over quick wins"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-neutral-200 font-medium">
                    <div className="w-1 h-1 rounded-full bg-teal-500/60 mt-3 flex-shrink-0" />
                    <span className="leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h3 className="text-neutral-400 font-bold text-[11px] uppercase tracking-[0.3em] mb-10">OPERATIONAL BOUNDARIES</h3>
              <ul className="space-y-6">
                {[
                  "ARCH does NOT run paid ads or PPC management",
                  "We do NOT provide content marketing or SEO",
                  "We do NOT execute one-off list blasts",
                  "We focus exclusively on outbound revenue systems"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-neutral-400 font-medium">
                    <div className="w-1 h-1 rounded-full bg-neutral-700 mt-3 flex-shrink-0" />
                    <span className="leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-24 flex flex-col items-center text-center">
        <div className="w-full max-w-5xl p-16 md:p-24 rounded-[4rem] bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 border border-white/10 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-teal-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white relative z-10 tracking-tight leading-[1.1]">
            Standardize Your Outbound Pipeline.
          </h2>
          <div className="flex flex-col items-center gap-8 relative z-10">
            <p className="text-xs text-neutral-300 uppercase tracking-[0.2em] font-bold">
              Partner-led diagnostic review. No sales pitch.
            </p>
            <Button to="/contact" className="px-12 py-5 text-base">Book System Audit</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;