import { About as AboutSection } from "@/components/About";
import { Skills } from "@/components/Skills";

export default function About() {
  return (
    <main className="pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Learn more about my journey, skills, and passion for development
          </p>
        </div>
      </div>
      <AboutSection />
      <Skills />
    </main>
  );
}