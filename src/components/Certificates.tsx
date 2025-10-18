import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Machine Learning A-Z",
      issuer: "Udemy",
      description: "Comprehensive course covering ML algorithms, data preprocessing, and model evaluation",
      thumbnail: "/cert1.jpg",
    },
    {
      title: "Product Design",
      issuer: "Accenture North America",
      description: "Product design fundamentals, UX principles, and design thinking methodologies",
      thumbnail: "/cert2.jpg",
    },
    {
      title: "Data Analytics",
      issuer: "Deloitte",
      description: "Practical experience in data analysis techniques and visualization",
      thumbnail: "/cert3.jpg",
    },
    {
      title: "Code Vipasanna Duet AI Season 5",
      issuer: "Exceptional Performance",
      description: "Recognized for exceptional coding skills and problem-solving abilities",
      thumbnail: "/cert4.jpg",
    },
    {
      title: "NLP Course",
      issuer: "Intellipaat",
      description: "Comprehensive training in Natural Language Processing techniques",
      thumbnail: "/cert5.jpg",
    },
    {
      title: "Machine Learning Introduction",
      issuer: "IBM",
      description: "Introduction to ML concepts, algorithms, and applications",
      thumbnail: "/cert6.jpg",
    },
    {
      title: "Learn Python",
      issuer: "CodeChef",
      description: "Mastered Python programming fundamentals and advanced concepts",
      thumbnail: "/cert7.jpg",
    },
    {
      title: "Digital Components System Architecture",
      issuer: "Great Learning",
      description: "Understanding of computer architecture and digital system components",
      thumbnail: "/cert8.jpg",
    },
    {
      title: "Flask Web App",
      issuer: "MLSA",
      description: "Comprehensive session on creating a web-app in Flask.",
      thumbnail: "/cert9.jpg",
    },
    {
      title: "Best Intern Team of the Year",
      issuer: "MIT Square Research Internship",
      description: "Outstanding team collaboration and innovative research contributions",
      thumbnail: "/cert10.jpg",
    },
    {
      title: "Cisco Python Essentials 1",
      issuer: "Cisco Networking Academy",
      description: "Foundational Python programming skills including syntax and semantics",
      thumbnail: "/cert11.png",
    },
    {
      title: "TEXUS'24 Technical Event Volunteer",
      issuer: "Developer Students Club",
      description: "Conducted IdeaForge ideathon event with full capacity participation",
      thumbnail: "/cert14.jpg",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block border-b-8 border-primary pb-2">
            Certificates
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-card border-4 border-foreground shadow-brutal hover:translate-x-1 hover:translate-y-1 transition-smooth group overflow-hidden"
            >
              {/* Thumbnail */}
              {cert.thumbnail ? (
                <div className="w-full h-40 overflow-hidden border-b-4 border-foreground">
                  <img 
                    src={cert.thumbnail} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-40 bg-muted border-b-4 border-foreground flex items-center justify-center">
                  <Award className="h-12 w-12 text-muted-foreground" />
                </div>
              )}

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-semibold text-accent mb-2">
                  {cert.issuer}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
