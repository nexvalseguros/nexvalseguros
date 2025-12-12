import { Quote, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Cliente 1",
    role: "Empresário",
    content: "Depoimento em breve...",
    placeholder: true,
  },
  {
    id: 2,
    name: "Cliente 2",
    role: "Profissional Liberal",
    content: "Depoimento em breve...",
    placeholder: true,
  },
  {
    id: 3,
    name: "Cliente 3",
    role: "Família",
    content: "Depoimento em breve...",
    placeholder: true,
  },
];

const Depoimentos = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
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
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
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
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
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
