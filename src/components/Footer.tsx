import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import logoNexval from "@/assets/logo-nexval.png";

const WHATSAPP_NUMBER = "5511940342141";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <img 
                src={logoNexval} 
                alt="Nexval Corretora de Seguros" 
                className="h-12 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/70 max-w-md mb-6">
              Corretora de Seguros especializada em proteção financeira, 
              planejamento de risco e blindagem patrimonial.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#quem-somos" className="text-white/70 hover:text-primary transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#seguro-vida" className="text-white/70 hover:text-primary transition-colors">
                  Seguro de Vida
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-white/70 hover:text-primary transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-white/70 hover:text-primary transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-white/70">
              <li>(11) 99999-9999</li>
              <li>contato@nexval.com.br</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} Nexval Corretora de Seguros. Todos os direitos reservados.
          </p>
          <a href="#" className="text-sm text-white/50 hover:text-primary transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da Nexval e gostaria de falar com um consultor.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;
