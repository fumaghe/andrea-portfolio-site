import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Don't unobserve to ensure elements stay visible even on re-entry
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
    <section id="about" className="section-container" ref={sectionRef}>
      <h2 className="section-heading about">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          className="md:col-span-2 opacity-0 animate-on-scroll"
          style={{ transform: 'translateY(20px)', transitionDelay: '200ms' }}
        >
          <div className="space-y-4 text-slate">
            <p>
              Hello! I'm <span className="text-accent">Andrea</span>, a <span className="text-accent">Data Scientist</span> passionate about transforming complex data into actionable insights. My journey in the tech world began with a foundation in <span className="text-accent">Medical Biotechnology</span> at the <span className="text-accent">University of Milan</span>, where I learned the importance of analytical precision and scientific methodology.
            </p>
            <p>
              Currently specializing in <span className="text-accent">Big Data</span> at <span className="text-accent">ITS Angelo Rizzoli</span> in Milan, I've developed expertise in <span className="text-accent">Python</span>, <span className="text-accent">SQL</span>, and <span className="text-accent">AI</span>, with strong foundations in data pipelines, statistical modeling, and visualization techniques.
            </p>
            <p>
              My international experience in <span className="text-accent">Sweden</span> through <span className="text-accent">Erasmus+</span> has broadened my perspective, allowing me to work on innovative <span className="text-accent">smart telemetry platforms</span> and <span className="text-accent">full-stack development</span> solutions.
            </p>
            <p>
              I'm driven by the potential of <span className="text-accent">Big Data</span> and <span className="text-accent">AI</span> to solve complex problems and create innovative solutions. When I'm not coding, you might find me exploring new technologies, engaging with the latest in tech innovation, or participating in sports activities.
            </p>
          </div>
        </div>

        <div
          className="opacity-0 animate-on-scroll flex justify-center"
          style={{ transform: 'translateY(20px)', transitionDelay: '400ms' }}
        >
          <div className="relative w-60 h-60 md:w-full md:h-full max-w-[250px] max-h-[250px] rounded group">
            {/* Light blue border accent behind */}
            <div className="absolute inset-0 border-2 border-accent rounded translate-x-5 translate-y-5 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 z-0"></div>
            {/* Profile image on top */}
            <div className="relative z-10 w-full h-full">
              <img
                src="public/Profile.jpeg"
                alt="Andrea Fumagalli"
                className="rounded object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
