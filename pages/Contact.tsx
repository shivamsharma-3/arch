import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        body: formData,
      });

      alert('Form submitted successfully!');
      form.reset();
    } catch {
      alert('Submission failed');
    }
  };

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232dd4bf' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1.25rem center',
    backgroundSize: '0.85rem',
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold tracking-tighter mb-6 leading-tight">
          Request your Revenue<br />System Audit.
        </h1>
        <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-8">
          This complimentary audit is designed for B2B service companies that want a clear,
          repeatable system for booking qualified sales conversations.
        </p>
      </div>

      <div className="md:w-1/2">
        <form
          name="request-audit"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          {/* REQUIRED FOR NETLIFY */}
          <input type="hidden" name="form-name" value="request-audit" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-neutral-500 ml-4">Full Name</label>
              <input
                required
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full px-5 py-3 rounded-2xl bg-black/40 border border-white/5 text-white"
              />
            </div>

            <div>
              <label className="text-xs text-neutral-500 ml-4">Work Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="john@company.com"
                className="w-full px-5 py-3 rounded-2xl bg-black/40 border border-white/5 text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-neutral-500 ml-4">Company Name</label>
            <input
              required
              type="text"
              name="company"
              placeholder="Acme Corp"
              className="w-full px-5 py-3 rounded-2xl bg-black/40 border border-white/5 text-white"
            />
          </div>

          <div>
            <label className="text-xs text-neutral-500 ml-4">Company Size</label>
            <select
              required
              name="company_size"
              defaultValue=""
              style={selectStyle}
              className="w-full px-5 py-3 rounded-2xl bg-[#0f1414] border border-teal-500/20 text-white appearance-none"
            >
              <option value="" disabled>Select company size...</option>
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>200+ employees</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-neutral-500 ml-4">Current CRM</label>
            <select
              required
              name="crm"
              defaultValue=""
              style={selectStyle}
              className="w-full px-5 py-3 rounded-2xl bg-[#0f1414] border border-teal-500/20 text-white appearance-none"
            >
              <option value="" disabled>Select CRM...</option>
              <option>HubSpot</option>
              <option>Salesforce</option>
              <option>ActiveCampaign</option>
              <option>Pipedrive</option>
              <option>Zoho CRM</option>
              <option>GoHighLevel</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <input
              name="crm_other"
              placeholder="If Other, enter your CRM"
              className="w-full px-5 py-3 rounded-2xl bg-black/40 border border-white/5 text-white"
            />
          </div>

          <div className="pt-6">
            <Button className="w-full">Request Audit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
