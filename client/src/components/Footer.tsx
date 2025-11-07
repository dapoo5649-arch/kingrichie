export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50" data-testid="footer">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground" data-testid="text-copyright">
          © {currentYear} Oladele Habeeb | Replit Expert & Vibe Coder
        </p>
      </div>
    </footer>
  );
}
