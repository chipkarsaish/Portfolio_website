import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-muted-foreground mb-4 text-lg animate-fade-in-up">
            Hi, I'm
          </p>
          
          {/* Name with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
            <span className="text-gradient">Your Name</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            AI & Machine Learning Engineer
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Building intelligent systems that learn and adapt
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:your.email@example.com" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
