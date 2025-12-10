import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import burnoutImage from "@/assets/neurofeedback-burn-out.png";

const BlogBurnOut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Burn-out : Comment le Neurofeedback NeurOptimal aide à retrouver énergie et clarté mentale",
    description:
      "Découvrez comment le neurofeedback NeurOptimal accompagne les personnes en burn-out : réduction du stress, amélioration du sommeil, clarté mentale et récupération durable.",
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
    datePublished: "2025-03-15",
    dateModified: "2025-12-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://methodes-douces-bordeaux.fr/blog/neurofeedback-burn-out",
    },
    keywords:
      "burn out, épuisement professionnel, stress chronique, neurofeedback NeurOptimal, fatigue mentale, surcharge, sommeil, Tresses, Bordeaux",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien de séances de neurofeedback sont nécessaires pour sortir d'un burn-out ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le nombre de séances varie selon chaque personne. Certains ressentent un soulagement dès les premières séances, mais un accompagnement régulier sur plusieurs semaines permet des résultats plus durables. En moyenne, 10 à 20 séances sont recommandées pour un burn-out.",
        },
      },
      {
        "@type": "Question",
        name: "Le neurofeedback NeurOptimal peut-il remplacer un arrêt maladie en cas de burn-out ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, le neurofeedback est un complément, pas un substitut à un suivi médical. En cas de burn-out sévère, un arrêt de travail et un accompagnement médical restent essentiels. Le neurofeedback aide à accélérer la récupération et à stabiliser le système nerveux.",
        },
      },
      {
        "@type": "Question",
        name: "Le neurofeedback est-il efficace contre la fatigue mentale chronique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le neurofeedback NeurOptimal aide à réguler l'activité cérébrale et à sortir des états de surcharge. De nombreuses personnes constatent une amélioration de leur clarté mentale, de leur énergie et de leur capacité de concentration.",
        },
      },
      {
        "@type": "Question",
        name: "Le neurofeedback peut-il aider à mieux dormir après un burn-out ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument. Le sommeil perturbé est l'un des symptômes majeurs du burn-out. Le neurofeedback aide le cerveau à retrouver un rythme plus stable, favorisant un endormissement plus rapide et des nuits plus réparatrices.",
        },
      },
      {
        "@type": "Question",
        name: "Cette méthode convient-elle à tous les types de stress professionnel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, que vous soyez cadre, soignant, entrepreneur ou salarié, le neurofeedback s'adapte à votre situation. Il agit sur le système nerveux de manière globale, sans distinction de métier ou de type de stress.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Burn-out & Neurofeedback : Retrouver son énergie | Tresses Bordeaux</title>
        <meta
          name="description"
          content="Le neurofeedback NeurOptimal accompagne les personnes en burn-out : moins de stress, meilleur sommeil, esprit plus clair, énergie retrouvée. Une méthode douce et naturelle à Tresses."
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/neurofeedback-burn-out" />
        <meta property="og:title" content="Burn-out : Comment le neurofeedback aide à retrouver son équilibre" />
        <meta
          property="og:description"
          content="Une méthode naturelle pour réduire le stress, améliorer le sommeil et sortir de l'épuisement professionnel."
        />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/assets/neurofeedback-burn-out.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          {/* Breadcrumb */}
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs
              items={[
                { label: "Accueil", path: "/" },
                { label: "Blog", path: "/blog" },
                { label: "Burn-out & Neurofeedback" },
              ]}
            />
          </div>

          {/* HERO */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6 hover:bg-primary/10">
                <Link to="/blog">
                  <ArrowLeft size={16} className="mr-2" />
                  Retour au blog
                </Link>
              </Button>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Mars 2025</span>
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

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Burn-out : Comprendre, Respirer, Se Reconstruire avec le Neurofeedback NeurOptimal
              </h1>

              <p className="text-xl text-primary font-medium mb-8">
                Une méthode douce pour soulager la surcharge mentale, la fatigue profonde et retrouver un nouvel élan.
              </p>
            </div>
          </section>

          {/* IMAGE */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
              <img
                src={burnoutImage}
                alt="Neurofeedback burn-out épuisement professionnel Tresses Bordeaux"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          </section>

          {/* ARTICLE */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le burn-out n'arrive jamais d'un coup. Il s'installe lentement, dans le silence, jusqu'à vider
                l'énergie, la motivation et la capacité à faire face. On se sent alors épuisé, dépassé, parfois même
                déconnecté de soi.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Le <strong>neurofeedback NeurOptimal</strong> offre une approche naturelle et apaisante pour accompagner
                ce processus de reconstruction. Sans effort, sans stimulation, il aide le système nerveux à retrouver un
                fonctionnement plus stable.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Reconnaître les signes du burn-out
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Ils varient d'une personne à l'autre, mais reviennent souvent :
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>Fatigue profonde, même après le repos</li>
                <li>Perte de motivation, sentiment d'être vidé</li>
                <li>Difficultés de concentration</li>
                <li>Émotions instables ou amplification du stress</li>
                <li>Tensions physiques, migraines, douleurs diffuses</li>
                <li>Sommeil perturbé, réveils fréquents</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Quand le corps et l'esprit n'arrivent plus à suivre, c'est souvent le signe que les capacités
                d'adaptation sont dépassées.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Comment NeurOptimal accompagne les personnes en burn-out ?
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                NeurOptimal observe l'activité cérébrale et signale au système nerveux chaque irrégularité. À ce moment
                précis, le cerveau se « réorganise », comme s'il se recalait sur un mode de fonctionnement plus adapté.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Résultat : une sensation d'apaisement progressive.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Les bienfaits observés
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Diminution du stress</strong> et des tensions</li>
                <li><strong>Meilleur sommeil</strong>, moins de réveils nocturnes</li>
                <li><strong>Retour progressif de l'énergie</strong></li>
                <li><strong>Clarté mentale retrouvée</strong></li>
                <li><strong>Plus de stabilité émotionnelle</strong></li>
                <li><strong>Meilleure capacité</strong> à faire face au quotidien</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Pour qui NeurOptimal est-il particulièrement utile ?
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Il peut aider si vous :
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>Vous sentez submergé ou mentalement épuisé</li>
                <li>N'arrivez plus à récupérer</li>
                <li>Êtes irritable, à fleur de peau</li>
                <li>Travaillez dans un environnement très stressant</li>
                <li>Avez perdu votre motivation</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Comment se déroule une séance ?
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Une séance dure <strong>33 minutes</strong>. Vous êtes installé confortablement, casque audio sur les
                oreilles. Vous écoutez une musique pendant que le système observe votre activité cérébrale.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Rien n'est imposé. Aucune stimulation. Le cerveau s'ajuste simplement grâce à l'information reçue.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Quels résultats attendre ?
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Les changements peuvent être subtils au début, puis s'installer :
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>Moins de pression interne</li>
                <li>Meilleure gestion du stress</li>
                <li>Capacités de concentration qui reviennent</li>
                <li>Sommeil plus profond</li>
                <li>Sentiment de reprendre le contrôle</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Un soutien naturel, sans effort
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                NeurOptimal ne remplace pas un accompagnement médical si nécessaire, mais c'est un outil précieux pour
                retrouver un équilibre intérieur solide et des ressources émotionnelles plus stables.
              </p>

              <p className="text-lg font-medium text-foreground">
                Le burn-out n'est pas une fin : c'est souvent le début d'une reconstruction. NeurOptimal peut vous
                accompagner sur ce chemin.
              </p>

              {/* FAQ Section */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Foire aux questions (FAQ) sur le burn-out et le neurofeedback
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    1. Combien de séances sont nécessaires pour sortir d'un burn-out ?
                  </h3>
                  <p className="text-muted-foreground">
                    Le nombre de séances varie selon chaque personne. Certains ressentent un soulagement dès les premières séances, mais un accompagnement régulier sur plusieurs semaines permet des résultats plus durables. En moyenne, 10 à 20 séances sont recommandées.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    2. Le neurofeedback peut-il remplacer un arrêt maladie ?
                  </h3>
                  <p className="text-muted-foreground">
                    Non, le neurofeedback est un complément, pas un substitut à un suivi médical. En cas de burn-out sévère, un arrêt de travail et un accompagnement médical restent essentiels. Le neurofeedback aide à accélérer la récupération.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    3. Le neurofeedback est-il efficace contre la fatigue mentale chronique ?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui, le neurofeedback NeurOptimal aide à réguler l'activité cérébrale et à sortir des états de surcharge. De nombreuses personnes constatent une amélioration de leur clarté mentale, de leur énergie et de leur concentration.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    4. Le neurofeedback peut-il aider à mieux dormir après un burn-out ?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolument. Le sommeil perturbé est l'un des symptômes majeurs du burn-out. Le neurofeedback aide le cerveau à retrouver un rythme plus stable, favorisant un endormissement plus rapide et des nuits plus réparatrices.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    5. Cette méthode convient-elle à tous les types de stress professionnel ?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui, que vous soyez cadre, soignant, entrepreneur ou salarié, le neurofeedback s'adapte à votre situation. Il agit sur le système nerveux de manière globale, sans distinction de métier.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Envie de souffler et de repartir plus sereinement ?</h3>
                <p className="text-muted-foreground mb-6">Je vous accueille au cabinet à Tresses, près de Bordeaux.</p>
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/neurofeedback">Découvrir le neurofeedback NeurOptimal</Link>
                </Button>
              </div>

              <p className="text-sm italic mt-8 pt-6 border-t">
                Le neurofeedback vise le bien-être et ne remplace pas un suivi médical si celui-ci est nécessaire.
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
