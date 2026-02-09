import React from 'react';
import Button from '../components/Button';
import SystemFlow from '../components/SystemFlow';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-8 flex flex-col items-center text-center max-w-6xl mx-auto perspective-2000">
        
        {/* Eyebrow / Qualification */}
        <div className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-teal-500/20 bg-[#0a1211] md:bg-teal-500/5 md:backdrop-blur-xl mb-8 overflow-hidden transition-all duration-700 hover:border-teal-500/40 hover:bg-teal-500/10 animate-reveal-up shadow-[0_0_40px_rgba(45,212,191,0.05)]">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-teal-500 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
            <div className="relative w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(45,212,191,1)]"></div>
          </div>
          <span className="text-teal-400 text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase leading-none antialiased">
            ENGINEERED FOR B2B SERVICE FIRMS WITH $1K+ ACV
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"></div>
        </div>

        {/* Primary Headline */}
        <h1 className="relative text-5xl md:text-8xl lg:text-[76px] font-extrabold tracking-tighter leading-[0.85] mb-6 text-white animate-reveal-up" style={{ animationDelay: '0.05s' }}>
          <span className="inline-block drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">Revenue Infrastructure,</span><br />
          <span className="text-neutral-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">Not Revenue Luck.</span>
        </h1>

        {/* Bridge Line */}
        <p className="text-teal-500/80 text-xs md:text-base font-bold uppercase tracking-[0.2em] mb-6 animate-reveal-up" style={{ animationDelay: '0.1s' }}>
          Standardizing the mechanics of predictable outbound sales.
        </p>

        {/* Subheadline - CLARIFIED FOR 30-DAY OUTCOME */}
        <p className="text-base md:text-xl text-neutral-400 max-w-3xl mb-12 font-medium tracking-tight leading-relaxed animate-reveal-up" style={{ animationDelay: '0.15s' }}>
          We don't just advise; we install and operate. Within 30 days, ARCH maps your market, repairs your data plumbing, and deploys the first node of your managed outbound engine to replace manual uncertainty with architectural precision.
        </p>

        {/* CTA Block */}
        <div className="flex flex-col items-center gap-6 mb-16 animate-reveal-up" style={{ animationDelay: '0.2s' }}>
          <Button to="/contact" className="px-12 py-5 text-lg shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
            Request System Audit
          </Button>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[10px] text-neutral-500 font-black uppercase tracking-[0.3em]">
              Manual partner review
            </p>
            <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">
              No sales deck. Zero obligation.
            </p>
          </div>
        </div>

        {/* Audit Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full animate-reveal-up" style={{ animationDelay: '0.3s' }}>
          {[
            { label: "Technical Review", val: "30–45 min System Audit" },
            { label: "Pipeline Diagnosis", val: "Identify your conversion leaks" },
            { label: "Blueprint", val: "Written Infrastructure Plan" },
            { label: "Zero Friction", val: "Direct audit, not a sales pitch" }
          ].map((item, i) => (
            <div key={i} className="px-6 py-5 rounded-2xl bg-white/[0.02] border border-white/5 text-left shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors hover:bg-white/[0.04]">
              <div className="text-[9px] font-black text-teal-500/50 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-sm text-neutral-300 font-bold">{item.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: What the System Audit Actually Covers */}
      <section className="px-6 max-w-6xl mx-auto w-full py-20 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-4 text-white">
          What the System Audit Covers.
        </h2>
        <p className="text-neutral-500 text-center mb-16 font-medium uppercase tracking-[0.2em] text-xs">Diagnostic components of your revenue blueprint.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              t: "ICP Clarity & Mapping", 
              d: "We identify exactly who you should be selling to by analyzing your highest-LTV clients and current market response data." 
            },
            { 
              t: "Data Plumbing Diagnosis", 
              d: "We audit your CRM health and data sourcing methods to identify technical leaks that are currently killing your conversion rates." 
            },
            { 
              t: "Logic Validation", 
              d: "We evaluate your targeting and messaging logic against current B2B response trends to verify market resonance." 
            },
            { 
              t: "Outbound Pipeline Stress-Test", 
              d: "An assessment of your current follow-up sequences and routing rules to find where prospects are falling out of the funnel." 
            },
            { 
              t: "Infrastructure Gap Analysis", 
              d: "A review of your technical stack to determine which tools are assets and which are creating operational friction." 
            },
            { 
              t: "Actionable Revenue Blueprint", 
              d: "The final output is a written, engineering-grade document outlining the exact outbound plumbing needed to sustain growth." 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-neutral-900/30 border border-white/5 shadow-xl">
              <h3 className="text-teal-400 font-bold mb-3 text-lg flex items-center gap-3">
                <span className="text-[10px] text-teal-500/40 font-mono">/0{i+1}</span>
                {item.t}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol Section */}
      <section className="px-6 max-w-6xl mx-auto w-full py-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-12 text-white">
          The Revenue Audit Protocol.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              step: "01", 
              t: "Technical Ingestion", 
              d: "We review your CRM architecture, data health, and current outbound delivery scores to find technical bottlenecks." 
            },
            { 
              step: "02", 
              t: "Logic Validation", 
              d: "We stress-test your ICP targeting and messaging logic against current B2B market responses." 
            },
            { 
              step: "03", 
              t: "System Blueprint", 
              d: "You receive a clear engineering document outlining the outbound plumbing needed to sustain growth." 
            }
          ].map((item, i) => (
            <div key={i} className="relative p-10 rounded-3xl bg-neutral-800/30 border border-white/5 shadow-2xl">
              <span className="text-5xl font-black text-teal-500/10 absolute top-6 right-8">{item.step}</span>
              <h3 className="text-xl font-bold text-white mb-4">{item.t}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Positioning Section */}
      <section className="px-6 max-w-6xl mx-auto w-full py-20 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white leading-tight">
              Why ARCH is the<br />Standard in Revenue Ops.
            </h2>
            <p className="text-neutral-400 text-xl font-medium mb-8 leading-relaxed">
              Most "agencies" sell temporary hacks. We build permanent infrastructure. We treat outbound as a predictable engineering discipline, not a creative experiment.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { t: "Systems over Tactics", d: "Isolated campaigns fail. Unified systems compound in value over time." },
              { t: "Infrastructure over Hype", d: "We focus on data-routing and conversion logic, not the latest AI gimmicks." },
              { t: "Predictability over Sprints", d: "A steady, reliable pipeline beats sporadic bursts of referrals every time." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0 text-teal-500 font-bold">/</div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.t}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Operational Success Section */}
      <section className="px-6 max-w-6xl mx-auto w-full py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-teal-500/70 mb-4 block">The Phase-1 Outcome</span>
            <h2 className="text-4xl font-bold text-white mb-6">Replacing manual uncertainty with a managed engine.</h2>
            <p className="text-neutral-400 text-lg font-medium leading-relaxed">
              Success after the initial build is defined by the removal of guesswork. We install a managed outbound system that works in the background to produce qualified sales conversations while providing full visibility into your pipeline health.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Consistent, automated outreach cadence",
              "Managed outbound node operations",
              "Direct injection of meetings into CRM",
              "Full pipeline attribution & visibility"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-neutral-900/50 border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span className="text-sm text-neutral-200 font-bold uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disqualification Section - UPDATED WITH BOUNDARIES */}
      <section className="px-6 max-w-6xl mx-auto w-full py-12">
        <div className="p-12 md:p-16 rounded-[4rem] border border-white/5 bg-[#0d0d0f] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-teal-500/[0.01] pointer-events-none" />
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Who we work with.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-teal-400 font-black text-[11px] uppercase tracking-[0.4em]">Optimal Partnership</h3>
              <ul className="space-y-6">
                {[
                  "B2B Service companies with high-LTV contracts",
                  "Firms with a validated offer seeking operational scale",
                  "Leadership who values infrastructure over 'quick wins'"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-neutral-300 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8 opacity-60">
              <h3 className="text-neutral-500 font-black text-[11px] uppercase tracking-[0.4em]">Operational Boundaries</h3>
              <ul className="space-y-6">
                {[
                  "ARCH does NOT run paid ads or PPC campaigns",
                  "We do NOT provide content marketing or SEO services",
                  "We do NOT execute one-off lead-gen blasts",
                  "We focus exclusively on revenue system architecture"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-neutral-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 flex flex-col items-center text-center">
        <div className="w-full max-w-4xl p-12 md:p-20 rounded-[4rem] bg-gradient-to-b from-neutral-900/40 to-neutral-900/10 border border-white/5 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-teal-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h3 className="text-4xl md:text-7xl font-extrabold mb-8 text-white relative z-10 tracking-tighter leading-[1]">
            Build Your Revenue<br />Infrastructure.
          </h3>
          <div className="flex flex-col items-center gap-8 relative z-10">
            <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">
              No retainers. No sales pitch. Just a clear roadmap.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;