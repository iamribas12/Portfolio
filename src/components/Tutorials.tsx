import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Play } from "lucide-react";
import { useState } from "react";
import { getPublishedTutorials } from "@/data/tutorials";

export function Tutorials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const tutorials = getPublishedTutorials();
  
  const categories = ["All", ...Array.from(new Set(tutorials.map(t => t.category)))];
  
  const filteredTutorials = selectedCategory === "All" 
    ? tutorials 
    : tutorials.filter(t => t.category === selectedCategory);

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
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Video Tutorials & Courses
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Comprehensive video courses to help you master modern web development
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs sm:text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredTutorials.map((tutorial) => (
            <Card key={tutorial.id} className="group hover-lift cursor-pointer transition-all duration-300 hover:shadow-custom-lg overflow-hidden h-full">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/90 flex items-center justify-center shadow-custom-lg">
                    <Play className="h-5 w-5 sm:h-7 sm:w-7 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                  <Badge className={getDifficultyColor(tutorial.difficulty)}>
                    {tutorial.difficulty}
                  </Badge>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <Badge variant="secondary" className="text-xs">
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
                  {tutorial.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl sm:text-6xl mb-4">📚</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">No tutorials found</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}