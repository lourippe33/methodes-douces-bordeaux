import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.webp";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <picture className="absolute inset-0">
        <source 
          media="(max-width: 640px)" 
          srcSet={heroBackground}
          type="image/webp"
        />
        <img 
          src={heroBackground}
          alt="Cabinet bien-être Tresses près de Bordeaux"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/90"></div>
      </picture>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-3xl md:text-6xl font-heading font-bold text-foreground leading-tight">
            Méthodes douces & neurofeedback à Tresses (près de Bordeaux)
          </h1>
          
          <p className="text-base md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Bienvenue au cabinet de bien-être à Tresses, spécialisé en hypnose, EFT-H et neurofeedback dynamique. 
            J'accompagne les adultes, enfants et adolescents à retrouver plus de calme intérieur, 
            à relâcher les tensions émotionnelles et à favoriser un sommeil plus paisible. 
            Les méthodes proposées sont douces, sans médicament, et respectent le rythme de chacun. 
            Mon approche est centrée sur l'écoute, la régulation naturelle et le fonctionnement du cerveau. 
            Les séances se déroulent au cabinet, sur rendez-vous, dans un espace dédié au bien-être.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="bg-gradient-primary hover:shadow-strong transition-all text-base md:text-lg px-6 md:px-8 py-5 md:py-6 group w-full sm:w-auto hover:scale-105"
            >
              Découvrir mes prestations
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const element = document.getElementById("formation");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-primary text-primary hover:bg-primary/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto hover:scale-105 transition-transform"
            >
              Formation praticiens
            </Button>
          </div>

          <div className="pt-8 md:pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            <div className="space-y-1 md:space-y-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl md:text-4xl font-bold text-primary">+1000</div>
              <div className="text-xs md:text-base text-muted-foreground">Personnes accompagnées</div>
            </div>
            <div className="space-y-1 md:space-y-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-2xl md:text-4xl font-bold text-primary">+450</div>
              <div className="text-xs md:text-base text-muted-foreground">Praticiens formés</div>
            </div>
            <div className="space-y-1 md:space-y-2 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-2xl md:text-4xl font-bold text-secondary">95%</div>
              <div className="text-xs md:text-base text-muted-foreground">Taux de satisfaction</div>
            </div>
            <div className="space-y-1 md:space-y-2 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="text-2xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-xs md:text-base text-muted-foreground">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default Hero;
