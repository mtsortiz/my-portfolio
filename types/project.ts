export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  type: 'mobile' | 'web' | 'desktop' | 'game';
}