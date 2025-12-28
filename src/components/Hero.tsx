import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer url="https://prod.spline.design/OPRclcxLN77uiy1U/scene.splinecode"></spline-viewer>
      </div>

      <div className="absolute inset-0 grid-background opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>

      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/WhatsApp Image 2025-11-05 at 11.46.48 PM.jpeg"
              alt="METAREACH AI Logo"
              className="h-12 w-12 object-contain drop-shadow-lg"
            />
            <span className="text-2xl font-bold text-gradient">METAREACH AI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button onClick={onGetStarted} className="px-6 py-2 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-950/50 border border-purple-500/30 rounded-full mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">Next-Gen AI Automation</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block glow-text">Transform Your Business</span>
          <span className="block text-gradient mt-2">With AI Automation</span>
        </h1>

        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Unlock the power of artificial intelligence to automate workflows, boost productivity, and scale your operations to new heights.
        </p>


        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button onClick={onGetStarted} className="px-8 py-4 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-xl shadow-purple-500/50">
            Start Your Journey
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Clients Served' },
            { value: '98%', label: 'Success Rate' },
            { value: '5M+', label: 'Tasks Automated' },
            { value: '24/7', label: 'AI Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </a>
    </section>
  );
}
