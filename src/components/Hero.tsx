import { useEffect, useState } from "react";
import { Github, Linkedin, Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello, I'm Prashanth G 👋";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-primary animate-float" />
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-accent animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 right-40 w-12 h-12 border-4 border-secondary animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-5xl w-full space-y-8 animate-slideUp">
        {/* Typewriter heading */}
        <div className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-mono">
            {displayText}
            <span className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-primary ml-2 animate-blink" />
          </h1>
        </div>

        {/* Title with retro box */}
        <div className="inline-block bg-secondary text-white px-6 py-3 border-4 border-foreground shadow-brutal transform hover:translate-x-1 hover:translate-y-1 transition-smooth">
          <p className="text-xl md:text-2xl font-bold uppercase tracking-wider">
            Software Engineer & ML Developer
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-muted-foreground">
          I am Prashanth, a pre-final year B.Tech in Computer Science and Engineering student at SRM Institute 
          of Science and Technology with a strong interest in Software Development and Machine Learning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-white border-4 border-foreground shadow-brutal transform hover:translate-x-1 hover:translate-y-1 transition-smooth font-bold uppercase tracking-wide"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-4 border-foreground bg-card hover:bg-accent hover:text-accent-foreground shadow-brutal transform hover:translate-x-1 hover:translate-y-1 transition-smooth font-bold uppercase tracking-wide"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 pt-4">
          {[
            { icon: Github, href: "https://github.com/prashanth", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/prashanth", label: "LinkedIn" },
            { icon: Code2, href: "https://leetcode.com/prashanth", label: "LeetCode" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border-4 border-foreground bg-card hover:bg-primary hover:text-white flex items-center justify-center shadow-brutal transform hover:-translate-y-1 transition-smooth"
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
