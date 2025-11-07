import profileImage from "@assets/Generated Image October 06, 2025 - 7_25PM_1762534199020.png";
import { Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src={profileImage}
                alt="Oladele Habeeb"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-border shadow-xl"
                data-testid="img-profile"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-heading">
                About Me
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                <p data-testid="text-about-bio-1">
                  Hi, I'm Oladele Habeeb — a Replit Expert Developer passionate about vibe coding, 
                  AI automation, and building seamless web and app experiences using Replit, Supabase, and Bolt.
                </p>
                <p data-testid="text-about-bio-2">
                  I focus on crafting intuitive, modern, and high-performing web apps that merge 
                  creativity with technical precision. My expertise spans across full-stack development, 
                  AI integration, and creating developer-friendly solutions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:oladeleh140@gmail.com"
                className="text-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                data-testid="link-email"
              >
                oladeleh140@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
