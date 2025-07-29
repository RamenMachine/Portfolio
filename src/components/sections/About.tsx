import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Rocket } from "lucide-react"

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Data Science & Analytics",
      description: "Advanced statistical analysis and machine learning model development for predictive insights"
    },
    {
      icon: Database,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems and deep learning models for complex problem solving"
    },
    {
      icon: Brain,
      title: "Data Visualization",
      description: "Creating compelling visual stories from complex datasets using modern visualization tools"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Driving digital transformation through cutting-edge technology solutions"
    }
  ]

  const technologies = [
    "Python", "R", "SQL", "TensorFlow", "PyTorch", "Scikit-learn",
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Docker"
  ]

  return (
    <section className="py-20 px-6" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about solving complex problems through elegant code and data-driven insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <GlassCard variant="elevated" className="h-full">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  With over 4 years of experience in data science and artificial intelligence, 
                  I specialize in transforming complex datasets into actionable business insights 
                  through statistical analysis and machine learning.
                </p>
                <p>
                  My journey began with a fascination for uncovering hidden patterns in data. 
                  Today, I work at the intersection of statistics, machine learning, and business strategy, 
                  building predictive models that drive data-driven decision making.
                </p>
                <p>
                  I believe in the power of data to solve real-world problems and am constantly 
                  exploring cutting-edge techniques in deep learning and AI to deliver 
                  innovative solutions that create meaningful impact.
                </p>
              </div>
              
              <div className="pt-4">
                <h4 className="text-lg font-medium mb-3 text-foreground">Technologies I Love</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <GlassCard key={highlight.title} variant="elevated" className="group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}