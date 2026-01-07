import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Brain, Sparkles, Moon, Heart, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const NeurofeedbackCenon = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Méthodes Douces Bordeaux",
    description:
      "Séances de neurofeedback à Cenon : méthode naturelle pour apaiser le mental, améliorer le sommeil, diminuer le stress et retrouver un meilleur équilibre émotionnel.",
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
    url: "https://methodes-douces-bordeaux.fr/neurofeedback-cenon",
    areaServed: [
      { "@type": "City", name: "Cenon" },
      { "@type": "AdministrativeArea", name: "Bordeaux Métropole" },
    ],
    priceRange: "€€",
  };

  const reasons = [
    { icon: Brain, text: "Apaiser un mental en surcharge" },
    { icon: Sparkles, text: "Réduire le stress quotidien" },
    { icon: Moon, text: "Retrouver un sommeil plus profond et stable" },
    { icon: Heart, text: "Accompagner un épuisement émotionnel" },
    { icon: Zap, text: "Améliorer la concentration ou l’attention" },
    { icon: Users, text: "Réguler les émotions au quotidien" },
  ];

  const results = [
    "Moins de ruminations",
    "Sommeil plus réparateur",
    "Réduction des réveils nocturnes",
    "Calme intérieur plus présent",
    "Baisse progressive du stress",
    "Meilleure concentration",
  ];

  const audiences = [
    "Adultes stressés ou surchargés",
    "Personnes en burn-out ou fatigue mentale",
    "Enfants recherchant plus de stabilité",
    "Adolescents anxieux ou au sommeil difficile",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Neurofeedback Cenon | Réduction du stress & amélioration du sommeil</title>
        <meta
          name="description"
          content="Neurofeedback à Cenon : une méthode douce et naturelle pour apaiser le mental, réduire le stress, améliorer le sommeil et retrouver plus de clarté."
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/neurofeedback-cenon" />
        <meta property="og:title" content="Neurofeedback Cenon | Stress, sommeil & clarté mentale" />
        <meta
          property="og:description"
          content="Séances de neurofeedback dynamique pour calmer le mental, réduire le stress et retrouver un meilleur sommeil."
        />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/neurofeedback-cenon" />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/og-image-1200x630.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">Cabinet à Tresses — à 8 min de Cenon</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Neurofeedback à Cenon – Une méthode naturelle pour apaiser le mental
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Le neurofeedback dynamique attire de plus en plus d’habitants de Cenon qui recherchent une solution douce
              pour diminuer le stress, améliorer leur sommeil et retrouver une sensation de calme mental. Cette méthode
              non invasive accompagne naturellement le cerveau vers un fonctionnement plus stable.
            </p>

            <img
              src="/hero-image.jpg"
              alt="Neurofeedback à Cenon – séance d'accompagnement"
              className="w-full rounded-xl shadow-lg mb-8"
            />
          </div>
        </section>

        {/* POURQUOI CONSULTER */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🌿 Pourquoi consulter en neurofeedback à Cenon ?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Le neurofeedback est souvent choisi à Cenon pour apaiser le mental, réduire les tensions internes et
              retrouver un sommeil plus naturel. Il permet au cerveau d’observer ses propres variations et de se
              réajuster spontanément, sans stimulation externe.
            </p>

            <ul className="space-y-3 mb-8">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                  <r.icon className="h-5 w-5 text-primary" />
                  <span>{r.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              Beaucoup de clients décrivent un effet d’apaisement progressif, comme si leur système nerveux retrouvait
              un rythme plus tranquille.
            </p>
          </div>
        </section>

        {/* SEANCE */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">🎧 Comment se déroule une séance ?</h2>

            <div className="bg-card border border-border rounded-xl p-8 text-muted-foreground leading-relaxed">
              <p className="mb-4">
                Une séance de neurofeedback dure <strong>33 minutes</strong>. Vous êtes confortablement installé, vous
                écoutez une musique tandis que l’appareil analyse les variations de l’activité cérébrale en temps réel.
              </p>

              <p>
                Lorsqu’une irrégularité apparaît, un micro-signal sonore est envoyé, permettant au cerveau de se
                réorganiser naturellement.
              </p>

              <p className="mt-4">Le processus est entièrement naturel : rien n’est imposé au système nerveux.</p>
            </div>
          </div>
        </section>

        {/* RESULTATS */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              💡 Résultats fréquemment observés à Cenon
            </h2>

            <ul className="grid md:grid-cols-2 gap-4">
              {results.map((r, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border text-lg text-muted-foreground"
                >
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed mt-6">
              Les changements peuvent être progressifs : certaines personnes remarquent un apaisement dès les premières
              séances, d’autres observent une amélioration plus douce mais durable.
            </p>
          </div>
        </section>

        {/* POUR QUI */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">📍 Pour qui ?</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Le neurofeedback convient à une grande diversité de profils :
            </p>

            <ul className="space-y-3 text-lg text-muted-foreground">
              {audiences.map((a, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
          <div className="container mx-auto px-4 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">👉 En savoir plus</h2>
            <p className="text-muted-foreground mb-8">Découvrez la page complète dédiée au neurofeedback.</p>

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
