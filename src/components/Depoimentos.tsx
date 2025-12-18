import { Quote, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "Empresário • São Paulo",
    content: "A Nexval me mostrou que seguro de vida é muito mais do que proteção — é planejamento estratégico. Hoje minha família e meu negócio estão blindados contra imprevistos. O atendimento do Brunno foi excepcional.",
    placeholder: false,
  },
  {
    id: 2,
    name: "Dra. Carla Figueiredo",
    role: "Médica • Rio de Janeiro",
    content: "Como profissional liberal, nunca tinha pensado seriamente em seguro de vida. A consultoria da Nexval abriu meus olhos para riscos que eu nem imaginava. Agora tenho tranquilidade para focar na minha carreira.",
    placeholder: false,
  },
  {
    id: 3,
    name: "Fernando e Ana Costa",
    role: "Casal • Belo Horizonte",
    content: "Quando nasceu nosso primeiro filho, decidimos estruturar nossa proteção financeira. A Nexval criou um plano personalizado que cabe no nosso orçamento e garante o futuro da nossa família. Recomendo de olhos fechados!",
    placeholder: false,
  },
];

const Depoimentos = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            O que nossos clientes <span className="text-gradient-neon">dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Histórias reais de proteção e segurança financeira
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <p className={`text-lg mb-8 leading-relaxed ${testimonial.placeholder ? 'text-muted-foreground/50 italic' : 'text-muted-foreground'}`}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className={`font-medium ${testimonial.placeholder ? 'text-muted-foreground/50' : 'text-foreground'}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
