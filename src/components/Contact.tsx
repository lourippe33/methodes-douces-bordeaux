import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Contactez-nous
            </h2>
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
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet
                    </label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Téléphone
                    </label>
                    <Input id="phone" type="tel" placeholder="06 12 34 56 78" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Parlez-nous de votre besoin..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-gradient-primary hover:shadow-strong transition-all">
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
                      <p className="text-muted-foreground">contact@methodes-douces-bordeaux.fr</p>
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
                      <p className="text-muted-foreground">06 12 34 56 78</p>
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
                      <p className="text-muted-foreground">Tresses, Bordeaux, Libourne</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Lundi - Vendredi : 9h00 - 19h00</p>
                    <p>Samedi : 9h00 - 13h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
