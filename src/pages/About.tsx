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
    document.title = "À propos - Eric Gata | Praticien en hypnose, neurofeedback et aromathérapie à Tresses";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Eric Gata, praticien en hypnose, neurofeedback dynamique et aromathérapie à Tresses. Spécialisé dans la gestion du stress, l'arrêt du tabac et la perte de poids."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Eric Gata, praticien en hypnose, neurofeedback dynamique et aromathérapie à Tresses. Spécialisé dans la gestion du stress, l'arrêt du tabac et la perte de poids.";
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
                Eric Gata – Praticien en hypnose, neurofeedback et aromathérapie à Tresses
              </h1>
            </header>

            <section className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Mon parcours
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Après plus de quinze années passées dans une grande entreprise pharmaceutique, où j'occupais le poste de technicien supérieur en laboratoire, j'ai choisi de donner un nouveau sens à ma vie professionnelle.
                    Animé depuis toujours par la curiosité de comprendre le fonctionnement du cerveau humain et ses capacités naturelles de régulation, j'ai décidé de me reconvertir pour accompagner les personnes vers un mieux-être global, à travers des approches naturelles et complémentaires.
                  </p>
                  <p>
                    Aujourd'hui, j'exerce en tant que praticien en hypnose, praticien certifié en neurofeedback dynamique et conseiller en aromathérapie.
                    Ces trois approches, à la fois indépendantes et synergiques, me permettent d'accompagner chaque personne dans sa singularité, avec une attention particulière portée à l'équilibre émotionnel, au lâcher-prise et à la régulation du stress.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Le neurofeedback dynamique : accompagner le cerveau vers son équilibre naturel
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Passionné par les sciences du cerveau, j'ai suivi une formation certifiante en neurofeedback avec la société Zengar, conceptrice du système NeurOptimal®.
                    Cette technologie douce et non invasive aide le cerveau à se réorganiser naturellement, favorisant ainsi une meilleure régulation émotionnelle, une amélioration de la concentration et un sentiment global de bien-être.
                  </p>
                  <div className="space-y-2 pl-4 border-l-2 border-primary/30">
                    <p>
                      <a href="https://zengar.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                        👉 Lien vers Zengar
                      </a>
                    </p>
                    <p>
                      <a href="https://www.neurofeedback-dynamique.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                        👉 Réseau Neurofeedback dynamique – ADNF
                      </a>
                    </p>
                    <p>
                      <a href="https://www.afpn.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                        👉 Association Française de Psychothérapie et de Neurofeedback (AFPN)
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  L'aromathérapie : la nature au service du bien-être
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Je suis également formé en aromathérapie et phytothérapie auprès de l'école Hippocratus, ce qui me permet d'intégrer les bienfaits des huiles essentielles dans mes accompagnements.
                    L'aromathérapie complète naturellement les séances de neurofeedback ou d'hypnose, en soutenant le relâchement, la vitalité ou la gestion du stress selon les besoins.
                  </p>
                  <p className="font-medium">Chaque huile essentielle possède des propriétés spécifiques :</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Les huiles d'agrumes (orange douce, pamplemousse, citron) favorisent la détente et la bonne humeur,</li>
                    <li>Les essences de lavande, pin sylvestre ou eucalyptus radié purifient l'air et procurent une sensation de bien-être apaisant,</li>
                    <li>D'autres mélanges peuvent aider à soulager les maux quotidiens comme les tensions, les migraines ou la fatigue nerveuse.</li>
                  </ul>
                  <p>
                    Avec quelques connaissances et un accompagnement personnalisé, il est possible d'utiliser les huiles essentielles en toute simplicité et en toute sécurité.
                  </p>
                  <div className="pl-4 border-l-2 border-primary/30">
                    <a href="https://www.hippocratus.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      👉 Lien formation aroma/phyto – Hippocratus
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  L'hypnose : un accompagnement sur mesure pour la transformation personnelle
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Formé à l'IHEC de Bordeaux, dirigé par Olivier Madelrieux, je pratique l'hypnose conversationnelle et ericksonienne.
                    Cette approche me permet d'aider les personnes à apaiser les angoisses, dépasser les phobies, retrouver confiance en elles, ou encore sortir de schémas limitants liés à leur histoire personnelle.
                  </p>
                  <p>
                    Souhaitant proposer un accompagnement encore plus ciblé, j'ai suivi plusieurs spécialisations auprès de Michel et Marie Martin à l'école ATH, dans deux domaines qui me tiennent particulièrement à cœur :
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>l'arrêt du tabac,</li>
                    <li>la gestion du poids et la minceur durable.</li>
                  </ul>
                  <p>
                    J'ai également complété mon parcours par une formation en hypnose rapide auprès de Jordan Verot, afin d'adapter la méthode au rythme et aux besoins de chacun.
                  </p>
                  <div className="pl-4 border-l-2 border-primary/30">
                    <a href="https://www.hypnose-medicale-33.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      👉 Institut de Bordeaux – IHEC / Hypnose Médicale 33
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Une approche globale et personnalisée
                </h2>
                <Card className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 border-0 shadow-soft">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Mon accompagnement repose sur une conviction : le bien-être durable passe par la compréhension de soi et l'équilibre entre le mental, le corps et les émotions.
                      Que ce soit par le biais du neurofeedback, de l'hypnose ou de l'aromathérapie, mon objectif est d'offrir un espace d'écoute, d'ajustement et de recentrage, pour aider chacun à retrouver son propre équilibre intérieur.
                    </p>
                    <p>
                      Je vous reçois au cabinet à Tresses (33370), dans un cadre calme et accueillant, propice à la détente et au travail sur soi.
                      Les séances se déroulent exclusivement en présentiel, sur rendez-vous.
                    </p>
                  </div>
                </Card>
              </div>

              <div className="space-y-6 bg-muted/30 p-8 rounded-2xl">
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  🕊️ En résumé
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p className="font-medium">Eric Gata, praticien en hypnose, neurofeedback et aromathérapie à Tresses</p>
                  <p>Formé à l'IHEC Bordeaux, Zengar, Hippocratus, ATH, AFPN</p>
                  <p>Spécialisé dans la gestion du stress, l'arrêt du tabac, la perte de poids et le mieux-être global</p>
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
