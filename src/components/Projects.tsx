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
  index: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  externalLink,
  image,
  index,
}: ProjectProps) => {
  return (
    <div
      className={
        cn(
          'relative group w-full h-64 md:h-[350px] rounded-lg overflow-hidden shadow-lg opacity-0 animate-on-scroll',
        )
      }
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay to enhance readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/60 to-navy/90 group-hover:via-navy/40 transition-colors duration-500" />

      {/* Action icons */}
      <div className="absolute top-4 right-4 z-20 flex gap-4 text-slate-light">
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

      {/* Project content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-slate-light">
        <p className="font-mono text-sm text-accent mb-1">Featured Project</p>
        <a
          href={externalLink || githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold hover:text-accent transition-colors"
        >
          {title}
        </a>
        <p className="mt-2 line-clamp-2 text-slate-light/90 text-sm">
          {description}
        </p>

        {/* Technologies */}
        <ul className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="bg-navy-light/50 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const projects = [
  {
    title: 'Data Visualization Dashboard',
    description:
      'An interactive dashboard built to visualize complex datasets. Features include real-time filtering, custom chart configurations, and exportable reports for business intelligence applications.',
    technologies: ['React', 'D3.js', 'Python', 'Flask', 'SQL'],
    githubLink: 'https://github.com',
    externalLink: 'https://example.com',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800',
  },
  {
    title: 'Predictive Analytics Platform',
    description:
      'A machine learning platform that analyzes historical data to predict future trends. Implemented multiple ML algorithms to provide accurate forecasts for business decision-making.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Docker'],
    githubLink: 'https://github.com',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800',
  },
  {
    title: 'Smart Telemetry System',
    description:
      'Developed during my time in Sweden, this system collects and processes IoT sensor data in real-time. Features include anomaly detection and automated alerting for critical events.',
    technologies: ['Node.js', 'MongoDB', 'MQTT', 'AWS', 'React'],
    githubLink: 'https://github.com',
    externalLink: 'https://example.com',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'animate-slide-up');
          }
        });
      },
      { threshold: 0.1 },
    );

    const animElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animElements?.forEach((el) => observer.observe(el));

    return () => {
      animElements?.forEach((el) => {
        observer.unobserve(el);
        el.classList.add('animate-fade-in', 'animate-slide-up');
      });
    };
  }, []);

  return (
    <section id="projects" className="section-container" ref={sectionRef}>
      <h2 className="section-heading projects">Some Things I've Built</h2>

      <div className="space-y-16 mt-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            externalLink={project.externalLink}
            image={project.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
