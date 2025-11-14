import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import ProjectModal from '../components/ProjectModal';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';
import { projectsData } from '../data/projects';
import { useProjectFilters } from '../hooks/useProjectFilters';
import { useProjectModal } from '../hooks/useProjectModal';

export default function Home() {
  const router = useRouter();
  
  // Main technologies for filtering (only the ones we have icons for)
  const mainTechnologies = ['Python', 'Java', 'Kotlin', 'Spring Boot', 'MySQL', 'HTML', 'CSS'];

  // Custom hooks for modular functionality
  const { activeFilters, filteredProjects, toggleFilter, clearFilters } = useProjectFilters(projectsData, mainTechnologies);
  const { selectedProject, isModalOpen, openModal, closeModal } = useProjectModal();

  // Redirect any hash URLs to base URL
  useEffect(() => {
    if (window.location.hash) {
      router.replace('/', undefined, { shallow: true });
    }
  }, [router]);

  return (
    <div id="home" className="min-h-screen transition-all duration-500 relative" style={{
      background: 'var(--gradient-bg)',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <SEOHead />
      <ThemeToggle />
      <main className="snap-y snap-mandatory relative" style={{
        background: 'var(--gradient-bg)',
        backgroundAttachment: 'fixed'
      }}>
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
