export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern, full-featured e-commerce platform with real-time inventory management, secure payments, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
  },
  {
    id: "2", 
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    techStack: ["Next.js", "TypeScript", "Prisma", "WebSockets", "Tailwind CSS"],
    liveUrl: "https://demo-taskapp.com",
    githubUrl: "https://github.com/username/task-management",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    techStack: ["React", "D3.js", "OpenWeather API", "Chart.js"],
    liveUrl: "https://demo-weather.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    featured: false,
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Comprehensive analytics platform for social media performance tracking with detailed insights and reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    techStack: ["Vue.js", "Python", "FastAPI", "MongoDB", "Docker"],
    liveUrl: "https://demo-analytics.com",
    githubUrl: "https://github.com/username/social-analytics",
    featured: true,
  },
  {
    id: "5",
    title: "Recipe Finder App",
    description: "Mobile-first recipe discovery app with ingredient-based search, meal planning, and shopping list generation.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    techStack: ["React Native", "Expo", "Firebase", "Spoonacular API"],
    liveUrl: "https://demo-recipes.com",
    githubUrl: "https://github.com/username/recipe-finder",
    featured: false,
  },
  {
    id: "6",
    title: "Crypto Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio tracking with price alerts, news integration, and performance analytics.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
    techStack: ["React", "Node.js", "CoinGecko API", "Socket.io", "Redis"],
    liveUrl: "https://demo-crypto.com",
    githubUrl: "https://github.com/username/crypto-tracker",
    featured: false,
  },
];