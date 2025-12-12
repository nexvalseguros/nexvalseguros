import { 
  Users, 
  TrendingUp, 
  FileText, 
  Receipt, 
  CreditCard, 
  Wallet, 
  Shield, 
  HeartPulse 
} from "lucide-react";

const benefits = [
  { icon: Users, label: "Proteção familiar" },
  { icon: TrendingUp, label: "Manutenção do padrão de vida" },
  { icon: FileText, label: "Planejamento sucessório" },
  { icon: Receipt, label: "Pagamento de impostos (ITCMD)" },
  { icon: CreditCard, label: "Quitação de dívidas" },
  { icon: Wallet, label: "Proteção de renda" },
  { icon: Shield, label: "Blindagem patrimonial" },
  { icon: HeartPulse, label: "Segurança em vida (invalidez, doenças graves)" },
];

const SeguroVida = () => {
  return (
    <section id="seguro-vida" className="py-24 relative bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 line-glow" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Seguro de Vida <span className="text-gradient-neon">Estratégico</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A base da proteção financeira
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{benefit.label}</span>
            </div>
          ))}
        </div>

        {/* Highlight Quote */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
          <div className="relative p-8 md:p-12 rounded-2xl border-glow text-center">
            <blockquote className="font-orbitron text-2xl md:text-3xl lg:text-4xl font-bold glow-text">
              "Seguro de vida é estratégia, não despesa."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeguroVida;
