import { useState } from 'react';
import { Project } from '../types/project';

export const useProjectFilters = (projects: Project[], availableTechnologies: string[]) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter === null 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  const toggleFilter = (technology: string) => {
    setActiveFilter(prev => 
      prev === technology ? null : technology
    );
  };

  const clearFilters = () => {
    setActiveFilter(null);
  };

  return {
    activeFilters: activeFilter ? [activeFilter] : [], // Mantenemos compatibilidad con array
    filteredProjects,
    toggleFilter,
    clearFilters
  };
};