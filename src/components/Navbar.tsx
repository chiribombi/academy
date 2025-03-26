import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 py-4 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center relative z-50">
          <img src="/logo.png" alt="RoboTech Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#courses"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Cursos
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Acerca de
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Contacto
          </a>
          <a
            href="#form"
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            Solicitar información
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur-sm h-screen transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col space-y-6 pt-24 px-6 max-w-7xl mx-auto">
          <a
            href="#courses"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cursos
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Acerca de
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contacto
          </a>
          <a
            href="#form"
            className="w-full py-3 text-center text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar información
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
