import React from 'react';
import { Project } from '../../types/project';

interface ProjectGridProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onOpenModal }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {projects.map((project) => (
        <div 
          key={project.id}
          onClick={() => onOpenModal(project)}
          className="dark:bg-white/5 light:bg-white/70 backdrop-blur-sm border dark:border-white/10 light:border-gray-200 p-6 rounded-lg hover:dark:bg-white/10 hover:light:bg-white/90 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl h-32 flex items-center justify-center"
        >
          <h3 className="text-xl font-bold text-primary text-center leading-tight">{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;