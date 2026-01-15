import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="
        group relative overflow-hidden rounded-2xl
        border border-border glow-card
        bg-linear-to-br from-card to-black/80
        transition-all duration-500
        hover:border-cyan-500/40
        hover:shadow-[0_0_60px_hsl(var(--cyan-500)/0.15)]
      "
    >
      <div className="relative z-10 p-6 md:p-8 pb-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {project.featured && (
              <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                <Star className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-cyan-500"
            >
              <Github className="w-5 h-5" />
            </Link>

            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground transition-all duration-300 hover:text-black hover:bg-cyan-500"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <h3
          className="
            text-2xl font-bold mb-3
            text-foreground
            transition-colors duration-500
            group-hover:text-cyan-400
          "
        >
          {project.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* DETAILS */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-2">
              Problem Solved
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-2">
              My Role
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.role}
            </p>
          </div>
        </div>

        {/* STACK */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="
                px-3 py-1.5 text-xs rounded-lg
                border border-border
                bg-secondary/50
                text-muted-foreground
                transition-all duration-300
                hover:border-cyan-500/40
                hover:text-cyan-500
                hover:bg-cyan-500/10
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM LINE — FIXED */}
      <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden">
        <span
          className="
            absolute left-1/2 top-0 h-full w-0
            -translate-x-1/2
            bg-linear-to-r from-cyan-500 via-cyan-400 to-cyan-500
            transition-all duration-500
            group-hover:w-full
          "
        />
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      
      <div className="absolute top-1/3 right-0 w-1/2 h-96 bg-glow-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-500 text-sm font-mono tracking-wider uppercase mb-4 block">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects that showcase my technical skills and problem-solving approach.
            Each project represents real challenges and real solutions.
          </p>
        </motion.div>

        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Esteban2306"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="hover:border-cyan-500/50 hover:bg-cyan-500/5 cursor-pointer"
            >
              <Github className="w-4 h-4 mr-2" />
              See more on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
