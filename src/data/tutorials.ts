export interface Tutorial {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  lessons: number;
  tags: string[];
  isPublished: boolean;
}

export const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Complete React Hooks Guide",
    description: "Master React Hooks from basics to advanced patterns including useState, useEffect, useContext, and custom hooks.",
    category: "React",
    difficulty: "Beginner",
    duration: "2h 30min",
    thumbnail: "/src/assets/blog-react-typescript.jpg",
    lessons: 12,
    tags: ["React", "Hooks", "JavaScript"],
    isPublished: true
  },
  {
    id: 2,
    title: "TypeScript for React Developers",
    description: "Learn TypeScript fundamentals and how to use it effectively in React applications with practical examples.",
    category: "TypeScript",
    difficulty: "Intermediate",
    duration: "3h 15min",
    thumbnail: "/src/assets/blog-react-typescript.jpg",
    lessons: 15,
    tags: ["TypeScript", "React", "Types"],
    isPublished: true
  },
  {
    id: 3,
    title: "Building Full-Stack Apps with Supabase",
    description: "Create complete applications with authentication, database, and real-time features using Supabase and React.",
    category: "Full-Stack",
    difficulty: "Intermediate",
    duration: "4h 45min",
    thumbnail: "/src/assets/blog-supabase-react.jpg",
    lessons: 20,
    tags: ["Supabase", "React", "PostgreSQL"],
    isPublished: true
  },
  {
    id: 4,
    title: "CSS Grid & Flexbox Mastery",
    description: "Master modern CSS layouts with comprehensive coverage of Grid and Flexbox with real-world projects.",
    category: "CSS",
    difficulty: "Beginner",
    duration: "2h 00min",
    thumbnail: "/src/assets/blog-css-performance.jpg",
    lessons: 10,
    tags: ["CSS", "Layout", "Design"],
    isPublished: true
  },
  {
    id: 5,
    title: "Advanced React Patterns",
    description: "Explore advanced React patterns including render props, compound components, and state management strategies.",
    category: "React",
    difficulty: "Advanced",
    duration: "3h 30min",
    thumbnail: "/src/assets/blog-react-typescript.jpg",
    lessons: 14,
    tags: ["React", "Patterns", "Architecture"],
    isPublished: true
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    description: "Learn techniques to optimize web performance including lazy loading, code splitting, and caching strategies.",
    category: "Performance",
    difficulty: "Intermediate",
    duration: "2h 45min",
    thumbnail: "/src/assets/blog-css-performance.jpg",
    lessons: 11,
    tags: ["Performance", "Optimization", "Web"],
    isPublished: true
  }
];

export const getPublishedTutorials = () => {
  return tutorials.filter(tutorial => tutorial.isPublished);
};

export const getTutorialById = (id: number) => {
  return tutorials.find(tutorial => tutorial.id === id);
};

export const getTutorialsByCategory = (category: string) => {
  return tutorials.filter(tutorial => 
    tutorial.isPublished && tutorial.category === category
  );
};