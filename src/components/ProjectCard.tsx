import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-lift bg-gradient-card border-0 shadow-custom-md animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {project.featured && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button asChild size="sm" className="flex-1">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-3 w-3" />
              Live Demo
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-3 w-3" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}