import { useState } from 'react';
import { Project } from '../types/project';

export const useProjectFilters = (projects: Project[], availableTechnologies: string[]) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredProjects = activeFilters.length === 0 
    ? projects 
    : projects.filter(project => 
        activeFilters.some(filter => project.technologies.includes(filter))
      );

  const toggleFilter = (technology: string) => {
    setActiveFilters(prev => 
      prev.includes(technology)
        ? prev.filter(t => t !== technology)
        : [...prev, technology]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return {
    activeFilters,
    filteredProjects,
    toggleFilter,
    clearFilters
  };
};