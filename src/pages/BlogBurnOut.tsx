import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ExternalLink } from "lucide-react";
import burnoutImage from "@/assets/neurofeedback-burn-out.png";

const BlogBurnOut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // —— SCHEMA ARTICLE OPTIMISÉ —— //
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Neurofeedback & Burn Out : Une Solution Naturelle pour Surmonter l'Épuisement Professionnel",
    description:
      "Le neurofeedback aide à réduire le stress, l’épuisement professionnel et les troubles émotionnels liés au burn out. Découvrez une méthode naturelle pour retrouver énergie et clarté mentale.",
    image: "https://methodes-douces-bordeaux.fr/assets/neurofeedback-burn-out.png",
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
    datePublished: "2024-09-15",
    dateModified: "2025-12-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://methodes-douces-bordeaux.fr/blog/neurofeedback-burn-out",
    },
    keywords:
      "neurofeedback burn out, burn out, épuisement professionnel, stress au travail, fatigue chronique, récupération mentale, Tresses, Bordeaux",
  };

  return (
    <>
      <Helmet>
        <title>Neurofeedback & Burn Out : Surmonter l'Épuisement Professionnel | Tresses Bordeaux</title>

        <meta
          name="description"
          content="Surmontez le burn out grâce au neurofeedback : réduction du stress, meilleure gestion émotionnelle, sommeil réparateur et récupération durable. Cabinet à Tresses, près de Bordeaux."
        />

        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/neurofeedback-burn-out" />

        <meta property="og:title" content="Neurofeedback & Burn Out : Surmonter l'Épuisement Professionnel" />
        <meta
          property="og:description"
          content="Le neurofeedback est une méthode naturelle qui aide à réduire le stress, l’épuisement professionnel et les troubles du sommeil liés au burn out."
        />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/assets/neurofeedback-burn-out.png" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs
              items={[
                { label: "Accueil", path: "/" },
                { label: "Blog", path: "/blog" },
                { label: "Burn Out & Neurofeedback" },
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
                  <span>Septembre 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>10 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Eric Gata</span>
                </div>
              </div>

              {/* —— H1 SEO OPTIMISÉ —— */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Neurofeedback & Burn Out : Une Approche Naturelle pour Retrouver Votre Énergie
              </h1>

              <p className="text-xl text-primary font-medium mb-8">
                Comprendre, apaiser et surmonter l’épuisement professionnel grâce à une méthode douce et non invasive.
              </p>
            </div>
          </section>

          {/* Image */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <img
                src={burnoutImage}
                alt="Illustration du burn out et de la récupération grâce au neurofeedback NeurOptimal"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Article */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              {/* INTRO */}
              <p>
                Le <strong>burn out</strong> est un épuisement profond, émotionnel et mental, souvent lié au stress
                chronique. Il impacte la motivation, la concentration, les émotions et la qualité de vie. Le
                neurofeedback NeurOptimal est une méthode douce qui aide le cerveau à se rééquilibrer pour favoriser un
                retour progressif vers l’énergie, la clarté mentale et la sérénité.
              </p>

              {/* —— SECTION SEO : POUR QUI ? —— */}
              <h2>Pour qui le neurofeedback est-il efficace en cas de burn out ?</h2>
              <p>Le neurofeedback est particulièrement adapté si vous souffrez de :</p>
              <ul>
                <li>épuisement professionnel ou surcharge mentale,</li>
                <li>perte de motivation, irritabilité, anxiété,</li>
                <li>troubles du sommeil (réveils nocturnes, sommeil non réparateur),</li>
                <li>difficultés de concentration ou brouillard mental,</li>
                <li>fatigue chronique persistante,</li>
                <li>stress au travail ou tensions émotionnelles répétées.</li>
              </ul>

              {/* —— SECTION SEO : SYMPTÔMES —— */}
              <h2>Reconnaître les symptômes du burn out</h2>
              <p>Le burn out se manifeste par un ensemble de signes qui évoluent souvent lentement :</p>
              <ul>
                <li>épuisement extrême malgré le repos,</li>
                <li>sentiment de pression constante,</li>
                <li>diminution de la concentration,</li>
                <li>perte de sens ou détachement émotionnel,</li>
                <li>tensions musculaires, migraines, troubles digestifs,</li>
                <li>difficulté à gérer ses émotions.</li>
              </ul>

              {/* —— H2 —— */}
              <h2>Qu’est-ce que le neurofeedback NeurOptimal ?</h2>
              <p>
                Le neurofeedback NeurOptimal analyse l’activité cérébrale en temps réel. Grâce à des micro-signaux
                sonores, il aide le cerveau à corriger spontanément ses déséquilibres. C’est une méthode naturelle,
                douce et entièrement non invasive.
              </p>

              <p>
                Elle est particulièrement efficace pour les personnes souffrant de stress intense. Vous pouvez en savoir
                plus sur notre approche via la page{" "}
                <Link to="/gestion-stress" className="text-primary font-medium">
                  gestion du stress
                </Link>
                .
              </p>

              {/* —— H2 —— */}
              <h2>Les bienfaits du neurofeedback pour surmonter le burn out</h2>

              <h3>1. Réduction profonde du stress</h3>
              <p>
                En aidant le cerveau à retrouver un fonctionnement plus stable, le neurofeedback diminue la charge
                émotionnelle et les réactions excessives au stress. Vous ressentez progressivement un apaisement
                intérieur.
              </p>

              <h3>2. Amélioration du sommeil</h3>
              <p>
                Le sommeil est souvent déséquilibré en cas de burn out. Le neurofeedback favorise un sommeil plus
                réparateur, ce qui accélère la récupération physique et mentale.
              </p>

              <h3>3. Clarté mentale retrouvée</h3>
              <p>
                Le brouillard mental, les difficultés de concentration et l’impression d’être “débordé” s’atténuent avec
                les séances. La prise de décision devient plus fluide et naturelle.
              </p>

              <h3>4. Meilleure gestion des émotions</h3>
              <p>
                Le neurofeedback aide à stabiliser les émotions : irritabilité, anxiété, pleurs fréquents,
                hypersensibilité... Vous retrouvez progressivement résilience et équilibre intérieur.
              </p>

              {/* —— H2 —— */}
              <h2>Prévenir le burn out grâce au neurofeedback</h2>
              <p>
                Le neurofeedback n’agit pas seulement en phase d’épuisement : c’est aussi un puissant outil de
                prévention. Il renforce votre capacité d’adaptation au stress avant que la surcharge ne devienne
                toxique.
              </p>

              <p>
                Il est particulièrement recommandé aux professionnels exposés à un stress intense : soignants,
                enseignants, cadres, entrepreneurs.
              </p>

              {/* —— H2 —— */}
              <h2>Pourquoi choisir le neurofeedback NeurOptimal ?</h2>
              <p>
                C’est une approche naturelle, personnalisée, qui agit directement sur la dynamique cérébrale.
                Contrairement aux méthodes uniquement symptomatiques, elle rétablit un fonctionnement global plus
                harmonieux.
              </p>

              {/* —— Lien externe —— */}
              <p className="mt-8">
                Pour en savoir plus sur vos droits liés au burn out, consultez :{" "}
                <a
                  href="https://www.service-public.fr/particuliers/vosdroits/F35235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline inline-flex items-center gap-2"
                >
                  Service Public — Dossier Burn Out <ExternalLink size={14} />
                </a>
              </p>

              {/* —— CTA —— */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl text-center">
                <h3 className="text-xl font-heading font-bold mb-4">
                  Prenez rendez-vous pour une séance de neurofeedback
                </h3>
                <p className="text-muted-foreground mb-6">Cabinet situé à Tresses, près de Bordeaux</p>

                <Button asChild size="lg" className="hover:scale-105">
                  <Link to="/neurofeedback">Découvrir le neurofeedback</Link>
                </Button>
              </div>

              {/* —— DISCLAIMER —— */}
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

export default BlogBurnOut;
