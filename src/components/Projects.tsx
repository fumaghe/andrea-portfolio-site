
import { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  externalLink?: string;
  image: string;
  isReversed?: boolean;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies,
  githubLink,
  externalLink,
  image,
  isReversed,
  index
}: ProjectProps) => {
  return (
    <div 
      className={cn(
        "relative grid grid-cols-12 gap-2 items-center opacity-0 animate-on-scroll",
        isReversed ? "md:flex-row-reverse" : ""
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Project image - shared between mobile and desktop */}
      <div className={cn(
        "relative col-span-12 md:col-span-7 rounded overflow-hidden",
        isReversed ? "md:col-start-1" : "md:col-start-6"
      )}>
        <div className="absolute inset-0 bg-accent/20 hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 md:h-[350px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      
      {/* Project info */}
      <div className={cn(
        "col-span-12 md:col-span-7 md:row-start-1 z-20 py-4",
        isReversed ? "md:col-start-6 text-left" : "md:col-start-1 text-right"
      )}>
        <p className="font-mono text-sm text-accent mb-1">Featured Project</p>
        <h3 className="text-2xl font-semibold text-slate-light mb-3">{title}</h3>
        
        <div className="bg-navy-light p-5 rounded shadow-lg mb-4 md:max-w-[120%]">
          <p className="text-slate">{description}</p>
        </div>
        
        <ul className={cn(
          "flex flex-wrap gap-x-4 gap-y-2 mb-4 text-xs font-mono text-slate",
          isReversed ? "justify-start" : "justify-end"
        )}>
          {technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        
        <div className={cn(
          "flex gap-4 text-slate-light", 
          isReversed ? "justify-start" : "justify-end"
        )}>
          <a 
            href={githubLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
          {externalLink && (
            <a 
              href={externalLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard built to visualize complex datasets. Features include real-time filtering, custom chart configurations, and exportable reports for business intelligence applications.",
    technologies: ["React", "D3.js", "Python", "Flask", "SQL"],
    githubLink: "https://github.com",
    externalLink: "https://example.com",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
  },
  {
    title: "Predictive Analytics Platform",
    description: "A machine learning platform that analyzes historical data to predict future trends. Implemented multiple ML algorithms to provide accurate forecasts for business decision-making.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Docker"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
  },
  {
    title: "Smart Telemetry System",
    description: "Developed during my time in Sweden, this system collects and processes IoT sensor data in real-time. Features include anomaly detection and automated alerting for critical events.",
    technologies: ["Node.js", "MongoDB", "MQTT", "AWS", "React"],
    githubLink: "https://github.com",
    externalLink: "https://example.com",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Don't unobserve to ensure elements stay visible
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      if (animElements) {
        animElements.forEach((el) => {
          observer.unobserve(el);
          // Ensure elements are visible when component unmounts
          el.classList.add('animate-fade-in');
        });
      }
    };
  }, []);

  return (
    <section id="projects" className="section-container" ref={sectionRef}>
      <h2 className="section-heading projects">Some Things I've Built</h2>
      
      <div className="space-y-24 mt-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            externalLink={project.externalLink}
            image={project.image}
            isReversed={index % 2 !== 0}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
