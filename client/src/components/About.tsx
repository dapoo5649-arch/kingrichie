import profileImage from "@assets/Generated Image October 06, 2025 - 7_25PM_1762534199020.png";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" data-testid="text-about-heading">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src={profileImage}
                alt="Oladele Habeeb"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-xl shadow-primary/20"
                data-testid="img-profile"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p data-testid="text-about-bio-1">
                Hi, I'm <strong className="text-foreground">Oladele Habeeb</strong> — a professional Replit Expert, Vibe Coder, and Web/App Builder. 
                I specialize in designing and developing creative, high-performing web apps and automation systems using 
                <strong className="text-foreground"> Replit, Bolt, and Supabase</strong>. My development style — which I call 
                <em className="text-foreground"> Vibe Coding</em> — focuses on creating smooth, clean, and user-friendly code experiences that bring ideas to life with precision and style.
              </p>
              <p data-testid="text-about-bio-2">
                From debugging complex APIs to building full SaaS MVPs, I help individuals, startups, and brands turn their visions into reality. 
                Whether it's a Replit automation, custom website, or AI-integrated app, I build, fix, and optimize projects with professional quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
