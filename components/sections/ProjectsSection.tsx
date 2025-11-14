import React from 'react';
import { Project } from '../../types/project';
import FilterButtons from '../ui/FilterButtons';
import ProjectGrid from '../ui/ProjectGrid';

interface ProjectsSectionProps {
  projects: Project[];
  activeFilters: string[];
  mainTechnologies: string[];
  onToggleFilter: (technology: string) => void;
  onClearFilters: () => void;
  onOpenModal: (project: Project) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  activeFilters,
  mainTechnologies,
  onToggleFilter,
  onClearFilters,
  onOpenModal
}) => {
  return (
    <section id="projects" className="w-full p-6 min-h-screen flex flex-col justify-center snap-start">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center animate-fadeIn">PROJECTS</h2>
        
        <FilterButtons
          technologies={mainTechnologies}
          activeFilters={activeFilters}
          onToggleFilter={onToggleFilter}
          onClearFilters={onClearFilters}
        />
        
        <ProjectGrid
          projects={projects}
          onOpenModal={onOpenModal}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;