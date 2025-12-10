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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Améliorer son Sommeil grâce au Neurofeedback Dynamique",
    description:
      "Découvrez comment le neurofeedback dynamique aide à retrouver un sommeil profond, stable et réparateur. Solution naturelle contre les réveils nocturnes, l'insomnie et la fatigue chronique.",
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
      "neurofeedback sommeil, sommeil réparateur, troubles du sommeil, insomnie, réveils nocturnes, fatigue, neurofeedback dynamique, Tresses, Bordeaux",
  };

  return (
    <>
      <Helmet>
        <title>
          Améliorer son sommeil grâce au Neurofeedback | Sommeil Réparateur à Tresses
        </title>
        <meta
          name="description"
          content="Retrouvez un sommeil réparateur grâce au neurofeedback dynamique : moins de réveils nocturnes, endormissement plus rapide, sommeil plus profond. Solution naturelle à Tresses."
        />
        <link
          rel="canonical"
          href="https://methodes-douces-bordeaux.fr/blog/ameliorer-sommeil"
        />
        <meta
          property="og:title"
          content="Améliorer son sommeil grâce au Neurofeedback"
        />
        <meta
          property="og:description"
          content="Le neurofeedback dynamique aide à réduire l'insomnie, les réveils nocturnes et la fatigue chronique."
        />
        <meta
          property="og:image"
          content="https://methodes-douces-bordeaux.fr/assets/sommeil-reparateur-neurofeedback.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
                  <span>10 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Eric Gata</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Retrouver un Sommeil Réparateur grâce au Neurofeedback Dynamique
              </h1>

              <p className="text-xl text-primary font-medium mb-8">
                Nuits agitées, réveils nocturnes, fatigue au réveil ?
                Le neurofeedback peut vous aider à retrouver des nuits profondes et paisibles.
              </p>
            </div>
          </section>

          {/* Image */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
              <img
                src={sommeilImage}
                alt="Sommeil réparateur grâce au neurofeedback"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          </section>

          {/* Article */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">

              <p>
                Mal dormir ne se résume pas à être fatigué.  
                Lorsque les nuits deviennent trop légères ou instables, c'est tout notre équilibre
                qui se dérègle : humeur, énergie, concentration, motivations.
              </p>

              <p>
                Le <strong>neurofeedback dynamique</strong> est une méthode douce qui aide le cerveau
                à retrouver un fonctionnement plus stable. Sans effort, sans médicament, il favorise
                un sommeil naturellement plus profond et réparateur.
              </p>

              <h2>Pourquoi votre sommeil n'est-il plus réparateur ?</h2>

              <p>Plusieurs signes indiquent un sommeil de mauvaise qualité :</p>

              <ul>
                <li>difficultés d'endormissement</li>
                <li>réveils nocturnes fréquents</li>
                <li>sommeil léger ou agité</li>
                <li>réveil trop tôt</li>
                <li>fatigue persistante</li>
                <li>mental agité ou ruminations</li>
              </ul>

              <p>
                Avec le temps, ces perturbations s'installent et donnent l'impression d'être
                constamment épuisé, même après une longue nuit.
              </p>

              <h2>Comment le neurofeedback aide-t-il à mieux dormir ?</h2>

              <p>
                Le système analyse en temps réel l'activité cérébrale et envoie des micro-signaux
                sonores lors d'irrégularités.  
                Ces micro-interruptions agissent comme un miroir permettant au cerveau
                de se réorganiser spontanément.
              </p>

              <p>Progressivement, le sommeil devient :</p>

              <ul>
                <li>plus profond</li>
                <li>plus stable</li>
                <li>moins fragmenté</li>
                <li>plus réparateur</li>
              </ul>

              <h2>Pour qui cette méthode est-elle adaptée ?</h2>

              <p>Le neurofeedback est particulièrement utile si vous :</p>

              <ul>
                <li>ruminez avant de vous endormir</li>
                <li>vous réveillez plusieurs fois par nuit</li>
                <li>êtes stressé ou épuisé mentalement</li>
                <li>dormez mais vous réveillez fatigué</li>
                <li>avez un enfant ou adolescent au sommeil agité</li>
              </ul>

              <h2>Une séance : simple, apaisante, naturelle</h2>

              <p>
                Une séance dure <strong>33 minutes</strong>.  
                Vous êtes installé dans un fauteuil, vous écoutez une musique douce,  
                et le système travaille en arrière-plan.  
                Rien n'est envoyé au cerveau : aucune stimulation, aucune sensation.
              </p>

              <h2>Quels résultats attendre ?</h2>

              <ul>
                <li>endormissement plus rapide</li>
                <li>moins de réveils nocturnes</li>
                <li>sommeil plus profond</li>
                <li>réveil plus léger</li>
                <li>meilleure résistance au stress</li>
              </ul>

              <h2>Conseils simples pour améliorer votre sommeil</h2>

              <ul>
                <li>réduire les écrans le soir</li>
                <li>instaurer une routine calmante</li>
                <li>maintenir des horaires réguliers</li>
                <li>éviter les repas lourds le soir</li>
                <li>dormir dans une pièce fraîche et sombre</li>
              </ul>

              <h2>Une solution naturelle pour des nuits profondes</h2>

              <p>
                Le neurofeedback est une approche douce, moderne et efficace pour retrouver un
                sommeil réellement réparateur.  
                Une méthode naturelle, respectueuse du fonctionnement du cerveau.
              </p>

              <p className="text-lg font-medium">
                Pour en savoir plus ou commencer un accompagnement, découvrez notre page{" "}
                <Link to="/neurofeedback" className="text-primary font-medium">
                  dédiée au neurofeedback
                </Link>.
              </p>

              {/* CTA */}
              <div className="mt-12 p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                <h3 className="text-xl font-bold mb-4">
                  Envie de retrouver des nuits plus paisibles ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Je vous accueille au cabinet à Tresses, près de Bordeaux.
                </p>
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/neurofeedback">Découvrir le neurofeedback</Link>
                </Button>
              </div>

              <p className="text-sm italic mt-8 pt-6 border-t">
                Le neurofeedback vise le bien-être et ne remplace pas un suivi médical.
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
