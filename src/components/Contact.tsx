import { Mail, Github, Linkedin, Code2 } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block border-b-8 border-primary pb-2">
            Connect With Me!
          </h2>
        </div>

        <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Feel free to reach out if you're looking for a developer, have a query, 
          or simply want to connect.
        </p>

        {/* Email */}
        <a
          href="mailto:prashanth.dev1908@gmail.com"
          className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-xl font-bold border-4 border-foreground shadow-brutal hover:translate-x-1 hover:translate-y-1 transition-smooth mb-12"
        >
          <Mail className="h-6 w-6" />
          prashanth.dev1908@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8">
          {[
            { icon: Github, href: "https://github.com/prashx1908", label: "GitHub", color: "bg-secondary" },
            { icon: Linkedin, href: "https://linkedin.com/in/prashanth-g-399225202", label: "LinkedIn", color: "bg-primary" },
            { icon: Code2, href: "https://leetcode.com/prashx1908", label: "LeetCode", color: "bg-accent" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-16 h-16 ${social.color} text-white border-4 border-foreground flex items-center justify-center shadow-brutal hover:-translate-y-2 transition-smooth group`}
              aria-label={social.label}
            >
              <social.icon className="h-7 w-7 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
