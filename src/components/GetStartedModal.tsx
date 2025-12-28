import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COUNTRY_CODES = [
  { code: '+1', country: 'United States' },
  { code: '+1', country: 'Canada' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+91', country: 'India' },
  { code: '+86', country: 'China' },
  { code: '+81', country: 'Japan' },
  { code: '+82', country: 'South Korea' },
  { code: '+33', country: 'France' },
  { code: '+49', country: 'Germany' },
  { code: '+39', country: 'Italy' },
  { code: '+34', country: 'Spain' },
  { code: '+61', country: 'Australia' },
  { code: '+55', country: 'Brazil' },
  { code: '+27', country: 'South Africa' },
  { code: '+971', country: 'UAE' },
  { code: '+966', country: 'Saudi Arabia' },
  { code: '+65', country: 'Singapore' },
  { code: '+60', country: 'Malaysia' },
  { code: '+62', country: 'Indonesia' },
  { code: '+63', country: 'Philippines' },
  { code: '+66', country: 'Thailand' },
  { code: '+84', country: 'Vietnam' },
  { code: '+1', country: 'Mexico' },
  { code: '+56', country: 'Chile' },
  { code: '+57', country: 'Colombia' },
  { code: '+51', country: 'Peru' },
];

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    country_code: '+1',
    phone_number: '',
    problem_or_task: '',
  });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (code: string) => {
    setFormData(prev => ({
      ...prev,
      country_code: code,
    }));
    setShowCountryDropdown(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('form_submissions')
        .insert([formData]);

      if (submitError) {
        setError('Failed to submit form. Please try again.');
        console.error('Submission error:', submitError);
      } else {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company_name: '',
          country_code: '+1',
          phone_number: '',
          problem_or_task: '',
        });
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 2000);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-purple-950/80 to-black border border-purple-500/30 rounded-2xl w-full max-w-md p-6 sm:p-8 card-glow" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gradient">Get Started</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="mb-4 text-4xl">✓</div>
            <p className="text-lg font-semibold text-green-400 mb-2">Thank You!</p>
            <p className="text-gray-400">We'll be in touch shortly</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-purple-950/30 border border-purple-500/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full bg-purple-950/30 border border-purple-500/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Your Company"
                required
                className="w-full bg-purple-950/30 border border-purple-500/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
              <div className="flex gap-2">
                <div className="relative w-32">
                  <button
                    type="button"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="w-full bg-purple-950/30 border border-purple-500/30 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors flex items-center justify-between"
                  >
                    {formData.country_code}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showCountryDropdown && (
                    <div className="absolute z-10 w-64 mt-1 bg-purple-950/95 border border-purple-500/30 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                      {COUNTRY_CODES.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleCountryCodeChange(item.code)}
                          className="w-full text-left px-4 py-2.5 text-white hover:bg-purple-800/50 transition-colors text-sm flex justify-between items-center"
                        >
                          <span>{item.country}</span>
                          <span className="font-semibold">{item.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  required
                  className="flex-1 bg-purple-950/30 border border-purple-500/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Problem or Task to Automate</label>
              <textarea
                name="problem_or_task"
                value={formData.problem_or_task}
                onChange={handleChange}
                placeholder="Tell us what you'd like to automate..."
                required
                rows={4}
                className="w-full bg-purple-950/30 border border-purple-500/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
