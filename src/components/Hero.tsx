import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Link, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-primary-glow bg-white/10 backdrop-blur-sm">
              <img 
                src="https://i.postimg.cc/x1SSS45H/temp-Image-YFlb-Pd.avif" 
                alt="Shinjan Saha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          <div className="mb-6 animate-fade-in-delay-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Shinjan Saha
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Full Stack Developer & Embedded Engineer
            </p>
          </div>

         
          <div className="mb-8 animate-fade-in-delay-2">
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Passionate developer with 2+ years of experience creating beautiful,
              functional web applications, proper embedded system & PCB Design. I love turning complex problems into
              simple, elegant solutions.
            </p>
          </div>

         
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
      <Link href="https://drive.google.com/file/d/1bctmkEGeCJMPSApRaGQTr0qxHxAd7FSE/view?usp=sharing" target="_blank" >
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90 shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <Download className="mr-2 h-5 w-5" />
          Download CV
        </Button>
      </Link>
    </div>

         
          <div className="flex justify-center gap-6 mb-16 animate-fade-in-delay-4">
            <a href="https://github.com/shinjan-saha" className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/shinjan-saha-404064248/" className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a  href="mailto:shinjansaha02@gmail.com"  className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;