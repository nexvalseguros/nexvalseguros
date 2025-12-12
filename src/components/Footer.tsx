import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999"; // Replace with actual number

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-4">
              <span className="font-orbitron text-2xl font-bold tracking-wider">
                NEX<span className="text-primary glow-text">V</span>AL
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Corretora de Seguros especializada em proteção financeira, 
              planejamento de risco e blindagem patrimonial.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#quem-somos" className="text-muted-foreground hover:text-primary transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#seguro-vida" className="text-muted-foreground hover:text-primary transition-colors">
                  Seguro de Vida
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>(11) 99999-9999</li>
              <li>contato@nexval.com.br</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nexval Corretora de Seguros. Todos os direitos reservados.
          </p>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da Nexval e gostaria de falar com um consultor.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 animate-glow-pulse"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;
