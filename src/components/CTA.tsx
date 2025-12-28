import { ArrowRight, Mail } from 'lucide-react';

interface CTAProps {
  onGetStarted: () => void;
}

export default function CTA({ onGetStarted }: CTAProps) {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-2 bg-purple-950/50 border border-purple-500/30 rounded-full mb-8">
          <span className="text-sm text-purple-300">Ready to Transform?</span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white">Start Your</span>
          <br />
          <span className="text-gradient glow-text">AI Revolution Today</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of forward-thinking companies leveraging AI automation to dominate their industries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <div className="relative group">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-6 py-4 bg-black/50 border border-purple-500/30 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
            />
            <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>

          <button onClick={onGetStarted} className="px-8 py-4 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-xl shadow-purple-500/50 flex items-center space-x-2">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">Free</div>
            <div className="text-gray-400 mb-4">Consultation</div>
            <p className="text-sm text-gray-500">Discover AI opportunities in your business</p>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">14 Days</div>
            <div className="text-gray-400 mb-4">Free Trial</div>
            <p className="text-sm text-gray-500">Experience the power risk-free</p>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-gray-400 mb-4">Support</div>
            <p className="text-sm text-gray-500">Expert assistance whenever you need</p>
          </div>
        </div>
      </div>
    </section>
  );
}
