import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
            data-testid="button-logo"
          >
            Oladele Habeeb
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-base hover-elevate active-elevate-2 px-3 py-1.5 rounded-md"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-base hover-elevate active-elevate-2 px-3 py-1.5 rounded-md"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-base hover-elevate active-elevate-2 px-3 py-1.5 rounded-md"
              data-testid="link-work"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base hover-elevate active-elevate-2 px-3 py-1.5 rounded-md"
              data-testid="link-contact"
            >
              Contact
            </button>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden pt-20">
          <div className="flex flex-col items-center gap-6 p-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl font-semibold hover-elevate active-elevate-2 px-4 py-2 rounded-md"
              data-testid="link-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-2xl font-semibold hover-elevate active-elevate-2 px-4 py-2 rounded-md"
              data-testid="link-mobile-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-2xl font-semibold hover-elevate active-elevate-2 px-4 py-2 rounded-md"
              data-testid="link-mobile-work"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-2xl font-semibold hover-elevate active-elevate-2 px-4 py-2 rounded-md"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
