import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ContactSylviaDialog } from "@/components/ContactSylviaDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Brain, Heart, Moon, Zap, CheckCircle, Phone, CreditCard } from "lucide-react";
import ericPhoto from "@/assets/eric-gata-portrait.png";
import sylviaPhoto from "@/assets/sylvia-rui-portrait.png";
const Neurofeedback = () => {
  const navigate = useNavigate();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Neurofeedback Dynamique à Tresses - Gestion du Stress et Sommeil | Eric Gata";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Neurofeedback dynamique à Tresses près de Bordeaux. Méthode naturelle pour gérer le stress, améliorer le sommeil, la concentration et l'équilibre émotionnel.");
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://methodes-douces-bordeaux.fr/neurofeedback");
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = 'https://methodes-douces-bordeaux.fr/neurofeedback';
      document.head.appendChild(newCanonical);
    }

    // Add VideoObject structured data for SEO
    const videoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Explication du Neurofeedback Dynamique",
      "description": "Découvrez le fonctionnement du neurofeedback dynamique, une méthode naturelle pour gérer le stress, améliorer le sommeil et la concentration à Tresses près de Bordeaux.",
      "thumbnailUrl": "https://methodes-douces-bordeaux.fr/og-image-1200x630.png",
      "uploadDate": "2024-01-01T09:00:00+01:00",
      "contentUrl": "https://player.vimeo.com/video/1142362792",
      "embedUrl": "https://player.vimeo.com/video/1142362792?h=36874df46f"
    };
    const existingVideoSchema = document.querySelector('script[data-video-schema]');
    if (existingVideoSchema) {
      existingVideoSchema.textContent = JSON.stringify(videoSchema);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-video-schema', 'true');
      script.textContent = JSON.stringify(videoSchema);
      document.head.appendChild(script);
    }

    // Load ThriveCart script
    const thriveScript = document.createElement('script');
    thriveScript.src = '//tinder.thrivecart.com/embed/v1/thrivecart.js';
    thriveScript.async = true;
    document.body.appendChild(thriveScript);

    return () => {
      if (thriveScript.parentNode) {
        document.body.removeChild(thriveScript);
      }
    };
  }, []);
  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 100);
  };
  const benefits = [{
    icon: Brain,
    title: "Apaisement mental",
    description: "Réduction de la surcharge mentale et amélioration de la clarté d'esprit"
  }, {
    icon: Moon,
    title: "Sommeil réparateur",
    description: "Amélioration de la qualité du sommeil et facilitation de l'endormissement"
  }, {
    icon: Heart,
    title: "Équilibre émotionnel",
    description: "Meilleure gestion des émotions et diminution de l'agitation intérieure"
  }, {
    icon: Zap,
    title: "Concentration accrue",
    description: "Renforcement des capacités de concentration et de focus"
  }];
  const processSteps = ["Entretien initial pour comprendre vos besoins et objectifs", "Installation confortable avec capteurs non invasifs", "Séance d'entraînement cérébral guidée (33 minutes)", "Débriefing et ajustement du protocole si nécessaire"];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{
          label: "Accueil",
          path: "/"
        }, {
          label: "Neurofeedback Dynamique"
        }]} />
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Neurofeedback Dynamique à Tresses
              </h1>
              <p className="text-xl text-muted-foreground">
                Une approche douce et naturelle pour retrouver apaisement mental, concentration et sommeil paisible
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-lg leading-relaxed">
                  Le <strong>Neurofeedback Dynamique</strong> est une méthode innovante et non invasive qui permet à votre cerveau de s'autoréguler naturellement. Cette approche utilise une technologie avancée pour analyser en temps réel l'activité cérébrale et favoriser un meilleur équilibre mental et émotionnel.
                </p>
                <p className="text-lg leading-relaxed">
                  Particulièrement efficace pour accompagner la gestion du stress, des tensions émotionnelles, des difficultés de sommeil et de l'agitation mentale, le Neurofeedback aide votre cerveau à développer sa résilience face aux situations du quotidien.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Comprendre le Neurofeedback en vidéo
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Découvrez en images comment fonctionne une séance de neurofeedback dynamique et les bienfaits de cette méthode naturelle d'autorégulation cérébrale.
                </p>
              </div>
              <div className="relative w-full" style={{
              padding: "56.25% 0 0 0",
              position: "relative"
            }}>
                <iframe src="https://player.vimeo.com/video/1142362792?h=36874df46f&badge=0&autopause=0&player_id=0&app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }} title="Explication du Neurofeedback Dynamique à Tresses" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Les bienfaits du Neurofeedback
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return <Card key={index} className="hover:shadow-warm transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                          <Icon className="text-white" size={24} />
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Comment se déroule une séance ?
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {processSteps.map((step, index) => <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <p className="text-lg pt-1">{step}</p>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progressive Training */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">
                Un entraînement progressif pour votre cerveau
              </h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Le Neurofeedback fonctionne comme un entraînement : votre cerveau devient progressivement plus efficient au fil des séances. Les premiers effets ressentis sont généralement un plus grand détachement face aux situations stressantes, davantage de sérénité et d'apaisement, ainsi qu'un sommeil plus réparateur.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Cette méthode douce et naturelle est adaptée aux adultes, enfants et adolescents. Chaque accompagnement est personnalisé pour répondre à vos besoins spécifiques.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Questions fréquentes sur le Neurofeedback
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  Combien de séances sont nécessaires ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Le nombre de séances varie selon les besoins de chacun. En général, nous recommandons un minimum de 10 à 20 séances pour constater des changements durables. Les premiers effets peuvent être ressentis dès les premières séances, mais le cerveau nécessite du temps pour intégrer ces nouveaux apprentissages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  Quelle est la durée d'une séance ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Une séance de neurofeedback dure environ 33 minutes pour l'entraînement cérébral lui-même, auxquelles s'ajoutent le temps d'installation et le débriefing. Comptez environ 45 minutes à 1 heure au total pour une séance complète.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  Le neurofeedback est-il adapté aux enfants ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Oui, le neurofeedback dynamique est parfaitement adapté aux enfants dès 5-6 ans. La méthode est douce, non invasive et ne nécessite aucun effort particulier. L'enfant est simplement invité à se détendre pendant que le système analyse l'activité de son cerveau et lui fournit des retours en temps réel.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  Y a-t-il des contre-indications ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Le neurofeedback dynamique est une méthode non invasive et sans danger. Il n'y a pas de contre-indications majeures. Cependant, nous recommandons de nous informer de tout traitement médical en cours ou de toute condition particulière lors de la première séance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  Les effets sont-ils durables ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Oui, les effets du neurofeedback sont généralement durables car il s'agit d'un apprentissage du cerveau. Une fois que le cerveau a appris à mieux s'autoréguler, ces nouvelles capacités restent acquises. Des séances d'entretien peuvent être bénéfiques dans certains cas, mais ne sont pas systématiquement nécessaires.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  Le neurofeedback peut-il remplacer un traitement médical ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Non, le neurofeedback est une méthode de bien-être qui vise à accompagner l'autorégulation naturelle du cerveau. Elle ne remplace en aucun cas un traitement médical prescrit par un professionnel de santé. Il est important de ne jamais arrêter un traitement sans l'avis de votre médecin.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* For whom */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Pour qui ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Adultes</h3>
                  <p className="text-muted-foreground">
                    Gestion du stress professionnel, amélioration du sommeil, équilibre émotionnel
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Adolescents</h3>
                  <p className="text-muted-foreground">
                    Concentration, gestion des émotions, confiance en soi
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Enfants</h3>
                  <p className="text-muted-foreground">
                    Apaisement, difficultés de concentration, agitation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Prêt à retrouver votre équilibre ?
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Réservez votre première séance de Neurofeedback à Tresses et découvrez les bienfaits de cette méthode naturelle
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Eric Gata */}
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center justify-center gap-4">
                    <CardTitle className="text-2xl text-primary">
                      Avec Eric GATA
                    </CardTitle>
                    <img 
                      src={ericPhoto} 
                      alt="Eric GATA praticien neurofeedback à Tresses près de Bordeaux" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="pb-3 border-b border-border/50">
                      <a href="tel:0782386621" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                        <Phone className="text-primary flex-shrink-0" size={20} />
                        <span className="text-base">07 82 38 66 21</span>
                      </a>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span className="text-base">Lundi : 9h00-12h00 / 14h00-18h30</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span className="text-base">Mardi : 9h00-12h00 / 14h00-18h30</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span className="text-base">Mercredi : 9h00-12h00</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span className="text-base">Jeudi : 9h00-12h00</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span className="text-base">Vendredi : 9h00-12h00 / 14h00-18h30</span>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" onClick={scrollToContact} className="w-full bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-transform">
                    Prendre rendez-vous
                  </Button>
                  <a 
                    data-thrivecart-account="ericgata" 
                    data-thrivecart-tpl="v2" 
                    data-thrivecart-product="3" 
                    className="thrivecart-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-8 w-full bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-transform cursor-pointer"
                  >
                    <CreditCard className="size-4" />
                    Neuro paiement en ligne avec Eric
                  </a>
                </CardContent>
              </Card>

              {/* Sylvia RUI */}
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center justify-center gap-4">
                    <CardTitle className="text-2xl text-primary">
                      Avec Sylvia RUI
                    </CardTitle>
                    <img 
                      src={sylviaPhoto} 
                      alt="Sylvia RUI praticienne neurofeedback à Tresses près de Bordeaux" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="pb-3 border-b border-border/50">
                      <a href="tel:0783358869" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                        <Phone className="text-primary flex-shrink-0" size={20} />
                        <span className="text-base">07 83 35 88 69</span>
                      </a>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span className="text-base">Mercredi : 13h00-18h00</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span className="text-base">Jeudi : 13h00-18h00</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-transform"
                    onClick={() => setIsContactDialogOpen(true)}
                  >
                    Prendre rendez-vous
                  </Button>
                  <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-full h-11 px-8 bg-muted text-muted-foreground cursor-default">
                    Paiement sur place
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Le saviez-vous */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                💡 Le saviez-vous ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le neurofeedback peut être combiné avec nos autres accompagnements comme 
                <strong> l'hypnose et l'EFT-H</strong> pour des résultats encore plus complets. 
                Cette synergie permet de travailler à la fois sur le cerveau, les émotions 
                et les comportements.
              </p>
              <a href="/hypnose-eft-h" className="text-primary hover:underline font-medium inline-block">
                Découvrir l'hypnose et l'EFT-H →
              </a>
            </div>
          </div>
        </section>

        {/* Liens locaux SEO */}
        <section className="container mx-auto px-4 py-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto mb-4">
            Vous êtes à Bordeaux, Cenon ou Floirac ? Découvrez également les accompagnements dans votre secteur :
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/neurofeedback-bordeaux" className="text-primary hover:underline">Neurofeedback Bordeaux</a>
            <a href="/neurofeedback-cenon" className="text-primary hover:underline">Neurofeedback Cenon</a>
            <a href="/neurofeedback-floirac" className="text-primary hover:underline">Neurofeedback Floirac</a>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="container mx-auto px-4 py-8">
          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto italic">
            Ces méthodes visent au bien-être et ne remplacent pas un suivi médical si nécessaire.
          </p>
        </section>
      </main>

      <ContactSylviaDialog 
        open={isContactDialogOpen} 
        onOpenChange={setIsContactDialogOpen} 
      />

      <Footer />
    </div>;
};
export default Neurofeedback;