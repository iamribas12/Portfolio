import { Tutorials as TutorialsSection } from "@/components/Tutorials";

export default function Tutorials() {
  return (
    <main className="pt-16">
      <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Video Tutorials</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
            Learn web development through comprehensive video courses
          </p>
        </div>
      </div>
      <TutorialsSection />
    </main>
  );
}