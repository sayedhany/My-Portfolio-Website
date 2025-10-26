export const projects = [
  // Professional Full-Stack Projects
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Complete e-commerce solution built with modern full-stack technologies. Features product management, shopping cart, user authentication, payment processing, and admin dashboard. Deployed with professional hosting infrastructure.",
    image: "/images/egypt-fisher.png",
    tags: [
      "Full-Stack",
      "E-Commerce",
      "React",
      "Node.js",
      "Database",
      "Payment Integration",
    ],
    source: "http://egypt-fisher.com/",
    visit: "https://github.com/sayedhany/full-stack-ecomerce",
    id: 0,
  },
  {
    title: "Angular Material Marketplace - Monorepo",
    description:
      "Enterprise-level material marketplace built with Angular monorepo architecture. Features three distinct applications: Supplier Dashboard, Operations Management, and Customer Portal. Implements role-based access control, real-time notifications, and comprehensive product management.",
    image: "/images/monorepo.png",
    tags: [
      "Angular",
      "Monorepo",
      "TypeScript",
      "Material Design",
      "Multi-tenant",
      "Enterprise",
    ],
    source: "http://37.27.109.171:4200/customer/",
    visit: "https://github.com/Pyramids-WEB/site_material_marketplace_angular",
    id: 1,
    subApps: [
      {
        name: "Supplier Dashboard",
        url: "http://37.27.109.171:4200/supplier/",
      },
      { name: "Operations Panel", url: "http://37.27.109.171:4200/operation/" },
      { name: "Customer Portal", url: "http://37.27.109.171:4200/customer/" },
    ],
  },

  // Original Portfolio Projects
  {
    title: "Gerich Restaurant",
    description:
      "Beautiful restaurant website built with React and modern CSS techniques, featuring elegant design, responsive layout, and smooth animations.",
    image: "/images/1.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    source: "https://sayed2.netlify.app/",
    visit: "https://github.com/sayedhany/gerich-resturant",
    id: 2,
  },
  {
    title: "GPT-3 Landing Page",
    description:
      "Modern landing page for GPT-3 AI technology with stunning UI/UX design, built using React and CSS.",
    image: "/images/2.png",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    source: "https://sayed-gpt3.netlify.app/",
    visit: "https://github.com/sayedhany/GPT-3-Project",
    id: 3,
  },
  {
    title: "Bank Transfer Demo",
    description:
      "Interactive demo banking application for money transfers, built with vanilla JavaScript featuring user authentication and transaction management.",
    image: "/images/3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    source: "https://sayedhany.github.io/Bank-Project/",
    visit: "https://github.com/sayedhany/Bank-Project",
    id: 4,
  },
  {
    title: "Modern Bank App",
    description:
      "Contemporary banking application built with React and TailwindCSS, featuring modern design principles and professional UI components.",
    image: "/images/4.png",
    tags: ["React", "TailwindCSS", "HTML"],
    source: "https://sayed3.netlify.app/",
    visit: "https://github.com/sayedhany/Bank-Modern-App",
    id: 5,
  },
  {
    title: "Natours Travel Website",
    description:
      "Beautiful travel website built with pure HTML and SCSS, showcasing advanced CSS techniques and animations without JavaScript frameworks.",
    image: "/images/5.png",
    tags: ["HTML", "SCSS"],
    source: "https://sayedhany.github.io/Natours-Project1/",
    visit: "https://github.com/sayedhany/Natours-Project1",
    id: 6,
  },
];

export const TimeLineData = [
  {
    year: 2019,
    text: "Started my journey in web development and graduated from Menofia University with Pure Mathematics and Computer Science degree",
  },
  {
    year: 2020,
    text: "Mastered HTML, CSS, JavaScript fundamentals and built first portfolio projects",
  },
  {
    year: 2021,
    text: "Specialized in React.js and modern JavaScript frameworks, completed advanced courses",
  },
  {
    year: 2022,
    text: "Started professional career as Front-End Developer, worked on enterprise Angular applications",
  },
  {
    year: 2023,
    text: "Advanced to Senior Front-End Developer role, led team projects and mentored junior developers",
  },
  {
    year: 2024,
    text: "Expertise in Angular, Next.js, and modern web technologies. Built scalable enterprise applications",
  },
  {
    year: 2025,
    text: "Continuing to innovate with cutting-edge technologies and architectural patterns",
  },
];
