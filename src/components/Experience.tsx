const Experience = () => {
  const experiences = [
    {
      role: "Program Intern (Automation & ML)",
      company: "LEAP, Bangalore",
      period: "June 2025 – Present",
      description: [
        "Led automation of the core 'Golden Flow' using the MERN stack, reducing human dependency by 90% and tripling task throughput.",
        "Designed end-to-end machine learning pipelines using 500K+ historical records to derive predictive insights and enhance operational decision-making.",
        "Conducted user behavior analysis and satisfaction forecasting, improving adoption by 35% and reducing time-to-market by 40%.",
      ],
    },
    {
      role: "Technical Intern (Backend)",
      company: "VidyaSagar NGO",
      period: "June 2024 - July 2024",
      description: [
        "Developed and maintained backend systems using Django and PostgreSQL.",
        "Implemented RESTful APIs for data management and user authentication.",
        "Collaborated with the team to optimize database performance.",
      ],
    },
    {
      role: "Research Intern",
      company: "MIT Square, London (Remote)",
      period: "Sep 2023 - Dec 2023",
      description: [
        "Conducted research on energy-efficient data center cooling technologies.",
        "Published findings demonstrating 90% reduction in water usage and 25% energy savings.",
        "Led a team of 4 students, earning 'Best Intern Team of the Year' award.",
      ],
      award: true,
    },
    {
      role: "President",
      company: "Developer Students Club, SRM IST Ramapuram",
      period: "Feb 2023 - Apr 2025",
      description: [
        "Leading community of 1500+ students with a team of 40 people.",
        "Organized workshops, technical events and hackathons.",
        "Collaborated with industry professionals to create engaging learning environment.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block border-b-8 border-accent pb-2">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l-4 border-primary animate-slideRight"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary border-4 border-background rounded-full" />
              
              <div className="bg-card border-4 border-foreground p-6 shadow-brutal rounded-2xl">
                {exp.award && (
                  <div className="inline-block bg-accent text-accent-foreground px-3 py-1 text-sm font-bold mb-3">
                    🏆 Award Winner
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground font-mono mb-4">{exp.period}</p>

                <ul className="space-y-2">
                  {exp.description.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="text-accent mr-3 text-xl">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
