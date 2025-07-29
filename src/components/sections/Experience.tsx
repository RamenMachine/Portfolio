import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "TechFlow Analytics",
      location: "Chicago, IL",
      period: "2022 - Present",
      description: "Leading data science initiatives for predictive analytics and machine learning solutions. Developing models that process 50M+ data points daily for enterprise clients.",
      achievements: [
        "Built recommendation system increasing user engagement by 45%",
        "Led team of 4 data scientists in MLOps best practices",
        "Reduced model training time by 70% through optimization techniques"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker"]
    },
    {
      title: "Data Scientist",
      company: "DataInsights Corp",
      location: "Chicago, IL",
      period: "2020 - 2022",
      description: "Developed machine learning models for customer segmentation and fraud detection. Built automated ML pipelines processing financial data for risk assessment.",
      achievements: [
        "Created fraud detection model with 98% accuracy reducing losses by $2M annually",
        "Designed customer segmentation algorithm improving marketing ROI by 40%",
        "Implemented real-time monitoring system for model performance"
      ],
      technologies: ["Python", "Scikit-learn", "SQL", "Tableau", "Apache Spark"]
    },
    {
      title: "Junior Data Analyst",
      company: "Analytics Plus",
      location: "Chicago, IL",
      period: "2019 - 2020",
      description: "Performed statistical analysis and data visualization for business intelligence reports. Collaborated with stakeholders to identify data-driven insights.",
      achievements: [
        "Automated reporting processes reducing manual work by 60%",
        "Created interactive dashboards serving 50+ business users",
        "Conducted A/B testing analysis for product optimization"
      ],
      technologies: ["Python", "R", "SQL", "Power BI", "Excel"]
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