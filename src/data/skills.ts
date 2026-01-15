export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Layout",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "HTML5/CSS3",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "REST APIs",
      "WebSockets",
      "Authentication",
      "Microservices",
    ],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "TypeORM",
      "Mongoose",
    ],
  },
  {
    name: "Tools & DevOps",
    icon: "Wrench",
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "Nginx",
      "AWS",
      "GCP",
      "zsh",
      "PM2",
      "Certbot",
      "Linux",
      "Jest",
      "Postman",
    ],
  },
];
