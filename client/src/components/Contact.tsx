import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/qr/J67XGKAXNJ7BA1", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:oladeleh140@gmail.com";
  };

  const handlePhone = () => {
    window.location.href = "tel:07051292695";
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1" data-testid="badge-contact">
            Let's Talk
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight" data-testid="text-contact-heading">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's collaborate and bring your vision to life with professional Vibe Coding.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-xl shadow-primary/10">
            <div className="text-center space-y-8">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="rounded-full px-12 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                data-testid="button-whatsapp"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Chat on WhatsApp
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-4 text-muted-foreground">
                    Or reach out via
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:oladeleh140@gmail.com"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover-elevate active-elevate-2 transition-all group"
                  data-testid="link-email"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      oladeleh140@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:07051292695"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover-elevate active-elevate-2 transition-all group"
                  data-testid="link-phone"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      07051292695
                    </div>
                  </div>
                </a>
              </div>

              <p className="text-sm text-muted-foreground pt-4">
                Available for freelance projects • Quick response time • Professional service guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
