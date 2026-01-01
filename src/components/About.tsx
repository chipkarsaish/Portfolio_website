import { Card } from "@/components/ui/card";
import profileImg from "@/assets/profile2.jpeg";
import { Brain, Award, Code } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "ANN Proficiency",
      description: "Understanding of Artificial Neural Networks"
    },
    {
      icon: Award,
      title: "5+ Certifications",
      description: "From authenticate sources"
    },
    {
      icon: Code,
      title: "10+ Projects",
      description: "Scalable production systems"
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
            <p className="text-lg leading-relaxed text-justify">
              I am an engineering student with a strong interest in data and its power to transform raw information into meaningful insights. I am currently learning and building skills as a Full-Stack Data Professional, exploring the complete data lifecycle—from data collection and preprocessing to exploratory data analysis, visualization, and introductory machine learning. Through hands-on projects using Python, SQL, and data analysis tools, I focus on understanding how data-driven solutions are designed, implemented, and communicated effectively.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground text-justify">
              I chose this path because data combines structured thinking with creativity and real-world impact. The process of asking questions, exploring patterns, and uncovering insights excites me and keeps me motivated to learn more each day. This field encourages continuous growth, experimentation, and problem-solving, which aligns perfectly with my curiosity and long-term goal of becoming a professional who builds reliable, ethical, and impactful data-driven solutions.
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
