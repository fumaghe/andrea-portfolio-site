
import { useEffect, useRef } from 'react';

const hardSkills = [
  // Languages & Programming
  "Python", "SQL", "R", "JavaScript", "TypeScript", 
  
  // Frameworks & Libraries  
  "Django", "Flask", "Node.js", "Pandas", "Polars", "NumPy", "SciPy",
  
  // Data Visualization
  "Matplotlib", "Seaborn", "Excel", "Power BI", "Tableau",
  
  // Databases & Big Data
  "MySQL", "MongoDB", "Redis", "Neo4J", "Spark", "Google BigTable", 
  
  // Cloud & Services
  "GCP", "Azure",
  
  // Machine Learning
  "TensorFlow", "PyTorch", "Keras",
  
  // Tools & DevOps
  "Git", "Docker"
];

const softSkills = [
  // Communication & Interpersonal
  "Communication", "Active Listening", "Teamwork", "Emotional Intelligence",
  
  // Thinking Skills
  "Analytical Thinking", "Creativity", "Decision-Making", "Adaptability",
  
  // Leadership Skills
  "Leadership", "Conflict Resolution", "Initiative", "Time Management"
];

const languages = [
  { language: "Italian", level: "Native" },
  { language: "English", level: "C1" },
  { language: "Spanish", level: "B1" }
];

const titles = [
  "Data Scientist", "Data Engineer", "AI Specialist", "Web Developer"
];

const Skills = () => {
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
    <section id="skills" className="section-container" ref={sectionRef}>
      <h2 className="section-heading skills">My Toolkit</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="opacity-0 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-semibold text-accent mb-4 font-mono">Professional Titles</h3>
            <div className="flex flex-wrap gap-3">
              {titles.map((title, index) => (
                <div 
                  key={index} 
                  className="border border-accent text-accent rounded-full px-4 py-2 text-sm hover:bg-accent/10 transition-colors cursor-pointer"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-on-scroll" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl font-semibold text-accent mb-4 font-mono">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-on-scroll" style={{ transitionDelay: '600ms' }}>
            <h3 className="text-xl font-semibold text-accent mb-4 font-mono">Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang, index) => (
                <li 
                  key={index} 
                  className="flex items-center justify-between"
                >
                  <span className="text-slate-light">{lang.language}</span>
                  <span className="text-slate text-sm">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <div className="opacity-0 animate-on-scroll" style={{ transitionDelay: '800ms' }}>
            <h3 className="text-xl font-semibold text-accent mb-4 font-mono">Soft Skills</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-slate-light mb-2">Communication & Interpersonal</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.slice(0, 4).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-slate-light mb-2">Thinking & Analysis</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.slice(4, 8).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-slate-light mb-2">Leadership & Management</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.slice(8, 12).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
