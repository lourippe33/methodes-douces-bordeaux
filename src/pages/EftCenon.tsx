import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Heart, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const EftCenon = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Méthodes Douces Bordeaux",
    "description": "EFT à Cenon : technique douce pour apaiser le stress, libérer les émotions et retrouver un état plus stable.",
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
    "url": "https://methodes-douces-bordeaux.fr/eft-cenon",
    "areaServed": [
      { "@type": "City", "name": "Cenon" },
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
    { icon: Zap, text: "Stress chronique" },
    { icon: Brain, text: "Anxiété" },
    { icon: Shield, text: "Peurs" },
    { icon: Heart, text: "Hypersensibilité" },
    { icon: Sparkles, text: "Surcharge émotionnelle" },
  ];

  const results = [
    "Détente immédiate",
    "Libération émotionnelle",
    "Apaisement durable",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EFT Cenon | Stress & équilibre émotionnel</title>
        <meta name="description" content="EFT à Cenon : technique douce pour apaiser le stress, libérer les émotions et retrouver un état plus stable." />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/eft-cenon" />
        <meta property="og:title" content="EFT Cenon | Stress & équilibre émotionnel" />
        <meta property="og:description" content="EFT à Cenon : technique douce pour apaiser le stress, libérer les émotions et retrouver un état plus stable." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/eft-cenon" />
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
                <span className="text-sm font-medium">Cabinet à Tresses, proche de Cenon</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                EFT à Cenon – Pour calmer les émotions et apaiser le mental
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                L'EFT est largement utilisée pour réduire l'intensité des pensées et émotions qui perturbent le quotidien.
              </p>
              <img 
                src="/og-image-1200x630.png" 
                alt="EFT à Cenon – tapping pour réduire le stress"
                className="w-full rounded-xl shadow-lg mb-8"
              />
            </div>
          </div>
        </section>

        {/* Utilisée pour */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                🌿 Utilisée pour :
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
              👉 Lien
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

export default EftCenon;
