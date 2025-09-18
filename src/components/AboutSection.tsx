import { Heart, Star, Shield, Sparkles } from "lucide-react";
const AboutSection = () => {
  const valores = [{
    icon: Heart,
    title: "Paixão",
    description: "Cada cabeceira é criada com amor e dedicação, refletindo nosso cuidado em cada detalhe."
  }, {
    icon: Star,
    title: "Qualidade",
    description: "Utilizamos materiais de alta durabilidade e técnicas refinadas para garantir excelência."
  }, {
    icon: Shield,
    title: "Confiança",
    description: "Nossa reputação foi construída com base na confiança e satisfação de nossos clientes."
  }, {
    icon: Sparkles,
    title: "Inovação",
    description: "Sempre buscamos novas formas de transformar ambientes e superar expectativas."
  }];
  return <section id="sobre" className="section-padding bg-gradient-to-b from-background to-rosa-bebe/20">
      <div className="container mx-auto max-w-6xl">
        {/* Título da seção */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Sobre nós
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça a história por trás da Cabeceira Modulares e nossos valores fundamentais
          </p>
        </div>

        {/* História da empresa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20 px-4">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
              Nossa história
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Somos mulheres que ousaram a acreditar. Acreditamos que cada detalhe pode transformar não só um ambiente, mas também a forma como nos sentimos dentro dele.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Para nós, não é apenas sobre beleza, é sobre poder, acolhimento e pertencimento. Nosso trabalho nasceu da coragem de arriscar, de transformar desafios em oportunidades e de criar lares mais vivos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada cabeceira carrega um pedaço da nossa história — feita de dedicação, fé e determinação. Mais do que móveis, entregamos significado: um espaço que inspira, acolhe e representa quem você é.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-rosa-accent to-rosa-hover rounded-2xl p-8 text-center shadow-[var(--shadow-elegant)]">
              <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
              <blockquote className="text-xl font-medium text-primary italic">
                "Para quem entende que o essencial também é belo."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary mb-8 sm:mb-12 px-4">
            Nossos valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
            {valores.map((valor, index) => <div key={index} className="card-elegant text-center group">
                <valor.icon className="h-12 w-12 text-rosa-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-semibold text-primary mb-3">
                  {valor.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {valor.description}
                </p>
              </div>)}
          </div>
        </div>

        {/* Diferencial */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-rosa-accent rounded-2xl p-8 sm:p-12 text-white shadow-[var(--shadow-elegant)]">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              O que nos torna especiais
            </h3>
            <p className="text-lg sm:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">Combinamos a experiência de mulheres empreendedoras com técnicas artesanais refinadas, criando cabeceiras estofadas de alta durabilidade que transformam completamente a sua casa.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;