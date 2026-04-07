import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, } from "react-router-dom";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Sobre", href: "/about" },
  { label: "Galeria", href: "/gallery" },
  { label: "Depoimentos", href: "/testimonials" },
  { label: "Contato", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-gold" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-2xl font-bold text-primary tracking-wide">
          Maison<span className="text-foreground">HD</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-sans-body font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">

          <Link
            to="/reserve"
            className="bg-primary hover:bg-gradient-gold-hover text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:bg-popover hover:text-white hover:border border-white hover:transition transform hover:scale-105"
          >
            Reserve uma mesa
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/reserve"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold text-center shadow-gold"
            >
              Reserve uma mesa
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;