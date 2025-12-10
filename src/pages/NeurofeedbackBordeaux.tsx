import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NeurofeedbackBordeaux = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Neurofeedback Dynamique Bordeaux - Cabinet Méthodes Douces",
    "description": "Séances de neurofeedback dynamique à Tresses, près de Bordeaux. Accompagnement personnalisé pour le stress, le sommeil et le bien-être.",
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
    "url": "https://methodes-douces-bordeaux.fr/neurofeedback-bordeaux",
    "areaServed": [
      { "@type": "City", "name": "Bordeaux" },
      { "@type": "City", "name": "Tresses" },
      { "@type": "City", "name": "Talence" },
      { "@type": "City", "name": "Mérignac" },
      { "@type": "City", "name": "Pessac" }
    ],
    "priceRange": "€€"
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Neurofeedback Bordeaux | Séances à Tresses près de Bordeaux</title>
        <meta name="description" content="Neurofeedback dynamique à Bordeaux et Tresses. Méthode naturelle pour le stress, le sommeil et le bien-être. Cabinet accessible depuis Bordeaux, Talence, Mérignac." />
        <meta name="keywords" content="neurofeedback Bordeaux, neurofeedback Tresses, neurofeedback dynamique Gironde, bien-être Bordeaux, stress Bordeaux" />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/neurofeedback-bordeaux" />
        <meta property="og:title" content="Neurofeedback Bordeaux | Cabinet Méthodes Douces Tresses" />
        <meta property="og:description" content="Séances de neurofeedback dynamique près de Bordeaux. Accompagnement naturel pour le stress, sommeil et bien-être." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/neurofeedback-bordeaux" />
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
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Cabinet à Tresses, à 10 min de Bordeaux</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Neurofeedback Dynamique à Bordeaux
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Retrouvez calme et sérénité grâce au neurofeedback dynamique. 
                Cabinet situé à Tresses, facilement accessible depuis Bordeaux et sa métropole.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/neurofeedback">Découvrir le neurofeedback</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  <a href="tel:+33664873056">
                    <Phone className="mr-2 h-4 w-4" />
                    06 64 87 30 56
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">
              Pourquoi choisir le neurofeedback à Bordeaux ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Méthode naturelle",
                  description: "Sans médicament, le neurofeedback aide votre cerveau à s'autoréguler naturellement."
                },
                {
                  title: "Résultats durables",
                  description: "Les bénéfices du neurofeedback s'installent progressivement et se maintiennent dans le temps."
                },
                {
                  title: "Adapté à tous",
                  description: "Adultes, enfants et adolescents peuvent bénéficier du neurofeedback dynamique."
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-card border border-border">
                  <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Localisation Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
                Accès facile depuis Bordeaux
              </h2>
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Adresse du cabinet
                    </h3>
                    <p className="text-muted-foreground mb-2">8 avenue de la Gardette</p>
                    <p className="text-muted-foreground mb-4">33370 Tresses</p>
                    <p className="text-sm text-muted-foreground">
                      À 10 minutes de Bordeaux centre, accessible depuis Talence, Mérignac, Pessac, Gradignan et toute la métropole bordelaise.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Horaires
                    </h3>
                    <p className="text-muted-foreground mb-1">Lundi, Mardi, Vendredi : 9h-12h</p>
                    <p className="text-muted-foreground mb-1">Mercredi, Jeudi : 9h-18h</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Sur rendez-vous uniquement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Prêt à essayer le neurofeedback ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contactez-nous pour en savoir plus ou prendre rendez-vous dans notre cabinet à Tresses.
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/neurofeedback">En savoir plus sur le neurofeedback</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NeurofeedbackBordeaux;
