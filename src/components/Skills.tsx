import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";
import { skillCategories, type SkillCategory } from "../data/skills";

const iconMap = {
  Layout,
  Server,
  Database,
  Wrench,
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard = ({ category, index }: SkillCardProps) => {
  const Icon = iconMap[category.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glow-card rounded-xl border border-border p-6 group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
            className="skill-tag"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 text-sm font-mono tracking-wider uppercase mb-4 block">
            Skills & Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My{" "}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to build modern, performant applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Always learning, always improving. Currently exploring{" "}
          <span className="text-cyan-500">AI/ML integrations</span> and{" "}
          <span className="text-cyan-500">system design patterns</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
