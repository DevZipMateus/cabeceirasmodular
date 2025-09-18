import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const GallerySection = () => {
  const projetos = [
    {
      id: 1,
      image: gallery1
    },
    {
      id: 2,
      image: gallery2
    },
    {
      id: 3,
      image: gallery3
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-rosa-bebe/10">
      <div className="container mx-auto max-w-6xl">
        {/* Título da seção */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Alguns de nossos serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos realizados pela Cabeceira Modulares e inspire-se para seu próximo projeto
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="group">
              <div className="card-elegant overflow-hidden">
                {/* Imagem */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={projeto.image} 
                    alt={`Projeto ${projeto.id}`}
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Botão */}
                <div className="p-4">
                  <Button
                    onClick={() => window.open("https://wa.me/552199781936", "_blank")}
                    className="w-full btn-rosa flex items-center gap-2 justify-center"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
                    <span className="text-sm">Solicitar similar</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center px-4">
          <div className="bg-gradient-to-r from-rosa-bebe/50 to-rosa-accent/30 rounded-2xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4">
              Gostou dos nossos trabalhos?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Cada projeto é único e personalizado para atender suas necessidades específicas. 
              Entre em contato e vamos criar algo especial para você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => window.open("https://wa.me/552199781936", "_blank")}
                className="btn-rosa flex items-center gap-2"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-base">Ver mais projetos</span>
              </Button>
              <Button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="bg-white text-primary border-2 border-white hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span className="text-sm sm:text-base font-medium">Falar com especialista</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;