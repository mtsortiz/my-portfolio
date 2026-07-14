import React, { useEffect, useState } from 'react';

interface Technology {
  name: string;
  icon: string;
  title: string;
}

const technologies: Technology[] = [
  { name: 'Python', icon: '/icons/python.svg', title: 'Python - AI & Scripting' },
  { name: 'FastAPI', icon: '/icons/fastapi.svg', title: 'FastAPI - Modern Web APIs' },
  { name: 'LangChain', icon: '/icons/langgraph.svg', title: 'LangChain - LLM Application Framework' },
  { name: 'SQLite', icon: '/icons/sqlite.svg', title: 'SQLite - Embedded Relational Database' },
  { name: 'Java', icon: '/icons/java.svg', title: 'Java - Backend Development' },
  { name: 'Spring', icon: '/icons/spring.svg', title: 'Spring Framework - Enterprise Java' },
  { name: 'Kotlin', icon: '/icons/kotlin.svg', title: 'Kotlin - Android Development' },
  { name: 'MySQL', icon: '/icons/mysql.svg', title: 'MySQL - Database Management' },
  { name: 'Docker', icon: '/icons/docker.svg', title: 'Docker - Containerization' }
];

const TechnologyIcons: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    const updateThemeState = () => {
      setIsLightMode(html.classList.contains('light'));
    };

    updateThemeState();

    const observer = new MutationObserver(updateThemeState);
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-8 flex justify-center">
      <div className="flex flex-wrap justify-center gap-6 max-w-3xl">
        {technologies.map((tech) => (
          <img
            key={tech.name}
            src={tech.icon}
            alt={tech.name}
            className={`h-12 w-12 hover:scale-110 transition-transform duration-300 ${
              tech.name === 'LangChain' && !isLightMode ? 'brightness-0 invert' : ''
            }`}
            title={tech.title}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnologyIcons;