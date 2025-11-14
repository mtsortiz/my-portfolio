import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="w-full text-center min-h-screen flex flex-col snap-start">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-center mb-4">
          <span className="inline-block animate-fadeIn">Hi, I'm Matías.</span>
          <br />
          <span className="inline-block animate-fadeIn-delayed">Software Developer.</span>
        </h1>
        <br />
        <p className="text-xl text-text text-center animate-fadeIn-delayed">
          Building efficient, scalable software with passion and precision.
        </p>
        <br />
        <br />
        <div className="flex justify-center gap-6 mt-8">
          <a 
            href="https://linkedin.com/in/matiasnicolasortiz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-400/40 backdrop-blur-md border border-blue-400/10 hover:bg-blue-400/60 text-white font-semibold rounded-lg btn-animated"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
            LinkedIn
          </a>
          
          <a 
            href="https://github.com/mtsortiz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-400/40 backdrop-blur-md border border-blue-400/10 hover:bg-blue-400/60 text-white font-semibold rounded-lg btn-animated"
          >
            <img src="/icons/github.svg" alt="GitHub" className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;