import { Target, Eye, Heart } from "lucide-react";

const values = [
  "Proteção em primeiro lugar",
  "Transparência",
  "Responsabilidade",
  "Excelência técnica",
  "Ética e confiança",
  "Compromisso com resultado",
];

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-24 relative bg-background">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 line-glow-dark" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Quem <span className="text-gradient-neon">Somos</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A Nexval Corretora de Seguros é especializada em{" "}
            <span className="text-foreground font-medium">proteção financeira, planejamento de risco e blindagem patrimonial</span>, 
            com forte atuação em Seguro de Vida individual e empresarial.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Missão */}
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-orbitron text-xl font-bold mb-4 text-foreground">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proteger vidas, famílias e patrimônios com soluções estratégicas em seguros, 
              garantindo segurança financeira e previsibilidade.
            </p>
          </div>

          {/* Visão */}
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-orbitron text-xl font-bold mb-4 text-foreground">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência nacional em Seguro de Vida estratégico, reconhecida pela 
              profundidade técnica e pelo impacto real na vida financeira dos clientes.
            </p>
          </div>

          {/* Valores */}
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-orbitron text-xl font-bold mb-4 text-foreground">Valores</h3>
            <ul className="space-y-2">
              {values.map((value, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
