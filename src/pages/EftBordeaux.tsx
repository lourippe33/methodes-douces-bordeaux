import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Heart, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const EftBordeaux = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Méthodes Douces Bordeaux",
    "description": "EFT à Bordeaux : technique de libération émotionnelle pour apaiser le stress, les blocages et les tensions internes.",
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
    "url": "https://methodes-douces-bordeaux.fr/eft-bordeaux",
    "areaServed": [
      { "@type": "City", "name": "Bordeaux" },
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

  const reasons = [
    { icon: Zap, text: "Stress important" },
    { icon: Brain, text: "Ruminations" },
    { icon: Heart, text: "Émotions envahissantes" },
    { icon: Shield, text: "Peurs ou blocages" },
    { icon: Sparkles, text: "Surcharge mentale" },
  ];

  const results = [
    "Libération émotionnelle",
    "Plus de légèreté",
    "Apaisement rapide",
    "Sentiment de contrôle",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EFT Bordeaux | Libération émotionnelle & gestion du stress</title>
        <meta name="description" content="EFT à Bordeaux : technique de libération émotionnelle pour apaiser le stress, les blocages et les tensions internes." />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/eft-bordeaux" />
        <meta property="og:title" content="EFT Bordeaux | Libération émotionnelle & gestion du stress" />
        <meta property="og:description" content="EFT à Bordeaux : technique de libération émotionnelle pour apaiser le stress, les blocages et les tensions internes." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/eft-bordeaux" />
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
                <span className="text-sm font-medium">Cabinet à Tresses, à 10 min de Bordeaux</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                EFT à Bordeaux – Une méthode simple et puissante pour libérer vos émotions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                L'EFT est une technique de stimulation légère de points d'acupuncture utilisée pour réduire l'intensité émotionnelle liée au stress, aux peurs ou aux blocages.
              </p>
              <img 
                src="/og-image-1200x630.png" 
                alt="EFT à Bordeaux – session de tapping émotionnel"
                className="w-full rounded-xl shadow-lg mb-8"
              />
            </div>
          </div>
        </section>

        {/* Pourquoi essayer */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                🌿 Pourquoi essayer l'EFT à Bordeaux ?
              </h2>
              <ul className="space-y-3 mb-8">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground">
                    <reason.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{reason.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Bienfaits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                💡 Bienfaits
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

export default EftBordeaux;
