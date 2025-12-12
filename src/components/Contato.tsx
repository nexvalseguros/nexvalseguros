import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5511999999999"; // Replace with actual number

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome.trim() || !formData.telefone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    const message = encodeURIComponent(
      `Olá! Vim pelo site da Nexval e gostaria de falar com um consultor.\n\nNome: ${formData.nome}\nTelefone: ${formData.telefone}${formData.mensagem ? `\nMensagem: ${formData.mensagem}` : ""}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será atendido em instantes!",
    });
  };

  return (
    <section id="contato" className="py-24 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 line-glow" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Info */}
          <div>
            <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Fale <span className="text-gradient-neon">Conosco</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Estamos prontos para ajudar você a proteger o que realmente importa. 
              Entre em contato e receba uma consultoria personalizada.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">E-mail</p>
                  <p className="text-muted-foreground">contato@nexval.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-xl" />
            <form
              onSubmit={handleSubmit}
              className="relative p-8 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-orbitron text-xl font-bold mb-6">
                Envie sua mensagem
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome *</label>
                  <Input
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telefone *</label>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem (opcional)</label>
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="bg-secondary border-border focus:border-primary min-h-[100px]"
                  />
                </div>

                <Button type="submit" variant="neon" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
