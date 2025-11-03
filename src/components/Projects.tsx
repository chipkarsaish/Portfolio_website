import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Prediction",
      description: "ML model predicting heart disease with 95% accuracy using patient health metrics and lifestyle data. Deployed as a Streamlit web app.",
      tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Real-time Object Detection",
      description: "Computer vision system using YOLO for real-time object detection in video streams with 30+ FPS performance.",
      tags: ["PyTorch", "OpenCV", "YOLO", "Flask"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Sentiment Analysis API",
      description: "NLP-powered REST API for sentiment analysis with multi-language support, handling 1000+ requests per minute.",
      tags: ["TensorFlow", "BERT", "FastAPI", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Customer Churn Prediction",
      description: "Ensemble ML model predicting customer churn with 92% accuracy, helping reduce churn rate by 15%.",
      tags: ["Python", "XGBoost", "SQL", "Power BI"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Neural Style Transfer App",
      description: "Deep learning application that applies artistic styles to images using CNN-based neural style transfer.",
      tags: ["TensorFlow", "Keras", "Streamlit", "PIL"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Recommendation System",
      description: "Collaborative filtering recommendation engine serving personalized content to 50k+ users daily.",
      tags: ["Python", "Surprise", "Redis", "MongoDB"],
      github: "https://github.com",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real-world ML solutions solving complex problems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 card-shadow bg-card/50 backdrop-blur hover:scale-105 transition-all flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
