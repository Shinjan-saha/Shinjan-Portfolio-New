import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "pyfilterlab",
      description: "pyfilterlab is a Python Package for designing and visualizing digital filters. It supports FIR/IIR filters, plots responses, and helps in learning or implementing signal processing techniques easily",
      image: "https://i.postimg.cc/8krZ8Crj/temp-Imagefg4-Uyb.avif",
      technologies: ["Python", "DSP", "Signal", "Processing", "MATLAB"],
      githubUrl: "https://github.com/Shinjan-saha/pyfilterlab",
      liveUrl: "https://pypi.org/project/pyfilterlab/0.1.1/",
      featured: true
    },
    {
      title: "Task Management System",
      description: "A simple task management backend API built in Go featuring user registration, login with JWT authentication, and CRUD operations for tasks (add, update, delete, list)",
      image: "https://i.postimg.cc/qqCn9gb0/temp-Image3k-Yc09.avif",
      technologies: ["Reactjs", "Golang", "Typescript", "Vite"," Tailwind CSS","API","Postman"],
      githubUrl: "https://github.com/Shinjan-saha/Task-Management-System/",
      liveUrl: "https://task-management-system-go.vercel.app",
      featured: false
    },
    {
      title: "Perspecto Sphere",
      description: "The \"Percepto Sphere\" project is an innovative solution aimed at enhancing the independence and mobility of visually impaired individuals. The project involves developing a smart glass that leverages advanced object recognition technology using the YOLO (You Only Look Once) algorithm. This smart glass can identify objects in the user's surroundings and immediately provide an audio output, announcing the name of the detected object.",
      image: "https://i.postimg.cc/bNhHK9hB/temp-Image-Dp-UON8.avif",
      technologies: ["Raspberry PI", "YOLO", "Object Recognition", "Tensorflow","Python"],
      githubUrl: "https://github.com/Shinjan-saha/Perspecto-Sphere/tree/main",
      liveUrl: "https://github.com/Shinjan-saha/Perspecto-Sphere/tree/main",
      featured: true
    },
    {
      title: "Certify-Me",
      description: "This Flutter-based Certificate Exporter captures certificate widgets as high-quality PNG images and converts them into PDF documents. It supports customizable templates, seamless sharing, and efficient file saving, ensuring reliable certificate generation for various applications and easy distribution.",
      image: "https://i.postimg.cc/HWKF5Kb7/temp-Images0-Vd-Oh.avif",
      technologies: ["Flutter", "Dart", "PDF Generation", "Image Processing"],
      githubUrl: "https://github.com/Shinjan-saha/certify_me",
      liveUrl: "https://pub.dev/packages/certify_me",
      featured: true
    },
    {
      title: "Salary-Management-App",
      description: "This Web-based Salary Management Applictation provides a comprehensive solution for managing employee salaries, including features for salary calculation, payslip generation, and reporting.",
      image: "https://i.postimg.cc/V6dWL8BN/temp-Image-VDJfy4.avif",
      technologies: ["NextJS", "TypeScript", "Golang", "API","RazorPay"],
      githubUrl: "https://github.com/Shinjan-saha/Salary-Management-System",
      liveUrl: "https://salary-management-system-five.vercel.app/",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-card border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
