import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
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
            <p className="text-lg text-center max-w-xl mx-auto light:text-gray-700 light:font-semibold">
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
          <h2 className="text-2xl font-bold text-primary mb-4 animate-fadeIn">ABOUT ME</h2>
          <br />
          <p className="text-text light:text-gray-700 light:font-medium">
            I'm a software developer focused on Java stack. Passionate about creating efficient, scalable software.
            Currently learning AI and exploring new technologies to enhance my skills.
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
          <h2 className="text-2xl font-bold text-primary mb-4 animate-fadeIn">PROJECTS</h2>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <a
              href="https://github.com/mtsortiz/ai-agents-final-project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block aspect-square flex flex-col transform hover:scale-105"
            >
              <div className="flex-1"></div>
              <h3 className="text-xl font-semibold text-center w-full">Agente Conversacional: Mozo Virtual</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/AYDS25-SongInfo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block aspect-square flex flex-col transform hover:scale-105"
            >
              <div className="flex-1"></div>
              <h3 className="text-xl font-semibold text-center w-full">Song Info</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/surveyingg-app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block aspect-square flex flex-col transform hover:scale-105"
            >
              <div className="flex-1"></div>
              <h3 className="text-xl font-semibold text-center w-full">Surveying App</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/products-register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block aspect-square flex flex-col transform hover:scale-105"
            >
              <div className="flex-1"></div>
              <h3 className="text-xl font-semibold text-center w-full">Products Itinerary</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/sistema-bancario-java-sql"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block aspect-square flex flex-col transform hover:scale-105"
            >
              <div className="flex-1"></div>
              <h3 className="text-xl font-semibold text-center w-full">ATM - Bank Employee Simulator</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/proyecto-yoyo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block aspect-square flex flex-col transform hover:scale-105"
            >
              <div className="flex-1"></div>
              <h3 className="text-xl font-semibold text-center w-full">Yoyo's Physical Data Analysis</h3>
            </a>
            
            <a
              href="https://github.com/MatiOrtiz/Rest-API-with-Spring-Boot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block aspect-square flex flex-col transform hover:scale-105"
            >
              <div className="flex-1"></div>
              <h3 className="text-xl font-semibold text-center w-full">REST Api</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/CandyCrush"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block aspect-square flex flex-col transform hover:scale-105"
            >
              <div className="flex-1"></div>
              <h3 className="text-xl font-semibold text-center w-full">Candy Crush</h3>
            </a>

            <a
              href="https://github.com/MatiOrtiz/BankSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer block aspect-square flex flex-col transform hover:scale-105"
            >
              <div className="flex-1"></div>
              <h3 className="text-xl font-semibold text-center w-full">Banking System Simulator</h3>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full max-w-3xl p-6 min-h-screen flex flex-col justify-center snap-start mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4 animate-fadeIn">CONTACT</h2>
          <p className="text-text mb-6">Let's get in touch! Email me at: <a href="mailto:matiasnortiz.dev@gmail.com" className="contact-link underline">matiasnortiz.dev@gmail.com</a></p>
          
          <p className="text-text">
            Watch and download my CV: 
            <a 
              href="https://drive.google.com/file/d/1h_fvO7kHfG_d0Xm_bg7if7r9BirwFy3p/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link underline transition-colors duration-300 ml-1"
            >
              OrtizMatiasNicolas-CV
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}