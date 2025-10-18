const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C++", "HTML", "CSS"],
      color: "primary",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express.js", "Django", "Flask", "Streamlit"],
      color: "accent",
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Git", "Figma", "Tailwind CSS"],
      color: "secondary",
    },
    {
      title: "Machine Learning & Data Science",
      skills: [
        "Machine Learning",
        "Data Analytics",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Tableau",
      ],
      color: "primary",
    },
    {
      title: "Concepts & Technical Skills",
      skills: ["OOP", "Networks", "REST APIs", "Web Scraping", "Data Visualization"],
      color: "accent",
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Public Speaking", "Event Management", "Communication", "Problem Solving"],
      color: "secondary",
    },
  ];

  const colorMap = {
    primary: "border-primary hover:bg-primary hover:text-white",
    accent: "border-accent hover:bg-accent hover:text-white",
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
              className="bg-card border-4 border-foreground p-6 shadow-brutal rounded-2xl animate-slideUp transition-transform duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 font-mono">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`px-4 py-2 border-3 border-foreground ${colorMap[category.color]} transition-smooth font-medium rounded-lg`}
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
