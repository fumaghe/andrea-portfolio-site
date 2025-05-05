import { useEffect, useRef } from 'react';

const Hero = () => {
  const wrap = useRef<HTMLDivElement>(null);

  /* animazione fade/slide sugli elementi   */
  useEffect(() => {
    const els = wrap.current?.querySelectorAll<HTMLElement>('[data-anim]') ?? [];
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(25px)';
      setTimeout(() => {
        el.style.transition = 'opacity .5s ease, transform .5s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 120 * i);
    });
  }, []);

  return (
    <section id="home" className="lg:hidden min-h-screen flex items-center pt-20 px-6">
      <div ref={wrap} className="max-w-2xl mx-auto">
        <p data-anim className="font-mono text-accent mb-6 text-sm">Hi, my name is</p>
        <h1 data-anim className="text-4xl sm:text-5xl font-semibold leading-tight text-slate-light mb-2">
          Andrea Fumagalli.
        </h1>
        <h2 data-anim className="text-3xl sm:text-4xl font-semibold text-slate mb-6">
          I turn data into decisions.
        </h2>
        <p data-anim className="text-lg text-slate max-w-lg mb-10">
          I'm a detail‑oriented Data Scientist with expertise in data visualization, Python, SQL, and R. 
          I specialize in deriving meaningful insights from complex datasets.
        </p>
        <div data-anim>
          <a
            href="#contact"
            className="font-mono border border-accent text-accent px-6 py-4 rounded
                       hover:bg-accent/10 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
