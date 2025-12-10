import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Headphones, Users, Sparkles, Brain, Moon, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const NeurofeedbackCenon = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Méthodes Douces Bordeaux",
    "description": "Séances de neurofeedback à Cenon : méthode naturelle pour apaiser le mental, retrouver de la clarté, diminuer les réveils nocturnes et mieux gérer le stress.",
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
    "url": "https://methodes-douces-bordeaux.fr/neurofeedback-cenon",
    "areaServed": [
      { "@type": "City", "name": "Cenon" },
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
    { icon: Brain, text: "Apaiser un mental trop actif" },
    { icon: Sparkles, text: "Réduire le stress du quotidien" },
    { icon: Moon, text: "Retrouver un sommeil plus profond" },
    { icon: Heart, text: "Accompagner un épuisement émotionnel" },
    { icon: Zap, text: "Améliorer la concentration" },
    { icon: Users, text: "Réguler les émotions" },
  ];

  const results = [
    "Endormissement facilité",
    "Moins de réveils nocturnes",
    "Plus de calme intérieur",
    "Meilleure concentration",
    "Baisse du stress chronique",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Neurofeedback Cenon | Réduction du stress & amélioration du sommeil</title>
        <meta name="description" content="Séances de neurofeedback à Cenon : méthode naturelle pour apaiser le mental, retrouver de la clarté, diminuer les réveils nocturnes et mieux gérer le stress." />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/neurofeedback-cenon" />
        <meta property="og:title" content="Neurofeedback Cenon | Réduction du stress & amélioration du sommeil" />
        <meta property="og:description" content="Séances de neurofeedback à Cenon : méthode naturelle pour apaiser le mental, retrouver de la clarté, diminuer les réveils nocturnes et mieux gérer le stress." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/neurofeedback-cenon" />
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
                Neurofeedback à Cenon – Retrouver apaisement et confort mental
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                À Cenon, le neurofeedback dynamique attire toutes les personnes recherchant une solution naturelle pour calmer le mental, réduire les tensions et retrouver un meilleur sommeil.
              </p>
              <img 
                src="/og-image-1200x630.png" 
                alt="Neurofeedback à Cenon – séance apaisante pour le stress et le sommeil"
                className="w-full rounded-xl shadow-lg mb-8"
              />
            </div>
          </div>
        </section>

        {/* Pourquoi consulter */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                🌿 Pourquoi consulter à Cenon ?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">Les habitants de Cenon utilisent le neurofeedback pour :</p>
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

        {/* Séance */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                🎧 Une séance simple et relaxante
              </h2>
              <div className="bg-card rounded-xl p-8 border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong>Durée : 33 minutes.</strong> Vous êtes installé confortablement, vous écoutez une musique, tandis que le système détecte les variations de l'activité cérébrale.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Le cerveau ajuste lui-même son fonctionnement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                💡 Résultats fréquemment observés
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
              Découvrez notre accompagnement neurofeedback complet.
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

export default NeurofeedbackCenon;
