import React from 'react';
import TechnologyIcons from '../ui/TechnologyIcons';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-3xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-4 animate-fadeIn">ABOUT ME</h2>
      <br />
      <p className="text-lg text-text light:text-gray-700 light:font-medium">
        I'm a fourth-year Information Systems Engineering student with a passion for software development. 
        Over the past two years, I've been diving deep into Java development, building personal projects with Spring Boot 
        and exploring database design with MySQL. Currently expanding my horizons with Python and Kotlin, 
        while maintaining a strong focus on clean code, design patterns, and software architecture best practices.
      </p>
      <br />
      <br />
      <TechnologyIcons />
    </section>
  );
};

export default AboutSection;