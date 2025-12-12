import { 
  MessageSquare, 
  Award, 
  UserCheck, 
  Handshake, 
  HeartPulse, 
  Landmark, 
  FileSearch 
} from "lucide-react";

const differentials = [
  {
    icon: MessageSquare,
    title: "Atuação Consultiva",
    description: "Assessoria completa para entender suas necessidades reais",
  },
  {
    icon: Award,
    title: "Especialização Profunda",
    description: "Foco exclusivo em Seguro de Vida estratégico",
  },
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção individualizada",
  },
  {
    icon: Handshake,
    title: "Maiores Seguradoras",
    description: "Parcerias com as principais empresas do mercado",
  },
  {
    icon: HeartPulse,
    title: "Proteção em Vida",
    description: "Foco em coberturas que protegem você enquanto vive",
  },
  {
    icon: Landmark,
    title: "Visão Patrimonial",
    description: "Integração entre seguros e planejamento sucessório",
  },
  {
    icon: FileSearch,
    title: "Linguagem Clara",
    description: "Comunicação transparente, sem termos complicados",
  },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-24 relative bg-gradient-to-b from-background via-card to-background">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 line-glow" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Diferenciais <span className="text-gradient-neon">Nexval</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Por que escolher a Nexval para proteger o que é importante
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg border border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary/60 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-orbitron text-base font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
