import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const HeroSection = () => {
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
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-rosa-bebe via-background to-cinza-claro"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 opacity-20">
        <Heart className="h-16 w-16 text-rosa-accent" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Heart className="h-12 w-12 text-rosa-accent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* H1 da empresa */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Cabeceira Modulares</span>
          </h1>
          
          {/* H2 descritivo */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light leading-relaxed max-w-4xl mx-auto">
            Somos mulheres que ousaram acreditar. Transformamos ambientes com cabeceiras que carregam nossa história de dedicação, fé e determinação.
          </h2>
          
          {/* Slogan */}
          <p className="text-lg sm:text-xl text-foreground mb-12 max-w-3xl mx-auto">
            Referência em cabeceiras personalizadas. Estilo, conforto e qualidade em um único lugar.
          </p>
          
          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.open("https://wa.me/5521976491415", "_blank")}
              className="btn-hero text-lg px-10 py-6"
            >
              Solicitar orçamento
            </Button>
            <Button 
              onClick={() => scrollToSection("servicos")}
              variant="outline"
              className="btn-outline-hero text-lg px-10 py-6"
            >
              Nossos serviços
            </Button>
          </div>
          
          {/* Informações de contato */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm">
              <h3 className="font-semibold text-primary mb-2">Telefone</h3>
              <p className="text-muted-foreground">(21) 97649-1415</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm">
              <h3 className="font-semibold text-primary mb-2">Horário</h3>
              <p className="text-muted-foreground text-sm">Seg-Sex: 9h às 18h<br/>Sáb-Dom: 10h às 16h</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-primary mb-2">Instagram</h3>
              <a 
                href="https://www.instagram.com/cabeceiramodulares/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                @cabeceiramodulares
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;