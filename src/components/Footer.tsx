
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-5 mb-6 lg:hidden">
            <a 
              href="https://github.com/fumaghe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/andreafumagalli01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="text-center text-slate text-xs">
            All rights reserved to Andrea Fumagalli
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
