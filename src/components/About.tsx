import { motion } from "framer-motion";
import { Code, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write maintainable, well-documented code that teams can understand and extend.",
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "I design systems that grow with your business, not against it.",
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Every technical decision is guided by real user needs and business impact.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-500 text-sm font-mono tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Building software that{" "}
            <span className="gradient-text">matters</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full-Stack Developer with a passion for building applications that solve 
              real problems. My journey started with curiosity about how things work on the 
              web, and has evolved into a career focused on creating{" "}
              <span className="text-foreground font-medium">robust, scalable solutions</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in the JavaScript/TypeScript ecosystem, working across the entire 
              stack from React frontends to Node.js backends. What drives me is not just 
              writing code, but understanding the business context and delivering software 
              that creates{" "}
              <span className="text-foreground font-medium">measurable impact</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When approaching a project, I think in systems: How will this scale? 
              How will the next developer understand this? What happens when requirements change?
              This mindset helps me build software that stands the test of time.
            </p>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">cyan-500 technologies:</p>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "React", "Node.js", "PostgreSQL", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glow-card rounded-xl border border-border p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
