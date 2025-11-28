const SEOContent = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Hypnose & EFT-H */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Hypnose & EFT-H à Tresses
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              L'hypnose et l'EFT-H permettent de relâcher les tensions mentales, 
              d'apaiser les émotions et de renforcer la confiance en soi. 
              Ces méthodes favorisent le lâcher-prise et soutiennent les changements d'habitudes, 
              comme la gestion de l'alimentation ou l'arrêt du tabac.
            </p>
          </div>

          {/* Section Neurofeedback */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Neurofeedback dynamique à Tresses
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Le neurofeedback dynamique est une approche non invasive qui aide le cerveau à s'autoréguler. 
              Il contribue à retrouver plus de concentration, de calme intérieur 
              et un sommeil plus réparateur. Adapté aux enfants, adolescents et adultes.
            </p>
          </div>

          {/* Section Pour qui */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Pour qui ?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Cet accompagnement s'adresse aux enfants, adolescents et adultes souhaitant 
              retrouver plus d'équilibre émotionnel, améliorer leur sommeil, 
              réguler l'agitation intérieure, renforcer la confiance en soi 
              ou vivre un changement durable.
            </p>
          </div>

          {/* Additional content before disclaimer */}
          <div className="space-y-3">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Chaque accompagnement est personnalisé en fonction de vos objectifs et de votre rythme. 
              Les séances permettent de mieux comprendre vos réactions internes, d'apaiser le mental et 
              d'encourager des changements durables. Que ce soit pour vous libérer d'une surcharge émotionnelle, 
              retrouver un sommeil plus paisible, mieux gérer vos habitudes ou renforcer la confiance en vous, 
              les méthodes utilisées favorisent l'autorégulation naturelle et l'équilibre intérieur.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Mon rôle n'est pas de vous diriger, mais de vous accompagner avec une approche accessible, 
              claire et progressive. Chaque séance vous aide à développer vos propres ressources 
              et à prendre appui sur vos capacités naturelles d'adaptation.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="pt-6 border-t border-border">
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
