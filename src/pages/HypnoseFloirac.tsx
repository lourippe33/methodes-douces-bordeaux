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
    "name": "Méthodes Douces Bordeaux",
    "description": "Séances d'hypnose à Floirac : approche douce pour gérer le stress, apaiser les émotions et retrouver confiance.",
    "image": "https://methodes-douces-bordeaux.fr/og-image-1200x630.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 avenue de la Gardette",
      "addressLocality": "Tresses",
      "postalCode": "33370",
      "addressRegion": "Gironde",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.8637,
      "longitude": -0.4837
    },
    "telephone": "+33 6 64 87 30 56",
    "url": "https://methodes-douces-bordeaux.fr/hypnose-floirac",
    "areaServed": [
      { "@type": "City", "name": "Floirac" },
      { "@type": "AdministrativeArea", "name": "Bordeaux Métropole" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hypnose",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hypnose"
          }
        }
      ]
    },
    "priceRange": "€€"
  };

  const audiences = [
    { icon: Users, text: "Adultes stressés" },
    { icon: Heart, text: "Personnes hypersensibles" },
    { icon: Shield, text: "Manque de confiance" },
    { icon: Brain, text: "Difficulté à lâcher prise" },
  ];

  const results = [
    "Émotions plus stables",
    "Mental apaisé",
    "Confiance retrouvée",
    "Prise de recul",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hypnose Floirac | Stress, émotions & confiance en soi</title>
        <meta name="description" content="Séances d'hypnose à Floirac : approche douce pour gérer le stress, apaiser les émotions et retrouver confiance." />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/hypnose-floirac" />
        <meta property="og:title" content="Hypnose Floirac | Stress, émotions & confiance en soi" />
        <meta property="og:description" content="Séances d'hypnose à Floirac : approche douce pour gérer le stress, apaiser les émotions et retrouver confiance." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/hypnose-floirac" />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/og-image-1200x630.png" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Cabinet à Tresses, proche de Floirac</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Hypnose à Floirac – Une méthode douce pour retrouver confiance et apaisement
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                L'hypnose aide les personnes de Floirac à mieux gérer leurs émotions, réduire le stress et dépasser les blocages.
              </p>
              <img 
                src="/og-image-1200x630.png" 
                alt="Hypnose à Floirac – séance d'accompagnement émotionnel"
                className="w-full rounded-xl shadow-lg mb-8"
              />
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                🌿 Pour qui ?
              </h2>
              <ul className="space-y-3 mb-8">
                {audiences.map((audience, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground">
                    <audience.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{audience.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                💡 Résultats
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {results.map((result, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground bg-card p-4 rounded-lg border border-border">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              👉 Page principale
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Découvrez l'accompagnement complet en hypnose et EFT-H.
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

export default HypnoseFloirac;
