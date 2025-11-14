import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full max-w-3xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-4 animate-fadeIn">CONTACT</h2>
      <p className="text-text text-lg mb-6">
        Let's get in touch! Email me at:{' '}
        <a href="mailto:matiasnortiz.dev@gmail.com" className="contact-link underline">
          matiasnortiz.dev@gmail.com
        </a>
      </p>
      
      <p className="text-text text-lg">
        Watch and download my CV:{' '}
        <a 
          href="https://drive.google.com/file/d/19uD8ttoRBcRMhvmixjq00HgQ1-MYTXl1/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link underline transition-colors duration-300 ml-1"
        >
          OrtizMatiasNicolas-CV
        </a>
      </p>
    </section>
  );
};

export default ContactSection;