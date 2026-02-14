
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-10 text-left">
        <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">Terms of Service</h1>
        <div className="w-12 h-1 bg-teal-500 rounded-full" />
      </header>

      <div className="space-y-8 text-neutral-400 font-medium leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Services Overview</h2>
          <p>
            ARCH provides professional consulting and implementation services related to revenue systems and outbound infrastructure. This website serves as an informational platform and a method for potential clients to request audits.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. No Guarantees</h2>
          <p>
            Business results and revenue outcomes depend on numerous external factors beyond the control of ARCH. We do not guarantee specific financial results, revenue growth, or specific sales outcomes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Intellectual Property</h2>
          <p>
            All content, branding, design elements, and technical materials on this website are the intellectual property of ARCH and are protected by applicable property laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Limitation of Liability</h2>
          <p>
            ARCH shall not be held liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. External Links</h2>
          <p>
            This website may contain links to third-party sites. ARCH is not responsible for the content, privacy policies, or practices of any third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Termination</h2>
          <p>
            We reserve the right to restrict or terminate access to this website at our discretion if these terms are violated or for any other operational reason.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">8. Changes to Terms</h2>
          <p>
            We may update these terms periodically. Continued use of the website following any updates constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="pt-6 border-t border-white/5">
          <h2 className="text-lg font-bold text-white mb-2">9. Contact Information</h2>
          <p>For legal inquiries, contact us at:</p>
          <p className="text-teal-400 font-bold">legal@archrevenues.com</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;