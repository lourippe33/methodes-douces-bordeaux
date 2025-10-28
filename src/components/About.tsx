import { Card } from "@/components/ui/card";
import { Heart, Target, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Une approche bienveillante
            </h2>
            <p className="text-xl text-muted-foreground">
              Vous êtes dans une situation bloquante et avez besoin d'accompagnement 
              pour concrétiser votre objectif ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-strong transition-all hover:-translate-y-1 border-2 hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Bienveillance</h3>
              <p className="text-muted-foreground text-sm">
                Un accompagnement respectueux de votre rythme et de vos besoins
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-strong transition-all hover:-translate-y-1 border-2 hover:border-secondary/20">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Personnalisation</h3>
              <p className="text-muted-foreground text-sm">
                Des solutions sur mesure adaptées à votre situation unique
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-strong transition-all hover:-translate-y-1 border-2 hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Efficacité</h3>
              <p className="text-muted-foreground text-sm">
                Des méthodes éprouvées pour des résultats durables
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/20 border-2">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Alors ces méthodes peuvent vous aider
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Que vous souhaitiez retrouver confiance en vous, gérer votre stress, perdre du poids 
              de manière durable, ou arrêter de fumer, je vous propose un accompagnement personnalisé 
              avec des méthodes douces et efficaces. Chaque parcours est unique, et ensemble, 
              nous travaillerons pour atteindre vos objectifs de bien-être.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
