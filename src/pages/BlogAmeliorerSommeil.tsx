import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import sommeilImage from "@/assets/sommeil-reparateur-neurofeedback.jpg";

const BlogAmeliorerSommeil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ---- STRUCTURED DATA SEO ----
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Améliorer son sommeil grâce au neurofeedback NeurOptimal",
    description:
      "Découvrez comment le neurofeedback NeurOptimal aide à retrouver un sommeil réparateur : endormissement plus rapide, nuits plus calmes, meilleure énergie au réveil. Cabinet à Tresses, près de Bordeaux.",
    image: "https://methodes-douces-bordeaux.fr/assets/sommeil-reparateur-neurofeedback.jpg",
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
    datePublished: "2025-03-01",
    dateModified: "2025-12-11",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://methodes-douces-bordeaux.fr/blog/ameliorer-sommeil",
    },
    keywords:
      "neurofeedback sommeil, sommeil réparateur, insomnie, réveils nocturnes, NeurOptimal, fatigue chronique, Tresses, Bordeaux",
  };

  return (
    <>
      <Helmet>
        <title>Améliorer son Sommeil grâce au Neurofeedback NeurOptimal | Tresses Bordeaux</title>

        <meta
          name="description"
          content="Dormez mieux grâce au neurofeedback NeurOptimal : endormissement plus rapide, moins de réveils nocturnes et un sommeil plus profond. Découvrez une méthode naturelle pour retrouver un sommeil réparateur."
        />

        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/ameliorer-sommeil" />

        <meta property="og:title" content="Améliorer son sommeil grâce au Neurofeedback NeurOptimal" />
        <meta
          property="og:description"
          content="Une solution naturelle pour apaiser le mental, réduire les réveils nocturnes et retrouver un sommeil réparateur. Cabinet à Tresses près de Bordeaux."
        />
        <meta
          property="og:image"
          content="https://methodes-douces-bordeaux.fr/assets/sommeil-reparateur-neurofeedback.jpg"
        />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
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
                { label: "Améliorer son sommeil" },
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
                  <span>Mars 2025</span>
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

              {/* H1 */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Améliorer son Sommeil grâce au Neurofeedback NeurOptimal
              </h1>

              <p className="text-xl text-primary font-medium mb-8">
                Une approche naturelle pour retrouver des nuits calmes et réparatrices.
              </p>
            </div>
          </section>

          {/* Featured Image */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
              <img
                src={sommeilImage}
                alt="Retrouver un sommeil réparateur grâce au neurofeedback NeurOptimal"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                width={1200}
                height={600}
              />
            </div>
          </section>

          {/* ARTICLE BODY */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              <p>
                Mal dormir ne se résume pas à être fatigué : lorsque les nuits deviennent trop légères, agitées ou
                entrecoupées, c’est tout l’équilibre du quotidien qui en souffre. Fatigue persistante, irritabilité,
                difficultés de concentration… Le sommeil est un pilier essentiel du bien-être physique et émotionnel.
              </p>

              <p>
                Le <strong>neurofeedback NeurOptimal</strong> est une méthode douce qui aide le cerveau à retrouver une
                meilleure régulation naturelle, favorisant un sommeil plus profond et réparateur. Sans médicament, sans
                effort, simplement en permettant au système nerveux de se rééquilibrer.
              </p>

              <h2>Quand peut-on parler de troubles du sommeil ?</h2>
              <p>Plusieurs signes peuvent indiquer que votre sommeil n'est plus optimal :</p>
              <ul>
                <li>difficulté à s’endormir</li>
                <li>réveils nocturnes fréquents</li>
                <li>réveil trop tôt le matin</li>
                <li>impression de ne pas récupérer malgré une longue nuit</li>
                <li>fatigue chronique ou manque d'énergie</li>
              </ul>

              <p>
                Ces troubles peuvent s’installer progressivement mais avoir un réel impact sur l’humeur, la
                concentration, la motivation et la gestion du stress.
              </p>

              <h2>Comment le neurofeedback peut-il améliorer le sommeil ?</h2>

              <p>
                NeurOptimal analyse les variations de l’activité cérébrale en temps réel. À chaque irrégularité
                détectée, un léger signal sonore est envoyé, permettant au cerveau de se réajuster naturellement. Avec
                le temps, ce processus favorise :
              </p>

              <ul>
                <li>un endormissement plus facilement</li>
                <li>moins de réveils nocturnes</li>
                <li>un sommeil plus profond</li>
                <li>une meilleure récupération physique et mentale</li>
              </ul>

              <h2>Pour qui cette méthode est-elle adaptée ?</h2>

              <p>Le neurofeedback peut aider si vous :</p>

              <ul>
                <li>avez un mental agité le soir</li>
                <li>ruminez ou pensez trop avant de dormir</li>
                <li>traversez une période de stress intense</li>
                <li>êtes épuisé malgré de longues nuits</li>
                <li>souffrez de réveils nocturnes récurrents</li>
              </ul>

              <h2>À quoi ressemble une séance ?</h2>

              <p>
                Une séance dure environ 33 minutes. Vous êtes installé confortablement dans un fauteuil, vous écoutez
                une musique ou regardez une vidéo pendant que le système travaille discrètement en arrière-plan. Rien
                n’est imposé, rien n’est envoyé au cerveau : il s’agit uniquement d’un retour d’information.
              </p>

              <h2>Quels résultats attendre ?</h2>

              <p>Les améliorations les plus fréquentes incluent :</p>

              <ul>
                <li>endormissement plus rapide</li>
                <li>nuit plus calme et stable</li>
                <li>réveil avec plus d’énergie</li>
                <li>meilleure gestion du stress dans la journée</li>
              </ul>

              <h2>Combien de séances sont nécessaires ?</h2>

              <p>
                Certaines personnes ressentent déjà un effet dès 3 à 5 séances. Pour une amélioration durable, un
                accompagnement de 10 à 20 séances est souvent recommandé.
              </p>

              <h2>Une méthode complémentaire</h2>

              <p>
                Le neurofeedback n’a pas vocation à remplacer un suivi médical mais constitue une aide précieuse pour
                rétablir un équilibre global, notamment lorsque le stress joue un rôle dans les troubles du sommeil.
              </p>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl text-center">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Envie de retrouver un sommeil réparateur ?
                </h3>
                <p className="text-muted-foreground mb-6">Je vous accueille au cabinet à Tresses, près de Bordeaux.</p>

                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/neurofeedback">Découvrir le neurofeedback</Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground italic mt-8 pt-6 border-t">
                Le neurofeedback vise le bien-être et ne remplace pas un suivi médical lorsque celui-ci est nécessaire.
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
