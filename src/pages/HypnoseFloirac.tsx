import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HypnoseFloirac = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Méthodes Douces Bordeaux",
    description:
      "Hypnose à Floirac : accompagnement professionnel pour apaiser le stress, gérer les émotions, retrouver confiance et dépasser les blocages du quotidien.",
    image: "https://methodes-douces-bordeaux.fr/og-image-1200x630.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 avenue de la Gardette",
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
    telephone: "+33 6 64 87 30 56",
    url: "https://methodes-douces-bordeaux.fr/hypnose-floirac",
    areaServed: [
      { "@type": "City", name: "Floirac" },
      { "@type": "AdministrativeArea", name: "Bordeaux Métropole" },
    ],
    priceRange: "€€",
  };

  const audiences = [
    { icon: Users, text: "Personnes stressées ou épuisées" },
    { icon: Heart, text: "Hypersensibilité ou émotions intenses" },
    { icon: Shield, text: "Manque de confiance ou auto-sabotage" },
    { icon: Brain, text: "Difficulté à lâcher prise ou mental envahissant" },
  ];

  const results = [
    "Esprit plus calme",
    "Émotions apaisées",
    "Confiance renforcée",
    "Plus de clarté et de recul",
    "Réduction du stress",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hypnose Floirac | Gestion du stress, émotions & confiance</title>
        <meta
          name="description"
          content="Hypnose à Floirac : accompagnement professionnel pour apaiser le stress, gérer les émotions, dépasser les blocages et retrouver confiance grâce à une méthode douce et personnalisée."
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/hypnose-floirac" />
        <meta property="og:title" content="Hypnose Floirac | Stress, émotions & confiance" />
        <meta
          property="og:description"
          content="Séances d'hypnose à Floirac pour retrouver calme, confiance et apaisement intérieur."
        />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/og-image-1200x630.png" />
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
              <span className="text-sm font-medium">Cabinet à Tresses — proche de Floirac</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Hypnose à Floirac – Une méthode douce pour apaiser vos émotions
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              L’hypnose est une approche naturelle qui aide à réduire le stress, à clarifier les émotions et à
              transformer des mécanismes profondément ancrés. Elle accompagne les habitants de Floirac dans des moments
              de surcharge, d'incertitude ou de perte de repères.
            </p>

            <img
              src="/hero-image.jpg"
              alt="Hypnose à Floirac – séance d'accompagnement émotionnel"
              className="w-full rounded-xl shadow-lg mb-8"
            />
          </div>
        </section>

        {/* POUR QUI */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🌿 Pour qui l’hypnose est-elle utile à Floirac ?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              L’hypnose est souvent choisie lorsqu’on sent que l’esprit tourne trop vite, que les émotions débordent ou
              qu’un blocage revient encore et encore malgré les efforts conscients.
            </p>

            <ul className="space-y-3 mb-8">
              {audiences.map((audience, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground">
                  <audience.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{audience.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SEANCE */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🎧 Comment se déroule une séance d’hypnose ?
            </h2>

            <div className="bg-card p-8 border border-border rounded-xl text-muted-foreground leading-relaxed">
              <p className="mb-4">
                Une séance d’hypnose est un moment calme et sécurisé, durant lequel vous restez conscient et maître de
                ce que vous vivez.
              </p>
              <p className="mb-4">
                L’état hypnotique ressemble à une relaxation profonde, un état où l’esprit se concentre vers
                l’intérieur, permettant d’accéder plus facilement aux ressources internes et à des schémas plus apaisés.
              </p>
              <p>
                Chaque séance est adaptée à votre rythme, à votre personnalité et à votre objectif. Rien n’est imposé :
                l’hypnose vous accompagne, elle ne vous force jamais.
              </p>
            </div>
          </div>
        </section>

        {/* RESULTATS */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              💡 Résultats observés grâce à l’hypnose
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Les personnes accompagnées rapportent une amélioration progressive ou parfois très rapide, selon leur
              sensibilité et le sujet abordé.
            </p>

            <ul className="grid md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-lg text-muted-foreground bg-card p-4 rounded-lg border border-border"
                >
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">👉 En savoir plus sur l’hypnose</h2>
            <p className="text-muted-foreground mb-8">Découvrez l’approche complète proposée au cabinet.</p>
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

export default HypnoseFloirac;
