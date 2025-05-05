
import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd send this data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-container" ref={sectionRef}>
      <h2 className="section-heading contact">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="opacity-0 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          <h3 className="text-2xl font-semibold text-slate-light mb-6">Send me a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-slate mb-1 font-mono">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-navy-light border border-slate/20 rounded px-4 py-2 focus:outline-none focus:border-accent text-slate-light"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-slate mb-1 font-mono">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-navy-light border border-slate/20 rounded px-4 py-2 focus:outline-none focus:border-accent text-slate-light"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-slate mb-1 font-mono">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-navy-light border border-slate/20 rounded px-4 py-2 focus:outline-none focus:border-accent text-slate-light"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="font-mono border border-accent text-accent px-6 py-2 rounded hover:bg-accent/10 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="opacity-0 animate-on-scroll space-y-8" style={{ transitionDelay: '400ms' }}>
          <div>
            <h3 className="text-2xl font-semibold text-slate-light mb-6">Contact Information</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a 
                  href="mailto:fumagalliandrea01@gmail.com" 
                  className="text-slate hover:text-accent transition-colors"
                >
                  fumagalliandrea01@gmail.com
                </a>
              </li>
              
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a 
                  href="tel:+393920002380" 
                  className="text-slate hover:text-accent transition-colors"
                >
                  +39 392 000 2380
                </a>
              </li>
              
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1" />
                <span className="text-slate">
                  Vicolo Broletto 12H, Bellinzago Lombardo, Milan - Italy
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-slate-light mb-4">Connect with me</h3>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
