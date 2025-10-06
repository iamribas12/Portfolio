import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { MiniBlog } from "@/components/MiniBlog";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <MiniBlog />
      <Contact />
    </main>
  );
}