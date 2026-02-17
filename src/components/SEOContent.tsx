const SEOContent = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Programme Perte de Poids */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Programme Perte de Poids AGP à Tresses
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Le Programme 30 Jours AGP combine hypnose, EFT-H et chronobiologie 
              pour une perte de poids durable, sans régime ni frustration. Créé à Bordeaux 
              par un praticien expérimenté, ce programme est accessible en ligne avec un suivi 
              personnalisé hebdomadaire en visioconférence ou en présentiel depuis le cabinet 
              à Tresses (33370), près de Bordeaux. Que vous soyez à Bordeaux, Libourne, 
              Talence ou partout en France, vous bénéficiez du même accompagnement structuré et humain.
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
              perdre du poids durablement, retrouver plus d'équilibre émotionnel, améliorer leur sommeil, 
              réguler l'agitation intérieure ou vivre un changement durable.
            </p>
          </div>

          {/* Additional content */}
          <div className="space-y-3">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Chaque accompagnement est personnalisé en fonction de vos objectifs et de votre rythme. 
              Les séances permettent de mieux comprendre vos réactions internes, d'apaiser le mental et 
              d'encourager des changements durables. Que ce soit pour la gestion du poids, 
              retrouver un sommeil plus paisible ou renforcer la confiance en vous, 
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
