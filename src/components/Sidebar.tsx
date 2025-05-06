import { useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

const nav = [
  { num: '01', id: 'about',      label: 'About' },
  { num: '02', id: 'experience', label: 'Experience' },
  { num: '03', id: 'projects',   label: 'Projects' },
  { num: '04', id: 'skills',     label: 'Skills' },
  { num: '05', id: 'contact',    label: 'Contact' },
];

const Sidebar = () => {
  const [active, setActive] = useState('about');

  /* evidenzia la sezione corrente mentre scorri */
  useEffect(() => {
    const handler = () => {
      document.querySelectorAll<HTMLElement>('section[id]').forEach(sec => {
        const top    = sec.offsetTop - 140;
        const bottom = top + sec.offsetHeight;
        if (scrollY >= top && scrollY < bottom) setActive(sec.id);
      });
    };
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <aside
      className="
        hidden lg:flex fixed inset-y-0 left-0 w-[45vw]
        flex-col items-start bg-navy-dark px-[4vw] py-12
        overflow-y-auto hide-scrollbar
      "
    >
      {/* ---------- HEADER ---------- */}
      <header
        className="
          w-full max-w-[90%]
          flex flex-col items-start
          gap-y-[clamp(0.75rem,2vh,1.25rem)]
        "
      >
        <h1
          className="
            self-start font-semibold leading-tight text-slate-light
            text-[clamp(2.5rem,8vh,4rem)]
          "
        >
          Andrea Fumagalli
        </h1>

        <h2 className="text-[clamp(2rem,6vh,3.5rem)] text-center">Data Scientist</h2>

        <p className="text-[clamp(1rem,3vh,1.25rem)] leading-relaxed text-center text-slate">
          I&nbsp;turn data into decisions.
        </p>
      </header>

      {/* ---------- NAV ---------- */}
      <nav
        className="
          mt-[clamp(2rem,5vh,4rem)] w-full flex justify-start
        "
      >
        <ul className="space-y-[clamp(1rem,2vh,1.5rem)]">
          {nav.map(({ num, id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`
                  group relative inline-flex items-center justify-center font-mono
                  text-[clamp(1.25rem,3vh,1.5rem)]
                  after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-accent
                  after:transition-all after:duration-300
                  ${
                    active === id
                      ? 'text-accent after:w-full'
                      : 'text-slate hover:text-accent after:w-0 group-hover:after:w-full'
                  }
                `}
              >
                <span className="mr-3 text-[clamp(0.75rem,2vh,1rem)] text-accent">
                  {num}.
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ---------- SOCIAL ---------- */}
      <div className="mt-auto flex space-x-6 justify-start w-full">
        <Social href="https://github.com"   aria="GitHub"><Github  size={28} /></Social>
        <Social href="https://linkedin.com" aria="LinkedIn"><Linkedin size={28} /></Social>
      </div>
    </aside>
  );
};

export default Sidebar;

/* helper */
const Social = ({ href, aria, children }: React.PropsWithChildren<{ href: string; aria: string }>) => (
  <a
    href={href}
    aria-label={aria}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate hover:text-accent transition-colors"
  >
    {children}
  </a>
);
