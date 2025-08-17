import { Briefcase, GraduationCap } from "lucide-react";

export  function ExperienceEducation() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Techno Billion AI",
      duration: "March 2025- August 2025",
      description: "Creating an Platform for Eductation & Job  Worked in State Mangement in Flutter  Integrtation with Backend,API & AI Tools  Developing ML Models  Maintaining Clean Architecture in Code  Developing Web Applictation  Good & Clean UI UX for Users",
    },
    {
      role: "Internship Trainee",
      company: "West Bengal Power Development Corporation Limited (WBPDCL)",
      duration: "June 2025 - July 2025",
      description: "Thermal Unit Operations:Gained hands-on experience in end-to-end operation of power generation units including synchronization, load dispatch, and emergency shutdown protocols. Control & Instrumentation (C&I):Assisted in real-time monitoring and control of plant parameters via Distributed Control Systems (DCS), understanding logic diagrams and alarm systems.Generator Operations & Synchronization:Studied the working of turbo-generators including excitation systems, stator/rotor cooling, and synchronization procedures with grid. Witnessed protection systems like differential relay, overcurrent trip, and generator transformer interface. Power Grid System & Load Dispatch Coordination:Gained exposure to interconnection of plant output with regional power grid. Learned grid code compliance, reactive power control, load balancing, and frequency management through SLDC coordination. IT Operation & Techniques: PHP-based IT solutions for data management and automation in thermal power plant operations at WBPDCL.",
    },
    {
      role: "Embedded  Engineer Intern",
      company: "Mindwatt",
      duration: "September 2024- October 2024",
      description: " Worked with Various Microcontroller, FPGA & DLP Successful Integrtation of Nordek Board with MPU Acclertometer & Mic with I2C & I2S Protocols Intiliztation & Working of DLP with Beaglebone with I2C & also with FPG",
    },
  ];

  const education = [
    {
      degree: "B.Tech in Electronics & Communication",
      school: "Techno Main Salt Lake (TMSL)",
      duration: "2022 - 2026",
    },
    {
      degree: "Higher Secondary (Science)",
      school: "Aditya Academy Senior Secondary",
      duration: "2020 - 2022",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50" id="experience-education">
      <div className="max-w-5xl mx-auto">
     
         <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
            </h2>
            </div>

        <div className="grid md:grid-cols-2 gap-10">
       
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-2xl shadow hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-lg">{exp.role}</h4>
                  <p className="text-sm text-gray-500">{exp.company} • {exp.duration}</p>
                  <p className="mt-2 text-gray-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

         
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-2xl shadow hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-sm text-gray-500">{edu.school} • {edu.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
