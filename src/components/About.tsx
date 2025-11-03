import { Card } from "@/components/ui/card";
import profileImg from "@/assets/profile.jpg";
import { Brain, Award, Code } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "5+ Years Experience",
      description: "Building ML systems"
    },
    {
      icon: Award,
      title: "10+ Certifications",
      description: "From top institutions"
    },
    {
      icon: Code,
      title: "20+ Projects",
      description: "Deployed in production"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate about creating intelligent solutions that make a difference
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse"></div>
              <img
                src={profileImg}
                alt="Profile"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg leading-relaxed">
              I'm an AI & Machine Learning Engineer with a passion for developing intelligent systems 
              that solve real-world problems. With expertise in deep learning, computer vision, and 
              natural language processing, I've built and deployed ML models that serve millions of users.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey in AI began with a fascination for neural networks and has evolved into a 
              career focused on pushing the boundaries of what's possible with machine learning. 
              I specialize in creating scalable ML pipelines and deploying production-ready AI solutions.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-4 text-center hover:scale-105 transition-transform card-shadow bg-card/50 backdrop-blur">
                  <highlight.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-bold text-sm mb-1">{highlight.title}</h4>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
