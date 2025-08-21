import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Review from "@/components/Review";
import { ExperienceEducation } from "@/components/expe"; 

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExperienceEducation />
      <Skills />
      <Review/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
