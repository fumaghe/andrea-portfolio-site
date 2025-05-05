
import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { num: "01", name: "About", href: "#about", id: "about" },
    { num: "02", name: "Experience", href: "#experience", id: "experience" },
    { num: "03", name: "Projects", href: "#projects", id: "projects" },
    { num: "04", name: "Skills", href: "#skills", id: "skills" },
    { num: "05", name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <aside className="fixed left-0 h-screen w-[300px] flex flex-col justify-between py-10 px-6 md:px-10 hidden lg:flex">
      <div className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold text-slate-light">Andrea Fumagalli</h1>
          <h2 className="text-xl text-slate">Data Scientist</h2>
          <p className="text-slate text-sm mt-2">I turn data into decisions.</p>
        </div>

        <nav className="mt-16">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.num}>
                <a 
                  href={item.href} 
                  className={`group flex items-center py-1 ${activeSection === item.id ? 'text-accent' : 'text-slate hover:text-accent'} transition-colors duration-300`}
                >
                  <span className="font-mono text-xs mr-2 text-accent">{item.num}.</span>
                  <span className="font-mono text-sm relative">
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'group-hover:w-full'}`}></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="flex items-center space-x-5">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate hover:text-accent transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
