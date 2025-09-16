import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    description: "Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Architecture"],
    excerpt: "Discover best practices for building scalable React applications that can grow with your team and requirements."
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better Web Performance",
    description: "Explore advanced CSS features like container queries, CSS grid, and custom properties to create performant websites.",
    date: "2024-03-10",
    readTime: "6 min read",
    tags: ["CSS", "Performance", "Web Development"],
    excerpt: "Modern CSS offers powerful tools that can significantly improve both development experience and runtime performance."
  },
  {
    id: 3,
    title: "Full-Stack Development with Supabase and React",
    description: "Build complete web applications using Supabase as your backend and React for the frontend.",
    date: "2024-03-05",
    readTime: "12 min read",
    tags: ["Supabase", "React", "Full-Stack"],
    excerpt: "Learn how to create modern web applications with authentication, real-time features, and database management."
  }
];

export function Blog() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
 Latest Blog Posts
</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover-lift cursor-pointer transition-all duration-300 hover:shadow-custom-lg">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}