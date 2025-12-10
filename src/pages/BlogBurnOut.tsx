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
          <section className="container mx-auto px-4 pb-10">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6">
                <Link to="/blog">
                  <ArrowLeft size={16} className="mr-2" /> Retour au blog
                </Link>
              </Button>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> <span>Mars 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} /> <span>8 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} /> <span>Eric Gata</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Burn-out : Comprendre, Respirer, Se Reconstruire avec le Neurofeedback NeurOptimal
              </h1>

              <p className="text-xl text-primary font-medium">
                Une méthode douce pour soulager la surcharge mentale, la fatigue profonde et retrouver un nouvel élan.
              </p>
            </div>
          </section>

          {/* IMAGE */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
              <img
                src={burnoutImage}
                alt="Illustration du burn-out et du neurofeedback NeurOptimal"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          </section>

          {/* ARTICLE */}
          <article className="container mx-auto px-4 pb-20">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              <p>
                Le burn-out n’arrive jamais d’un coup. Il s’installe lentement, dans le silence, jusqu’à vider
                l’énergie, la motivation et la capacité à faire face. On se sent alors épuisé, dépassé, parfois même
                déconnecté de soi.
              </p>

              <p>
                Le <strong>neurofeedback NeurOptimal</strong> offre une approche naturelle et apaisante pour accompagner
                ce processus de reconstruction. Sans effort, sans stimulation, il aide le système nerveux à retrouver un
                fonctionnement plus stable.
              </p>

              <h2>Reconnaître les signes du burn-out</h2>

              <p>Ils varient d’une personne à l’autre, mais reviennent souvent :</p>

              <ul>
                <li>fatigue profonde, même après le repos</li>
                <li>perte de motivation, sentiment d’être vidé</li>
                <li>difficultés de concentration</li>
                <li>émotions instables ou amplification du stress</li>
                <li>tensions physiques, migraines, douleurs diffuses</li>
                <li>sommeil perturbé, réveils fréquents</li>
              </ul>

              <p>
                Quand le corps et l’esprit n’arrivent plus à suivre, c’est souvent le signe que les capacités
                d’adaptation sont dépassées.
              </p>

              <h2>Comment NeurOptimal accompagne les personnes en burn-out ?</h2>

              <p>
                NeurOptimal observe l’activité cérébrale et signale au système nerveux chaque irrégularité. À ce moment
                précis, le cerveau se « réorganise », comme s’il se recalait sur un mode de fonctionnement plus adapté.
              </p>

              <p>Résultat : une sensation d’apaisement progressive.</p>

              <h2>Les bienfaits observés</h2>

              <ul>
                <li>diminution du stress et des tensions</li>
                <li>meilleur sommeil, moins de réveils nocturnes</li>
                <li>retour progressif de l’énergie</li>
                <li>clarté mentale retrouvée</li>
                <li>plus de stabilité émotionnelle</li>
                <li>meilleure capacité à faire face au quotidien</li>
              </ul>

              <h2>Pour qui NeurOptimal est-il particulièrement utile ?</h2>

              <p>Il peut aider si vous :</p>

              <ul>
                <li>vous sentez submergé ou mentalement épuisé</li>
                <li>n’arrivez plus à récupérer</li>
                <li>êtes irritable, à fleur de peau</li>
                <li>travaillez dans un environnement très stressant</li>
                <li>avez perdu votre motivation</li>
              </ul>

              <h2>Comment se déroule une séance ?</h2>

              <p>
                Une séance dure <strong>33 minutes</strong>. Vous êtes installé confortablement, casque audio sur les
                oreilles. Vous écoutez une musique pendant que le système observe votre activité cérébrale.
              </p>

              <p>Rien n’est imposé. Aucune stimulation. Le cerveau s’ajuste simplement grâce à l’information reçue.</p>

              <h2>Quels résultats attendre ?</h2>

              <p>Les changements peuvent être subtils au début, puis s’installer :</p>

              <ul>
                <li>moins de pression interne</li>
                <li>meilleure gestion du stress</li>
                <li>capacités de concentration qui reviennent</li>
                <li>sommeil plus profond</li>
                <li>sentiment de reprendre le contrôle</li>
              </ul>

              <h2>Un soutien naturel, sans effort</h2>

              <p>
                NeurOptimal ne remplace pas un accompagnement médical si nécessaire, mais c’est un outil précieux pour
                retrouver un équilibre intérieur solide et des ressources émotionnelles plus stables.
              </p>

              <p className="text-lg font-semibold">
                Le burn-out n’est pas une fin : c’est souvent le début d’une reconstruction. NeurOptimal peut vous
                accompagner sur ce chemin.
              </p>

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
