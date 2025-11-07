import profileImage from "@assets/Generated Image October 06, 2025 - 7_25PM_1762534199020.png";

import { Badge } from "@/components/ui/badge";
import { Code2, Zap, Award, Users } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: Code2, label: "Clean Code", value: "100%" },
    { icon: Zap, label: "Fast Delivery", value: "On Time" },
    { icon: Award, label: "Quality", value: "Premium" },
    { icon: Users, label: "Clients", value: "50+" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1" data-testid="badge-about">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight" data-testid="text-about-heading">
            Vibe Coding Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start mb-16">
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
              <img
                src={profileImage}
                alt="Oladele Habeeb"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-primary shadow-2xl shadow-primary/30 ring-4 ring-primary/10 group-hover:scale-105 transition-transform duration-300"
                data-testid="img-profile"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-5 text-base md:text-lg leading-relaxed">
              <p className="text-foreground/90" data-testid="text-about-bio-1">
                Hi, I'm <strong className="text-primary font-bold">Oladele Habeeb</strong> — a professional Replit Expert, Vibe Coder, and Web/App Builder. 
                I specialize in designing and developing creative, high-performing web apps and automation systems using 
                <strong className="text-primary"> Replit, Bolt, and Supabase</strong>.
              </p>
              <p className="text-muted-foreground" data-testid="text-about-bio-2">
                My development style — which I call <em className="text-primary font-semibold not-italic">Vibe Coding</em> — focuses on creating smooth, clean, and user-friendly code experiences that bring ideas to life with precision and style. It's about writing code that not only works flawlessly but feels right.
              </p>
              <p className="text-muted-foreground" data-testid="text-about-bio-3">
                From debugging complex APIs to building full SaaS MVPs, I help individuals, startups, and brands turn their visions into reality. 
                Whether it's a Replit automation, custom website, or AI-integrated app, I build, fix, and optimize projects with professional quality and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-card border border-border hover-elevate active-elevate-2 transition-all"
                    data-testid={`highlight-${index}`}
                  >
                    <Icon className="h-5 w-5 text-primary mb-2" />
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-foreground">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
