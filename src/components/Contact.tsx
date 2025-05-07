// Contact.tsx
import { useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // IntersectionObserver for fade‑in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-in");
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
        el.classList.add("animate-fade-in");
      });
    };
  }, []);

  return (
    <section id="contact" className="section-container" ref={sectionRef}>
      <h2 className="section-heading contact">Get In Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ——— CV download ——— */}
        <div
          className="opacity-0 animate-on-scroll flex flex-col gap-6 items-start"
          style={{ transitionDelay: "200ms" }}
        >
          <h3 className="text-2xl font-semibold text-slate-light">
            Download my CV
          </h3>
          <p className="text-slate max-w-prose">
            Want to learn more about my professional background? Click the
            button below to download the full resume in PDF format.
          </p>

          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="font-mono border border-accent text-accent px-6 py-3 rounded flex items-center gap-2 hover:bg-accent/10 transition-colors"
          >
            <Download size={18} /> Download CV
          </a>
        </div>

        {/* ——— Contact info ——— */}
        <div
          className="opacity-0 animate-on-scroll space-y-8"
          style={{ transitionDelay: "400ms" }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-slate-light mb-6">
              Contact Information
            </h3>

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
                  +39&nbsp;392&nbsp;000&nbsp;2380
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1" />
                <span className="text-slate">
                  Vicolo Broletto 12H, Bellinzago Lombardo, Milan – Italy
                </span>
              </li>
            </ul>
          </div>

          {/* ——— Social links ——— */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/fumaghe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/andreafumagalli01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/fumaghe_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
