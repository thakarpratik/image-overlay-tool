export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Mobile Optimized */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            OverlayPro
          </div>
          <div className="flex gap-3 sm:gap-6 items-center text-sm sm:text-base">
            <a href="#features" className="text-gray-600 hover:text-gray-900 hidden sm:block">Features</a>
            <a href="/tool" className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition text-sm sm:text-base">
              Launch Tool
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-block bg-blue-50 text-blue-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
              ✨ Free Forever • No Credit Card Required
            </div>
            
            {/* Main Headline - Responsive Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
              Add Text to Images<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                In Seconds
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              The fastest way to create professional image overlays in bulk. 
              Perfect for social media, real estate, e-commerce, and content creation.
            </p>

            {/* Email Capture Form - Mobile Optimized */}
            <div className="max-w-md mx-auto mb-6 sm:mb-8 px-4">
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-3 sm:p-2 sm:bg-gray-50 sm:rounded-full sm:border sm:border-gray-200">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-4 sm:px-6 py-3 bg-gray-50 sm:bg-transparent rounded-full sm:rounded-none border border-gray-200 sm:border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:focus:ring-0 text-gray-900"
                  required
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  Get Started
                </button>
              </form>
              <p className="text-xs sm:text-sm text-gray-500 mt-3">
                Join 10,000+ creators • No spam, ever
              </p>
            </div>

            {/* Demo Image Placeholder - Mobile Optimized */}
            <div className="mt-12 sm:mt-16 relative px-4">
              <div className="bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-8 border border-gray-100">
                <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">🖼️</div>
                    <p className="text-gray-500 text-sm sm:text-lg">Tool Demo Preview</p>
                  </div>
                </div>
              </div>
              {/* Floating elements - Hidden on small mobile */}
              <div className="hidden sm:block absolute -top-6 -right-6 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg font-semibold text-sm">
                Process 100+ images ⚡
              </div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg font-semibold text-sm">
                Export as ZIP 📦
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Mobile Optimized */}
      <section className="border-y border-gray-100 bg-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Trusted by teams at</p>
          <div className="flex justify-center items-center gap-6 sm:gap-12 flex-wrap opacity-50">
            <div className="text-lg sm:text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-lg sm:text-2xl font-bold text-gray-400">Amazon</div>
            <div className="text-lg sm:text-2xl font-bold text-gray-400">Shopify</div>
            <div className="text-lg sm:text-2xl font-bold text-gray-400 hidden sm:block">Netflix</div>
            <div className="text-lg sm:text-2xl font-bold text-gray-400 hidden sm:block">Adobe</div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section id="features" className="py-16 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Everything you need to create stunning overlays
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Powerful features that make bulk image processing effortless
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="group px-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl sm:text-4xl">⚡</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Process hundreds of images in seconds. All processing happens locally in your browser—no uploads, no waiting.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group px-4">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl sm:text-4xl">🎨</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Fully Customizable</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Choose from 50+ fonts, unlimited colors, custom positioning, and import text from CSV files for unique overlays.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group px-4">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl sm:text-4xl">🔒</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">100% Private</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Your images never leave your device. Everything is processed locally with no servers, no storage, no tracking.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group px-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl sm:text-4xl">📦</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Batch Export</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Export all processed images as a single ZIP file. Choose from multiple sizes and formats for any use case.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group px-4">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl sm:text-4xl">📊</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">CSV Import</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Import custom text for each image from CSV files. Perfect for product catalogs, real estate listings, and more.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group px-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl sm:text-4xl">🎯</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Templates</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Save time with pre-built templates. Create your own presets and reuse styling across projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-16 sm:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to transform your images?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Join thousands of creators who save hours every week with our tool
          </p>
          <a 
            href="/tool"
            className="inline-block bg-white text-blue-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
          >
            Start Creating For Free →
          </a>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="border-t border-gray-100 py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              OverlayPro
            </div>
            <div className="flex gap-6 sm:gap-8 text-gray-600 text-sm sm:text-base">
              <a href="#" className="hover:text-gray-900">Twitter</a>
              <a href="#" className="hover:text-gray-900">Instagram</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
            © 2026 OverlayPro. Made with ❤️ for creators.
          </div>
        </div>
      </footer>
    </div>
  );
}