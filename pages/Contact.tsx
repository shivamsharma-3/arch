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
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* Left Column: Contextual Value */}
      <div className="lg:w-1/2">
        <div className="lg:sticky lg:top-32">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-white">
            Private Outbound<br />System Diagnostic.
          </h1>
          <p className="text-base md:text-lg text-neutral-300 font-medium leading-relaxed mb-8">
            A structured review of your outbound infrastructure to determine system fit. We identify targeting leaks and provide a strategic roadmap for growth.
          </p>
          
          <div className="space-y-6 mb-10">
            {[
              { t: "Targeting Review", d: "We assess your ICP mapping and prospect data quality to ensure high-fit outreach." },
              { t: "Logic Validation", d: "We stress-test your outreach messaging and sequence logic against response trends." },
              { t: "Outbound Blueprint", d: "A written roadmap for installing a predictable, managed outbound channel." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center text-[10px] font-black flex-shrink-0 border border-teal-500/10">{i+1}</div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-0.5">{item.t}</h3>
                  <p className="text-[11px] text-neutral-400 leading-relaxed font-medium">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-7 rounded-[1.5rem] bg-white/[0.02] border border-white/5 inline-block">
            <h4 className="text-[8px] font-black uppercase tracking-widest text-teal-400 mb-4">Partnership Protocol</h4>
            <ul className="space-y-2.5">
              {[
                "30–45 minute technical review",
                "Direct diagnosis of current setup",
                "Written summary of system gaps"
              ].map((li, i) => (
                <li key={i} className="text-[11px] text-neutral-300 flex items-center gap-3">
                  <div className="w-1 h-1 bg-teal-500 rounded-full" />
                  <span className="font-medium">{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Column: Premium Selective Form */}
      <div className="lg:w-1/2 max-w-xl" id="audit-form-container">
        
        {/* Step 9 — Pre-Frame Section */}
        <div className="mb-6 px-7 py-5 rounded-2xl bg-[#0a1211] border border-teal-500/10 shadow-lg animate-reveal-up">
          <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-teal-400 mb-3">Diagnostic Eligibility</h4>
          <ul className="space-y-2">
            {[
              "B2B service firms doing $25K+ per month",
              "Founders relying too heavily on referrals",
              "Teams wanting predictable outbound pipeline"
            ].map((bullet, i) => (
              <li key={i} className="flex gap-3 items-center text-[11px] text-neutral-200 font-semibold">
                <div className="w-1 h-1 rounded-full bg-teal-400" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Compact Form Container */}
        <div className="p-7 md:p-9 rounded-[2rem] bg-[#0d0d0f] md:bg-neutral-900/60 border border-white/10 md:backdrop-blur-3xl shadow-2xl relative animate-reveal-up" style={{ animationDelay: '0.1s' }}>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2.5">
               <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_6px_rgba(45,212,191,0.6)]" />
               <span className="text-[8px] font-black uppercase tracking-[0.2em] text-teal-500/80">Selective Onboarding</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-1.5 tracking-tight">Diagnostic Application</h2>
            <p className="text-[11px] text-neutral-400 font-medium leading-relaxed">
              Limited to a select number of partnerships each quarter.
            </p>
          </div>

          <form
            name="request-audit"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="request-audit" />
            <input type="hidden" name="bot-field" />

            {/* Field Group 1: Identity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold uppercase tracking-widest text-neutral-500 ml-3">Full Name</label>
                <input 
                  required
                  name="name"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-xs placeholder-neutral-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold uppercase tracking-widest text-neutral-500 ml-3">Work Email</label>
                <input 
                  required
                  name="email"
                  type="email"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-xs placeholder-neutral-400"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold uppercase tracking-widest text-neutral-500 ml-3">Company Name</label>
                <input 
                  required
                  name="company"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-xs placeholder-neutral-400"
                  placeholder="Acme Corp"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold uppercase tracking-widest text-neutral-500 ml-3">Website URL</label>
                <input 
                  required
                  name="website"
                  type="url"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-xs placeholder-neutral-400"
                  placeholder="https://company.com"
                />
              </div>
            </div>

            {/* Field Group 2: Qualification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold uppercase tracking-widest text-neutral-500 ml-3">Team Size</label>
                <select 
                  required
                  name="company_size" 
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0f1414] border border-teal-500/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/5 outline-none text-white font-medium appearance-none text-xs cursor-pointer transition-all hover:bg-[#151d1d]"
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
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold uppercase tracking-widest text-neutral-500 ml-3">Monthly Revenue</label>
                <select 
                  required
                  name="revenue_range" 
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0f1414] border border-teal-500/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/5 outline-none text-white font-medium appearance-none text-xs cursor-pointer transition-all hover:bg-[#151d1d]"
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

            <div className="space-y-1.5">
              <label className="text-[8px] font-bold uppercase tracking-widest text-neutral-500 ml-3">Current Outbound / CRM Stack</label>
              <input 
                required
                name="outbound_stack"
                className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-xs placeholder-neutral-400"
                placeholder="e.g., HubSpot, Apollo, manual outreach..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[8px] font-bold uppercase tracking-widest text-neutral-500 ml-3">Biggest Bottleneck</label>
              <textarea 
                name="bottleneck"
                className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/5 transition-all outline-none text-white font-medium text-xs placeholder-neutral-400 min-h-[80px] resize-none"
                placeholder="Describe your current outreach friction..."
              />
            </div>

            {/* Submission Section */}
            <div className="pt-4 space-y-6">
              <Button className="w-full py-4 text-[10px] uppercase tracking-[0.3em] font-black shadow-lg hover:scale-[1.01] hover:bg-neutral-100 transition-all">
                Submit for Private Review
              </Button>
              <div className="flex flex-col items-center gap-4">
                <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] text-center max-w-xs leading-relaxed">
                  Reviewed personally. No sales team. No retainers discussed before diagnostic.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-teal-500/30" />
                  <p className="text-[9px] text-neutral-400 font-black uppercase tracking-widest">
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