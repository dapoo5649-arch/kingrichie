import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import webAppImage from "@assets/generated_images/Web_App_Dashboard_Interface_568d4cc4.png";
import aiAutomationImage from "@assets/generated_images/AI_Automation_Workflow_Dashboard_430a3862.png";
import replitWorkspaceImage from "@assets/generated_images/Replit_Development_Workspace_ddb70ed5.png";
import mobileAppImage from "@assets/generated_images/Mobile_App_Device_Mockup_b37518e7.png";
import apiIntegrationImage from "@assets/generated_images/API_Integration_Architecture_f044fb23.png";
import fullStackImage from "@assets/generated_images/Full-Stack_Architecture_Diagram_f9d69284.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Full-featured admin dashboard with real-time analytics, inventory management, and order tracking.",
    image: webAppImage,
    tags: ["Web App", "React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "AI Workflow Automation",
    description: "Intelligent automation platform that streamlines business processes using AI-powered workflows.",
    image: aiAutomationImage,
    tags: ["AI Automation", "Node.js", "OpenAI", "API"],
  },
  {
    id: 3,
    title: "Replit Development Suite",
    description: "Custom development environment and tools built on Replit for enhanced productivity.",
    image: replitWorkspaceImage,
    tags: ["Replit", "Developer Tools", "TypeScript"],
  },
  {
    id: 4,
    title: "Mobile Task Manager",
    description: "Cross-platform mobile application for personal and team task management with offline support.",
    image: mobileAppImage,
    tags: ["Mobile App", "React Native", "Firebase"],
  },
  {
    id: 5,
    title: "Payment Gateway Integration",
    description: "Secure payment processing system integrating multiple payment providers and fraud detection.",
    image: apiIntegrationImage,
    tags: ["API Integration", "Stripe", "Security"],
  },
  {
    id: 6,
    title: "Full-Stack SaaS Platform",
    description: "Complete SaaS solution with authentication, subscription management, and microservices architecture.",
    image: fullStackImage,
    tags: ["Full-Stack", "PostgreSQL", "Docker", "AWS"],
  },
];

export default function Work() {
  const handleDownloadPDF = () => {
    console.log("Download Portfolio PDF triggered");
  };

  return (
    <section id="work" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-work-heading">
            Featured Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent projects demonstrating expertise across web development, AI automation, and modern tech stacks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-base text-muted-foreground line-clamp-2" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="font-mono text-xs"
                      data-testid={`badge-tag-${project.id}-${index}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleDownloadPDF}
            className="rounded-full px-8 gap-2"
            data-testid="button-download-pdf"
          >
            <Download className="h-5 w-5" />
            Download Portfolio PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
