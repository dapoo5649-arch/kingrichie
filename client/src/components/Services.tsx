import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import replitDevImage from "@assets/generated_images/Replit_development_workspace_91319b8a.png";
import debuggingImage from "@assets/generated_images/Debugging_and_API_fixes_0f260ce0.png";
import automationImage from "@assets/generated_images/AI_automation_systems_1c38de5a.png";
import saasImage from "@assets/generated_images/SaaS_MVP_launch_86bed181.png";
import optimizationImage from "@assets/generated_images/Code_optimization_process_6584c9b3.png";
import integrationImage from "@assets/generated_images/Database_integration_systems_c9627624.png";

const services = [
  {
    id: 1,
    image: replitDevImage,
    title: "Replit Website & App Development",
    description: "Transform your ideas into fully functional, responsive web applications using the power of Replit's modern development ecosystem.",
    details: [
      "Full-stack web application development",
      "Responsive design for all devices",
      "React, Node.js, and modern frameworks",
      "Fast deployment and scalability",
    ],
    tech: ["React", "Node.js", "Vite", "Tailwind CSS"],
  },
  {
    id: 2,
    image: debuggingImage,
    title: "Debugging & API Fixes",
    description: "Expert troubleshooting and resolution of complex code issues, API errors, and backend logic problems to ensure your application runs smoothly.",
    details: [
      "API integration and error resolution",
      "Performance bottleneck identification",
      "Backend logic optimization",
      "Code review and quality assurance",
    ],
    tech: ["REST APIs", "GraphQL", "PostgreSQL", "Express"],
  },
  {
    id: 3,
    image: automationImage,
    title: "Automation & AI Integration",
    description: "Build intelligent automation systems and integrate cutting-edge AI capabilities to streamline workflows and enhance user experiences.",
    details: [
      "OpenAI and Claude API integration",
      "Workflow automation systems",
      "Intelligent chatbots and assistants",
      "Data processing automation",
    ],
    tech: ["OpenAI", "Claude", "LangChain", "Python"],
  },
  {
    id: 4,
    image: saasImage,
    title: "SaaS MVP & Startup App Launch",
    description: "Launch your startup vision with a fully functional MVP built efficiently on Replit, enabling rapid iteration and market validation.",
    details: [
      "Rapid MVP development (2-4 weeks)",
      "User authentication and authorization",
      "Payment integration (Stripe, PayPal)",
      "Scalable architecture from day one",
    ],
    tech: ["Replit Auth", "Stripe", "Supabase", "Docker"],
  },
  {
    id: 5,
    image: optimizationImage,
    title: "Vibe Code Cleanup & Optimization",
    description: "Refactor and optimize your codebase with Vibe Coding principles, transforming messy code into clean, maintainable, and performant projects.",
    details: [
      "Code refactoring and restructuring",
      "Performance optimization",
      "Best practices implementation",
      "Documentation improvement",
    ],
    tech: ["TypeScript", "ESLint", "Prettier", "Testing"],
  },
  {
    id: 6,
    image: integrationImage,
    title: "Supabase & Bolt Integration",
    description: "Leverage powerful backend services with seamless Supabase and Bolt integrations for modern, data-driven applications with real-time capabilities.",
    details: [
      "Real-time database setup",
      "Authentication and row-level security",
      "Storage and file management",
      "Edge functions deployment",
    ],
    tech: ["Supabase", "PostgreSQL", "Bolt", "Next.js"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1" data-testid="badge-services">
            Professional Services
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight" data-testid="text-services-heading">
            What I Offer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive development services powered by Vibe Coding principles and modern tech stacks.
            From concept to deployment, I bring your vision to life with precision and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer group"
              data-testid={`card-service-${service.id}`}
            >
              <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid={`img-service-${service.id}`}
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors" data-testid={`text-service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid={`text-service-description-${service.id}`}>
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2" data-testid={`detail-service-${service.id}-${index}`}>
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-foreground/80">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                  {service.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs font-mono bg-primary/5 text-primary border border-primary/20"
                      data-testid={`badge-tech-${service.id}-${index}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-base text-foreground/90 mb-3 font-medium">
              Ready to bring your project to life?
            </p>
            <p className="text-sm text-muted-foreground">
              Let's discuss how I can help you achieve your development goals with professional Vibe Coding expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
