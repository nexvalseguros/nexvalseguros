import { Button } from "@/components/ui/button";

const CTAFinal = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para proteger o que{" "}
            <span className="text-gradient-neon">realmente importa</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Dê o primeiro passo para garantir a segurança financeira da sua família e do seu patrimônio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero-primary"
              size="xl"
              onClick={() => scrollToSection("#contato")}
            >
              Falar com um Consultor
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={() => scrollToSection("#seguro-vida")}
            >
              Quero entender meu caso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
