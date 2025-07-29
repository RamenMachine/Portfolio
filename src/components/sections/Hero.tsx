import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import heroBackground from "@/assets/hero-bg.jpg"

export const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard variant="elevated" className="animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
                Ameen Rahman
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up [animation-delay:0.2s]">
                Data Scientist & AI Engineer
              </p>
              
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-slide-up [animation-delay:0.4s]">
                Transforming raw data into actionable insights through advanced analytics and machine learning. 
                Passionate about uncovering patterns and building intelligent systems that drive business value.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center pt-6 animate-slide-up [animation-delay:0.6s]">
                <Button variant="default" size="lg" className="group">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Button>
                
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </Button>
              </div>
              
              <div className="flex gap-6 justify-center pt-4 animate-slide-up [animation-delay:0.8s]">
                <a 
                  href="https://github.com" 
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse [animation-delay:1s]" />
      </div>
    </section>
  )
}