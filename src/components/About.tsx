const About = () => {
  const highlights = [
    "B.Tech. in Computer Engineering",
    "UI/UX Designer",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Department 3rd Rank in 1st Semester",
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block border-b-8 border-primary pb-2">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm Prashanth, a passionate and dedicated Computer Science student currently 
              pursuing my B.Tech at SRM Institute of Science and Technology, Chennai. With a CGPA 
              of <span className="font-bold text-primary">9.82</span>, I have developed a solid 
              foundation in various areas of technology.
            </p>
            
            <p className="text-lg leading-relaxed">
              My journey in machine learning has been exciting and fulfilling. I've built predictive 
              models using Python, NumPy, Pandas, Scikit-learn, and TensorFlow. One notable achievement 
              was developing a postpartum depression prediction model that earned{" "}
              <span className="font-bold text-accent">First Prize at the WTM She Innovates Hackathon</span>.
            </p>

            <p className="text-lg leading-relaxed">
              In web development, I'm proficient in HTML, CSS, JavaScript, and frameworks like React.js, 
              Django, and Flask. I take pride in building user-friendly applications that prioritize 
              seamless user experience.
            </p>
          </div>

          {/* Highlights box */}
          <div className="bg-secondary text-white p-8 border-4 border-foreground shadow-brutal">
            <h3 className="text-2xl font-bold mb-6 font-mono">Quick Bits</h3>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start group"
                >
                  <span className="text-accent mr-3 text-xl group-hover:scale-125 transition-transform">▸</span>
                  <span className="text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
