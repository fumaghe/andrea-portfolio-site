import Sidebar       from '@/components/Sidebar';
import MobileHeader   from '@/components/MobileHeader';

import Hero           from '@/components/Hero';
import About          from '@/components/About';
import Experience     from '@/components/Experience';
import Projects       from '@/components/Projects';
import Skills         from '@/components/Skills';
import Contact        from '@/components/Contact';
import Footer         from '@/components/Footer';

const Index = () => (
  <div className="relative">
    {/* colonna fissa a sinistra (50 %) */}
    <Sidebar />

    {/* header visibile soltanto su mobile */}
    <MobileHeader />

    {/* contenuto scrollabile a destra, spostato di 50 % */}
    <main
      className="
        flex flex-col
        min-h-screen
        overflow-y-auto
        pt-24 lg:pt-0
        lg:ml-[40vw]          /* parte dopo la sidebar */
      "
    >
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  </div>
);

export default Index;
