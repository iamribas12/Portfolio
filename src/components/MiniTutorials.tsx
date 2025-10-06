import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getPublishedTutorials } from "@/data/tutorials";

export function MiniTutorials() {
  const tutorials = getPublishedTutorials().slice(0, 3);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "Advanced":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      default:
        return "bg-primary/10 text-primary hover:bg-primary/20";
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Latest Tutorials
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Step-by-step video courses to level up your development skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="group hover-lift cursor-pointer transition-all duration-300 hover:shadow-custom-lg overflow-hidden h-full">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                  <Badge className={getDifficultyColor(tutorial.difficulty)}>
                    {tutorial.difficulty}
                  </Badge>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <Badge variant="secondary" className="text-xs mb-2">
                    {tutorial.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="group-hover:text-primary transition-colors text-base sm:text-lg line-clamp-2">
                  {tutorial.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-sm">
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{tutorial.lessons} lessons</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {tutorial.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button asChild size="lg" className="group">
            <Link to="/tutorials">
              View All Tutorials
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}