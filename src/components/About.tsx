import { Code, Database, Globe, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS, Next.js",
  },
  {
    icon: Database,
    title: "Backend Development", 
    description: "Node.js, Python, PostgreSQL, MongoDB",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "REST APIs, GraphQL, WebSockets, PWAs",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, Responsive Design",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital solutions that make a difference. I love turning complex problems 
            into simple, beautiful designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 hover-lift bg-gradient-card border-0 shadow-custom-md animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <skill.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-custom-lg">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Started as a curious computer science student and evolved into a seasoned developer 
              who's worked with startups and established companies. I believe in continuous learning, 
              clean code practices, and creating solutions that truly serve users' needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}