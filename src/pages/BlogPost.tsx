import { useParams, Link } from "react-router-dom";
import { getPostById } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Linkedin, Twitter } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

export default function BlogPost() {
  const { id } = useParams();
  const post = getPostById(Number(id));

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  const shareUrl = window.location.href;
  const shareText = `Check out this article: ${post.title}`;

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        toast.success("Link copied to clipboard!");
        return;
    }
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <main className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Hero Image */}
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-[400px] rounded-xl overflow-hidden mb-6 sm:mb-8 shadow-custom-lg">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              {post.author.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <span className="font-medium">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString("en-US", { 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4 sm:pt-6 border-t border-border">
            <span className="text-sm text-muted-foreground font-medium">Share:</span>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("twitter")}
                className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
              >
                <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Twitter</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("linkedin")}
                className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("facebook")}
                className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
              >
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("copy")}
                className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
              >
                <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Copy</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none mb-8 sm:mb-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Back to Blog CTA */}
        <div className="border-t border-border pt-8">
          <Button asChild size="lg">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Read More Articles
            </Link>
          </Button>
        </div>
      </article>
    </main>
  );
}
