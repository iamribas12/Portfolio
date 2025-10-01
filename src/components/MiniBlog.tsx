import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { BlogSearch } from "@/components/BlogSearch";
import { getFeaturedPosts } from "@/data/blogData";
import { useState } from "react";
import { Link } from "react-router-dom";

export function MiniBlog() {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredPosts = getFeaturedPosts();
  
  const filteredPosts = featuredPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Thoughts and tutorials on modern web development
          </p>
          
          {/* Search Component */}
          <div className="flex justify-center mb-8">
            <BlogSearch 
              onSearch={setSearchQuery}
              placeholder="Search featured articles..."
              className="max-w-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="group hover-lift cursor-pointer transition-all duration-300 overflow-hidden h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.heroImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
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
                <p className="text-muted-foreground mb-4 line-clamp-2">
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
            </Link>
          ))}
        </div>

        {/* No Results for Search */}
        {searchQuery && filteredPosts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              No featured articles found for "{searchQuery}"
            </p>
          </div>
        )}

        <div className="text-center">
          <Button asChild variant="outline" className="group">
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}