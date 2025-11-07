import { Card } from "@/components/ui/card";
import { Code2, Bug, Zap, Rocket, Sparkles, Database } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Replit Website & App Development",
    description: "I build responsive and efficient Replit-based websites and web apps using HTML, CSS, JS, React, and Bolt.",
  },
  {
    id: 2,
    icon: Bug,
    title: "Debugging & API Fixes",
    description: "I diagnose and fix API errors, code bugs, and backend logic issues to ensure smooth performance.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Automation & AI Integration",
    description: "I create intelligent automation systems and AI-powered tools for smarter workflows.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "SaaS MVP & Startup App Launch",
    description: "I help startups build scalable MVPs and functional prototypes using Replit's ecosystem.",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Vibe Code Cleanup & Optimization",
    description: "I refactor messy code into readable, optimized, and performant projects that shine.",
  },
  {
    id: 6,
    icon: Database,
    title: "Supabase & Bolt Integration",
    description: "I integrate Supabase and Bolt tools to build modern, data-driven web applications.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" data-testid="text-services-heading">
            My Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional development services tailored for modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group"
                data-testid={`card-service-${service.id}`}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary" data-testid={`text-service-title-${service.id}`}>
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-service-description-${service.id}`}>
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
