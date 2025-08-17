import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Palette, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript"],
      color: "primary"
    },
    {
      title: "Backend",
      icon: Database,
      skills: [ "Go","NodeJS","Python", "PostgreSQL", "MongoDB", "Express", "Django"],
      color: "accent"
    },
    {
      title: "Embedded Systems",
      icon: Palette,
      skills: ["IOT", "FPGA", "Microcontrollers", "PCB Design", "Programming"],
      color: "primary"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "iOS", "Android", "PWA"],
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-portfolio-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern Web & Embedded applications
            </p>
          </div>

         
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title}
                  className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 mx-auto transition-all duration-300 group-hover:scale-110 ${
                      category.color === 'primary' 
                        ? 'bg-primary text-primary-foreground shadow-primary-glow' 
                        : 'bg-accent text-accent-foreground shadow-accent-glow'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;