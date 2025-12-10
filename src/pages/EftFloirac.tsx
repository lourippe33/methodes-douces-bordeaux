import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Heart, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EftFloirac = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Méthodes Douces Bordeaux",
    "description": "Séances EFT à Floirac : méthode douce pour relâcher les tensions, réduire le stress et apaiser les émotions.",
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
    "url": "https://methodes-douces-bordeaux.fr/eft-floirac",
    "areaServed": [
      { "@type": "City", "name": "Floirac" },
      { "@type": "AdministrativeArea", "name": "Bordeaux Métropole" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "EFT",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EFT - Emotional Freedom Techniques"
          }
        }
      ]
    },
    "priceRange": "€€"
  };

  const audiences = [
    { icon: Users, text: "Personnes stressées" },
    { icon: Zap, text: "Adultes sous tension" },
    { icon: Heart, text: "Émotions instables" },
    { icon: Brain, text: "Surcharge mentale" },
  ];

  const results = [
    "Détente intérieure",
    "Soulagement émotionnel",
    "Plus grande clarté d'esprit",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EFT Floirac | Apaisement & libération émotionnelle</title>
        <meta name="description" content="Séances EFT à Floirac : méthode douce pour relâcher les tensions, réduire le stress et apaiser les émotions." />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/eft-floirac" />
        <meta property="og:title" content="EFT Floirac | Apaisement & libération émotionnelle" />
        <meta property="og:description" content="Séances EFT à Floirac : méthode douce pour relâcher les tensions, réduire le stress et apaiser les émotions." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/eft-floirac" />
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
                EFT à Floirac – Pour relâcher la pression et retrouver de la sérénité
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                L'EFT permet d'apaiser rapidement les tensions émotionnelles qui s'accumulent.
              </p>
              <img 
                src="/og-image-1200x630.png" 
                alt="EFT à Floirac – séance d'accompagnement émotionnel"
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
              👉 En savoir plus
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Découvrez l'accompagnement complet en hypnose et EFT-H.
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/hypnose-eft-h">Découvrir l'EFT-H</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EftFloirac;
