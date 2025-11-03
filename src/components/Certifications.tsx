import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2023",
      skills: ["ML Algorithms", "Neural Networks", "TensorFlow"]
    },
    {
      title: "Deep Learning Specialization",
      issuer: "deeplearning.ai (Coursera)",
      date: "2023",
      skills: ["CNN", "RNN", "Transformers"]
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2022",
      skills: ["TensorFlow", "Keras", "Model Deployment"]
    },
    {
      title: "IBM Data Science Professional",
      issuer: "IBM (Coursera)",
      date: "2022",
      skills: ["Python", "Data Analysis", "ML"]
    },
    {
      title: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      skills: ["AWS", "ML Deployment", "Cloud"]
    },
    {
      title: "Natural Language Processing",
      issuer: "deeplearning.ai (Coursera)",
      date: "2023",
      skills: ["NLP", "BERT", "Transformers"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Continuous learning from world-class institutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 card-shadow bg-card/50 backdrop-blur hover:scale-105 transition-all animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1 leading-tight">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
