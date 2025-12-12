import { User } from "lucide-react";

const Fundadores = () => {
  return (
    <section className="py-24 relative bg-background">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 line-glow-dark" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            História e <span className="text-gradient-neon">Fundadores</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative aspect-square rounded-2xl bg-card border border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 text-primary/50" />
                  </div>
                  <p className="text-muted-foreground text-sm">Foto do fundador</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
                <span className="text-sm text-muted-foreground">Fundação: Novembro de 2025</span>
              </div>

              <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-2 text-foreground">
                Brunno Ferreira
              </h3>
              <p className="text-primary font-medium mb-6">CFP® - Certified Financial Planner</p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Especialista em proteção financeira, planejamento de risco e blindagem patrimonial. 
                Com ampla experiência no mercado financeiro, Brunno fundou a Nexval com o propósito 
                de transformar a forma como brasileiros encaram o Seguro de Vida — de despesa para 
                estratégia essencial de proteção.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent" />
                <span className="text-sm text-muted-foreground">Sócio Fundador</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fundadores;
