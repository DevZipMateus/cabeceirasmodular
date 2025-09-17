import { Heart, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Cabeceira Modulares" 
                className="h-12 w-auto brightness-0 invert"
              />
              <h3 className="text-xl font-bold">Cabeceira Modulares</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Referência em cabeceiras personalizadas. Estilo, conforto e qualidade em um único lugar.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Feito com amor por mulheres empreendedoras</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5521976491415" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>(21) 97649-1415</span>
              </a>
              <a 
                href="mailto:cabeceiradelas@gmail.com"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>cabeceiradelas@gmail.com</span>
              </a>
              <a 
                href="https://www.instagram.com/cabeceiramodulares/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" />
                <span>@cabeceiramodulares</span>
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-white/60 text-sm">
                Horário de funcionamento:
              </p>
              <p className="text-white/80 text-sm">
                Seg-Sex: 9h às 18h<br/>
                Sáb-Dom: 10h às 16h
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Cabeceira Modulares Ltda. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-white/60 text-center">
              <span>CNPJ: 62.277.125/0001-10</span>
              <span className="hidden sm:block">•</span>
              <span>RUA GENEÚNA 169</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;