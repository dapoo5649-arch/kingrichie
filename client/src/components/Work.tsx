import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import roofehero1 from "@assets/imgi_8_4b9b23d0-c5be-4c03-822d-bbcd45a1430d_1762534973915.jpeg";
import roofehero2 from "@assets/imgi_14_19f2242f-52db-4359-98d5-ea8ebe529c70_1762534973921.jpeg";
import roofehero3 from "@assets/imgi_15_33a2829c-5b0e-4e55-b733-501883178f08_1762534973922.jpeg";
import fitToBee1 from "@assets/imgi_15_faa9ad94-314f-4a4c-9a64-4006741e4d6d_1762534973923.jpeg";
import fitToBee2 from "@assets/imgi_16_1b9c6721-29c1-4c9c-878e-9a2c66a652c4_1762534973923.jpeg";
import fitToBee3 from "@assets/imgi_22_c7cae878-8183-4a9e-b53a-8a09ea7e105a_1762534973928.jpeg";

const projects = [
  {
    id: 1,
    title: "Roofehero Website",
    description: "Digital platform for roofing project management connecting contractors, teams, and clients with seamless tracking and collaboration.",
    image: roofehero1,
    tags: ["Web App", "UI/UX", "Project Management"],
  },
  {
    id: 2,
    title: "Roofehero Service Platform",
    description: "Local availability and service promise platform with instant estimates and emergency leak repair scheduling.",
    image: roofehero2,
    tags: ["Web Development", "Service Platform", "UX"],
  },
  {
    id: 3,
    title: "Roofehero Mobile Experience",
    description: "Mobile-responsive platform for getting multiple quotes from Sydney's best roofers with AI-powered accuracy.",
    image: roofehero3,
    tags: ["Mobile App", "Responsive Design", "AI Integration"],
  },
  {
    id: 4,
    title: "Fit to Bee - Fitness App",
    description: "Feature-rich fitness and wellness mobile app with personalized training sessions, activity tracking, and motivation challenges.",
    image: fitToBee1,
    tags: ["Mobile App", "Fitness", "UI/UX Design"],
  },
  {
    id: 5,
    title: "Fit to Bee - User Journey",
    description: "Smooth and immersive user experience for fitness enthusiasts with dark-themed interface and intuitive navigation.",
    image: fitToBee2,
    tags: ["UX Design", "Mobile Interface", "Dark Theme"],
  },
  {
    id: 6,
    title: "Fit to Bee - Branding & Identity",
    description: "Complete branding solution with visual identity, app structure, and design process focused on user delight.",
    image: fitToBee3,
    tags: ["Branding", "Visual Identity", "App Design"],
  },
];

export default function Work() {
  const handleDownloadPDF = () => {
    console.log("Download Portfolio PDF triggered");
  };

  return (
    <section id="work" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" data-testid="text-work-heading">
            Projects Showcase
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent projects demonstrating expertise across web development, mobile apps, and UI/UX design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-primary" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-project-description-${project.id}`}>
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
