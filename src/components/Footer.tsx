import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

interface FooterProps {
  onContact?: () => void;
}

const footerLinks = {
  Product: ['Features', 'Pricing', 'API', 'Documentation'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Community', 'Support', 'Tutorials', 'Guides'],
  Legal: ['Privacy', 'Terms', 'Security', 'Compliance'],
};

export default function Footer({ onContact }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-b from-black to-purple-950/20 border-t border-purple-500/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/whatsapp_image_2025-12-28_at_6.04.56_pm.jpeg"
                alt="METAREACH AI Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-gradient">METAREACH AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through intelligent automation and cutting-edge AI solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-purple-950/50 border border-purple-500/30 rounded-lg flex items-center justify-center hover:bg-purple-900/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-purple-400" />
                </a>
              ))}
              <button
                onClick={onContact}
                className="w-10 h-10 bg-purple-950/50 border border-purple-500/30 rounded-lg flex items-center justify-center hover:bg-purple-900/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-purple-400" />
              </button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 MetaReach AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
