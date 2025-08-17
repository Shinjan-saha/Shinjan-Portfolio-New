import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Shinjan Saha</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Creating digital experiences that make a difference. 
                Let's build something amazing together.
              </p>
            </div>

           
           

           
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Let's Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/shinjan-saha" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shinjan-saha-404064248/" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              
                <a 
                  href="mailto:shinjansaha02@gmail.com" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-primary-foreground/60">
                Always open to interesting conversations and collaboration opportunities.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2025 Shinjan Saha. Built with ❤️ using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;