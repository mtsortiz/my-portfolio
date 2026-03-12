export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  cover?: string;
  coverLight?: string;
  type: 'mobile' | 'web' | 'desktop' | 'game';
}