
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 md:px-10 text-center text-slate text-sm">
      <div className="max-w-4xl mx-auto">
        <p>
          Built by Andrea Fumagalli – Inspired by 
          <a 
            href="https://brittanychiang.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 ml-1 transition-colors"
          >
            Brittany Chiang
          </a>
        </p>
        <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
