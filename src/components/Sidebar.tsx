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
        hidden lg:flex fixed inset-y-0 left-0 w-[50vw]
        flex-col bg-navy-dark px-[4vw] py-12
        overflow-y-auto hide-scrollbar
      "
    >
      {/* ---------- HEADER ---------- */}
      <header
        className="
          max-w-[90%]
          flex flex-col
          gap-y-[clamp(0.75rem,2vh,1.25rem)]
        "
      >
        <h1
          className="
            font-semibold leading-tight text-slate-light
            text-[clamp(2.5rem,8vh,5rem)]
          "
        >
          Andrea Fumagalli
        </h1>

        <h2 className="text-2xl text-slate">Data Scientist</h2>

        <p className="text-sm leading-relaxed text-slate">
          I&nbsp;turn data into decisions.
        </p>
      </header>

      {/* ---------- NAV ---------- */}
      <nav
        className="
          mt-[clamp(2rem,5vh,4rem)]
        "
      >
        <ul className="space-y-[clamp(1rem,2vh,1.5rem)]">
          {nav.map(({ num, id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`
                  group relative inline-flex items-center font-mono text-sm
                  after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-accent
                  after:transition-all after:duration-300
                  ${
                    active === id
                      ? 'text-accent after:w-full'
                      : 'text-slate hover:text-accent after:w-0 group-hover:after:w-full'
                  }
                `}
              >
                <span className="mr-3 text-xs text-accent">{num}.</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ---------- SOCIAL ---------- */}
      <div className="mt-auto flex space-x-6">
        <Social href="https://github.com"   aria="GitHub"><Github  size={22} /></Social>
        <Social href="https://linkedin.com" aria="LinkedIn"><Linkedin size={22} /></Social>
      </div>
    </aside>
  );
};

export default Sidebar;

/* helper */
const Social = ({
  href, aria, children,
}: React.PropsWithChildren<{ href: string; aria: string }>) => (
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
