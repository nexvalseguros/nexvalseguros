const Proposito = () => {
  return (
    <section className="py-24 relative bg-card">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 line-glow" />
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Nosso <span className="text-gradient-neon">Propósito</span>
          </h2>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
            <blockquote className="relative text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-light">
              <span className="text-primary text-5xl leading-none">"</span>
              <br />
              Evitar que a falta de planejamento transforme momentos difíceis em{" "}
              <span className="font-medium text-primary">tragédias financeiras</span>.
              <br /><br />
              A Nexval <span className="font-medium">protege hoje</span> para evitar problemas amanhã.
              <br />
              <span className="text-primary text-5xl leading-none">"</span>
            </blockquote>
          </div>
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 line-glow" />
    </section>
  );
};

export default Proposito;
