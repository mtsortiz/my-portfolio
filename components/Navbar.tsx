import Image from "next/image";

export default function NavBar() {
  const links = [
    { target: "home", label: "Home" },
    { target: "about", label: "About" },
    { target: "projects", label: "Projects" },
    { target: "contact", label: "Contact" },
  ];

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div>
      {/* Navigation Menu - Centro superior */}
      <nav className="w-full fixed top-4 z-50 flex justify-center">
        <ul className="flex dark:bg-black/40 light:bg-white/60 backdrop-blur-md border dark:border-white/10 light:border-gray-300/30 px-6 py-2 rounded-full shadow-md space-x-4">
          {links.map(({ target, label }) => (
            <li key={target}>
              <button
                onClick={() => handleScrollTo(target)}
                className="text-sm px-4 py-2 rounded-full transition-colors dark:text-white light:text-gray-700 dark:hover:bg-white/10 light:hover:bg-gray-200/50"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Media Icons - Responsive positioning */}
      <div className="fixed bottom-4 right-4 z-50 md:top-4 md:bottom-auto md:right-6">
        <div className="flex flex-col md:flex-row dark:bg-blue-400/40 light:bg-white/60 backdrop-blur-md border dark:border-blue-400/10 light:border-gray-300/30 p-3 md:px-6 md:py-2 rounded-full shadow-md space-y-3 md:space-y-0 md:space-x-4 items-center">
          <a
            href="https://www.linkedin.com/in/matiasnicolasortiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full transition dark:hover:bg-blue-400/20 light:hover:bg-gray-200/50 p-1 md:p-0"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/mtsortiz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full transition dark:hover:bg-blue-400/20 light:hover:bg-gray-200/50 p-1 md:p-0"
          >
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}