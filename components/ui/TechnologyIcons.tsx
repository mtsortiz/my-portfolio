import React from 'react';

interface Technology {
  name: string;
  icon: string;
  title: string;
}

const technologies: Technology[] = [
  { name: 'Java', icon: '/icons/java.svg', title: 'Java - Backend Development' },
  { name: 'Spring', icon: '/icons/spring.svg', title: 'Spring Framework - Enterprise Java' },
  { name: 'Python', icon: '/icons/python.svg', title: 'Python - AI & Scripting' },
  { name: 'Kotlin', icon: '/icons/kotlin.svg', title: 'Kotlin - Android Development' },
  { name: 'MySQL', icon: '/icons/mysql.svg', title: 'MySQL - Database Management' },
  { name: 'HTML', icon: '/icons/html.svg', title: 'HTML5 - Web Markup' },
  { name: 'CSS', icon: '/icons/css.svg', title: 'CSS3 - Web Styling' }
];

const TechnologyIcons: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col items-center space-y-6 md:space-y-0">
      <div className="flex flex-wrap justify-center gap-6 md:flex-nowrap">
        {/* Primera fila en mobile / Todos en desktop */}
        <div className="flex justify-center gap-6 w-full md:w-auto">
          {technologies.slice(0, 4).map((tech) => (
            <img 
              key={tech.name}
              src={tech.icon} 
              alt={tech.name} 
              className="h-12 w-12 hover:scale-110 transition-transform duration-300" 
              title={tech.title}
            />
          ))}
        </div>
        {/* Segunda fila solo en mobile */}
        <div className="flex justify-center gap-6 w-full md:w-auto md:ml-6">
          {technologies.slice(4).map((tech) => (
            <img 
              key={tech.name}
              src={tech.icon} 
              alt={tech.name} 
              className="h-12 w-12 hover:scale-110 transition-transform duration-300" 
              title={tech.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyIcons;