import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'crypto-ai-assistant',
    title: 'Crypto AI-ssistant',
    description: 'Production-ready crypto financial assistant built with a modular architecture. Combines LangGraph agent orchestration, RAG over whitepapers with Chroma, and a FastAPI /chat endpoint to deliver market insights and technical explanations.',
    technologies: ['Python', 'LangGraph', 'FastAPI', 'RAG', 'Chroma', 'Google Gemini'],
    github: 'https://github.com/mtsortiz/crypto-aissistant',
    cover: '/covers/crypto-cover-v2.svg',
    coverLight: '/covers/crypto-cover-v2-light.svg',
    type: 'web'
  },
  {
    id: 'airline-ai-assistant',
    title: 'Airline AI Assistant',
    description: 'Intelligent conversational assistant for airline customer service. Provides flight information, booking assistance, and travel recommendations using advanced AI capabilities and natural language processing.',
    technologies: ['Python', 'Natural Language Processing', 'Jupyter Notebook', 'Customer Service Automation'],
    github: 'https://github.com/mtsortiz/airline-ai-assistant',
    cover: '/covers/airline-cover-v2.svg',
    coverLight: '/covers/airline-cover-v2-light.svg',
    type: 'web'
  },
  {
    id: 'business-brochure',
    title: 'Business Brochure Generator',
    description: 'Full-stack application for automated business brochure generation. Features a Next.js frontend with modern UI and a Python backend for web scraping and content generation. Creates professional marketing materials dynamically.',
    technologies: ['Next.js', 'Python', 'Web Scraping', 'TypeScript', 'React', 'Content Generation'],
    github: 'https://github.com/mtsortiz/business-brochure',
    cover: '/covers/brochure-cover-v2.svg',
    coverLight: '/covers/brochure-cover-v2-light.svg',
    type: 'web'
  },
  {
    id: 'techtutor',
    title: 'TechTutor',
    description: 'Interactive AI-powered technical tutoring assistant. Provides personalized learning experiences, code explanations, and programming guidance. Leverages web scraping for up-to-date technical content and documentation.',
    technologies: ['Python', 'Jupyter Notebook', 'Web Scraping', 'Educational Technology'],
    github: 'https://github.com/mtsortiz/techtutor',
    cover: '/covers/techtutor-cover-v2.svg',
    coverLight: '/covers/techtutor-cover-v2-light.svg',
    type: 'web'
  },
  {
    id: 'ai-agent',
    title: 'Conversational AI Agent: Virtual Waiter',
    description: 'Developed a multi-agent system ("Virtual Waiter") using LangGraph and RAG with Google Gemini. Focused on task orchestration and integrating external databases for data persistence and reporting.',
    technologies: ['Google Gemini', 'LangGraph', 'RAG', 'Vector Databases', 'Python'],
    github: 'https://github.com/mtsortiz/ai-agents-final-project',
    cover: '/covers/virtual-waiter-cover-v2.svg',
    coverLight: '/covers/virtual-waiter-cover-v2-light.svg',
    type: 'desktop'
  },
  {
    id: 'song-info',
    title: 'Music Finder',
    description: 'Mobile application development with Kotlin, focusing on SOLID principles and architectural patterns. Consumes LastFM and Spotify APIs.',
    technologies: ['Kotlin', 'SOLID', 'API Integration', 'Architectural Patterns', 'Android'],
    github: 'https://github.com/mtsortiz/AYDS25-SongInfo',
    type: 'mobile'
  },
  {
    id: 'surveying-app',
    title: 'Surveying App',
    description: 'Professional surveying application designed for field data collection and measurement processing. Includes GPS integration, coordinate calculations, and reporting tools for surveying professionals.',
    technologies: ['Android', 'Java', 'GPS Integration', 'Mathematical Calculations', 'Data Processing'],
    github: 'https://github.com/mtsortiz/surveyingg-app',
    type: 'mobile'
  },
  {
    id: 'products-register',
    title: 'Products Itinerary',
    description: 'Comprehensive product management system for tracking inventory, managing product lifecycles, and organizing itineraries. Features include barcode scanning, inventory tracking, and detailed product cataloging.',
    technologies: ['Java', 'Database Management', 'Inventory System', 'Backend Logic', 'Data Structures'],
    github: 'https://github.com/mtsortiz/products-register',
    type: 'desktop'
  },
  {
    id: 'atm-bank',
    title: 'ATM Simulator – Bank Employee',
    description: 'Created a Java desktop application to simulate banking functionalities. Implemented role-based access control and utilized MySQL for transactional integrity (using Views, Functions, and Triggers).',
    technologies: ['Java', 'MySQL', 'Database Triggers', 'Access Control', 'Desktop Application'],
    github: 'https://github.com/mtsortiz/sistema-bancario-java-sql',
    type: 'desktop'
  },
  {
    id: 'yoyo-analysis',
    title: "Yoyo's Physical Data Analysis",
    description: 'Scientific analysis application for processing and visualizing physical data from yoyo experiments. Includes statistical analysis, data visualization, and physics calculations for educational and research purposes.',
    technologies: ['Python', 'Data Analysis', 'Statistical Computing', 'Data Visualization', 'Scientific Computing'],
    github: 'https://github.com/mtsortiz/proyecto-yoyo',
    type: 'desktop'
  },
  {
    id: 'todo-web-app',
    title: "TODO's Web Application",
    description: 'Developed a full-stack web application using Spring Boot and Spring Security for task management (CRUD). Focused on secure authentication and persistence with Spring Data JPA.',
    technologies: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'H2', 'Java'],
    github: 'https://github.com/mtsortiz/toDoManagerWebApp',
    type: 'web'
  },
  {
    id: 'candy-crush',
    title: 'Reversioned Candy Crush',
    description: 'Developed a Match-3 game in Java with a focus on OOP architecture. Applied Design Patterns and managed Concurrency for game logic. Included a persistent ranking system.',
    technologies: ['Java', 'Design Patterns', 'Concurrency', 'OOP', 'Data Structures'],
    github: 'https://github.com/mtsortiz/CandyCrush',
    type: 'game'
  }
];