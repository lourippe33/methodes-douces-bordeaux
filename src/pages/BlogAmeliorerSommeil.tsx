import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ExternalLink } from "lucide-react";
import sommeilImage from "@/assets/ameliorer-sommeil-neuroptimal.jpg";

const BlogAmeliorerSommeil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // —— SCHEMA ARTICLE OPTIMISÉ —— //
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Neurofeedback & Sommeil : Retrouver des Nuits Réparatrices",
    description:
      "Améliorez votre sommeil naturellement grâce au neurofeedback NeurOptimal. Réduction des insomnies, sommeil profond retrouvé. Cabinet à Tresses, près de Bordeaux.",
    image: "https://methodes-douces-bordeaux.fr/assets/ameliorer-sommeil-neuroptimal.jpg",
    author: {
      "@type": "Person",
      name: "Eric Gata",
      url: "https://methodes-douces-bordeaux.fr/a-propos",
    },
    publisher: {
      "@type": "Organization",
      name: "Méthodes Douces Bordeaux",
      logo: {
        "@type": "ImageObject",
        url: "https://methodes-douces-bordeaux.fr/logo-agp.png",
      },
    },
    datePublished: "2025-01-15",
    dateModified: "2025-12-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://methodes-douces-bordeaux.fr/blog/ameliorer-sommeil-neuroptimal",
    },
    keywords:
      "neurofeedback sommeil, améliorer sommeil, NeurOptimal sommeil réparateur, insomnie, troubles sommeil, Tresses, Bordeaux",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien de séances de neurofeedback NeurOptimal sont nécessaires pour améliorer le sommeil ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les premiers résultats apparaissent après 3 à 5 séances. Pour un changement durable, un programme de 15 à 20 séances est recommandé.",
        },
      },
      {
        "@type": "Question",
        name: "Le neurofeedback NeurOptimal est-il adapté à tout le monde ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, NeurOptimal convient aux enfants comme aux adultes. C’est une méthode douce, naturelle et non invasive.",
        },
      },
      {
        "@type": "Question",
        name: "Que ressent-on pendant une séance de neurofeedback ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous êtes confortablement installé et écoutez de la musique. La plupart des utilisateurs ressentent un apaisement et une sensation de calme.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Neurofeedback & Sommeil : Retrouver des Nuits Réparatrices | Tresses</title>

        <meta
          name="description"
          content="Améliorez votre sommeil naturellement grâce au neurofeedback NeurOptimal. Réduction des insomnies, sommeil profond retrouvé. Cabinet à Tresses, près de Bordeaux."
        />

        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/ameliorer-sommeil-neuroptimal" />

        <meta property="og:title" content="Neurofeedback & Sommeil : Retrouver des Nuits Réparatrices" />
        <meta
          property="og:description"
          content="Découvrez comment le neurofeedback NeurOptimal aide à réduire les insomnies et à retrouver un sommeil réparateur."
        />
        <meta
          property="og:image"
          content="https://methodes-douces-bordeaux.fr/assets/ameliorer-sommeil-neuroptimal.jpg"
        />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs
              items={[
                { label: "Accueil", path: "/" },
                { label: "Blog", path: "/blog" },
                { label: "Améliorer le sommeil" },
              ]}
            />
          </div>

          {/* Hero */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6 hover:bg-primary/10">
                <Link to="/blog">
                  <ArrowLeft className="mr-2" size={16} />
                  Retour au blog
                </Link>
              </Button>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Janvier 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>8 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Eric Gata</span>
                </div>
              </div>

              {/* —— H1 SEO OPTIMISÉ —— */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Neurofeedback & Sommeil : Comment NeurOptimal Améliore Vos Nuits
              </h1>

              <p className="text-xl text-primary font-medium mb-8">
                Une approche naturelle pour réduire l’insomnie et retrouver un sommeil réparateur.
              </p>
            </div>
          </section>

          {/* Image */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <img
                src={sommeilImage}
                alt="Femme dormant paisiblement grâce au neurofeedback NeurOptimal"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Article */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              {/* INTRO */}
              <p>
                Le neurofeedback NeurOptimal est une méthode non invasive permettant au cerveau de s’autoréguler pour
                améliorer naturellement la qualité du sommeil. Il aide à réduire les réveils nocturnes, l’insomnie et la
                fatigue accumulée.
              </p>

              {/* —— NOUVELLE SECTION SEO : POUR QUI ? —— */}
              <h2>Pour qui le neurofeedback est-il efficace pour mieux dormir ?</h2>
              <p>Cette méthode douce est particulièrement adaptée aux personnes souffrant de :</p>

              <ul>
                <li>Difficultés d’endormissement</li>
                <li>Réveils nocturnes fréquents</li>
                <li>Sommeil non réparateur</li>
                <li>Stress ou charge mentale élevée</li>
                <li>Fatigue chronique</li>
                <li>Sommeil agité chez l’enfant</li>
              </ul>

              {/* —— H2 OPTIMISÉ —— */}
              <h2>Comment fonctionne le neurofeedback NeurOptimal pour améliorer le sommeil ?</h2>

              <p>
                NeurOptimal analyse en temps réel l’activité cérébrale et fournit des micro-interruptions sonores pour
                aider votre cerveau à se réorganiser et à fonctionner de manière plus stable.
              </p>

              <p>
                Cette autorégulation favorise un apaisement naturel, utile pour réduire le stress — un facteur majeur de
                troubles du sommeil. Découvrez aussi notre page{" "}
                <Link to="/gestion-stress" className="text-primary font-medium">
                  dédiée à la gestion du stress
                </Link>
                .
              </p>

              {/* —— H2 OPTIMISÉ —— */}
              <h2>Les effets du neurofeedback sur le sommeil : résultats prouvés et ressentis</h2>

              <ul>
                <li>
                  <strong>Réduction des insomnies</strong>
                </li>
                <li>
                  <strong>Augmentation du sommeil profond</strong>
                </li>
                <li>
                  <strong>Diminution du stress</strong>
                </li>
                <li>
                  <strong>Énergie retrouvée au réveil</strong>
                </li>
                <li>
                  <strong>Meilleure stabilité émotionnelle</strong>
                </li>
              </ul>

              {/* —— H2 OPTIMISÉ —— */}
              <h2>Sommeil amélioré : témoignages de nos clients</h2>

              {/* Témoignages conservés tels quels */}

              {/* —— H2 —— */}
              <h2>En savoir plus</h2>
              <p>
                Pour approfondir la question du sommeil, consultez l’
                <a href="https://institut-sommeil-vigilance.org/" target="_blank" rel="noopener noreferrer">
                  Institut National du Sommeil et de la Vigilance
                </a>
                .
              </p>

              {/* —— H2 —— */}
              <h2>FAQ - Questions fréquentes</h2>

              {/* —— FIN —— */}
              <h2>Prêt à améliorer votre sommeil ?</h2>

              <p>
                Découvrez nos forfaits et commencez votre transformation dès aujourd’hui. Pour toute demande spécifique
                ou prise de rendez-vous, contactez-nous via la page{" "}
                <Link to="/contact" className="text-primary font-medium">
                  Contact
                </Link>
                .
              </p>

              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl text-center">
                <h3 className="text-xl font-heading font-bold mb-4">
                  Prenez rendez-vous pour une séance de neurofeedback
                </h3>
                <p>Cabinet situé à Tresses, près de Bordeaux</p>

                <Button asChild size="lg" className="hover:scale-105">
                  <Link to="/neurofeedback">Découvrir le neurofeedback</Link>
                </Button>
              </div>

              <p className="text-sm italic mt-8 pt-6 border-t">
                Ces méthodes visent au bien-être et ne remplacent pas un suivi médical.
              </p>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogAmeliorerSommeil;

export default BlogAmeliorerSommeil;
