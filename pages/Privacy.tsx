
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-10 text-left">
        <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">Privacy Policy</h1>
        <div className="w-12 h-1 bg-teal-500 rounded-full" />
      </header>

      <div className="space-y-10 text-neutral-400 font-medium leading-relaxed max-w-2xl">
        <section>
          <h2 className="text-lg font-bold text-white mb-4">1. Introduction</h2>
          <p>
            ARCH respects your privacy. This policy explains how we handle information necessary to operate our website and provide revenue infrastructure services. We only collect data that is essential for our business operations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-4">2. Information We Collect</h2>
          <p>We collect the following information when voluntarily submitted through our forms:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Name and business email address</li>
            <li>Company name and company size</li>
            <li>CRM or operational details provided for audit requests</li>
            <li>Technical data such as page views and device type via standard analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-4">3. How We Use Information</h2>
          <p>The information collected is used solely to:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Respond to and process revenue system audit requests</li>
            <li>Communicate regarding our services and your specific requirements</li>
            <li>Monitor and improve website performance and user experience</li>
            <li>Evaluate service fit for potential partnerships</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-4">4. Data Sharing</h2>
          <p>
            We do <span className="text-white">not</span> sell your personal or business data to third parties. Data is only shared with essential service providers necessary for hosting, website analytics, and secure communication.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-4">5. Data Security</h2>
          <p>
            We implement reasonable technical and organizational safeguards designed to protect your information from unauthorized access, loss, or alteration.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-4">6. Cookies & Analytics</h2>
          <p>
            We use standard analytics tools to help us understand how visitors interact with our site. These tools may use cookies to collect anonymous usage data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-4">7. User Rights</h2>
          <p>
            You may request access to, correction of, or deletion of the information we have collected about you at any time by contacting us through the information provided below.
          </p>
        </section>

        <section className="pt-8 border-t border-white/5">
          <h2 className="text-lg font-bold text-white mb-3">8. Contact Information</h2>
          <p>For questions regarding this policy, contact us at:</p>
          <p className="text-teal-400 font-bold mt-1">privacy@archrevenues.com</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;