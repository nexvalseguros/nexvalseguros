import { 
  User, 
  Building2, 
  PiggyBank, 
  Scale, 
  AlertTriangle, 
  Wallet, 
  Activity 
} from "lucide-react";

const solutions = [
  {
    icon: User,
    title: "Seguro de Vida Individual",
    description: "Proteção personalizada para você e sua família",
  },
  {
    icon: Building2,
    title: "Seguro de Vida Empresarial",
    description: "Segurança para colaboradores e sócios",
  },
  {
    icon: PiggyBank,
    title: "Previdência Privada",
    description: "Planejamento PGBL e VGBL estratégico",
  },
  {
    icon: Scale,
    title: "Planejamento Sucessório",
    description: "Transmissão patrimonial com seguros",
  },
  {
    icon: AlertTriangle,
    title: "Planejamento de Riscos",
    description: "Análise e mitigação de riscos pessoais e familiares",
  },
  {
    icon: Wallet,
    title: "Proteção de Renda",
    description: "Segurança financeira em caso de invalidez",
  },
  {
    icon: Activity,
    title: "Doenças Graves",
    description: "Coberturas para diagnósticos e diárias por incapacidade",
  },
];

const Solucoes = () => {
  return (
    <section id="solucoes" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Soluções <span className="text-gradient-neon">Complementares</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Produtos estratégicos para sua proteção completa
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-orbitron text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucoes;
