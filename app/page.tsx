import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-content px-6">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <footer className="border-t border-border/60 py-8">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </main>
    </>
  );
}
