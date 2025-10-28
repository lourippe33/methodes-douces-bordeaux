import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir au moins votre nom, email et message",
        variant: "destructive"
      });
      return;
    }

    const subject = `Nouveau message de ${formData.name}`;
    const body = `Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone || "Non renseigné"}

Message:
${formData.message}`;

    const mailtoLink = `mailto:eric.gata@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher un message de confirmation
    toast({
      title: "Ouverture de votre messagerie",
      description: "Votre client email va s'ouvrir avec le message pré-rempli",
    });
    
    // Réinitialiser le formulaire après un court délai
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };
  return <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Contactez-moi</h2>
            <p className="text-xl text-muted-foreground">
              Prêt à commencer votre parcours de changement ? Parlons-en ensemble
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Nous vous répondrons dans les plus brefs délais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Votre nom" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Téléphone
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Parlez-nous de votre besoin..." 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary hover:shadow-strong transition-all">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 hover:shadow-soft transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:eric.gata@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        eric.gata@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-soft transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                      <p className="text-muted-foreground">07 82 38 66 21</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-soft transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Localisation</h3>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=9+galerie+marchande+33370+Tresses" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        9 galerie marchande 33370 Tresses
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Lundi – mardi – vendredi : 9 h - 19 h</p>
                    <p>Mercredi et jeudi : 9 h - 13 h</p>
                    <p>
                  </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;