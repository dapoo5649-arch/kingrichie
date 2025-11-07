import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary" data-testid="text-hero-name">
          Oladele Habeeb
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="text-hero-title">
          Replit Expert • Vibe Coder • Web & App Builder
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-4" data-testid="text-hero-tagline">
          Building smart, lovable, and efficient Replit web apps with Vibe Coding precision.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="rounded-full px-8"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            data-testid="button-contact-me"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
