import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "C", "C#", "Java", "JavaScript", "TypeScript", "SQL", "R", "SAS"],
      variant: "languages" as const
    },
    {
      title: "Web & App Development", 
      skills: ["React", "Next.js", "Flask", "Node.js", "Express", "HTML", "CSS", "Tailwind CSS"],
      variant: "web" as const
    },
    {
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenAI API", "Pinecone"],
      variant: "ml" as const
    },
    {
      title: "Data & Visualization",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Matplotlib", "Seaborn", "NetworkX", "Geophy"],
      variant: "data" as const
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Docker", "AWS", "Anaconda", "Stripe API", "Railway", "Vercel"],
      variant: "tools" as const
    },
    {
      title: "Design & Collaboration",
      skills: ["Figma", "Agile/Scrum", "CI/CD", "MVC Design Pattern", "Technical Writing", "Test-Driven Development"],
      variant: "design" as const
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            My Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} variant="elevated" className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant={category.variant}
                    className="px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Skills }