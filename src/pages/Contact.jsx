import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full relative z-10 overflow-hidden pt-24">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
