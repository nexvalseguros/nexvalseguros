import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logoNexval from "@/assets/logo-nexval.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <img 
            src={logoNexval} 
            alt="Nexval - Corretora de Seguros" 
            className="h-16 md:h-20 lg:h-24 mb-8 mx-auto animate-fade-in"
          />

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Proteção Financeira Estratégica</span>
          </div>

          {/* Title */}
          <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Seguro de vida não é gasto.{" "}
            <span className="text-gradient-neon">É estratégia.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Proteção financeira inteligente para pessoas, famílias e empresas.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              variant="hero-primary"
              size="xl"
              onClick={() => scrollToSection("#contato")}
            >
              Quero proteção hoje
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={() => scrollToSection("#seguro-vida")}
            >
              Entender como funciona
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("#quem-somos")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
