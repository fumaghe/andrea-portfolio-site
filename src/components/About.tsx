
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
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
      animElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="section-container" ref={sectionRef}>
      <h2 className="section-heading about">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 opacity-0 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          <div className="space-y-4 text-slate">
            <p>
              Hello! I'm Andrea, a Data Scientist passionate about transforming complex data into actionable insights. My journey in the tech world began with a foundation in Medical Biotechnology at the University of Milan, where I learned the importance of analytical precision and scientific methodology.
            </p>
            <p>
              Currently specializing in Big Data at ITS Angelo Rizzoli in Milan, I've developed expertise in Python, SQL, and R, with strong foundations in data pipelines, statistical modeling, and visualization techniques.
            </p>
            <p>
              My international experience in Sweden through Erasmus+ has broadened my perspective, allowing me to work on innovative smart telemetry platforms and full-stack development solutions.
            </p>
            <p>
              I'm driven by the potential of Big Data and AI to solve complex problems and create innovative solutions. When I'm not coding, you might find me exploring new technologies, engaging with the latest in tech innovation, or participating in sports activities.
            </p>
          </div>
        </div>

        <div className="opacity-0 animate-on-scroll flex justify-center" style={{ transitionDelay: '400ms' }}>
          <div className="relative w-60 h-60 md:w-full md:h-full max-w-[250px] max-h-[250px] rounded group">
            <div className="absolute inset-0 border-2 border-accent rounded translate-x-5 translate-y-5 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="absolute inset-0 bg-accent/20 rounded z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" 
              alt="Andrea Fumagalli" 
              className="rounded grayscale hover:grayscale-0 transition-all duration-300 z-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
