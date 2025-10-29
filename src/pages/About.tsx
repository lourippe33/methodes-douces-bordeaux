import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Target, Sparkles, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "À propos - Cabinet AGP à Tresses (33) | Praticien en hypnose, EFT-H et neurofeedback";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Découvrez le Cabinet AGP à Tresses, près de Bordeaux. Praticien certifié en hypnose, EFT-H et neurofeedback, je vous accompagne avec bienveillance vers votre mieux-être."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Découvrez le Cabinet AGP à Tresses, près de Bordeaux. Praticien certifié en hypnose, EFT-H et neurofeedback, je vous accompagne avec bienveillance vers votre mieux-être.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 -ml-2"
          >
            <ArrowLeft className="mr-2" size={16} />
            Retour
          </Button>

          <article className="space-y-16">
            <header className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                À propos du Cabinet AGP
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Un accompagnement bienveillant et personnalisé pour votre bien-être
              </p>
            </header>

            <section className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="p-6 text-center hover:shadow-warm transition-all duration-500 hover:-translate-y-1 border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Bienveillance
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Un accompagnement respectueux de votre rythme et de vos besoins
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-warm transition-all duration-500 hover:-translate-y-1 border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Personnalisation
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Des solutions sur mesure adaptées à votre situation unique
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-warm transition-all duration-500 hover:-translate-y-1 border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Efficacité
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Des méthodes éprouvées pour des résultats durables
                  </p>
                </Card>
              </div>
            </section>

            <section className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Qui suis-je ?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Praticien certifié en hypnose, EFT-H et neurofeedback, je vous accueille dans mon cabinet à Tresses, 
                    près de Bordeaux, pour vous accompagner dans votre démarche de mieux-être.
                  </p>
                  <p>
                    Passionné par les approches complémentaires du bien-être, j'ai choisi de me former à différentes 
                    méthodes reconnues pour leur efficacité : l'hypnose pour accéder aux ressources inconscientes, 
                    l'EFT-H pour libérer les émotions, et le neurofeedback pour réguler l'activité cérébrale.
                  </p>
                  <p>
                    Mon approche est centrée sur l'écoute, la bienveillance et l'adaptation à chaque personne. 
                    Chaque parcours est unique, et je m'engage à vous proposer un accompagnement personnalisé, 
                    respectueux de votre rythme et de vos objectifs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                <Card className="p-6 text-center bg-muted/30 border-0">
                  <Award className="text-primary mx-auto mb-3" size={32} />
                  <h4 className="font-semibold mb-2">Certifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Praticien certifié en hypnose, EFT-H et neurofeedback
                  </p>
                </Card>

                <Card className="p-6 text-center bg-muted/30 border-0">
                  <Users className="text-primary mx-auto mb-3" size={32} />
                  <h4 className="font-semibold mb-2">Expérience</h4>
                  <p className="text-sm text-muted-foreground">
                    Accompagnement de nombreuses personnes vers leur bien-être
                  </p>
                </Card>

                <Card className="p-6 text-center bg-muted/30 border-0">
                  <BookOpen className="text-primary mx-auto mb-3" size={32} />
                  <h4 className="font-semibold mb-2">Formation</h4>
                  <p className="text-sm text-muted-foreground">
                    Formation continue aux dernières techniques
                  </p>
                </Card>
              </div>
            </section>

            <section className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Ma philosophie
              </h2>
              <Card className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 border-0 shadow-soft">
                <p className="text-muted-foreground leading-relaxed font-light">
                  Je crois profondément que chacun possède en lui les ressources nécessaires pour surmonter 
                  ses difficultés et atteindre ses objectifs. Mon rôle est de vous accompagner pour mobiliser 
                  ces ressources, vous aider à dépasser vos blocages, et vous guider vers un mieux-être durable.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light mt-4">
                  Que vous souhaitiez retrouver confiance en vous, gérer votre stress, perdre du poids de manière 
                  durable, arrêter de fumer, ou améliorer votre concentration, je vous propose un accompagnement 
                  sur mesure, dans un cadre bienveillant et confidentiel.
                </p>
              </Card>
            </section>

            <section className="max-w-4xl mx-auto space-y-6 bg-muted/30 p-8 rounded-2xl">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Le Cabinet à Tresses
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Le cabinet est situé à Tresses (33370), à proximité de Bordeaux, dans un espace calme 
                  et lumineux, propice à la détente et au bien-être. Un parking gratuit est disponible 
                  à proximité pour faciliter votre venue.
                </p>
                <p>
                  Je reçois sur rendez-vous du lundi au vendredi, et je propose également des séances 
                  le samedi matin sur demande. Les consultations se déroulent exclusivement en présentiel 
                  pour garantir la qualité de l'accompagnement.
                </p>
              </div>
              <div className="pt-4">
                <Button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                  className="bg-gradient-primary hover:shadow-strong transition-all"
                  size="lg"
                >
                  Prendre rendez-vous
                </Button>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
