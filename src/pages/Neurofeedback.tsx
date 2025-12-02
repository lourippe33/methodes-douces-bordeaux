import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Moon, Zap, CheckCircle } from "lucide-react";
const Neurofeedback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Neurofeedback Dynamique à Tresses - Gestion du Stress et Sommeil | Eric Gata";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Neurofeedback dynamique à Tresses près de Bordeaux. Méthode naturelle pour gérer le stress, améliorer le sommeil, la concentration et l'équilibre émotionnel.");
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://www.ericgata.fr/neurofeedback");
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = 'https://www.ericgata.fr/neurofeedback';
      document.head.appendChild(newCanonical);
    }

    // Add VideoObject structured data for SEO
    const videoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Explication du Neurofeedback Dynamique",
      "description": "Découvrez le fonctionnement du neurofeedback dynamique, une méthode naturelle pour gérer le stress, améliorer le sommeil et la concentration à Tresses près de Bordeaux.",
      "thumbnailUrl": "https://www.ericgata.fr/og-image-1200x630.png",
      "uploadDate": "2024-01-01",
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
                  <CardTitle className="text-2xl text-center text-primary">
                    Avec Eric GATA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-lg">Lundi : 9h00-12h00 / 14h00-18h30</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-lg">Mardi : 9h00-12h00 / 14h00-18h30</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-lg">Vendredi : 9h00-12h00 / 14h00-18h30</span>
                    </div>
                  </div>
                  <Button size="lg" onClick={scrollToContact} className="w-full bg-primary text-white hover:bg-primary/90">
                    Prendre rendez-vous
                  </Button>
                </CardContent>
              </Card>

              {/* Sylvia RUI */}
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-primary">
                    Avec Sylvia RUI
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-lg">Mercredi : 13h00-18h00</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-lg">Jeudi : 13h00-18h00</span>
                    </div>
                  </div>
                  <Button size="lg" asChild className="w-full bg-primary text-white hover:bg-primary/90">
                    <a href="mailto:sylvia.rui33@gmail.com">
                      Contacter par email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="container mx-auto px-4 py-8">
          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto italic">
            Ces méthodes visent au bien-être et ne remplacent pas un suivi médical si nécessaire.
          </p>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Neurofeedback;