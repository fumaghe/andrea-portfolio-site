
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '@/data/projects';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
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
        src={`${import.meta.env.BASE_URL}${image}`}
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

  // Get featured projects from the data file
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="section-container" ref={sectionRef}>
      <h2 className="section-heading projects mb-10">Some Things I've Built</h2>

      <div
        className="relative flex flex-col gap-16 md:gap-24" // stessa distanza originale
        style={{ perspective: '1200px' }}
      >
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            {...project}
          />
        ))}
      </div>
      
      {/* View All Projects link */}
      <div className="mt-16 text-start animate-on-scroll">
        <Link 
          to="/projects" 
          className="inline-flex items-center font-mono text-accent hover:opacity-80 transition-opacity text-lg group"
        >
          <span>All projects</span>
          <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
