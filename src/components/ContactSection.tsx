import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const ContactSection = () => {
  const contatos = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(21) 99781-9360",
      action: () => window.open("https://wa.me/552199781936", "_blank"),
      actionText: "Chamar no WhatsApp",
      showWhatsAppIcon: true
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "cabeceiradelas@gmail.com",
      action: () => window.open("mailto:cabeceiradelas@gmail.com", "_blank"),
      actionText: "Enviar e-mail",
      showWhatsAppIcon: false
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@cabeceiramodulares",
      action: () => window.open("https://www.instagram.com/cabeceiramodulares/", "_blank"),
      actionText: "Seguir no Instagram",
      showWhatsAppIcon: false
    }
  ];

  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-background to-rosa-bebe/30">
      <div className="container mx-auto max-w-6xl">
        {/* Título da seção */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Entre em contato
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontas para transformar seu quarto com cabeceiras únicas e personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start px-4">
          {/* Informações de contato */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8">
              Fale conosco
            </h3>
            
            <div className="space-y-6 mb-8">
              {contatos.map((contato, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-rosa-accent/20 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 bg-rosa-accent rounded-lg flex items-center justify-center">
                      <contato.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2 text-center">
                        {contato.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 text-center">
                        {contato.info}
                      </p>
                      <Button
                        onClick={contato.action}
                        variant="outline"
                        size="sm"
                        className="border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 font-medium mx-auto"
                      >
                        {contato.showWhatsAppIcon && (
                          <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
                        )}
                        {contato.actionText}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Horário de funcionamento */}
            <Card className="p-6 bg-gradient-to-r from-rosa-bebe/50 to-rosa-accent/30 border-rosa-accent/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Horário de funcionamento
                  </h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda a sexta: 9h às 18h</p>
                    <p>Sábado e domingo: 10h às 16h</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Endereço */}
            <Card className="p-6 mt-6 border-rosa-accent/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rosa-accent rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Localização
                  </h4>
                  <p className="text-muted-foreground">
                    RUA GENEÚNA 169
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    CNPJ: 62.277.125/0001-10
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="lg:pl-8 mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-primary to-rosa-accent rounded-2xl p-6 sm:p-8 text-white text-center shadow-[var(--shadow-elegant)]">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Pronta para transformar seu quarto?
              </h3>
              <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8 leading-relaxed">
                Entre em contato conosco e descubra como uma cabeceira personalizada pode fazer toda a diferença no seu ambiente.
              </p>
              
              <div className="space-y-4">
                <Button
                  onClick={() => window.open("https://wa.me/552199781936", "_blank")}
                  className="btn-rosa w-full sm:w-auto flex items-center gap-2 justify-center"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Chamar no WhatsApp</span>
                </Button>
                
                <p className="text-sm opacity-75">
                  Resposta rápida e orçamento gratuito!
                </p>
              </div>
            </div>

            {/* Informações adicionais */}
            <div className="mt-8 space-y-4">
              <div className="text-center p-6 bg-white/50 rounded-xl border border-rosa-accent/20">
                <h4 className="font-semibold text-primary mb-2">
                  🎯 Orçamento personalizado
                </h4>
                <p className="text-muted-foreground text-sm">
                  Cada projeto é único. Solicite seu orçamento sem compromisso.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/50 rounded-xl border border-rosa-accent/20">
                <h4 className="font-semibold text-primary mb-2">
                  ⭐ Atendimento especializado
                </h4>
                <p className="text-muted-foreground text-sm">
                  Nossa equipe está pronta para tirar todas suas dúvidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;