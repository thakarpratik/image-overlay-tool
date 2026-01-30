export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            OverlayPro
          </a>
          <a href="/" className="text-gray-600 hover:text-gray-900">← Back to Home</a>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-12">Last updated: January 29, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using OverlayPro ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              OverlayPro provides a web-based tool for adding text overlays to images. All image processing occurs locally in your browser. We do not store, access, or process your images on our servers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Use the Service only for lawful purposes</li>
              <li>Not upload or process images that violate copyright, trademark, or other intellectual property rights</li>
              <li>Not use the Service to create content that is illegal, harmful, threatening, abusive, or otherwise objectionable</li>
              <li>Not attempt to reverse engineer, decompile, or hack the Service</li>
              <li>Not use automated scripts or bots to access the Service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              You retain all rights to the images you process using OverlayPro. We claim no ownership or rights to your content.
            </p>
            <p className="text-gray-700 mb-4">
              The OverlayPro software, design, and branding are owned by us and protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Free and Paid Tiers</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Free Tier (Phase 1)</h3>
            <p className="text-gray-700 mb-4">
              During our launch phase, all features are available for free with no limitations. We reserve the right to introduce usage limits or paid tiers in the future.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Paid Tiers (Phase 2)</h3>
            <p className="text-gray-700 mb-4">
              When paid plans are introduced, we will provide advance notice. Existing free users will be grandfathered into a generous free tier.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms (Future)</h2>
            <p className="text-gray-700 mb-4">
              When paid plans launch:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>All payments are processed through Stripe</li>
              <li>Subscriptions renew automatically unless canceled</li>
              <li>Refunds are available within 14 days of purchase</li>
              <li>Prices are subject to change with 30 days notice</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to terminate or suspend access to the Service immediately, without prior notice, for any violation of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the new terms. We will notify users of significant changes via email.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:legal@overlaypro.com" className="text-blue-600 hover:underline">legal@overlaypro.com</a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm">
          © 2026 OverlayPro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}