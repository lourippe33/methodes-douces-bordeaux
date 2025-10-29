import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface Review {
  auteur: string;
  note: number;
  avis: string;
}

const reviewsData: Review[] = [
  { "auteur": "Emmanuelle P.", "note": 5, "avis": "Les séances de neurofeedback m'ont énormément aidée à aller de l'avant. Je recommande sans hésitation." },
  { "auteur": "Agnès Limon", "note": 5, "avis": "Grâce à l'hypnose, j'ai surmonté ma phobie de l'avion. Thérapeute bienveillant et à l'écoute." },
  { "auteur": "Marie Motelet", "note": 5, "avis": "Formation complète et passionnante sur la chronobiologie et la gestion du poids. Professionnalisme et bienveillance au rendez-vous." },
  { "auteur": "Séverine Boudoux", "note": 5, "avis": "Formation très enrichissante et bien structurée, avec un vrai suivi personnalisé." },
  { "auteur": "Aurore Bourbon", "note": 5, "avis": "Les séances d'EFT-H et de neurofeedback m'ont permis de surmonter mes traumatismes. Thérapeute à l'écoute et humain." },
  { "auteur": "Audrey Envolées Océanes", "note": 5, "avis": "Notre fils de 12 ans a retrouvé concentration et sérénité grâce au neurofeedback. Merci !" },
  { "auteur": "Marie-Laurence Mahieux", "note": 5, "avis": "Formation claire et complète, avec un accompagnement bienveillant et de véritables outils pratiques." },
  { "auteur": "Vincent Passerat", "note": 5, "avis": "Arrêt du tabac réussi dès la deuxième séance. Pas de manque ni de nervosité. Je recommande vivement." },
  { "auteur": "Jeanne Elisabeth M.", "note": 5, "avis": "Superbe expérience de neurofeedback, travail sur la confiance, le stress et le deuil. Résultats impressionnants." },
  { "auteur": "Val", "note": 5, "avis": "Les 10 séances de neurofeedback m'ont permis un réel lâcher-prise et une meilleure sérénité." },
  { "auteur": "Isabelle A.", "note": 5, "avis": "Un accompagnement bienveillant, 10 séances de neurofeedback pour un meilleur équilibre émotionnel." },
  { "auteur": "Julie G.", "note": 5, "avis": "Formation HGP incroyable, un vrai changement de vision et d'accompagnement pour mes clients." },
  { "auteur": "Olivia B.", "note": 5, "avis": "Excellent thérapeute, professionnel et à l'écoute. Hypnose et neurofeedback très efficaces." },
  { "auteur": "Hélène R.", "note": 5, "avis": "Objectif minceur atteint sans frustration grâce à un accompagnement en 3 séances. Thérapeute à l'écoute." },
  { "auteur": "Louisa C.", "note": 5, "avis": "Formation riche, complète et pleine de bienveillance. Formateur passionné et pédagogue." },
  { "auteur": "Nathalie Q.", "note": 5, "avis": "Formation complète, vivante et suivie dans le temps. Un vrai plus pour mes accompagnements." },
  { "auteur": "Marie", "note": 5, "avis": "Formation HGP au top, accompagnement après-formation régulier et bienveillant." },
  { "auteur": "Galina N.", "note": 5, "avis": "Je recommande les yeux fermés !" },
  { "auteur": "Valérie C.", "note": 5, "avis": "Formation efficace, complète et évolutive. Résultat personnel : -8 kg durablement !" },
  { "auteur": "Valérie P.", "note": 5, "avis": "Très belle approche en hypnose pour les adolescents, bienveillance et pédagogie remarquables." },
  { "auteur": "Florence A.", "note": 5, "avis": "Formation HGP continue et évolutive, avec un suivi permanent et des conseils réguliers." },
  { "auteur": "Marie-Eve A.", "note": 5, "avis": "Formation claire et complète, applicable autant professionnellement que personnellement." },
  { "auteur": "Cycy G.", "note": 5, "avis": "Formation très riche et un formateur toujours disponible après la session." },
  { "auteur": "Vivi V.", "note": 5, "avis": "Formation intense et passionnante avec un formateur disponible et impliqué." },
  { "auteur": "Nathalie Renault", "note": 5, "avis": "Formation complète et efficace pour accompagner les clients." },
  { "auteur": "Isabelle M.", "note": 5, "avis": "Supervision enrichissante, outils variés, approche passionnée et claire. Je recommande à 200 %." },
  { "auteur": "Mariny B.", "note": 5, "avis": "Formation gestion du poids claire, accessible et bienveillante." },
  { "auteur": "Aude S.", "note": 5, "avis": "Formation enrichissante et humaine. Formateur disponible même après la formation." },
  { "auteur": "Irène D.-T.", "note": 5, "avis": "Formateur généreux et compétent, partage de nombreux outils utiles." },
  { "auteur": "Nadine T.", "note": 5, "avis": "Formation claire, humaine et complète. Formateur à l'écoute et réactif." },
  { "auteur": "Virginie M.", "note": 5, "avis": "Formation très complète sur la gestion du poids, résultats concrets et formateur disponible." },
  { "auteur": "Véronique T.", "note": 5, "avis": "Formateur exceptionnel, professionnel et à l'écoute. Je recommande à 100 %." },
  { "auteur": "Amélie L.-J.", "note": 5, "avis": "Formation riche en savoirs et partage. Excellent accompagnement." },
  { "auteur": "Lydia A.", "note": 5, "avis": "Formation claire, accessible et complète. Merci pour ton professionnalisme." },
  { "auteur": "Magalie P.", "note": 5, "avis": "Excellent formateur, réactif et à l'écoute. Je recommande vivement." },
  { "auteur": "Aïcha C.", "note": 5, "avis": "Professionnel bienveillant et très présent. Merci Eric !" },
  { "auteur": "Isabelle T.", "note": 5, "avis": "Méthode efficace et praticien à l'écoute. Résultats rapides et durables." },
  { "auteur": "Florence B.", "note": 5, "avis": "Écoute, bienveillance et résultats visibles dès la première séance. Merci !" },
  { "auteur": "Christophe R.", "note": 5, "avis": "Arrêt du tabac réussi après 30 ans. Nouvelle énergie et bien-être retrouvés." },
  { "auteur": "Stéphane D.", "note": 5, "avis": "Deux séances d'hypnose ont suffi à apaiser mon anxiété et mes douleurs. Thérapeute très professionnel." },
  { "auteur": "Nathalie M.", "note": 5, "avis": "Grâce à l'hypnose, j'ai retrouvé le sommeil et une meilleure qualité de vie." },
  { "auteur": "Hélène M.", "note": 5, "avis": "Neurofeedback efficace contre le burn-out et les émotions fortes. Accompagnement bienveillant." },
  { "auteur": "Manon P.", "note": 5, "avis": "Arrêt du tabac définitif après 2 séances d'hypnose. Aucune envie de refumer depuis." },
  { "auteur": "Isabelle Z.", "note": 5, "avis": "Deux ans sans cigarette grâce à l'hypnose. Liberté retrouvée !" },
  { "auteur": "Véronique C.", "note": 5, "avis": "Thérapeute professionnel, franc et efficace. Résultats rapides." },
  { "auteur": "Pierrick L.B.", "note": 5, "avis": "Objectif poids atteint en 1 mois et demi. Plus de fringales ni d'envies sucrées." },
  { "auteur": "Marie K.", "note": 5, "avis": "Accompagnement personnalisé, professionnel et rassurant. Très bon hypnothérapeute." },
  { "auteur": "Frédérique D.", "note": 5, "avis": "Arrêt du tabac en une séance, sans reprise ni prise de poids après un an." },
  { "auteur": "Stéphane R.", "note": 5, "avis": "Séances d'EMDR et d'hypnose : vie plus légère et attitude positive retrouvée." },
  { "auteur": "Marianne L.T.", "note": 5, "avis": "Thérapeute à l'écoute et bienveillant. Approche douce et efficace." },
  { "auteur": "Margaux L.", "note": 5, "avis": "Très bon praticien, à l'écoute et professionnel. Résultats concrets." },
  { "auteur": "Anne S.", "note": 5, "avis": "Thérapeute bienveillant et inspirant, m'a permis de me libérer émotionnellement." }
];

const Reviews = () => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Ils partagent leur expérience
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviewsData.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {getInitials(review.auteur)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-sm">
                          {review.auteur}
                        </h3>
                        <div className="mt-1">{renderStars(review.note)}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                      {review.avis}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
