import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

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
    <section id="contact" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" data-testid="text-contact-heading">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Let's collaborate or discuss your next Replit project.
          </p>
        </div>

        <div className="mt-12 text-center space-y-8">
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="rounded-full px-10"
            data-testid="button-whatsapp"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Chat on WhatsApp
          </Button>
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-base">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:oladeleh140@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md"
                data-testid="link-email"
              >
                oladeleh140@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-base">
              <Phone className="h-5 w-5 text-primary" />
              <a
                href="tel:07051292695"
                className="text-muted-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md"
                data-testid="link-phone"
              >
                07051292695
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
