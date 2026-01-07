import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Heart, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HypnoseCenon = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AGP – Méthodes douces & Neurofeedback",
    description:
      "Hypnose à Cenon : séances professionnelles pour réduire le stress, améliorer la confiance, libérer les blocages émotionnels et retrouver une stabilité intérieure.",
    image: "https://methodes-douces-bordeaux.fr/og-agp-1200x630.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 Galerie Marchande",
      addressLocality: "Tresses",
      postalCode: "33370",
      addressRegion: "Gironde",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8637,
      longitude: -0.4837,
    },
    telephone: "+33 7 82 38 66 21",
    url: "https://methodes-douces-bordeaux.fr/hypnose-cenon",
    areaServed: [
      { "@type": "City", name: "Cenon" },
      { "@type": "AdministrativeArea", name: "Bordeaux Métropole" },
    ],
    priceRange: "€€",
  };

  const reasons = [
    { icon: Zap, text: "Stress persistant ou surcharge mentale" },
    { icon: Sparkles, text: "Manque de confiance ou d'estime de soi" },
    { icon: Brain, text: "Anxiété ou pensées envahissantes" },
    { icon: Heart, text: "Émotions difficiles à gérer" },
    { icon: Users, text: "Difficultés relationnelles ou hypersensibilité" },
    { icon: Shield, text: "Peurs, appréhensions, blocages" },
  ];

  const results = [
    "Calme intérieur durable",
    "Gestion émotionnelle améliorée",
    "Confiance renforcée",
    "Plus grande clarté mentale",
    "Diminution du stress",
    "Meilleure stabilité au quotidien",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hypnose Cenon | Gestion du stress, émotions & confiance</title>
        <meta
          name="description"
          content="Hypnose à Cenon : libération émotionnelle, confiance en soi, réduction du stress et accompagnement du changement. Une approche douce et personnalisée, adaptée à chacun."
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/hypnose-cenon" />
        <meta property="og:title" content="Hypnose Cenon | Gestion du stress & émotions" />
        <meta
          property="og:description"
          content="Séances d'hypnose à Cenon pour apaiser le stress, clarifier les émotions et retrouver confiance en soi."
        />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/og-agp-1200x630.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">Cabinet à Tresses — proche de Cenon</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Hypnose à Cenon – Une méthode douce pour apaiser votre mental
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              L'hypnose permet de comprendre et transformer en douceur vos réactions émotionnelles. Elle constitue un
              accompagnement efficace pour apaiser les tensions internes, réduire le stress et restaurer votre équilibre
              intérieur — sans forcer, sans pression, à votre rythme.
            </p>

            <img
              src="/images/agp-hero-2026-01-07.jpg"
              alt="Cabinet AGP hypnose Cenon Bordeaux Floirac – méthodes douces et neurofeedback en Gironde"
              className="w-full rounded-xl shadow-lg mb-8"
            />
          </div>
        </section>

        {/* MOTIFS */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🌿 Motifs fréquents de consultation en hypnose à Cenon
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Beaucoup de personnes consultent lorsqu'elles sentent que leur mental tourne « trop vite », qu'une émotion
              prend trop de place ou qu'un blocage persiste malgré les efforts. L'hypnose offre un espace d'apaisement
              et de compréhension profonde.
            </p>

            <ul className="space-y-3 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground">
                  <reason.icon className="h-5 w-5 text-primary" />
                  <span>{reason.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SÉANCE */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🎧 Comment se déroule une séance d'hypnose ?
            </h2>

            <div className="bg-card p-8 rounded-xl border border-border leading-relaxed text-muted-foreground">
              <p className="mb-4">
                Une séance est un moment calme et guidé, où vous restez parfaitement conscient. L'état d'hypnose
                ressemble à une profonde relaxation qui permet d'accéder à des ressources internes habituellement moins
                disponibles.
              </p>

              <p className="mb-4">
                Il ne s'agit pas de "perdre le contrôle", mais au contraire, d'apprivoiser ce qui vous traverse afin d'y
                répondre avec plus de sérénité.
              </p>

              <p>Chaque séance est entièrement personnalisée pour correspondre à votre rythme et votre personnalité.</p>
            </div>
          </div>
        </section>

        {/* RÉSULTATS */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              💡 Résultats observés grâce à l'hypnose
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Les changements peuvent être progressifs ou rapides selon chacun. Voici ce que les personnes rapportent le
              plus souvent à l'issue des séances :
            </p>

            <ul className="grid md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-lg text-muted-foreground bg-card p-4 rounded-lg border border-border"
                >
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">👉 En savoir plus sur l'hypnose</h2>
            <p className="text-muted-foreground mb-8">
              Découvrez l'approche complète en hypnose et EFT-H proposée au cabinet.
            </p>

            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/hypnose-eft-h">Découvrir l'hypnose</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HypnoseCenon;
