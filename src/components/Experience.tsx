
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  title: string;
  company: string;
  companyLink?: string;
  date: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Scientist & Web Developer",
    company: "STORViX AB",
    companyLink: "#",
    date: "Jan 2025 - Jun 2025",
    description: [
      "Developed data visualization dashboards to monitor system performance and user behavior",
      "Implemented machine learning algorithms for predictive analytics",
      "Contributed to full-stack development of internal tools",
      "Gained international experience through the Erasmus+ program"
    ],
    technologies: ["Python", "SQL", "JavaScript", "React", "TensorFlow"]
  },
  {
    title: "Real Estate Agent",
    company: "Tecnocasa",
    companyLink: "https://www.tecnocasa.it",
    date: "Mar 2023 - Aug 2023",
    description: [
      "Managed client portfolios and property negotiations",
      "Analyzed market trends and property valuations",
      "Created data-driven reports to inform investment decisions",
      "Developed strong communication and negotiation skills"
    ],
    technologies: ["Market Analysis", "Excel", "CRM Software"]
  },
  {
    title: "Waiter & Bartender",
    company: "The Fertha",
    date: "2018 - 2019",
    description: [
      "Provided excellent customer service in a fast-paced environment",
      "Managed inventory and order processing systems",
      "Developed strong interpersonal and teamwork skills",
      "Improved English language proficiency while working abroad"
    ],
    technologies: ["Customer Service", "Time Management", "English"]
  },
  {
    title: "Innovation Program Participant",
    company: "Cisco Systems Italy",
    companyLink: "https://www.cisco.com",
    date: "2018 - 2019",
    description: [
      "Participated in workshops focused on networking technologies and innovation",
      "Collaborated with team members on technical projects",
      "Gained exposure to enterprise-level technology solutions",
      "Developed foundational understanding of IT infrastructure"
    ],
    technologies: ["Networking", "IT Infrastructure", "Innovation"]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
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
    <section id="experience" className="section-container" ref={sectionRef}>
      <h2 className="section-heading experience">Where I've Worked</h2>
      
      <div className="opacity-0 animate-on-scroll mt-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs - Vertical for desktop, horizontal scrolling for mobile */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal border-b md:border-b-0 md:border-l border-slate/20">
            {experiences.map((exp, index) => (
              <button 
                key={index} 
                onClick={() => setActiveTab(index)}
                className={cn(
                  "py-3 md:py-2 px-4 md:pl-6 md:pr-10 font-mono text-sm text-left transition-all",
                  activeTab === index 
                    ? "text-accent border-accent md:border-l-2 md:border-b-0 border-b-2" 
                    : "text-slate hover:text-slate-light hover:bg-navy-light"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-grow mt-6 md:mt-0">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={cn(
                  "transition-all duration-300",
                  activeTab === index ? "opacity-100" : "opacity-0 hidden"
                )}
              >
                <h3 className="text-xl font-semibold text-slate-light">
                  {exp.title}{" "}
                  <span className="text-accent">
                    @ {exp.companyLink ? (
                      <a 
                        href={exp.companyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </span>
                </h3>
                
                <p className="font-mono text-xs text-slate mt-1 mb-4">{exp.date}</p>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-slate">
                      <span className="text-accent flex-shrink-0 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
