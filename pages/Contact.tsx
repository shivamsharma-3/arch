import React, { useState } from 'react';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [crmSelection, setCrmSelection] = useState('');

/*  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    await fetch("/", {
      method: "POST",
      body: formData, // ✅ IMPORTANT: send FormData directly
    });

    alert("Form submitted successfully!");
    form.reset();
  } catch (err) {
    alert("Submission failed. Please try again.");
  }
};

*/
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232dd4bf' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1.25rem center',
    backgroundSize: '0.85rem'
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold tracking-tighter mb-6 leading-tight">
          Request your Revenue<br />System Audit.
        </h1>
        <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-8">
          This complimentary audit is designed for B2B service companies that want a clear, repeatable system for booking qualified sales conversations — without relying on referrals or guesswork.
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded bg-teal-500/20 text-teal-500 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
            <div>
              <h3 className="font-bold text-white">Revenue infrastructure review</h3>
              <p className="text-sm text-neutral-500">We assess your current CRM, data quality, and outbound setup to identify what’s broken and what’s missing.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded bg-teal-500/20 text-teal-500 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
            <div>
              <h3 className="font-bold text-white">Targeting & messaging validation</h3>
              <p className="text-sm text-neutral-500">We review your ideal customer profile and outreach logic to ensure you’re speaking to the right buyers.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded bg-teal-500/20 text-teal-500 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
            <div>
              <h3 className="font-bold text-white">System blueprint & next steps</h3>
              <p className="text-sm text-neutral-500">You receive a clear, high-level plan outlining how your outbound system should be structured to produce consistent results.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-teal-500/70 mb-4">What to expect</h4>
          <ul className="space-y-3">
            <li className="text-sm text-neutral-400 flex items-center gap-3">
              <div className="w-1 h-1 bg-teal-500/50 rounded-full" />
              30–45 minute technical system review
            </li>
            <li className="text-sm text-neutral-400 flex items-center gap-3">
              <div className="w-1 h-1 bg-teal-500/50 rounded-full" />
              Clear diagnosis of current outbound setup
            </li>
            <li className="text-sm text-neutral-400 flex items-center gap-3">
              <div className="w-1 h-1 bg-teal-500/50 rounded-full" />
              Written summary with recommended architecture
            </li>
            <li className="text-sm text-neutral-400 flex items-center gap-3">
              <div className="w-1 h-1 bg-teal-500/50 rounded-full" />
              No obligation to proceed or sign a retainer
            </li>
          </ul>
        </div>
      </div>

      <div className="md:w-1/2" id="audit-form-container">
        <form
          name="request-audit"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
         // action="/success.html"
          //onSubmit={handleSubmit}
        >
         <input type="hidden" name="form-name" value="request-audit" />
         <input type="hidden" name="bot-field" />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Full Name</label>
              <input 
                required
                type="text"
                name="name"
                className="w-full px-5 py-3 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium text-sm placeholder-neutral-700"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Work Email</label>
              <input 
                required
                name="email"
                type="email"
                className="w-full px-5 py-3 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium text-sm placeholder-neutral-700"
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Company Name</label>
            <input 
              required
              type="text"
              name="company"
              className="w-full px-5 py-3 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium text-sm placeholder-neutral-700"
              placeholder="Acme Corp"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Company Size</label>
            <select 
              name="company_size" 
              className="w-full px-5 py-3 rounded-2xl bg-[#0f1414] border border-teal-500/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/10 outline-none text-white font-medium appearance-none text-sm cursor-pointer transition-all hover:bg-[#151d1d] shadow-inner"
              style={selectStyle}
              defaultValue=""
            >
              <option value="" disabled>Select company size...</option>
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>200+ employees</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Current CRM</label>
            <select 
              required
              name="crm"
              value={crmSelection}
              onChange={(e) => setCrmSelection(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-[#0f1414] border border-teal-500/20 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/10 outline-none text-white font-medium appearance-none text-sm cursor-pointer transition-all hover:bg-[#151d1d] shadow-inner"
              style={selectStyle}
            >
              <option value="" disabled>Select CRM...</option>
              <option value="HubSpot">HubSpot</option>
              <option value="Salesforce">Salesforce</option>
              <option value="ActiveCampaign">ActiveCampaign</option>
              <option value="Pipedrive">Pipedrive</option>
              <option value="Zoho CRM">Zoho CRM</option>
              <option value="Freshsales">Freshsales</option>
              <option value="Close">Close</option>
              <option value="GoHighLevel">GoHighLevel</option>
              <option value="Other">Other (enter manually)</option>
            </select>
          </div>

          {crmSelection === 'Other' && (
            <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
              <input 
                name="crm_other"
                className="w-full px-5 py-3 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium text-sm placeholder-neutral-700"
                placeholder="Enter your CRM name"
                autoFocus
              />
            </div>
          )}

          <div className="pt-4 space-y-4">
            <Button className="w-full">Request Audit</Button>
            <p className="text-[10px] text-center text-neutral-500 font-black uppercase tracking-widest">
              No contracts. No retainers discussed before the audit.
            </p>
          </div>
          
          <p className="text-[10px] text-center text-neutral-600 font-medium uppercase tracking-tighter">
            Your data is handled securely and will never be shared.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;