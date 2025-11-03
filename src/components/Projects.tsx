import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Heart Disease Prediction",
      description: "ML model predicting heart disease with 95% accuracy using patient health metrics and lifestyle data. Deployed as a Streamlit web app.",
      problemStatement: "Heart disease is a leading cause of death globally. Early prediction can save lives by enabling timely intervention. The challenge was to build an accurate model using available patient data while keeping false negatives minimal.",
      approach: "Implemented multiple classification algorithms including Logistic Regression, Random Forest, and SVM. Used feature engineering to extract meaningful patterns from 14 patient attributes including age, cholesterol levels, blood pressure, and ECG results. Applied SMOTE for handling class imbalance.",
      results: "Achieved 95% accuracy with 93% recall on the test set. The model was deployed as an interactive Streamlit web application where healthcare professionals can input patient data and receive instant risk assessments.",
      tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
      github: "https://github.com",
      demo: "https://demo.com",
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Real-time Object Detection",
      description: "Computer vision system using YOLO for real-time object detection in video streams with 30+ FPS performance.",
      problemStatement: "Security and surveillance systems need real-time object detection with high accuracy and low latency. The challenge was to process video streams at 30+ FPS while maintaining detection accuracy across various lighting conditions and object scales.",
      approach: "Utilized YOLOv5 architecture fine-tuned on custom dataset. Implemented GPU acceleration using CUDA and optimized the inference pipeline. Created a Flask-based REST API for easy integration with existing surveillance systems.",
      results: "Successfully achieved 35 FPS on 1080p video streams with 89% mAP. The system can detect 80+ object classes including people, vehicles, and animals. Deployed in a retail environment for customer behavior analysis.",
      tags: ["PyTorch", "OpenCV", "YOLO", "Flask"],
      github: "https://github.com",
      demo: null,
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Sentiment Analysis API",
      description: "NLP-powered REST API for sentiment analysis with multi-language support, handling 1000+ requests per minute.",
      problemStatement: "Businesses need to analyze customer feedback from multiple channels in real-time. The challenge was to create a scalable API that could handle high throughput while supporting multiple languages and maintaining accuracy.",
      approach: "Fine-tuned BERT model on a multi-lingual sentiment dataset. Implemented caching mechanisms and request batching for optimal performance. Used FastAPI for asynchronous request handling and Docker for containerization.",
      results: "API handles 1000+ requests per minute with average response time under 200ms. Supports 10+ languages with 91% average accuracy. Successfully deployed for analyzing social media sentiment for multiple clients.",
      tags: ["TensorFlow", "BERT", "FastAPI", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Customer Churn Prediction",
      description: "Ensemble ML model predicting customer churn with 92% accuracy, helping reduce churn rate by 15%.",
      problemStatement: "A telecom company was experiencing high customer churn rates. The business needed to identify at-risk customers proactively to implement retention strategies. The challenge was to build a model that could predict churn 30 days in advance.",
      approach: "Developed an ensemble model combining XGBoost, LightGBM, and Random Forest. Performed extensive feature engineering on customer usage patterns, billing history, and service interactions. Implemented SHAP values for model interpretability.",
      results: "Achieved 92% accuracy with 88% precision on churn prediction. Model insights led to targeted retention campaigns that reduced churn rate by 15%. Created interactive Power BI dashboards for business stakeholders.",
      tags: ["Python", "XGBoost", "SQL", "Power BI"],
      github: "https://github.com",
      demo: null,
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Neural Style Transfer App",
      description: "Deep learning application that applies artistic styles to images using CNN-based neural style transfer.",
      problemStatement: "Artists and content creators need tools to apply artistic styles to photographs. The challenge was to create an accessible application that could perform neural style transfer in reasonable time while maintaining image quality.",
      approach: "Implemented VGG19-based neural style transfer using TensorFlow. Optimized the algorithm using multi-scale processing and GPU acceleration. Created an intuitive Streamlit interface with preset artistic styles and custom style upload.",
      results: "Application processes 1024x1024 images in under 30 seconds. Successfully used by 500+ users for creating artistic content. Provides 10 preset styles and supports custom style images.",
      tags: ["TensorFlow", "Keras", "Streamlit", "PIL"],
      github: "https://github.com",
      demo: "https://demo.com",
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Recommendation System",
      description: "Collaborative filtering recommendation engine serving personalized content to 50k+ users daily.",
      problemStatement: "An e-learning platform needed a personalized recommendation system to suggest courses based on user behavior and preferences. The challenge was to handle cold start problems and provide real-time recommendations at scale.",
      approach: "Implemented hybrid recommendation system combining collaborative filtering and content-based filtering using the Surprise library. Used Redis for caching frequently accessed recommendations and MongoDB for storing user interactions and course metadata.",
      results: "System serves personalized recommendations to 50,000+ daily active users with average response time under 100ms. Increased user engagement by 40% and course completion rates by 25%.",
      tags: ["Python", "Surprise", "Redis", "MongoDB"],
      github: "https://github.com",
      demo: null,
      snapshots: ["/placeholder.svg", "/placeholder.svg"]
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
            <Card 
              key={index} 
              className="p-6 card-shadow bg-card/50 backdrop-blur hover:scale-105 transition-all flex flex-col animate-fade-in-up cursor-pointer" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(index)}
            >
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1" 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                {project.demo && (
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-gradient">
                    {projects[selectedProject].title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Problem Statement */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Problem Statement</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].problemStatement}
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].approach}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results & Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].results}
                    </p>
                  </div>

                  {/* Snapshots */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Project Snapshots</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {projects[selectedProject].snapshots?.map((snapshot, idx) => (
                        <img 
                          key={idx}
                          src={snapshot} 
                          alt={`${projects[selectedProject].title} snapshot ${idx + 1}`}
                          className="w-full rounded-lg border border-border"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={projects[selectedProject].github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    {projects[selectedProject].demo && (
                      <Button className="flex-1" asChild>
                        <a href={projects[selectedProject].demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
