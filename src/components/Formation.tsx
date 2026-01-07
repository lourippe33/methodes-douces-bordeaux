import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Video, Award } from "lucide-react";
import agpBanner from "@/assets/agp-banner.jpg";
import formationImage from "@/assets/formation-hands.jpg";

const Formation = () => {
  return (
    <section id="formation" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block p-3 bg-gradient-primary rounded-2xl mb-4">
              <GraduationCap className="text-white" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Formation AGP
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Praticiens accompagnants, vous cherchez une formation pour la gestion du poids ? 
              Vous êtes au bon endroit !
            </p>
          </div>

          {/* Main Card */}
          <Card className="border-0 shadow-strong overflow-hidden bg-card/80 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={agpBanner} 
                alt="AGP - Méthodes douces & Neurofeedback - Accompagnement bien-être global" 
                className="w-full h-auto object-cover"
                width="1200"
                height="600"
                loading="lazy"
              />
            </div>

            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-heading">Formation complète et accessible</CardTitle>
              <CardDescription className="text-base font-light">
                Formation AGP, covisions mensuelles en live, accessible à vie, tarif compétitif
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Video className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Suivi praticiens régulier</h4>
                    <p className="text-sm text-muted-foreground">Échanges réguliers et suivi personnalisé</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Users className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Communauté active</h4>
                    <p className="text-sm text-muted-foreground">Réseau de praticiens engagés</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Award className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Attestation de fin de cycle</h4>
                    <p className="text-sm text-muted-foreground">Attestation de formation professionnelle</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <GraduationCap className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Accès à vie à la formation</h4>
                    <p className="text-sm text-muted-foreground">Contenu mis à jour régulièrement</p>
                  </div>
                </div>
              </div>

              {/* Formation Image */}
              <div className="rounded-xl overflow-hidden shadow-soft">
                <img 
                  src={formationImage} 
                  alt="Méthodes douces hypnose EFT-H Bordeaux Est" 
                  className="w-full h-auto object-cover"
                  width="1200"
                  height="800"
                  loading="lazy"
                />
              </div>

              {/* Benefits List */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-4 text-left">Ce que vous allez apprendre :</h4>
                <div className="space-y-4 text-left">
                  <p>
                    <strong>I. La chronobiologie</strong> – Comprendre l'horloge interne et ses rythmes, le rôle du cortisol et de l'insuline, l'équilibre entre protéines, lipides et glucides, l'importance de l'homéostasie et des enzymes, et les effets délétères du sucre, des produits light et transformés.
                  </p>
                  
                  <p>
                    <strong>II. Les neuromédiateurs</strong> – Explorer la biologie des émotions, les carences responsables de troubles du comportement et l'impact de l'alimentation sur la production des neuromédiateurs.
                  </p>
                  
                  <p>
                    <strong>III. Coaching & Hypnose</strong> – Approfondir la structure d'une séance (anamnèse, nutri-coaching, croyances limitantes, comportements alimentaires).
                  </p>
                  
                  <p>
                    <strong>IV. Psychologie & comportements</strong> – Travailler sur la relation à soi, au corps et aux autres, la gestion du stress, les blocages, et le changement des habitudes.
                  </p>
                  
                  <p>
                    <strong>V. Outils thérapeutiques</strong> – Utiliser l'hypnose conversationnelle et divers outils émotionnels (négociation des parties, recadrage, PNE, cohérence cardiaque, pleine conscience, lâcher-prise).
                  </p>
                  
                  <p>
                    <strong>VI. Les blessures & le poids</strong> – Identifier les liens entre émotions, blessures personnelles et comportements alimentaires pour rétablir une relation saine à soi et à l'alimentation.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-strong transition-all text-lg px-8 py-6 hover:scale-105" asChild>
                  <a href="https://perte-de-poids-praticiens.fr/" target="_blank" rel="noopener noreferrer">
                    En savoir plus sur la formation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Formation;
