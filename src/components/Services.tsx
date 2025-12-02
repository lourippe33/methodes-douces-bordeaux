import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const services = [{
  icon: Brain,
  title: "Hypnose & EFT-H",
  description: "Accompagnement par hypnose & EFT-H pour retrouver plus de calme intérieur, relâcher les tensions émotionnelles et renforcer la confiance en soi grâce à des méthodes douces adaptées à chacun.",
  benefits: ["Tensions émotionnelles", "Confiance en soi", "Apaisement intérieur", "Lâcher-prise"],
  color: "primary",
  link: "/hypnose-eft-h",
  external: false
}, {
  icon: Activity,
  title: "Neurofeedback",
  description: "Régulation naturelle du cerveau pour retrouver apaisement mental, concentration et sommeil plus paisible. Méthode douce adaptée aux adultes, enfants et adolescents.",
  benefits: ["Surcharge mentale", "Difficultés d'endormissement", "Agitation intérieure", "Apaisement du mental"],
  color: "secondary",
  link: "/neurofeedback",
  external: false
}];
const Services = () => {
  return <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Accompagnement bien-être à Tresses</h2>
          <p className="text-xl text-muted-foreground font-light">
            Méthodes douces pour adultes, enfants et adolescents près de Bordeaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <Card key={index} className="group hover:shadow-warm transition-all duration-500 hover:-translate-y-1 border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`}></div>
                        {benefit}
                      </li>)}
                  </ul>
                  {service.link && service.external ? (
                    <Button variant="ghost" className={`w-full group/btn hover:bg-${service.color}/10 hover:text-${service.color}`} asChild>
                      <a href={service.link} target="_blank" rel="noopener noreferrer">
                        En savoir plus
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                      </a>
                    </Button>
                  ) : service.link ? (
                    <Button variant="ghost" className={`w-full group/btn hover:bg-${service.color}/10 hover:text-${service.color}`} asChild>
                      <Link to={service.link}>
                        En savoir plus
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="ghost" className={`w-full group/btn hover:bg-${service.color}/10 hover:text-${service.color}`} disabled>
                      En savoir plus
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  )}
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto italic">
            Ces méthodes visent au bien-être et ne remplacent pas un suivi médical si nécessaire.
          </p>
        </div>
      </div>
    </section>;
};
export default Services;