import { Button } from "@/components/ui/button";
import { Palette, Ruler, Sparkles, Shield, Clock, Heart } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const ServicesSection = () => {
  const servicos = [
    {
      icon: Palette,
      title: "Personalização completa",
      description: "Criamos cabeceiras únicas que refletem seu estilo pessoal, com ampla variedade de tecidos, cores e acabamentos.",
      features: ["Tecidos premium", "Cores exclusivas", "Acabamentos únicos"]
    },
    {
      icon: Ruler,
      title: "Medidas sob encomenda",
      description: "Cada cabeceira é desenvolvida especificamente para seu espaço, garantindo o encaixe perfeito em seu quarto.",
      features: ["Projeto personalizado", "Medidas exatas", "Instalação incluída"]
    },
    {
      icon: Shield,
      title: "Alta durabilidade",
      description: "Utilizamos materiais de primeira qualidade e técnicas especializadas para garantir longevidade e resistência.",
      features: ["Materiais premium", "Estrutura reforçada", "Garantia estendida"]
    }
  ];

  const diferenciais = [
    {
      icon: Sparkles,
      title: "Design exclusivo",
      text: "Cada peça é única e personalizada"
    },
    {
      icon: Clock,
      title: "Entrega rápida",
      text: "Prazo de produção otimizado"
    },
    {
      icon: Heart,
      title: "Feito com amor",
      text: "Cuidado artesanal em cada detalhe"
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gradient-to-b from-rosa-bebe/20 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Título da seção */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Nossos serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Especializados em cabeceiras estofadas de alta durabilidade, oferecemos soluções completas para transformar seu quarto
          </p>
        </div>

        {/* Serviços principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4">
          {servicos.map((servico, index) => (
            <div key={index} className="card-elegant group">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rosa-accent rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <servico.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {servico.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {servico.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {servico.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-rosa-accent mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Processo de trabalho */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary mb-8 sm:mb-12 px-4">
            Como trabalhamos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              { numero: "01", titulo: "Consulta inicial", descricao: "Entendemos suas necessidades e estilo" },
              { numero: "02", titulo: "Projeto personalizado", descricao: "Desenvolvemos o design exclusivo" },
              { numero: "03", titulo: "Produção artesanal", descricao: "Criamos sua cabeceira com cuidado" },
              { numero: "04", titulo: "Entrega e instalação", descricao: "Finalizamos com instalação perfeita" }
            ].map((etapa, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-rosa-accent text-white rounded-full font-bold text-lg mb-4">
                  {etapa.numero}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {etapa.titulo}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {etapa.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais */}
        <div className="bg-gradient-to-r from-primary/5 to-rosa-accent/5 rounded-2xl p-6 sm:p-8 lg:p-12 mx-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary mb-6 sm:mb-8">
            Por que escolher a Cabeceira Modulares?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="text-center">
                <diferencial.icon className="h-10 w-10 text-rosa-accent mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">
                  {diferencial.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {diferencial.text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              onClick={() => window.open("https://wa.me/5521976491415", "_blank")}
              className="btn-rosa text-lg px-8 py-4 flex items-center gap-2"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
              Solicitar orçamento gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;