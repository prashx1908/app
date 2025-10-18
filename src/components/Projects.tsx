import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Seraphina: Postpartum Depression Prediction",
      description: "ML-based tool to predict postpartum depression risk with personalized mental health guidance. Secured 1st Place in Women TechMakers Hackathon.",
      tech: ["Python", "Scikit-learn", "Random Forest", "Streamlit"],
      link: "#",
      github: "#",
      award: "🏆 1st Place Winner",
      thumbnail: "", // Add your thumbnail path here
    },
    {
      title: "FinLit: Financial Literacy Platform",
      description: "Django-based financial management tool with expenditure tracking, investment recommendations, and AI chatbot assistance.",
      tech: ["Django", "PostgreSQL", "Matplotlib", "JavaScript"],
      link: "#",
      github: "#",
      thumbnail: "",
    },
    {
      title: "WorkZen: Developer Productivity Prediction",
      description: "ML model predicting developer work-life balance with personalized productivity recommendations.",
      tech: ["Python", "Scikit-learn", "Streamlit"],
      link: "#",
      github: "#",
      thumbnail: "",
    },
    {
      title: "Vidyasagar Dashboard",
      description: "Comprehensive student management portal with three login portals for students, teachers, and management.",
      tech: ["Django", "PostgreSQL", "HTML", "CSS"],
      link: "#",
      thumbnail: "",
    },
    {
      title: "BalancePro: Work-Life Balance Prediction",
      description: "Flask web application predicting work-life balance using Random Forest models with 91% accuracy.",
      tech: ["Flask", "Python", "Random Forest", "Jinja2"],
      link: "#",
      github: "#",
      thumbnail: "",
    },
    {
      title: "Lab Report Data Extraction",
      description: "OCR-based solution extracting lab test data from medical reports via FastAPI service.",
      tech: ["FastAPI", "OCR", "Python"],
      github: "#",
      thumbnail: "",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block border-b-8 border-primary pb-2">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border-4 border-foreground shadow-brutal hover:translate-x-1 hover:translate-y-1 transition-smooth group overflow-hidden"
            >
              {/* Thumbnail */}
              {project.thumbnail ? (
                <div className="w-full h-48 overflow-hidden border-b-4 border-foreground">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-muted border-b-4 border-foreground flex items-center justify-center">
                  <p className="text-muted-foreground font-mono text-sm">Add thumbnail</p>
                </div>
              )}

              <div className="p-6">
                {project.award && (
                  <div className="inline-block bg-accent text-accent-foreground px-3 py-1 text-sm font-bold mb-4">
                    {project.award}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-muted border-2 border-foreground text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <Button
                      size="sm"
                      className="border-2 border-foreground bg-primary hover:bg-primary/90 text-white font-bold"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-foreground hover:bg-secondary hover:text-white font-bold"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
