import { Shield, Rocket, Clock, Target, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security protocols to protect your data.',
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months, with our streamlined process.',
  },
  {
    icon: Clock,
    title: 'Real-Time Processing',
    description: 'Lightning-fast AI processing for instant results and responses.',
  },
  {
    icon: Target,
    title: 'Precision Accuracy',
    description: '99.9% accuracy in automation tasks with continuous learning.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 expert support team ready to assist your journey.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Infrastructure that grows with your business needs seamlessly.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-purple-950/50 border border-purple-500/30 rounded-full mb-6">
              <span className="text-sm text-purple-300">Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Built for the</span>
              <br />
              <span className="text-gradient">Future of Work</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Experience the next generation of business automation with cutting-edge AI technology that adapts to your unique needs.
            </p>

            <div className="space-y-6">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 px-8 py-4 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-xl shadow-purple-500/50">
              Explore All Features
            </button>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-purple-950/30 to-black border border-purple-500/20 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {features.slice(3).map((feature, index) => (
                  <div
                    key={index}
                    className="bg-black/50 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-1">10x</div>
                    <div className="text-sm text-gray-400">Productivity Boost</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-1">85%</div>
                    <div className="text-sm text-gray-400">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-1">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
