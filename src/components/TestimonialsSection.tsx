import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { MessageSquare, Star } from "lucide-react";

// Import testimonial images
import testimonial1 from "@/assets/testimonials/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonials/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonials/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonials/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonials/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonials/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonials/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonials/testimonial-8.jpg";
import testimonial9 from "@/assets/testimonials/testimonial-9.jpg";
import testimonial10 from "@/assets/testimonials/testimonial-10.jpg";

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: testimonial1,
      title: "Cliente satisfeita",
      description: "Deu tudo certo com a cabeceira. Obrigada pelo atendimento!"
    },
    {
      id: 2,
      image: testimonial2,
      title: "Resultado perfeito",
      description: "Amores deu certo a cabeceira instalei ontem e ficou maravilhoso no meu quarto"
    },
    {
      id: 3,
      image: testimonial3,
      title: "Encaixe perfeito",
      description: "Encaixou exatamente na cama. Linda demais"
    },
    {
      id: 4,
      image: testimonial4,
      title: "Muito satisfeita",
      description: "Fico muito feliz. Muito obrigada. Aguardo fotos da transformação"
    },
    {
      id: 5,
      image: testimonial5,
      title: "Sonho realizado",
      description: "Passando pra agradecer a cabeceira. O tamanho veio exato como pedi. Amei demais"
    },
    {
      id: 6,
      image: testimonial6,
      title: "Excelente atendimento",
      description: "Aí tô tão feliz, realizando um sonho, muito obrigada pelo excelente atendimento"
    },
    {
      id: 7,
      image: testimonial7,
      title: "Atendimento mil",
      description: "Passando para agradecer pelo atendimento que foi mil como sempre"
    },
    {
      id: 8,
      image: testimonial8,
      title: "Cliente feliz",
      description: "Te aperreei tanto que senti necessidade de avisar. Que ótimo. Fico feliz"
    },
    {
      id: 9,
      image: testimonial9,
      title: "Qualidade superior",
      description: "Minha luz do meio queimou rsrs agora só me falta decidir o que colocar dos lados"
    },
    {
      id: 10,
      image: testimonial10,
      title: "Serviço de qualidade",
      description: "Muito obrigado pelo serviços de ótima qualidade prestados desde do atendimento até a entregue"
    }
  ];

  useEffect(() => {
    if (!api) return;

    // Auto-play carousel every 3 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Update current slide
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section className="section-padding bg-gradient-to-b from-rosa-bebe/10 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Título da seção */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Depoimentos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Veja o que nossos clientes falam sobre nossos serviços e qualidade
          </p>
          
          {/* Estatísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-2xl font-bold text-primary">5.0</p>
              <p className="text-sm text-muted-foreground">Avaliação média</p>
            </div>
            <div className="text-center">
              <MessageSquare className="h-8 w-8 text-rosa-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="h-8 w-8 bg-rosa-accent rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">✓</span>
              </div>
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Satisfação garantida</p>
            </div>
          </div>
        </div>

        {/* Carousel de Depoimentos */}
        <div className="px-4">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer group hover:shadow-lg transition-all duration-300 card-elegant">
                          <CardContent className="p-0 relative overflow-hidden">
                            {/* Image */}
                            <div className="relative">
                              <img
                                src={testimonial.image}
                                alt={testimonial.title}
                                className="w-full h-80 sm:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                              
                              {/* Content overlay */}
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h3 className="font-semibold text-sm mb-1">{testimonial.title}</h3>
                                <p className="text-xs opacity-90 line-clamp-2">{testimonial.description}</p>
                              </div>
                            </div>

                            {/* WhatsApp icon overlay */}
                            <div className="absolute top-4 right-4 bg-green-500 p-2 rounded-full">
                              <MessageSquare className="h-4 w-4 text-white" />
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      
                      {/* Expanded view */}
                      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.title}
                            className="w-full max-h-[80vh] object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-rosa-accent w-6" : "bg-rosa-accent/30"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 px-4">
          <div className="bg-gradient-to-r from-rosa-bebe/50 to-rosa-accent/30 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
              Faça parte dessa história de sucesso!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se aos nossos clientes satisfeitos e transforme seu quarto com uma cabeceira única e personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open("https://wa.me/5521976491415", "_blank")}
                className="btn-rosa text-lg px-8 py-4 flex items-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Solicitar orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;