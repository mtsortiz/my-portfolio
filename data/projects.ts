export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 'ai-agent',
    title: 'Conversational AI Agent: Virtual Waiter',
    description: 'Developed a multi-agent system ("Virtual Waiter") using LangGraph and RAG with Google Gemini. Focused on task orchestration and integrating external databases for data persistence and reporting.',
    technologies: ['Google Gemini', 'LangGraph', 'RAG', 'Vector Databases', 'Python'],
    githubUrl: 'https://github.com/mtsortiz/ai-agents-final-project'
  },
  {
    id: 'song-info',
    title: 'Music Finder',
    description: 'Mobile application development with Kotlin, focusing on SOLID principles and architectural patterns. Consumes LastFM and Spotify APIs.',
    technologies: ['Kotlin', 'SOLID', 'API Integration', 'Architectural Patterns', 'Android'],
    githubUrl: 'https://github.com/MatiOrtiz/AYDS25-SongInfo'
  },
  {
    id: 'surveying-app',
    title: 'Surveying App',
    description: 'Professional surveying application designed for field data collection and measurement processing. Includes GPS integration, coordinate calculations, and reporting tools for surveying professionals.',
    technologies: ['Android', 'Java', 'GPS Integration', 'Mathematical Calculations', 'Data Processing'],
    githubUrl: 'https://github.com/MatiOrtiz/surveyingg-app'
  },
  {
    id: 'products-register',
    title: 'Products Itinerary',
    description: 'Comprehensive product management system for tracking inventory, managing product lifecycles, and organizing itineraries. Features include barcode scanning, inventory tracking, and detailed product cataloging.',
    technologies: ['Java', 'Database Management', 'Inventory System', 'Backend Logic', 'Data Structures'],
    githubUrl: 'https://github.com/MatiOrtiz/products-register'
  },
  {
    id: 'atm-bank',
    title: 'ATM Simulator – Bank Employee',
    description: 'Created a Java desktop application to simulate banking functionalities. Implemented role-based access control and utilized MySQL for transactional integrity (using Views, Functions, and Triggers).',
    technologies: ['Java', 'MySQL', 'Database Triggers', 'Access Control', 'Desktop Application'],
    githubUrl: 'https://github.com/MatiOrtiz/sistema-bancario-java-sql'
  },
  {
    id: 'yoyo-analysis',
    title: "Yoyo's Physical Data Analysis",
    description: 'Scientific analysis application for processing and visualizing physical data from yoyo experiments. Includes statistical analysis, data visualization, and physics calculations for educational and research purposes.',
    technologies: ['Python', 'Data Analysis', 'Statistical Computing', 'Data Visualization', 'Scientific Computing'],
    githubUrl: 'https://github.com/MatiOrtiz/proyecto-yoyo'
  },
  {
    id: 'rest-api',
    title: 'REST Api',
    description: 'RESTful API built with Spring Boot framework, featuring comprehensive CRUD operations, authentication, data validation, and API documentation. Includes database integration and proper HTTP status handling.',
    technologies: ['Java', 'Spring Boot', 'REST API', 'Database Integration', 'HTTP Protocols'],
    githubUrl: 'https://github.com/MatiOrtiz/Rest-API-with-Spring-Boot'
  },
  {
    id: 'todo-web-app',
    title: "TODO's Web Application",
    description: 'Developed a full-stack web application using Spring Boot and Spring Security for task management (CRUD). Focused on secure authentication and persistence with Spring Data JPA.',
    technologies: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'H2', 'Java'],
    githubUrl: 'https://github.com/MatiOrtiz/toDoManagerWebApp'
  },
  {
    id: 'candy-crush',
    title: 'Reversioned Candy Crush',
    description: 'Developed a Match-3 game in Java with a focus on OOP architecture. Applied Design Patterns and managed Concurrency for game logic. Included a persistent ranking system.',
    technologies: ['Java', 'Design Patterns', 'Concurrency', 'OOP', 'Data Structures'],
    githubUrl: 'https://github.com/MatiOrtiz/CandyCrush'
  }
];