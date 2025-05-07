import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/* --------------------------------------------------
   DATA
-------------------------------------------------- */

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
    title: 'Data Scientist & Web Developer',
    company: 'STORViX AB',
    companyLink: 'https://storvix.eu/',
    date: 'JAN 2025 — JUN 2025',
    description: [
      'Led the development of AVALoN, a modern analytics platform central to system monitoring and actionable insights',
      'Architected and implemented core AVALoN features for real-time data visualization and predictive analytics',
      'Demonstrated AVALoN’s strategic impact in optimizing resource allocation and improving user engagement',
      'Contributed to full-stack development of internal tools supporting AVALoN’s deployment and maintenance',
      'Gained international experience through the Erasmus+ program'
    ],
    technologies: ['Python', 'SQL', 'JavaScript', 'React', 'AI', 'Typescript', 'NoSQL', 'Team working', 'Big Data'],
  },
  {
    title: 'Real Estate Agent',
    company: 'Tecnocasa',
    companyLink: 'https://www.tecnocasa.it',
    date: 'MAR 2023 — AUG 2023',
    description: [
      'Balanced a full-time real estate role with university studies, demonstrating excellent time management',
      'Managed client portfolios and property negotiations while completing academic exams',
      'Started collecting and analyzing market data to support forecasts and property evaluations',
      'Refined communication and negotiation skills in fast-paced and dynamic environments'
    ],
    technologies: ['Market Analysis', 'Excel', 'Market Predictions', 'Negotiation', 'Client Management', 'Python'],
  },
  {
    title: 'Innovation Program Participant',
    company: 'Cisco Systems Italy',
    companyLink: 'https://www.cisco.com',
    date: '2018 & 2019',
    description: [
      'Selected for an exclusive innovation program at Cisco Systems Italy',
      'Attended advanced workshops on networking technologies and enterprise solutions',
      'Collaborated with multidisciplinary teams on high-impact technical projects',
      'Gained a solid foundation in enterprise-scale IT infrastructure'
    ],
    technologies: ['Networking', 'IT Infrastructure', 'Innovation', 'Startup', 'Teamwork', 'Problem Solving', 'Python', 'Project Management'],
  },
  {
    title: 'Waiter & Bartender',
    company: 'The Fertha',
    companyLink: 'https://g.co/kgs/5SKEhHF',
    date: '2018 & 2019',
    description: [
      'Collaborated closely with a diverse team to deliver exceptional customer service in a fast-paced environment',
      'Worked part-time while studying, developing strong time management and multitasking skills',
      'Managed inventory and order processing systems to ensure smooth operations',
      'Improved English proficiency by engaging with international guests'
    ],
    technologies: ['Customer Service', 'Time Management', 'English'],
  },
];

interface StudyItem {
  institution: string;
  degree: string;
  location: string;
  date: string;
  link?: string;
}

const studies: StudyItem[] = [
  {
    institution: 'Higher VET Institute, ITS Angelo Rizzoli',
    location: 'Milan, Italy',
    degree: 'Associate Degree • Big Data Specialist',
    date: 'OCT 2023 — JUL 2025',
  },
  {
    institution: 'University of Milan',
    location: 'Milan, Italy',
    degree: 'Attendance • Medical Biotechnology',
    date: 'OCT 2020 — MAR 2023',
  },
  {
    institution: 'Asana International School',
    location: 'Cahersiveen, Ireland',
    degree: 'English Course',
    date: 'JUL 2018 • JUL 2019',
  },
  {
    institution: 'Salesiani Don Bosco',
    location: 'Treviglio (BG), Italy',
    degree: 'High School Diploma • Scientific Studies (Applied Sciences)',
    date: 'SEP 2014 — JUN 2020',
  },
];

/* --------------------------------------------------
   COMPONENTS
-------------------------------------------------- */

const TimelineBullet = () => (
  <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-accent/60" />
);

const TabButton = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={cn(
      'font-mono text-sm px-4 py-2 transition-all',
      active ? 'rounded bg-accent/10 text-accent' : 'text-slate hover:text-accent',
    )}
  >
    {label}
  </button>
);

/* --------------------------------------------------
   MAIN SECTION
-------------------------------------------------- */

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [tab, setTab] = useState<'experience' | 'studies'>('experience');

  // ensure observer runs again when tab changes so new nodes get animated
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fade-in');
        });
      },
      { threshold: 0.1 },
    );

    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    els?.forEach((el) => {
      // reset visibility so newly mounted items start hidden then fade in
      (el as HTMLElement).classList.remove('animate-fade-in');
      observer.observe(el);
    });

    return () => els?.forEach((el) => observer.unobserve(el));
  }, [tab]);

  return (
    <section id="experience" className="section-container" ref={sectionRef}>
      <h2 className="section-heading experience">Career & Education</h2>

      {/* Tabs */}
      <div className="mt-8 flex gap-6 border-b border-slate/20 pb-3">
        <TabButton label="Experience" active={tab === 'experience'} onClick={() => setTab('experience')} />
        <TabButton label="Studies" active={tab === 'studies'} onClick={() => setTab('studies')} />
      </div>

      {/* EXPERIENCE TIMELINE */}
      {tab === 'experience' && (
        <div className="mt-14 space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="animate-on-scroll flex flex-col gap-6 sm:flex-row opacity-0">
              {/* DATE */}
              <p className="w-full shrink-0 font-mono text-xs uppercase tracking-wider text-slate-light sm:w-40 lg:w-48">
                {exp.date}
              </p>
              <div className="flex-1 space-y-4">
                <h3 className="text-lg font-semibold text-slate-light sm:text-xl">
                  {exp.title},
                  {exp.companyLink ? (
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[2px] pl-1 hover:text-accent"
                    >
                      {exp.company}
                      <ArrowUpRight size={14} className="mt-[2px]" />
                    </a>
                  ) : (
                    <span className="pl-1 text-slate">{exp.company}</span>
                  )}
                </h3>
                <ul className="space-y-2">
                  {exp.description.map((d, i) => (
                    <li key={i} className="flex gap-2 text-slate">
                      <TimelineBullet />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="rounded-md bg-navy-light/40 px-3 py-1 text-xs font-mono text-slate-light backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* STUDIES TIMELINE */}
      {tab === 'studies' && (
        <div className="mt-14 space-y-16">
          {studies.map((study, idx) => (
            <div key={idx} className="animate-on-scroll flex flex-col gap-6 sm:flex-row opacity-0">
              {/* DATE */}
              <p className="w-full shrink-0 font-mono text-xs uppercase tracking-wider text-slate-light sm:w-40 lg:w-48">
                {study.date}
              </p>
              <div className="flex-1 space-y-3">
                <h3 className="text-lg font-semibold text-slate-light sm:text-xl">
                  {study.institution}
                  {study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[2px] pl-1 hover:text-accent"
                    >
                      <ArrowUpRight size={14} className="mt-[2px]" />
                    </a>
                  )}
                </h3>
                <p className="font-mono text-sm text-slate-light/80">{study.degree}</p>
                <p className="text-sm text-slate">{study.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Experience;
