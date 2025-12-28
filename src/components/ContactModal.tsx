import { X, Mail, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-purple-950/80 to-black border border-purple-500/30 rounded-2xl w-full max-w-md p-6 sm:p-8 card-glow" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gradient">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">MetaReach AI</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              AI Automation & Marketing Agency
            </p>
            <p className="text-gray-400 text-xs">
              © 2025 MetaReach AI. All rights reserved.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <a
                href="mailto:info@metareachai.in"
                className="text-gray-300 hover:text-purple-400 transition-colors break-all"
              >
                info@metareachai.in
              </a>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
