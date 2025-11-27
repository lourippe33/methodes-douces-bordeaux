const SEOContent = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Hypnose & EFT-H */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Hypnose & EFT-H à Tresses
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'hypnose et l'EFT-H permettent de relâcher les tensions mentales, 
              d'apaiser les émotions et de renforcer la confiance en soi. 
              Ces méthodes favorisent le lâcher-prise et soutiennent les changements d'habitudes, 
              comme la gestion de l'alimentation ou l'arrêt du tabac.
            </p>
          </div>

          {/* Section Neurofeedback */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Neurofeedback dynamique à Tresses
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Le neurofeedback dynamique est une approche non invasive qui aide le cerveau à s'autoréguler. 
              Il contribue à retrouver plus de concentration, de calme intérieur 
              et un sommeil plus réparateur. Adapté aux enfants, adolescents et adultes.
            </p>
          </div>

          {/* Section Pour qui */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Pour qui ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cet accompagnement s'adresse aux enfants, adolescents et adultes souhaitant 
              retrouver plus d'équilibre émotionnel, améliorer leur sommeil, 
              réguler l'agitation intérieure, renforcer la confiance en soi 
              ou vivre un changement durable.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Ces méthodes visent au bien-être et ne remplacent pas un suivi médical si nécessaire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
