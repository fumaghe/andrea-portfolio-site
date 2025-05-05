import { motion } from 'framer-motion';
import { MessageCircle, Brain, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

// --------------------------------------------------
// DATA
// --------------------------------------------------

const technicalSkills: { category: string; skills: { name: string; desc: string }[] }[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', desc: 'Versatile language for data & backend' },
      { name: 'SQL', desc: 'Query language for relational DBs' },
      { name: 'R', desc: 'Statistical computing language' },
      { name: 'JavaScript', desc: 'Web programming language' },
      { name: 'TypeScript', desc: 'Typed superset of JavaScript' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'Django', desc: 'Python web framework' },
      { name: 'Flask', desc: 'Lightweight Python web framework' },
      { name: 'Node.js', desc: 'JavaScript runtime' },
    ],
  },
  {
    category: 'Data Tools',
    skills: [
      { name: 'Pandas', desc: 'Data manipulation library' },
      { name: 'Polars', desc: 'Lightning‑fast DataFrame library' },
      { name: 'Spark', desc: 'Distributed data processing engine' },
      { name: 'BigTable', desc: 'Google NoSQL DB' },
    ],
  },
  {
    category: 'Visualization',
    skills: [
      { name: 'Matplotlib', desc: 'Python plotting library' },
      { name: 'Seaborn', desc: 'Statistical data visualization' },
      { name: 'Power BI', desc: 'Microsoft BI tool' },
      { name: 'Tableau', desc: 'Interactive data viz' },
      { name: 'Excel', desc: 'Spreadsheet & charts' },
    ],
  },
  {
    category: 'ML/AI',
    skills: [
      { name: 'TensorFlow', desc: 'Deep learning framework' },
      { name: 'PyTorch', desc: 'Deep learning library' },
      { name: 'Scikit‑learn', desc: 'ML algorithms in Python' },
      { name: 'Keras', desc: 'High‑level DL API' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', desc: 'Document DB' },
      { name: 'MySQL', desc: 'Relational DB' },
      { name: 'Redis', desc: 'In‑memory key‑value store' },
      { name: 'Neo4J', desc: 'Graph DB' },
    ],
  },
  {
    category: 'DevOps/Cloud',
    skills: [
      { name: 'Docker', desc: 'Containerization platform' },
      { name: 'Git', desc: 'Version control' },
      { name: 'GCP', desc: 'Google Cloud Platform' },
      { name: 'Azure', desc: 'Microsoft cloud services' },
    ],
  },
];

const softSkillBlocks = [
  {
    icon: MessageCircle,
    label: 'Communication',
    skills: ['Communication', 'Active Listening', 'Teamwork', 'Emotional Intelligence'],
  },
  {
    icon: Brain,
    label: 'Thinking & Analysis',
    skills: ['Analytical Thinking', 'Creativity', 'Decision‑Making', 'Adaptability'],
  },
  {
    icon: Users,
    label: 'Leadership',
    skills: ['Leadership', 'Conflict Resolution', 'Initiative', 'Time Management'],
  },
];

const languages = [
  { language: 'Italian', level: 'Native', width: '100%' },
  { language: 'English', level: 'C1', width: '80%' },
  { language: 'Spanish', level: 'B1', width: '50%' },
];

// --------------------------------------------------
// SMALL COMPONENTS
// --------------------------------------------------

const SkillBadge = ({ name, desc }: { name: string; desc: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative group cursor-default select-none px-3 py-1 rounded-md bg-navy-light/40 backdrop-blur-sm text-xs font-mono"
  >
    {name}
    {/* Tooltip */}
    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-navy-light px-2 py-1 text-[10px] text-slate-light opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      {desc}
    </span>
  </motion.div>
);

const ProgressBar = ({
  language,
  level,
  width,
}: {
  language: string;
  level: string;
  width: string;
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between text-sm font-mono">
      <span className="text-slate-light">{language}</span>
      <span className="text-slate">{level}</span>
    </div>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="h-2 rounded bg-accent/20"
    >
      <div className="h-full rounded bg-accent" />
    </motion.div>
  </div>
);

// --------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-heading skills">My Toolkit</h2>

      {/* Technical Skills */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <h3 className="mb-6 font-mono text-xl font-semibold text-accent">
          Technical Skills
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map(({ category, skills }) => (
            <motion.div
              key={category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className={cn('flex flex-col gap-4 p-4 rounded-lg shadow-inner backdrop-blur-sm bg-navy-light/30')}
            >
              <h4 className="font-semibold text-slate-light">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} desc={skill.desc} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="mb-6 font-mono text-xl font-semibold text-accent">
          Soft Skills
        </h3>

        <div className="space-y-4 md:space-y-8">
          {softSkillBlocks.map(({ icon: Icon, label, skills }) => (
            <details
              key={label}
              className="group rounded-lg bg-navy-light/30 backdrop-blur-sm p-4 shadow-inner md:open:true"
              open={true}
            >
              <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold text-slate-light transition-colors group-open:text-accent">
                <Icon size={16} className="text-accent" />
                {label}
              </summary>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -3 }}
                    className="rounded-full bg-navy-light/50 px-3 py-1 text-xs font-mono text-slate-light shadow transition-all duration-150"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="mb-6 font-mono text-xl font-semibold text-accent">Languages</h3>
        <div className="space-y-4">
          {languages.map((l) => (
            <ProgressBar key={l.language} language={l.language} level={l.level} width={l.width} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
