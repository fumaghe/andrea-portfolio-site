
import React, { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  /* ------------------------------ scroll reveal ------------------------------ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animElements?.forEach((el) => observer.observe(el));

    return () => {
      if (animElements) {
        animElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section className="section-container" ref={sectionRef}>
      <h1 className="text-4xl font-semibold text-slate-light mb-4">All Projects</h1>
      <p className="text-slate mb-12 max-w-xl">
        A collection of projects I've worked on, exploring various technologies and domains in data science and software development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="animate-on-scroll">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
