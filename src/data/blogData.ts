import reactTypescriptImage from "@/assets/blog-react-typescript.jpg";
import cssPerformanceImage from "@/assets/blog-css-performance.jpg";
import supabaseReactImage from "@/assets/blog-supabase-react.jpg";

// Blog post interface
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string; // Full blog content in markdown
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  heroImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  published: boolean;
  featured?: boolean;
}

// Blog posts data - Add new posts here
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    description: "Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",
    content: `
# Building Scalable React Applications with TypeScript

TypeScript has become an essential tool for building large-scale React applications. In this comprehensive guide, we'll explore the best practices and patterns that will help you create maintainable, scalable applications.

## Why TypeScript for React?

- **Type Safety**: Catch errors at compile time
- **Better Developer Experience**: Enhanced IDE support
- **Refactoring**: Safe code refactoring
- **Documentation**: Types serve as documentation

## Project Structure

\`\`\`
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── forms/        # Form components
│   └── layout/       # Layout components
├── hooks/            # Custom hooks
├── services/         # API services
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── pages/            # Page components
\`\`\`

## Key Principles

1. **Component Composition**: Build small, reusable components
2. **Custom Hooks**: Extract logic into reusable hooks
3. **Type Definitions**: Create comprehensive type definitions
4. **Error Boundaries**: Handle errors gracefully

This approach ensures your React applications remain maintainable as they grow in complexity.
    `,
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Architecture"],
    excerpt: "Discover best practices for building scalable React applications that can grow with your team and requirements.",
    heroImage: reactTypescriptImage,
    author: {
      name: "Sabir Alam",
      avatar: "/src/assets/profile-photo.jpg"
    },
    published: true,
    featured: true
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better Web Performance",
    description: "Explore advanced CSS features like container queries, CSS grid, and custom properties to create performant websites.",
    content: `
# Modern CSS Techniques for Better Web Performance

Modern CSS offers powerful features that can significantly improve both development experience and runtime performance. Let's explore the latest techniques.

## Container Queries

Container queries allow you to style elements based on their container's size, not just the viewport.

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## CSS Grid Advanced Patterns

\`\`\`css
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

## Custom Properties for Theming

\`\`\`css
:root {
  --primary-hue: 220;
  --primary-saturation: 90%;
  --primary-lightness: 50%;
  --primary: hsl(var(--primary-hue) var(--primary-saturation) var(--primary-lightness));
}
\`\`\`

These techniques help create more maintainable and performant stylesheets.
    `,
    date: "2024-03-10",
    readTime: "6 min read",
    tags: ["CSS", "Performance", "Web Development"],
    excerpt: "Modern CSS offers powerful tools that can significantly improve both development experience and runtime performance.",
    heroImage: cssPerformanceImage,
    author: {
      name: "Sabir Alam"
    },
    published: true,
    featured: true
  },
  {
    id: 3,
    title: "Full-Stack Development with Supabase and React",
    description: "Build complete web applications using Supabase as your backend and React for the frontend.",
    content: `
# Full-Stack Development with Supabase and React

Supabase provides everything you need to build a complete web application: database, authentication, real-time subscriptions, and more.

## Setting Up Supabase

1. Create a new project at [supabase.io](https://supabase.io)
2. Install the Supabase client
3. Configure your environment variables

\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

## Authentication

\`\`\`typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(url, key)

// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password'
})
\`\`\`

## Real-time Features

\`\`\`typescript
// Subscribe to changes
supabase
  .channel('posts')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, 
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
\`\`\`

Supabase makes full-stack development accessible and enjoyable.
    `,
    date: "2024-03-05",
    readTime: "12 min read",
    tags: ["Supabase", "React", "Full-Stack"],
    excerpt: "Learn how to create modern web applications with authentication, real-time features, and database management.",
    heroImage: supabaseReactImage,
    author: {
      name: "Sabir Alam"
    },
    published: true,
    featured: false
  },
  {
    id: 4,
    title: "Getting Started with AI in Web Development",
    description: "Explore how artificial intelligence is transforming modern web development and learn practical implementation strategies.",
    content: `
# Getting Started with AI in Web Development

Artificial Intelligence is revolutionizing how we build and interact with web applications. This guide will help you integrate AI features into your projects.

## Why AI in Web Development?

- **Personalization**: Tailor user experiences based on behavior
- **Automation**: Automate repetitive tasks and workflows
- **Intelligence**: Add smart features like recommendations and predictions
- **Enhanced UX**: Create more intuitive and responsive interfaces

## Popular AI Tools for Developers

### 1. OpenAI API
\`\`\`typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: "Hello!" }]
});
\`\`\`

### 2. Image Generation
Use AI to generate images, analyze content, and enhance user-uploaded photos.

### 3. Natural Language Processing
Implement chatbots, sentiment analysis, and content moderation.

## Best Practices

1. **Start Small**: Begin with simple AI features
2. **User Privacy**: Always respect user data and privacy
3. **Fallback Options**: Have non-AI alternatives ready
4. **Performance**: Cache results and optimize API calls

AI is not just the future—it's the present of web development!
    `,
    date: "2024-03-20",
    readTime: "10 min read",
    tags: ["AI", "Web Development", "Tutorial"],
    excerpt: "Discover how to integrate AI features into your web applications and stay ahead in modern development.",
    heroImage: reactTypescriptImage,
    author: {
      name: "Sabir Alam",
      avatar: "/src/assets/profile-photo.jpg"
    },
    published: true,
    featured: true
  }
];

// Helper functions
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured && post.published);
export const getPublishedPosts = () => blogPosts.filter(post => post.published);
export const getPostById = (id: number) => blogPosts.find(post => post.id === id);
export const getPostsByTag = (tag: string) => blogPosts.filter(post => 
  post.published && post.tags.includes(tag)
);