import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";
import heroBackground from "@/assets/hero-background.jpg";

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
      {/* Background com imagem */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      {/* Overlay escuro para legibilidade do texto */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 opacity-20">
        <Heart className="h-16 w-16 text-rosa-accent" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Heart className="h-12 w-12 text-rosa-accent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* H1 da empresa */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-4">
            <span className="text-white drop-shadow-lg">Cabeceira Modulares</span>
          </h1>
          
          {/* H2 descritivo */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light leading-relaxed max-w-4xl mx-auto px-4 drop-shadow-md">
            Somos mulheres que ousaram acreditar. Transformamos ambientes com cabeceiras que carregam nossa história de dedicação, fé e determinação.
          </h2>
          
          {/* Slogan */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto px-4 drop-shadow-md">
            Referência em cabeceiras personalizadas. Estilo, conforto e qualidade em um único lugar.
          </p>
          
          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.open("https://wa.me/5521997819360", "_blank")}
              className="btn-hero flex items-center gap-2"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-base">Solicitar orçamento</span>
            </Button>
            <Button 
              onClick={() => scrollToSection("servicos")}
              variant="outline" 
              className="bg-white/90 text-primary border-2 border-white hover:bg-white hover:text-primary px-3 py-2 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-base min-h-[2.5rem] flex items-center justify-center"
            >
              <span className="text-xs sm:text-base font-medium">Nossos serviços</span>
            </Button>
          </div>
          
          {/* Informações de contato */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Telefone</h3>
              <p className="text-white/80 text-sm sm:text-base">(21) 99781-9360</p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Horário</h3>
              <p className="text-white/80 text-xs sm:text-sm">Seg-Sex: 9h às 18h<br/>Sáb-Dom: 10h às 16h</p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Instagram</h3>
              <a 
                href="https://www.instagram.com/cabeceiramodulares/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base"
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