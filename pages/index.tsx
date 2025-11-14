import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import ProjectModal from '../components/ProjectModal';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';
import { projectsData } from '../data/projects';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useProjectFilters } from '../hooks/useProjectFilters';
import { useProjectModal } from '../hooks/useProjectModal';

export default function Home() {
  // Main technologies for filtering (only the ones we have icons for)
  const mainTechnologies = ['Python', 'Java', 'Kotlin', 'Spring Boot', 'MySQL', 'HTML', 'CSS'];

  // Custom hooks for modular functionality
  const { activeFilters, filteredProjects, toggleFilter, clearFilters } = useProjectFilters(projectsData, mainTechnologies);
  const { selectedProject, isModalOpen, openModal, closeModal } = useProjectModal();
  
  // Scroll spy for URL updates
  useScrollSpy({ sections: ['home', 'about', 'projects', 'contact'] });

  return (
    <div className="min-h-screen transition-all duration-500" style={{background: 'var(--gradient-bg)'}}>
      <ThemeToggle />
      <main className="snap-y snap-mandatory relative">
        <div className="mt-6">
          <Navbar />
        </div>
        
        <HeroSection />
        <AboutSection />
        <ProjectsSection
          projects={filteredProjects}
          activeFilters={activeFilters}
          mainTechnologies={mainTechnologies}
          onToggleFilter={toggleFilter}
          onClearFilters={clearFilters}
          onOpenModal={openModal}
        />
        <ContactSection />
      </main>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}
