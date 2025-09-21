import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ExternalLink } from "lucide-react";
import { BlogSearch } from "@/components/BlogSearch";
import { useState } from "react";
import reactTypescriptImage from "@/assets/blog-react-typescript.jpg";
import cssPerformanceImage from "@/assets/blog-css-performance.jpg";
import supabaseReactImage from "@/assets/blog-supabase-react.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    description: "Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Architecture"],
    excerpt: "Discover best practices for building scalable React applications that can grow with your team and requirements.",
    heroImage: reactTypescriptImage
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better Web Performance",
    description: "Explore advanced CSS features like container queries, CSS grid, and custom properties to create performant websites.",
    date: "2024-03-10",
    readTime: "6 min read",
    tags: ["CSS", "Performance", "Web Development"],
    excerpt: "Modern CSS offers powerful tools that can significantly improve both development experience and runtime performance.",
    heroImage: cssPerformanceImage
  },
  {
    id: 3,
    title: "Full-Stack Development with Supabase and React",
    description: "Build complete web applications using Supabase as your backend and React for the frontend.",
    date: "2024-03-05",
    readTime: "12 min read",
    tags: ["Supabase", "React", "Full-Stack"],
    excerpt: "Learn how to create modern web applications with authentication, real-time features, and database management.",
    heroImage: supabaseReactImage
  }
];

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Insights, tutorials, and thoughts on modern web development
          </p>
          
          {/* Search Component */}
          <div className="flex justify-center mb-8">
            <BlogSearch 
              onSearch={setSearchQuery}
              placeholder="Search articles, tags, or topics..."
            />
          </div>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found for "{searchQuery}"
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group hover-lift cursor-pointer transition-all duration-300 hover:shadow-custom-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.heroImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <ExternalLink className="h-5 w-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-sm text-white/90 mb-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
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

        {/* No Results */}
        {searchQuery && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try searching with different keywords or browse all articles above.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}