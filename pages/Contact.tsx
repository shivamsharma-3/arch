import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232dd4bf' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1.25rem center',
    backgroundSize: '0.85rem'
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
      {/* Left Column: Contextual Value */}
      <div className="lg:w-5/12">
        <div className="lg:sticky lg:top-32">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight text-white">
            Private Outbound<br />System Diagnostic.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 font-medium leading-relaxed mb-10">
            A structured review of your outbound infrastructure to determine system fit. We identify targeting leaks and provide a strategic roadmap for predictable growth.
          </p>
          
          <div className="space-y-8 mb-10">
            {[
              { t: "Targeting Review", d: "We assess your ICP mapping and prospect data quality to ensure high-fit outreach." },
              { t: "Logic Validation", d: "We stress-test your outreach messaging and sequence logic against B2B response trends." },
              { t: "Outbound Blueprint", d: "A written roadmap for installing a predictable, managed outbound channel." }
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center text-xs font-black flex-shrink-0 border border-teal-500/10">{i+1}</div>
                <div>
                  <h3 className="font-bold text-white text-base mb-0.5">{item.t}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-medium">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
            <h4 className="text-[9px] font-black uppercase tracking-widest text-teal-400 mb-5">Partnership Protocol</h4>
            <ul className="space-y-3">
              {[
                "30–45 minute technical review",
                "Direct diagnosis of current setup",
                "Written summary of system gaps",
                "Zero obligation to proceed"
              ].map((li, i) => (
                <li key={i} className="text-xs text-neutral-300 flex items-center gap-3">
                  <div className="w-1 h-1 bg-teal-500 rounded-full" />
                  <span className="font-medium">{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Column: Premium Selective Form */}
      <div className="lg:w-7/12" id="audit-form-container">
        
        {/* Step 9 — Pre-Frame Section */}
        <div className="mb-8 px-8 py-6 rounded-3xl bg-[#0a1211] border border-teal-500/10 shadow-xl animate-reveal-up">
          <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-teal-400 mb-5">Qualification Criteria</h4>
          <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-4">This diagnostic is ideal for:</p>
          <ul className="space-y-3">
            {[
              "B2B service firms doing $2K+ per month",
              "Founders relying too heavily on referrals",
              "Teams wanting predictable outbound pipeline"
            ].map((bullet, i) => (
              <li key={i} className="flex gap-3 items-center text-xs text-neutral-200 font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Compact Form Container */}
        <div className="p-8 md:p-10 lg:p-12 rounded-[2.5rem] bg-[#0d0d0f] md:bg-neutral-900/60 border border-white/10 md:backdrop-blur-3xl shadow-2xl relative animate-reveal-up" style={{ animationDelay: '0.1s' }}>
          
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-3">
               <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
               <span className="text-[9px] font-black uppercase tracking-[0.25em] text-teal-500/80">Selective Onboarding</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Private Outbound System Diagnostic</h2>
            <p className="text-xs text-neutral-500 font-medium leading-relaxed mb-3">
              A structured review of your outbound infrastructure to determine system fit.
            </p>
            <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest">
              Limited to a select number of partnerships each quarter.
            </p>
          </div>

          <form
            name="request-audit"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6 md:space-y-8"
          >
            <input type="hidden" name="form-name" value="request-audit" />
            <input type="hidden" name="bot-field" />

            {/* Field Group 1: Identity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Full Name</label>
                <input 
                  required
                  name="name"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/40 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-sm placeholder-neutral-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Work Email</label>
                <input 
                  required
                  name="email"
                  type="email"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/40 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-sm placeholder-neutral-500"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Company Name</label>
                <input 
                  required
                  name="company"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/40 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-sm placeholder-neutral-500"
                  placeholder="Acme Corp"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Website URL</label>
                <input 
                  required
                  name="website"
                  type="url"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/40 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-sm placeholder-neutral-500"
                  placeholder="https://company.com"
                />
              </div>
            </div>

            {/* Field Group 2: Qualification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Team Size</label>
                <select 
                  required
                  name="company_size" 
                  className="w-full px-5 py-4 rounded-2xl bg-[#0f1414] border border-teal-500/10 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/5 outline-none text-white font-medium appearance-none text-sm cursor-pointer transition-all hover:bg-[#151d1d]"
                  style={selectStyle}
                  defaultValue=""
                >
                  <option value="" disabled>Select size...</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Monthly Revenue Range</label>
                <select 
                  required
                  name="revenue_range" 
                  className="w-full px-5 py-4 rounded-2xl bg-[#0f1414] border border-teal-500/10 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/5 outline-none text-white font-medium appearance-none text-sm cursor-pointer transition-all hover:bg-[#151d1d]"
                  style={selectStyle}
                  defaultValue=""
                >
                  <option value="" disabled>Select range...</option>
                  <option value="Under $25K">Under $2K</option>
                  <option value="$25K–$75K">$2K–$7K</option>
                  <option value="$75K–$200K">$7K–$20K</option>
                  <option value="$200K+">$20K+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Current Outbound / CRM Stack</label>
              <input 
                required
                name="outbound_stack"
                className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/40 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-sm placeholder-neutral-500"
                placeholder="e.g., HubSpot, Salesforce, Apollo, manual outreach, etc."
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Biggest Outbound Bottleneck</label>
              <textarea 
                name="bottleneck"
                className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/40 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-sm placeholder-neutral-500 min-h-[110px] resize-none"
                placeholder="Describe your current outreach friction or primary growth targets..."
              />
            </div>

            {/* Submission Section */}
            <div className="pt-6 space-y-8">
              <Button className="w-full py-5 text-xs uppercase tracking-[0.35em] font-black shadow-xl hover:scale-[1.01] hover:bg-neutral-100 transition-all">
                Submit for Private Review
              </Button>
              <div className="flex flex-col items-center gap-5">
                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.25em] text-center max-w-sm leading-relaxed">
                  Reviewed personally. No sales team. No retainers discussed before diagnostic.
                </p>
                <div className="h-[1px] w-20 bg-white/5" />
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-teal-500/40" />
                  <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest">
                    ARCH ENCRYPTED SUBMISSION
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;