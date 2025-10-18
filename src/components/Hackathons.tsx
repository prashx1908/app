import { Trophy } from "lucide-react";

const Hackathons = () => {
  const hackathons = [
    {
      name: "WTM She Innovates Hackathon",
      achievement: "1st Place",
      project: "Developed Seraphina: A postpartum depression prediction model using ML",
      thumbnail: "/hackathon1.jpg",
    },
    {
      name: "Entropy'24 Hackathon - VIT Chennai",
      achievement: "Top 20 out of 100 Teams",
      project: "Developed FinLit: AI & ML-based financial literacy platform",
      thumbnail: "/hackathon2.jpg",
    },
    {
      name: "DevsHouse Hackathon",
      achievement: "Finalist",
      project: "Built WorkZen: Developer productivity prediction tool using ML",
      thumbnail: "/hackathon3.jpg",
    },
    {
      name: "DIMO Hacks - VIT AP",
      achievement: "Participant",
      project: "Developed Web3-based blockchain hospital record management system",
      thumbnail: "/hackathon4.jpg",
    },
    {
      name: "TRINIT Hackathon - NIT Trichy",
      achievement: "Finalist",
      project: "Built Agriculture Prediction System using ML for crop yield forecasting",
      thumbnail: "/hackathon5.jpg",
    },
    {
      name: "SRM FinTech Hackathon",
      achievement: "Finalist",
      project: "Advanced fintech solution leveraging ML for financial data analysis",
      thumbnail: "/hackathon6.jpg",
    },
  ];

  return (
    <section id="hackathons" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block border-b-8 border-accent pb-2">
            Hackathons
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, idx) => (
            <div
              key={idx}
              className="bg-card border-4 border-foreground shadow-brutal hover:translate-x-1 hover:translate-y-1 transition-smooth group overflow-hidden"
            >
              {/* Thumbnail */}
              {hackathon.thumbnail ? (
                <div className="w-full h-40 overflow-hidden border-b-4 border-foreground">
                  <img 
                    src={hackathon.thumbnail} 
                    alt={hackathon.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-40 bg-muted border-b-4 border-foreground flex items-center justify-center">
                  <Trophy className="h-12 w-12 text-muted-foreground" />
                </div>
              )}

              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold leading-tight flex-1 group-hover:text-primary transition-colors">
                    {hackathon.name}
                  </h3>
                </div>
                
                <div className="inline-block bg-accent text-accent-foreground px-3 py-1 text-sm font-bold mb-3">
                  {hackathon.achievement}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hackathon.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
