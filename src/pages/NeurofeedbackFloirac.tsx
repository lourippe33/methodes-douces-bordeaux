import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Moon, Zap, Heart, Battery } from "lucide-react";
import { Link } from "react-router-dom";

const NeurofeedbackFloirac = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Méthodes Douces Bordeaux",
    "description": "À Floirac, découvrez le neurofeedback NeurOptimal : une approche douce pour réduire le stress, stabiliser le sommeil et améliorer le bien-être émotionnel.",
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
    "url": "https://methodes-douces-bordeaux.fr/neurofeedback-floirac",
    "areaServed": [
      { "@type": "City", "name": "Floirac" },
      { "@type": "AdministrativeArea", "name": "Bordeaux Métropole" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Neurofeedback",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Neurofeedback NeurOptimal"
          }
        }
      ]
    },
    "priceRange": "€€"
  };

  const reasons = [
    { icon: Zap, text: "Stress intense" },
    { icon: Moon, text: "Sommeil chaotique" },
    { icon: Brain, text: "Réveils nocturnes" },
    { icon: Sparkles, text: "Difficultés de concentration" },
    { icon: Heart, text: "Surcharge émotionnelle" },
    { icon: Battery, text: "Perte d'énergie" },
  ];

  const benefits = [
    "Apaisement global",
    "Sommeil plus stable",
    "Diminution des pensées envahissantes",
    "Meilleure clarté d'esprit",
    "Regain d'élan et de motivation",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Neurofeedback Floirac | Stress, sommeil, clarté mentale</title>
        <meta name="description" content="À Floirac, découvrez le neurofeedback NeurOptimal : une approche douce pour réduire le stress, stabiliser le sommeil et améliorer le bien-être émotionnel." />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/neurofeedback-floirac" />
        <meta property="og:title" content="Neurofeedback Floirac | Stress, sommeil, clarté mentale" />
        <meta property="og:description" content="À Floirac, découvrez le neurofeedback NeurOptimal : une approche douce pour réduire le stress, stabiliser le sommeil et améliorer le bien-être émotionnel." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/neurofeedback-floirac" />
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
                Neurofeedback à Floirac – Pour un mental plus calme et un meilleur sommeil
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Le neurofeedback à Floirac aide les personnes stressées, fatiguées ou en surcharge mentale à retrouver un meilleur équilibre.
              </p>
              <img 
                src="/hero-image.jpg" 
                alt="Cabinet AGP neurofeedback Floirac Bordeaux Cenon – méthodes douces en Gironde"
                className="w-full rounded-xl shadow-lg mb-8"
              />
            </div>
          </div>
        </section>

        {/* Pourquoi choisir */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                🌿 Pourquoi choisir le neurofeedback à Floirac ?
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
                💡 Bienfaits observés
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground bg-card p-4 rounded-lg border border-border">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
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
              Consultez notre page dédiée au neurofeedback.
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/neurofeedback">Découvrir le neurofeedback</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NeurofeedbackFloirac;
