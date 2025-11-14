import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface UseScrollSpyOptions {
  sections: string[];
  threshold?: number;
  rootMargin?: string;
}

export const useScrollSpy = ({ 
  sections, 
  threshold = 0.5, 
  rootMargin = '-20% 0px -20% 0px' 
}: UseScrollSpyOptions) => {
  const router = useRouter();

  useEffect(() => {
    const sectionElements = sections.map(id => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > threshold) {
            const sectionId = entry.target.id;
            const newHash = `#${sectionId}`;
            
            // Only update if the hash is different to avoid unnecessary updates
            if (window.location.hash !== newHash) {
              router.replace(`/${newHash}`, undefined, { shallow: true });
            }
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    // Observe all sections
    sectionElements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, [sections, threshold, rootMargin, router]);
};