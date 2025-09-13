import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Card } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@yourname.com",
    href: "mailto:hello@yourname.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="p-6 hover-lift bg-gradient-card border-0 shadow-custom-md animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{info.title}</h3>
                    {info.href === "#" ? (
                      <p className="text-muted-foreground">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        className="text-primary hover:text-primary-light transition-fast"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}