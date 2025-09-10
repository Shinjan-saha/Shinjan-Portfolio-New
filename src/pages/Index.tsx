import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Review from "@/components/Review";
import { ExperienceEducation } from "@/components/expe"; 
import BlueprintDivider from "@/components/BlueprintDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BlueprintDivider />
      <ExperienceEducation />
      <Skills />
      <Projects />
      <Review/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
