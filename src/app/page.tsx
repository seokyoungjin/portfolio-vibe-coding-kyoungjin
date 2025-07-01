import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import TechStack from "@/components/sections/tech-stack";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
