import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      description: "Advanced machine learning model predicting customer behavior with 94% accuracy. Implemented ensemble methods and feature engineering to identify at-risk customers.",
      tags: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Flask"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Natural Language Processing Pipeline",
      description: "End-to-end NLP system for sentiment analysis and text classification. Processes thousands of documents with real-time insights and automated reporting.",
      tags: ["Python", "NLTK", "spaCy", "TensorFlow", "MongoDB"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Computer Vision Quality Control",
      description: "Deep learning model for automated product quality inspection using CNN architecture. Achieved 99.2% accuracy in defect detection for manufacturing processes.",
      tags: ["Python", "TensorFlow", "OpenCV", "Docker", "AWS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Time Series Forecasting Dashboard",
      description: "Interactive dashboard for sales forecasting using ARIMA and LSTM models. Provides real-time predictions with confidence intervals and trend analysis.",
      tags: ["Python", "Streamlit", "Prophet", "PostgreSQL", "Plotly"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ]

  return (
    <section className="py-20 px-6" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in data science, machine learning, and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={project.title} variant="elevated" className="group overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="group/btn">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button size="sm" className="group/btn">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}