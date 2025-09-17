import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Cabeceira Modulares" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h2 className={`text-xl font-bold transition-colors duration-200 ${
                isScrolled ? "text-white" : "text-primary"
              }`}>Cabeceira Modulares</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? "text-white hover:text-rosa-accent" : "text-foreground hover:text-primary"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? "text-white hover:text-rosa-accent" : "text-foreground hover:text-primary"
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? "text-white hover:text-rosa-accent" : "text-foreground hover:text-primary"
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? "text-white hover:text-rosa-accent" : "text-foreground hover:text-primary"
              }`}
            >
              Contato
            </button>
            <Button 
              onClick={() => window.open("https://wa.me/5521976491415", "_blank")}
              className="btn-rosa flex items-center gap-2"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${
              isScrolled ? "text-white hover:text-rosa-accent" : "text-foreground hover:text-primary"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black backdrop-blur-md border-b shadow-lg">
            <nav className="flex flex-col space-y-4 px-6 py-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-white hover:text-rosa-accent font-medium transition-colors duration-200"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-white hover:text-rosa-accent font-medium transition-colors duration-200"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-white hover:text-rosa-accent font-medium transition-colors duration-200"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-white hover:text-rosa-accent font-medium transition-colors duration-200"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open("https://wa.me/5521976491415", "_blank")}
                className="btn-rosa w-fit flex items-center gap-2"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
                Fale conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;