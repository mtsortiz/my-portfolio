import React, { useEffect, useState } from 'react';
import { Project } from '../../types/project';

interface ProjectGridProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onOpenModal }) => {
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {projects.map((project) => {
        const activeCover = isLightMode && project.coverLight ? project.coverLight : project.cover;

        return (
        <div
          key={project.id}
          onClick={() => onOpenModal(project)}
          className="relative overflow-hidden dark:bg-white/5 light:bg-white/70 backdrop-blur-sm border dark:border-white/10 light:border-gray-200 rounded-lg hover:dark:bg-white/10 hover:light:bg-white/90 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl h-40 flex items-end"
        >
          {activeCover && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${activeCover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          )}

          {activeCover && <div className="absolute inset-0 bg-black/35 light:bg-white/10" />}

          <h3 className={`relative z-10 w-full p-4 text-xl font-bold text-center leading-tight ${activeCover ? 'text-white light:text-gray-900' : 'text-primary'}`}>
            {project.title}
          </h3>
        </div>
      );})}
    </div>
  );
};

export default ProjectGrid;