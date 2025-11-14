import { useState } from 'react';
import { Project } from '../types/project';

export const useProjectModal = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return {
    selectedProject,
    isModalOpen,
    openModal,
    closeModal
  };
};