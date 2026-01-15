export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  role: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "glamstudio",
    name: "GlamStudio",
    description: "Full-stack booking system for beauty salons with appointment management, system payments and a complete administrative panel.",
    problem: "Beauty salons needed a modern solution to manage bookings, avoid scheduling conflicts, and process payments securely.",
    role: "Full-Stack Developer - I designed the architecture, implemented decoupled frontend and backend, and deployed the solution.",
    stack: ["React", "TypeScript", "Node.js","Next.js", "Nest.js", "PostgresSQL", "TailwindCSS", "React-Query"],
    githubUrl: "https://github.com/Esteban2306/glamstudio-website",
    demoUrl: "https://glamstudio-demo.vercel.app",
    featured: true,
  },
  {
  id: "pilly-lu-ecommerce",
  name: "Pilly-lu E-commerce",
  description:
    "Full-stack e-commerce platform for a jewelry business, built with decoupled frontend and backend, JWT-based authentication, and an administrative panel for product management.",
  problem:
    "The business needed a custom digital solution to sell jewelry online, manage its product catalog and inventory, and establish a solid technical foundation for future scalability.",
  role:
    "Full-Stack Developer — Designed the system architecture, built the frontend with React and Next.js, implemented the backend using Node.js and Express, and developed the core business logic, authentication, and data persistence.",
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "REST API",
  ],
  githubUrl: "https://github.com/Esteban2306/Pilly-lu-E-commerce",
  demoUrl: "https://pillylu.qzz.io",
  featured: true,
},
  
];
