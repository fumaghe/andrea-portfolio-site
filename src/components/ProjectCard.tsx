
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    slug,
    title,
    year,
    description,
    technologies,
    githubLink,
    externalLink,
    presentationLink,
  } = project;

  return (
    <div 
      className="
        bg-navy-light rounded-2xl p-6 h-full flex flex-col
        transition-all duration-300
        hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] 
        hover:border-accent hover:border
        border border-transparent
      "
    >
      <header className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-slate-light">{title}</h3>
          <span className="text-sm text-slate font-mono">{year}</span>
        </div>
      </header>
      
      <p className="text-slate mb-5 flex-grow">{description}</p>
      
      <footer className="mt-auto">
        <ul className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="bg-[#233554] px-2 py-1 rounded text-xs font-mono text-teal-300"
            >
              {tech}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-4 mt-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="text-slate-light hover:text-accent transition-colors"
          >
            <Github size={20} />
          </a>
          
          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="text-slate-light hover:text-accent transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
          
          {presentationLink && (
            <a
              href={presentationLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Presentation"
              className="text-slate-light hover:text-accent transition-colors"
            >
              <FileText size={20} />
            </a>
          )}
          
          <Link 
            to={`/projects/${slug}`} 
            className="ml-auto text-accent hover:opacity-80 text-sm font-mono flex items-center transition-opacity"
          >
            View Details
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ProjectCard;
