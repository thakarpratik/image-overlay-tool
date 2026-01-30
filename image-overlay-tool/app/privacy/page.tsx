export default function PrivacyPage() {
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
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last updated: January 29, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-700 mb-4">
              At OverlayPro, we take your privacy seriously. Unlike most web applications, our tool processes all images locally in your browser. This means your images never leave your device, and we have no access to your content.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Addresses</h3>
            <p className="text-gray-700 mb-4">
              When you sign up for updates, we collect your email address. We use this solely to send you product updates, feature announcements, and occasional tips. You can unsubscribe at any time.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Data</h3>
            <p className="text-gray-700 mb-4">
              We use Google Analytics to understand how visitors use our site. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Pages visited</li>
              <li>Time spent on site</li>
              <li>Browser and device type</li>
              <li>General location (city/country level)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We do NOT track individual users or collect personally identifiable information through analytics.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We DON'T Collect</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Your Images:</strong> All image processing happens in your browser. Images are never uploaded to our servers.</li>
              <li><strong>Text Content:</strong> The text you add to images stays on your device.</li>
              <li><strong>CSV Data:</strong> Any CSV files you import are processed locally and never sent to us.</li>
              <li><strong>Export Data:</strong> Downloaded ZIP files are created entirely on your device.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use minimal cookies:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Analytics cookies:</strong> Used by Google Analytics to track site usage</li>
              <li><strong>Session cookies:</strong> (Phase 2) Used for user authentication when you create an account</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>Netlify:</strong> For hosting our website</li>
              <li><strong>EmailOctopus:</strong> For sending email updates (Phase 1)</li>
              <li><strong>Stripe:</strong> For payment processing (Phase 2)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              Since your images are processed entirely in your browser, they're as secure as your device. We never have access to your content, which means there's no risk of data breaches on our end.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Request deletion of your email address from our system</li>
              <li>Unsubscribe from marketing emails at any time</li>
              <li>Request a copy of any personal data we hold</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We'll notify you of any significant changes via email or by posting a notice on our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this privacy policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:privacy@overlaypro.com" className="text-blue-600 hover:underline">privacy@overlaypro.com</a>
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