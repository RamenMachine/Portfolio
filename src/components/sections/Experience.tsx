import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovation Corp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading full-stack development of enterprise applications serving 100K+ users. Architected microservices infrastructure reducing system latency by 40%.",
      achievements: [
        "Designed and implemented scalable microservices architecture",
        "Led team of 5 developers in agile development practices",
        "Reduced deployment time by 60% through CI/CD optimization"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Data Scientist & Backend Engineer",
      company: "DataDriven Solutions",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed machine learning models for predictive analytics and built robust data pipelines processing millions of records daily.",
      achievements: [
        "Built ML models improving prediction accuracy by 35%",
        "Designed ETL pipelines processing 10M+ records daily",
        "Implemented real-time analytics dashboard for stakeholders"
      ],
      technologies: ["Python", "TensorFlow", "Apache Spark", "Kafka", "GCP"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupHub Inc",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: "Built responsive web applications and RESTful APIs. Collaborated with design teams to create user-centric interfaces.",
      achievements: [
        "Developed 3 major client applications from concept to production",
        "Improved application performance by 50% through optimization",
        "Mentored 2 junior developers in best practices"
      ],
      technologies: ["JavaScript", "Vue.js", "Express.js", "MongoDB", "Firebase"]
    }
  ]

  return (
    <section className="py-20 px-6" id="experience">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My journey through the world of technology and innovation
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <GlassCard key={exp.company} variant="elevated" className="group hover:scale-[1.02] transition-all duration-300">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}