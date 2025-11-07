import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
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
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight" data-testid="text-hero-name">
          Oladele Habeeb
        </h1>
        <p className="text-2xl md:text-3xl text-foreground/80 font-medium" data-testid="text-hero-title">
          Replit Expert • AI Automation • Vibe Coding Developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-4" data-testid="text-hero-tagline">
          Crafting intuitive, modern, and high-performing web applications that merge creativity with technical precision
        </p>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hover-elevate active-elevate-2 p-2 rounded-full animate-bounce"
        data-testid="button-scroll-down"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </section>
  );
}
