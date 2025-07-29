import { Navigation } from "@/components/ui/navigation"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Contact } from "@/components/sections/Contact"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-glass-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 John Developer. Built with passion and modern technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
