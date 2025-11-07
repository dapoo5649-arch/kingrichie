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
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-block">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for Projects</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary animate-fade-in" data-testid="text-hero-name">
          Oladele Habeeb
        </h1>
        
        <p className="text-xl md:text-3xl text-foreground/90 font-semibold tracking-tight" data-testid="text-hero-title">
          Replit Expert • Vibe Coder • Web & App Builder
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-2" data-testid="text-hero-tagline">
          Building smart, lovable, and efficient Replit web apps with <span className="text-primary font-semibold">Vibe Coding</span> precision.
          Transforming ideas into production-ready applications with modern tech stacks and best practices.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="rounded-full px-10 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="rounded-full px-10 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            data-testid="button-contact-me"
          >
            Contact Me
          </Button>
        </div>

        <div className="pt-12 flex flex-wrap gap-8 justify-center items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-primary rounded-full" />
            <span>5+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-primary rounded-full" />
            <span>50+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-primary rounded-full" />
            <span>100% Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
