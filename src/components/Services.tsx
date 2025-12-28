import { Bot, Workflow, Phone, Zap, Globe, Mail, Palette } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that handle customer queries 24/7 with human-like interactions.',
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    icon: Phone,
    title: 'AI Call Agent',
    description: 'Human-like inbound and outbound call agents that handle customer interactions with natural conversation flow.',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Workflow,
    title: 'Customized Workflow',
    description: 'Tailored automation workflows designed specifically for your business needs and processes.',
    gradient: 'from-cyan-600 to-teal-600',
  },
  {
    icon: Zap,
    title: 'Lead Generation',
    description: 'AI-powered lead generation and qualification to identify and nurture high-value prospects.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Globe,
    title: '3D Website Generation',
    description: 'Modern 3D interactive websites built with AI to showcase your brand in immersive ways.',
    gradient: 'from-teal-600 to-blue-600',
  },
  {
    icon: Mail,
    title: 'Personalised Email Outreach',
    description: 'Personalised email outreach at scale without lifting a finger - automated campaigns that convert.',
    gradient: 'from-blue-600 to-violet-600',
  },
  {
    icon: Bot,
    title: 'Automatic Follow Ups',
    description: 'Intelligent follow-up sequences that nurture leads and convert them into customers automatically.',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    icon: Palette,
    title: 'Creative and Ad Production',
    description: 'Professional creative assets and ad campaigns designed to capture attention and drive conversions.',
    gradient: 'from-pink-600 to-rose-600',
  },
];

interface ServicesProps {
  onGetStarted: () => void;
}

export default function Services({ onGetStarted }: ServicesProps) {
  return (
    <section id="services" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block px-4 py-2 bg-purple-950/50 border border-purple-500/30 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-purple-300">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">AI-Powered Solutions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Comprehensive automation services designed to revolutionize your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-950/30 to-black border border-purple-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 card-glow h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${service.gradient} rounded-lg sm:rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 w-fit`}>
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-gradient transition-all duration-300 line-clamp-2">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <button onClick={onGetStarted} className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors hover:no-underline">
                  <span className="text-xs sm:text-sm font-semibold">Get Started</span>
                  <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
