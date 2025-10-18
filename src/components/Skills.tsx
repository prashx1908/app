const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["JavaScript", "Python", "C++", "React", "Django", "Flask"],
      color: "primary"
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MySQL", "Git", "Figma", "Tailwind CSS"],
      color: "accent"
    },
    {
      title: "ML & Data Science",
      skills: ["Machine Learning", "TensorFlow", "PyTorch", "NLP", "Data Analysis", "Tableau"],
      color: "secondary"
    },
    {
      title: "Other Skills",
      skills: ["REST APIs", "Web Scraping", "Streamlit", "Public Speaking", "Leadership"],
      color: "primary"
    },
  ];

  const colorMap = {
    primary: "border-primary hover:bg-primary",
    accent: "border-accent hover:bg-accent",
    secondary: "border-secondary hover:bg-secondary hover:text-white",
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block border-b-8 border-accent pb-2">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card border-4 border-foreground p-6 shadow-brutal animate-slideUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 font-mono">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`px-4 py-2 border-3 border-foreground ${colorMap[category.color as keyof typeof colorMap]} hover:text-white transition-smooth font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
