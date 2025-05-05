
import { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const elements = container.querySelectorAll('.animate-on-load');
    
    elements.forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100 * index);
    });

    // Ensure elements remain visible by preventing any styles from being removed
    return () => {
      elements.forEach((el) => {
        const element = el as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-10">
      <div ref={containerRef} className="max-w-4xl mx-auto">
        <p className="animate-on-load font-mono text-accent mb-6 text-sm sm:text-base">
          Hi, my name is
        </p>
        <h1 className="animate-on-load text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-light mb-4">
          Andrea Fumagalli.
        </h1>
        <h2 className="animate-on-load text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate mb-6">
          I turn data into decisions.
        </h2>
        <p className="animate-on-load max-w-lg text-slate mb-10 text-lg">
          I'm a detail-oriented Data Scientist with expertise in data visualization, Python, SQL, and R. 
          I specialize in deriving meaningful insights from complex datasets.
        </p>
        <div className="animate-on-load">
          <a 
            href="#contact" 
            className="font-mono inline-block border border-accent text-accent px-6 py-4 rounded hover:bg-accent/10 transition-colors duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
