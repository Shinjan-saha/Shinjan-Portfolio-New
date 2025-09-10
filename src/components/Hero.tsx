import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-blue-900">
      
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      
      
      <div className="absolute inset-6 border-2 border-white/30 pointer-events-none"></div>

      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white/40 shadow-lg bg-white/10 backdrop-blur-sm">
              <img 
                src="https://i.postimg.cc/x1SSS45H/temp-Image-YFlb-Pd.avif" 
                alt="Shinjan Saha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

         
          <div className="mb-6 animate-fade-in-delay-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              Shinjan Saha
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Full Stack Developer & Embedded Engineer
            </p>
          </div>


          <div className="mb-8 animate-fade-in-delay-2">
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Passionate developer with 2+ years of experience creating beautiful,
              functional web applications, embedded systems & PCB Design. I love
              turning complex problems into simple, elegant solutions.
            </p>
          </div>

          
          <div className="w-full flex justify-center mb-12 animate-fade-in-delay-3">
            <a
              href="https://drive.google.com/file/d/1bctmkEGeCJMPSApRaGQTr0qxHxAd7FSE/view?usp=sharing"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-white/90 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>

          
          <div className="flex justify-center gap-6 mb-16 animate-fade-in-delay-4">
            <a href="https://github.com/shinjan-saha" className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/shinjan-saha-404064248/" className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:shinjansaha02@gmail.com" className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300">
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
