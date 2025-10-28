import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Activity, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Hypnose & EFT-H",
    description: "Un accompagnement efficace pour retrouver confiance, estime de soi et surmonter vos blocages émotionnels.",
    benefits: ["Gestion des angoisses", "Phobies et peurs", "Traumatismes", "Confiance en soi"],
    color: "primary",
    link: null,
  },
  {
    icon: Activity,
    title: "Neurofeedback",
    description: "Une méthode innovante pour réguler votre activité cérébrale et améliorer votre bien-être au quotidien.",
    benefits: ["TDA(H)", "Insomnie", "Migraines", "Gestion du stress"],
    color: "secondary",
    link: "https://neurofeedback-stress.fr/",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Des méthodes douces et efficaces pour vous accompagner vers le changement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
              >
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
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`}></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  {service.link ? (
                    <Button 
                      variant="ghost" 
                      className={`w-full group/btn hover:bg-${service.color}/10 hover:text-${service.color}`}
                      asChild
                    >
                      <a href={service.link} target="_blank" rel="noopener noreferrer">
                        En savoir plus
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      variant="ghost" 
                      className={`w-full group/btn hover:bg-${service.color}/10 hover:text-${service.color}`}
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto italic">
            Les méthodes que j'utilise ne se substituent à aucun avis ni traitement médical. 
            Cela vient en complément des soins qui vous sont prescrits et ne remplace jamais le suivi par un médecin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
