import { Contact as ContactSection } from "@/components/Contact";

export default function Contact() {
  return (
    <main className="pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to start your next project? Let's talk!
          </p>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}