export interface Skill {
  name: string;
  level: number; // 1-5 scale
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend" },
  { name: "TypeScript", level: 5, category: "frontend" },
  { name: "Next.js", level: 4, category: "frontend" },
  { name: "Tailwind CSS", level: 5, category: "frontend" },
  { name: "Vue.js", level: 4, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 5, category: "backend" },
  { name: "Python", level: 4, category: "backend" },
  { name: "PostgreSQL", level: 4, category: "backend" },
  { name: "MongoDB", level: 4, category: "backend" },
  { name: "GraphQL", level: 4, category: "backend" },
  { name: "REST APIs", level: 5, category: "backend" },
  
  // Tools
  { name: "Git", level: 5, category: "tools" },
  { name: "Docker", level: 4, category: "tools" },
  { name: "AWS", level: 3, category: "tools" },
  { name: "Figma", level: 4, category: "tools" },
  { name: "Jest", level: 4, category: "tools" },
  { name: "Webpack", level: 3, category: "tools" },
  
  // Soft Skills
  { name: "Problem Solving", level: 5, category: "soft" },
  { name: "Team Leadership", level: 4, category: "soft" },
  { name: "Communication", level: 5, category: "soft" },
  { name: "Agile/Scrum", level: 4, category: "soft" },
];

export const skillCategories = {
  frontend: "Frontend Development",
  backend: "Backend Development", 
  tools: "Tools & Technologies",
  soft: "Soft Skills",
};