
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectBySlug } from '@/data/projects';
import { Github, ExternalLink, FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const project = slug ? getProjectBySlug(slug) : undefined;
  
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
      return;
    }
    
    // Add animation class after a short delay to trigger entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [project, navigate]);
  
  if (!project) return null;
  
  return (
    <section className={`section-container transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Link
        to="/projects"
        className="inline-flex items-center text-slate hover:text-accent mb-8 transition-colors group"
      >
        <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
        <span className="font-mono text-sm">Back to Projects</span>
      </Link>
      
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <p className="font-mono text-accent mb-2">Featured Project</p>
          <div className="flex flex-wrap justify-between items-baseline">
            <h1 className="text-4xl font-semibold text-slate-light mr-4">{project.title}</h1>
            <p className="text-slate font-mono">{project.year}</p>
          </div>
        </header>
        
        <div className="mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg mb-6 object-cover h-64 lg:h-80"
          />
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-light mb-4 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl text-slate-light mb-3">Technologies Used</h2>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-[#233554] px-3 py-1.5 rounded-full text-sm font-mono text-teal-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button
            variant="outline"
            className="inline-flex items-center px-4 py-2 rounded-md bg-navy border border-slate/30 hover:border-accent transition-colors text-slate-light"
            asChild
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" />
              View Source
            </a>
          </Button>
          
          {project.externalLink && (
            <Button
              variant="outline"
              className="inline-flex items-center px-4 py-2 rounded-md bg-navy border border-slate/30 hover:border-accent transition-colors text-slate-light"
              asChild
            >
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} className="mr-2" />
                Visit Project
              </a>
            </Button>
          )}
          
          {project.presentationLink && (
            <Button
              variant="outline"
              className="inline-flex items-center px-4 py-2 rounded-md bg-navy border border-slate/30 hover:border-accent transition-colors text-slate-light"
              asChild
            >
              <a
                href={project.presentationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} className="mr-2" />
                View Presentation
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
