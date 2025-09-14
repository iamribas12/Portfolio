import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="relative mb-8">
          <img
            src={profilePhoto}
            alt="Professional headshot"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-8 shadow-custom-lg hover-lift border-4 border-primary/10"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 blur-2xl"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
          Full Stack Developer
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I create beautiful, responsive web applications with modern technologies. 
          Passionate about clean code, user experience, and innovative solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-custom-md hover:shadow-custom-lg transition-all group">
            <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
          
          <Button asChild variant="outline" size="lg" className="hover-lift">
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
}