import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's discuss your next AI project or collaboration opportunity
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <a href="mailto:saish.chipkar25@gmail.com" className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">saish.chipkar25@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/chipkarsaish" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-muted-foreground">chipkarsaish</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/saish-chipkar-2237b82b3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Saish Chipkar</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 card-shadow bg-card/50 backdrop-blur animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
