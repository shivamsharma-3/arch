
import React, { useState } from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [crmSelection, setCrmSelection] = useState('');

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232dd4bf' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1.25rem center',
    backgroundSize: '0.85rem'
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-16">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">
          Request Your Outbound<br />System Audit.
        </h1>
        <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-10">
          A professional review of your outbound pipeline. We identify targeting leaks and provide a structured roadmap for predictable growth.
        </p>
        
        <div className="space-y-8">
          {[
            { t: "Targeting Review", d: "We assess your ICP mapping and prospect data quality to ensure high-fit outreach." },
            { t: "Logic Validation", d: "We stress-test your outreach messaging and sequence logic against B2B response trends." },
            { t: "Outbound Blueprint", d: "A written roadmap for installing a predictable, managed outbound channel." }
          ].map((item, i) => (
            <div key={i} className="flex gap-5">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-500 flex items-center justify-center text-sm font-black flex-shrink-0">{i+1}</div>
              <div>
                <h3 className="font-bold text-white text-lg">{item.t}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-teal-500/70 mb-6">Partnership Protocol</h4>
          <ul className="space-y-4">
            {[
              "30–45 minute technical review",
              "Direct diagnosis of current setup",
              "Written summary of system gaps",
              "Zero obligation to proceed"
            ].map((li, i) => (
              <li key={i} className="text-sm text-neutral-400 flex items-center gap-4">
                <div className="w-1 h-1 bg-teal-500/50 rounded-full" />
                <span className="font-medium">{li}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:w-1/2" id="audit-form-container">
        <div className="p-8 md:p-12 rounded-[3rem] bg-[#0d0d0f] md:bg-neutral-900/40 border border-white/5 md:backdrop-blur-2xl shadow-2xl relative">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Audit Application</h2>
            <p className="text-sm text-neutral-500 font-medium">All applications are reviewed manually by a partner.</p>
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

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Full Name</label>
                <input 
                  required
                  name="name"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium text-sm placeholder-neutral-700"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Work Email</label>
                <input 
                  required
                  name="email"
                  type="email"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium text-sm placeholder-neutral-700"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Company Name</label>
              <input 
                required
                name="company"
                className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium text-sm placeholder-neutral-700"
                placeholder="Acme Corp"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Team Size</label>
                <select 
                  required
                  name="company_size" 
                  className="w-full px-5 py-4 rounded-2xl bg-[#0f1414] border border-teal-500/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/10 outline-none text-white font-medium appearance-none text-sm cursor-pointer transition-all hover:bg-[#151d1d] shadow-inner"
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
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Current CRM</label>
                <select
                  required
                  name="crm"
                  defaultValue=""
                  className="w-full px-5 py-4 rounded-2xl bg-[#0f1414] border border-teal-500/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/10 outline-none text-white font-medium appearance-none text-sm cursor-pointer transition-all hover:bg-[#151d1d] shadow-inner"
                  style={selectStyle}
                >
                  <option value="" disabled>Select CRM...</option>
                  <option value="HubSpot">HubSpot</option>
                  <option value="Salesforce">Salesforce</option>
                  <option value="Pipedrive">Pipedrive</option>
                  <option value="GoHighLevel">GoHighLevel</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {crmSelection === 'Other' && (
              <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                <input 
                  name="crm_other"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium text-sm placeholder-neutral-700"
                  placeholder="Enter CRM name"
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Message (Optional)</label>
              <textarea 
                name="message"
                className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium text-sm placeholder-neutral-700 min-h-[120px] resize-none"
                placeholder="Describe your current outreach friction or goals..."
              />
            </div>

            <div className="pt-6 space-y-6">
              <Button className="w-full py-5 text-base">Request System Audit</Button>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[11px] text-neutral-500 font-black uppercase tracking-[0.3em]">
                  Private Partner Review
                </p>
                <p className="text-[11px] text-neutral-500 font-medium">
                  We typically respond within 12 business hours.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
