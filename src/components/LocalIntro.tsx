import { MapPin } from "lucide-react";

const LocalIntro = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6 text-primary" />
            Un accompagnement créé ici, pour vous
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Créé à Bordeaux par un praticien spécialisé en hypnose, chronobiologie et neurofeedback, 
            le programme AGP a été pensé pour répondre aux besoins réels des personnes de Gironde 
            et de toute la France. Que vous veniez de Tresses, Bordeaux, Mérignac ou d'ailleurs, 
            vous bénéficiez d'un accompagnement structuré, humain et personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalIntro;
