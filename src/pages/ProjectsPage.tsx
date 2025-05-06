
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { cn } from '@/lib/utils';

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
      {/* Back to Portfolio link */}
      <Link
        to="/"
        className="inline-flex items-center text-slate hover:text-accent mb-8 transition-colors group"
      >
        <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
        <span className="font-mono text-sm">Back to Portfolio</span>
      </Link>
      
      <h1 className="text-4xl font-semibold text-slate-light mb-4 animate-on-scroll">All Projects</h1>
      <p className="text-slate mb-8 max-w-xl animate-on-scroll">
        A collection of projects I've worked on, exploring various technologies and domains in data science and software development.
      </p>

      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-6 lg:gap-8">
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
