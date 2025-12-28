import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GetStartedModal from './components/GetStartedModal';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen || isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isContactOpen]);

  return (
    <div className="min-h-screen bg-black">
      <Hero onGetStarted={() => setIsModalOpen(true)} />
      <Services onGetStarted={() => setIsModalOpen(true)} />
      <Features />
      <CTA onGetStarted={() => setIsModalOpen(true)} />
      <Footer onContact={() => setIsContactOpen(true)} />
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
