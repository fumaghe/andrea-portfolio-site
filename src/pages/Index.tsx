
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <MobileHeader />
      <main className="w-full lg:ml-[300px]">
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
};

export default Index;
