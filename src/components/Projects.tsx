import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  externalLink?: string;
  image: string;
}

/**
 * --------------------------------------------------------------
 * ProjectCard — 3D tilt card. On click mostra solo le icone GitHub/Demo.
 * --------------------------------------------------------------
 */
const ProjectCard: React.FC<
  Project & {
    index: number;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  }
> = ({
  title,
  description,
  technologies,
  githubLink,
  externalLink,
  image,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  /* --------------------------- state & refs --------------------------- */
  const isActive = activeIndex === index;
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  /* ------------------------------ 3D tilt ------------------------------ */
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const maxTilt = 12; // °
    const rotateY = ((x - midX) / midX) * maxTilt;
    const rotateX = -((y - midY) / midY) * maxTilt;
    setTilt({ rotateX, rotateY });
  }, []);

  const resetTilt = useCallback(() => setTilt({ rotateX: 0, rotateY: 0 }), []);

  /* -------------------------- keyboard toggle -------------------------- */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (['Enter', ' '].includes(e.key)) {
      e.preventDefault();
      setActiveIndex(isActive ? -1 : index);
    }
    if (e.key === 'Escape' && isActive) setActiveIndex(-1);
  };

  /* ---------------------------- component ----------------------------- */
  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      onClick={() => setActiveIndex(isActive ? -1 : index)}
      onKeyDown={handleKeyDown}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        boxShadow: '0 20px 30px -10px rgba(0,0,0,0.4)',
        transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
      }}
      className={cn(
        'relative w-full h-54 md:h-[300px] rounded-lg overflow-hidden select-none focus:outline-none',
      )}
    >
      {/* Background */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center" // no scale on hover; tilt handles movement
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/60 to-navy/90" />

      {/* Content: titolo, descrizione, tecnologie */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-slate-light pointer-events-none">
        <p className="font-mono text-sm text-accent mb-1">Featured Project</p>
        <span className="text-2xl font-semibold">{title}</span>
        <p className="mt-2 line-clamp-2 text-slate-light/90 text-sm">{description}</p>
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

      {/* Overlay con icone GitHub / Demo */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute top-4 right-4 flex gap-4 z-20 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="text-slate-light hover:text-accent"
            >
              <Github size={24} />
            </a>
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-slate-light hover:text-accent"
              >
                <ExternalLink size={24} />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * ----------------------------- Projects wrapper -----------------------------
 */
const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
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
      { threshold: 0.1 },
    );

    const animElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animElements?.forEach((el) => observer.observe(el));

    return () => {
      animElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  /* ----------------------------- project content ----------------------------- */
  const projects: Project[] = [
    {
      title: 'Data Visualization Dashboard',
      description:
        'An interactive dashboard built to visualize complex datasets. Features include real-time filtering, custom chart configurations, and exportable reports for business intelligence applications.',
      technologies: ['React', 'D3.js', 'Python', 'Flask', 'SQL'],
      githubLink: 'https://github.com',
      externalLink: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800',
    },
    {
      title: 'Predictive Analytics Platform',
      description:
        'A machine learning platform that analyzes historical data to predict future trends. Implemented multiple ML algorithms to provide accurate forecasts for business decision-making.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Docker'],
      githubLink: 'https://github.com',      
      externalLink: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800',
    },
    {
      title: 'Smart Telemetry System',
      description:
        'Developed during my time in Sweden, this system collects and processes IoT sensor data in real-time. Features include anomaly detection and automated alerting for critical events.',
      technologies: ['Node.js', 'MongoDB', 'MQTT', 'AWS', 'React'],
      githubLink: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
    },
  ];

  return (
    <section id="projects" className="section-container" ref={sectionRef}>
      <h2 className="section-heading projects mb-10">Some Things I've Built</h2>

      <div
        className="relative flex flex-col gap-16 md:gap-24" // stessa distanza originale
        style={{ perspective: '1200px' }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
