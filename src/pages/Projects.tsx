import { Projects as ProjectsSection } from "@/components/Projects";

export default function Projects() {
  return (
    <main className="pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A showcase of my recent work and creative solutions
          </p>
        </div>
      </div>
      <ProjectsSection />
    </main>
  );
}