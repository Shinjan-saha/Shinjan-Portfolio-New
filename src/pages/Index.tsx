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
       {/* <Review
        websiteId="0f77d086-b1b0-4a8a-902b-ea611f53b825"
        theme="light"
        minRating={5}
        totalRev={40}
      /> */}
      <Projects />
     
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
