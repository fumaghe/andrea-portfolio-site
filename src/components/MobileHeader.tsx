
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const MobileHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { num: "01", name: "About", href: "#about" },
    { num: "02", name: "Experience", href: "#experience" },
    { num: "03", name: "Projects", href: "#projects" },
    { num: "04", name: "Skills", href: "#skills" },
    { num: "05", name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300 px-6 py-4 lg:hidden',
        scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="font-light text-xl text-slate-light hover:text-accent transition-colors">
          Andrea Fumagalli
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="flex flex-col gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-accent transition-all duration-300",
            menuOpen && "rotate-45 translate-y-2"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-accent transition-all duration-300",
            menuOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-accent transition-all duration-300",
            menuOpen && "-rotate-45 -translate-y-2"
          )}></span>
        </button>
        
        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-0 flex flex-col justify-center items-center bg-navy-light/95 backdrop-blur-md transition-transform duration-300",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <ul className="flex flex-col gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.num} className="text-lg">
                <a 
                  href={item.href} 
                  className="nav-item text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.num}.</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MobileHeader;
