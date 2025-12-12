import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import SeguroVida from "@/components/SeguroVida";
import Solucoes from "@/components/Solucoes";
import Diferenciais from "@/components/Diferenciais";
import Fundadores from "@/components/Fundadores";
import Proposito from "@/components/Proposito";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <SeguroVida />
        <Solucoes />
        <Diferenciais />
        <Fundadores />
        <Proposito />
        <Depoimentos />
        <Contato />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
