import { skills, skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/card";

function StarRating({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`w-3 h-3 rounded-full ${
            star <= level 
              ? "bg-gradient-primary" 
              : "bg-muted-foreground/20"
          }`}
        />
      ))}
    </div>
  );
}

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies 
            developed through years of hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <Card
              key={category}
              className="p-6 bg-gradient-card border-0 shadow-custom-md hover-lift animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillCategories[category as keyof typeof skillCategories]}
              </h3>
              
              <div className="space-y-4">
                {categorySkills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex justify-between items-center animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <StarRating level={skill.level} />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}