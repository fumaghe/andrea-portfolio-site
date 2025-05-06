
import React, { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from '@/lib/utils';

const ProjectsPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Get unique technologies across all projects
  const allTechnologies = Array.from(
    new Set(
      projects.flatMap(project => project.technologies)
    )
  ).sort();

  // Filter projects when selected technologies change
  useEffect(() => {
    if (selectedTechnologies.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          selectedTechnologies.some(tech => 
            project.technologies.includes(tech)
          )
        )
      );
    }
  }, [selectedTechnologies]);

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

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  return (
    <section className="section-container" ref={sectionRef}>
      <h1 className="text-4xl font-semibold text-slate-light mb-4 animate-on-scroll">All Projects</h1>
      <p className="text-slate mb-8 max-w-xl animate-on-scroll">
        A collection of projects I've worked on, exploring various technologies and domains in data science and software development.
      </p>
      
      {/* Technology filters */}
      <div className="mb-10 animate-on-scroll">
        <h2 className="text-xl text-slate-light mb-3">Filter by Technology</h2>
        <div className="flex flex-wrap gap-2">
          {allTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className={cn(
                "cursor-pointer px-3 py-1.5 text-sm rounded-full transition-colors",
                selectedTechnologies.includes(tech)
                  ? "bg-[#233554] text-teal-300 border-teal-300/50"
                  : "bg-navy-light text-slate hover:bg-[#233554] hover:text-teal-300"
              )}
              onClick={() => toggleTechnology(tech)}
            >
              {tech}
              {selectedTechnologies.includes(tech) && (
                <span className="ml-1">✓</span>
              )}
            </Badge>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-6 lg:gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="animate-on-scroll">
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <p className="text-slate text-center py-12">
            No projects match the selected filters. Try selecting different technologies.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
