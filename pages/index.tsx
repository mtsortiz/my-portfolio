import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projects';
import { useState } from 'react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Main technologies for filtering (only the ones we have icons for)
  const mainTechnologies = ['Python', 'Java', 'Kotlin', 'Spring Boot', 'MySQL', 'HTML', 'CSS'];

  // Filter projects based on active filters
  const filteredProjects = activeFilters.length === 0 
    ? projectsData 
    : projectsData.filter(project => 
        activeFilters.some(filter => project.technologies.includes(filter))
      );

  const openModal = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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

  return (
    <div id="home" className="min-h-screen transition-all duration-500" style={{background: 'var(--gradient-bg)'}}>
      <ThemeToggle />
      <main className="snap-y snap-mandatory relative">
        {/* Hero Section */}
        <section className="w-full text-center min-h-screen flex flex-col snap-start">
          <div className="mt-6">
            <Navbar /> {/* Navbar solo visible en la primera sección, cerca del top */}
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-center mb-4">
              <span className="inline-block animate-fadeIn">Hi, I'm Matías.</span>
              <br />
              <span className="inline-block animate-fadeIn-delayed">Software Developer.</span>
            </h1>
            <br />
            <br />
            <br />
            <p className="text-xl text-center max-w-xl mx-auto light:text-gray-700 light:font-semibold">
              I'm passionate about building robust and scalable backend systems that bring ideas to life.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8">
              <a 
                href="https://linkedin.com/in/matiasnicolasortiz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-400/40 backdrop-blur-md border border-blue-400/10 hover:bg-blue-400/60 text-white font-semibold rounded-lg btn-animated"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
                LinkedIn
              </a>
              
              <a 
                href="https://github.com/mtsortiz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-400/40 backdrop-blur-md border border-blue-400/10 hover:bg-blue-400/60 text-white font-semibold rounded-lg btn-animated"
              >
                <img src="/icons/github.svg" alt="GitHub" className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="w-full max-w-3xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 animate-fadeIn">ABOUT ME</h2>
          <br />
          <p className="text-lg text-text light:text-gray-700 light:font-medium">
            I'm a fourth-year Information Systems Engineering student with a passion for software development. 
            Over the past two years, I've been diving deep into Java development, building projects with Spring Boot 
            and exploring database design with MySQL. Currently expanding my horizons with Python and Kotlin, 
            while maintaining a strong focus on clean code, design patterns, and software architecture best practices.
          </p>
          <br />
          <br />
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <img src="/icons/java.svg" alt="Java" className="h-12 w-12 hover:scale-110 transition-transform duration-300" title="Java - Backend Development" />
            <img src="/icons/spring.svg" alt="Spring" className="h-12 w-12 hover:scale-110 transition-transform duration-300" title="Spring Framework - Enterprise Java" />
            <img src="/icons/python.svg" alt="Python" className="h-12 w-12 hover:scale-110 transition-transform duration-300" title="Python - AI & Scripting" />
            <img src="/icons/kotlin.svg" alt="Kotlin" className="h-12 w-12 hover:scale-110 transition-transform duration-300" title="Kotlin - Android Development" />
            <img src="/icons/mysql.svg" alt="MySQL" className="h-12 w-12 hover:scale-110 transition-transform duration-300" title="MySQL - Database Management" />
            <img src="/icons/html.svg" alt="HTML" className="h-12 w-12 hover:scale-110 transition-transform duration-300" title="HTML5 - Web Markup" />
            <img src="/icons/css.svg" alt="CSS" className="h-12 w-12 hover:scale-110 transition-transform duration-300" title="CSS3 - Web Styling" />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="w-full max-w-5xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 animate-fadeIn">PROJECTS</h2>
          
          {/* Technology Filters */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={clearFilters}
                className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                  activeFilters.length === 0
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 dark:text-gray-300 light:text-gray-700 hover:bg-white/20'
                }`}
              >
                All Projects
              </button>
              {mainTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleFilter(tech)}
                  className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                    activeFilters.includes(tech)
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 dark:text-gray-300 light:text-gray-700 hover:bg-white/20'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            <p className="text-sm dark:text-gray-400 light:text-gray-600">
              Showing {filteredProjects.length} of {projectsData.length} projects
              {activeFilters.length > 0 && (
                <span className="ml-2">
                  • Filtered by: {activeFilters.join(', ')}
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project.id)}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block flex items-center justify-center transform hover:scale-105 h-20 animate-fadeIn"
              >
                <h3 className="text-lg font-semibold text-center">{project.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full max-w-3xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4 animate-fadeIn">CONTACT</h2>
          <p className="text-text text-lg mb-6">Let's get in touch! Email me at: <a href="mailto:matiasnortiz.dev@gmail.com" className="contact-link underline">matiasnortiz.dev@gmail.com</a></p>
          
          <p className="text-text text-lg">
            Watch and download my CV: 
            <a 
              href="https://drive.google.com/file/d/19uD8ttoRBcRMhvmixjq00HgQ1-MYTXl1/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link underline transition-colors duration-300 ml-1"
            >
              OrtizMatiasNicolas-CV
            </a>
          </p>
        </section>
      </main>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}