export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t" data-testid="footer">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground" data-testid="text-copyright">
          © {currentYear} Oladele Habeeb — Replit Expert
        </p>
      </div>
    </footer>
  );
}
