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
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-heading">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer" onClick={handlePhone} data-testid="card-contact-phone">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground" data-testid="text-phone">
                  07051292695
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer" onClick={handleEmail} data-testid="card-contact-email">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground break-all" data-testid="text-email">
                  oladeleh140@gmail.com
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer" onClick={handleWhatsApp} data-testid="card-contact-whatsapp">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">
                  Chat on WhatsApp
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={handleEmail}
            className="rounded-full px-10"
            data-testid="button-get-in-touch"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
