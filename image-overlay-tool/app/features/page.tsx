export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            OverlayPro
          </a>
          <div className="flex gap-3 sm:gap-6 items-center text-sm sm:text-base">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/tool" className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Launch Tool
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Professional Results</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Everything you need to create stunning image overlays at scale
          </p>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="container mx-auto px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-blue-600 font-semibold text-sm mb-4">
                BULK PROCESSING
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Process Hundreds of Images at Once
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Upload multiple images simultaneously and apply overlays to all of them in seconds. Perfect for social media campaigns, product catalogs, and real estate listings.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Drag and drop multiple files</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Process up to 500 images at once</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Real-time preview of all images</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📦</div>
                <p className="text-gray-700 font-semibold">Bulk Processing Demo</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-gray-700 font-semibold">Customization Options</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-600 font-semibold text-sm mb-4">
                CUSTOMIZATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Complete Control Over Styling
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Customize every aspect of your text overlays. Choose from dozens of fonts, unlimited colors, and precise positioning controls.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">50+ professional fonts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Custom color picker with hex codes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Adjustable font size, weight, and opacity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Position text anywhere on the image</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 px-4 py-2 rounded-full text-green-600 font-semibold text-sm mb-4">
                CSV IMPORT
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Import Custom Text from CSV
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Upload a CSV file with custom text for each image. Perfect for product descriptions, property details, or personalized messages.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Match text to images automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Support for multiple text fields</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Easy CSV template download</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-700 font-semibold">CSV Import Demo</p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🔒</div>
                <p className="text-gray-700 font-semibold">Privacy & Security</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full text-yellow-600 font-semibold text-sm mb-4">
                PRIVACY
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Your Images Never Leave Your Device
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                All processing happens locally in your browser. No uploads to servers, no storage, no tracking. Your privacy is guaranteed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">100% client-side processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">No server uploads required</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">Works offline after initial load</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">No data collection or tracking</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to try all these features?
          </h2>
          <a 
            href="/tool"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-2xl transition-all"
          >
            Start Creating For Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              OverlayPro
            </div>
            <div className="flex gap-6 text-gray-600 text-sm">
              <a href="/privacy" className="hover:text-gray-900">Privacy</a>
              <a href="/terms" className="hover:text-gray-900">Terms</a>
              <a href="/contact" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}