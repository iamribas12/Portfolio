import {
  Code,
  Database,
  Globe,
  Smartphone,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    gpa: "3.8/4.0",
    highlights: [
      "Specialized in Software Engineering and AI",
      "Thesis: 'Machine Learning in Web Applications'",
      "Dean's List for Academic Excellence",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2014 - 2018",
    gpa: "3.7/4.0",
    highlights: [
      "Magna Cum Laude Graduate",
      "President of Computer Science Society",
      "Winner of Annual Hackathon 2017",
    ],
  },
];

const achievements = [
  { title: "AWS Certified Solutions Architect", year: "2023" },
  { title: "Google Cloud Professional Developer", year: "2022" },
  { title: "React Advanced Certification", year: "2021" },
  { title: "Full Stack Web Development Nanodegree", year: "2020" },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate learner who loves creating clean, meaningful, and
            user-friendly digital experiences. I enjoy turning ideas into
            simple, functional, and visually appealing designs while
            continuously improving my Development skills with AI.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Core Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className="p-6 hover-lift bg-gradient-card border-0 shadow-custom-md animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <p className="text-muted-foreground">
              Academic foundation and continuous learning
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift shadow-custom-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="bg-gradient-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-success/10 text-success border-success/20"
                      >
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Certifications & Achievements
            </h3>
            <p className="text-muted-foreground">
              Professional development and recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-4 hover-lift bg-card border shadow-custom-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Certified {achievement.year}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">{achievement.year}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-custom-lg">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Started as a curious computer science student and evolved into a
              seasoned developer who's worked with startups and established
              companies. I believe in continuous learning, clean code practices,
              and creating solutions that truly serve users' needs. My passion
              for technology drives me to stay updated with the latest trends
              and best practices in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
