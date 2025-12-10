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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Améliorer le Sommeil grâce au Neurofeedback NeurOptimal",
    "description": "Découvrez comment améliorer le sommeil naturellement avec le neurofeedback NeurOptimal. Méthode non invasive pour un sommeil réparateur à Tresses près de Bordeaux.",
    "image": "https://methodes-douces-bordeaux.fr/assets/ameliorer-sommeil-neuroptimal.jpg",
    "author": {
      "@type": "Person",
      "name": "Eric Gata",
      "url": "https://methodes-douces-bordeaux.fr/a-propos"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Méthodes Douces Bordeaux",
      "logo": {
        "@type": "ImageObject",
        "url": "https://methodes-douces-bordeaux.fr/logo-agp.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-12-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://methodes-douces-bordeaux.fr/blog/ameliorer-sommeil-neuroptimal"
    },
    "keywords": "améliorer le sommeil, neurofeedback NeurOptimal, sommeil réparateur, insomnie, troubles du sommeil, Tresses, Bordeaux"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien de séances de neurofeedback NeurOptimal sont nécessaires pour améliorer le sommeil ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les premiers résultats apparaissent souvent après 3 à 5 séances. Cependant, pour un changement durable, il est recommandé de suivre un programme de 15 à 20 séances."
        }
      },
      {
        "@type": "Question",
        "name": "Le neurofeedback NeurOptimal est-il adapté à tout le monde ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, NeurOptimal convient aussi bien aux enfants qu'aux adultes. Il s'agit d'une méthode douce et non invasive, sans effets secondaires connus."
        }
      },
      {
        "@type": "Question",
        "name": "Que ressent-on pendant une séance de neurofeedback ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La séance est entièrement relaxante. Vous écoutez de la musique pendant que le système effectue son travail en arrière-plan. La plupart des utilisateurs décrivent une sensation de calme et de bien-être après chaque séance."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Améliorer le Sommeil avec le Neurofeedback NeurOptimal | Tresses Bordeaux</title>
        <meta name="description" content="Améliorer le sommeil naturellement grâce au neurofeedback NeurOptimal. Méthode non invasive pour réduire les insomnies et retrouver un sommeil réparateur. Cabinet à Tresses." />
        <meta name="keywords" content="améliorer le sommeil, neurofeedback NeurOptimal, sommeil réparateur, insomnie, réveils nocturnes, fatigue, Tresses, Bordeaux" />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/ameliorer-sommeil-neuroptimal" />
        <meta property="og:title" content="Améliorer le Sommeil avec le Neurofeedback NeurOptimal" />
        <meta property="og:description" content="Découvrez comment améliorer le sommeil naturellement avec le neurofeedback NeurOptimal. Une méthode efficace contre les troubles du sommeil." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/blog/ameliorer-sommeil-neuroptimal" />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/assets/ameliorer-sommeil-neuroptimal.jpg" />
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
                { label: "Améliorer le Sommeil" }
              ]} 
            />
          </div>

          {/* Hero Section */}
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

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Améliorer le Sommeil grâce au Neurofeedback NeurOptimal
              </h1>
              
              <p className="text-xl text-primary font-medium mb-8">
                Une méthode naturelle pour un sommeil réparateur
              </p>
            </div>
          </section>

          {/* Featured Image */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <img 
                src={sommeilImage} 
                alt="Améliorer le sommeil naturellement - femme dormant paisiblement grâce au neurofeedback NeurOptimal" 
                className="w-full h-auto rounded-xl shadow-lg"
                width={800}
                height={533}
                loading="eager"
              />
            </div>
          </section>

          {/* Article Content */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              
              {/* Introduction */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le neurofeedback NeurOptimal est une méthode non invasive qui aide votre cerveau à s'autoréguler naturellement. En fournissant des informations en temps réel sur son activité, le cerveau apprend à mieux se gérer et à surmonter les déséquilibres pouvant perturber le sommeil. Cette approche est particulièrement efficace pour les personnes confrontées à des insomnies, des réveils nocturnes ou un sommeil peu réparateur.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                En complément, cette méthode contribue également à une meilleure gestion du stress et à une réduction de l'anxiété, des facteurs souvent liés aux troubles du sommeil. Cela permet de considérablement <strong>améliorer le sommeil</strong> des utilisateurs.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Les effets ne se limitent pas au sommeil : de nombreux utilisateurs rapportent une diminution de la fatigue diurne, une meilleure clarté mentale et un regain de motivation dans leurs activités quotidiennes.
              </p>

              {/* Section: Comment fonctionne NeurOptimal */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Comment fonctionne NeurOptimal ?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                NeurOptimal analyse en continu l'activité cérébrale et identifie les schémas qui pourraient être perturbateurs. Contrairement à d'autres méthodes, il n'impose aucune correction directe mais offre au cerveau des retours d'information précis pour qu'il ajuste lui-même ses fonctions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Chaque séance dure 33 minutes, pendant lesquelles vous pouvez vous détendre confortablement. Les bienfaits s'accumulent progressivement, avec des résultats perceptibles souvent dès les premières séances. C'est une solution idéale pour ceux qui cherchent à <strong>améliorer le sommeil</strong> de manière naturelle et durable.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                En utilisant une technologie de pointe, NeurOptimal permet à votre cerveau de se réorganiser efficacement, offrant des bénéfices qui se maintiennent sur le long terme.
              </p>

              {/* Section: Résultats */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Améliorer le sommeil : les résultats que vous pouvez attendre
              </h2>
              
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Réduction des insomnies</strong> : Des études ont montré que le neurofeedback peut réduire significativement la fréquence et l'intensité des troubles du sommeil, notamment les insomnies chroniques.
                </li>
                <li>
                  <strong>Améliorer le sommeil profond</strong> : Une régulation cérébrale plus équilibrée favorise une augmentation des phases de sommeil profond, essentielles pour la récupération physique et mentale.
                </li>
                <li>
                  <strong>Gestion du stress</strong> : En apaisant les schémas cérébraux liés à l'anxiété, NeurOptimal améliore indirectement la qualité du sommeil.
                </li>
                <li>
                  <strong>Énergie retrouvée</strong> : Avec un meilleur sommeil, les utilisateurs rapportent une augmentation de leur énergie et une concentration accrue au quotidien.
                </li>
                <li>
                  <strong>Résilience émotionnelle</strong> : En aidant le cerveau à mieux gérer les situations de stress, cette méthode contribue à une stabilité émotionnelle accrue.
                </li>
              </ul>

              {/* Section: Témoignages */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Les témoignages de nos clients
              </h2>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « Venue pour trouver une solution à mes insomnies, j'ai retrouvé le sommeil... et une qualité de vie appréciable. »
                </p>
                <cite className="text-sm text-primary font-medium">— Nathalie M.</cite>
              </blockquote>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « Depuis des années, je me réveillais fatigué. Après 10 séances, je sens une nette différence : mes nuits sont plus profondes et je démarre la journée avec énergie. »
                </p>
                <cite className="text-sm text-primary font-medium">— Jean L.</cite>
              </blockquote>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « Je ne savais pas si le neurofeedback pourrait m'aider, mais après plusieurs années de mauvais sommeil, j'ai essayé. En quelques semaines, je dors mieux et je me sens plus reposée. »
                </p>
                <cite className="text-sm text-primary font-medium">— Sophie T.</cite>
              </blockquote>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « Ma fille avait des nuits très agitées et se réveillait souvent. Depuis qu'elle a commencé le neurofeedback, elle dort paisiblement, et nous aussi ! »
                </p>
                <cite className="text-sm text-primary font-medium">— Claire B.</cite>
              </blockquote>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « En tant qu'étudiant, j'avais du mal à gérer le stress des examens, ce qui perturbait mon sommeil. Grâce à NeurOptimal, je dors mieux et je suis plus concentré. »
                </p>
                <cite className="text-sm text-primary font-medium">— Julien R.</cite>
              </blockquote>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « Je souffrais de réveils nocturnes fréquents et d'une fatigue constante au travail. Après 15 séances, je sens une nette amélioration. Je me réveille reposée et pleine d'énergie. »
                </p>
                <cite className="text-sm text-primary font-medium">— Isabelle D.</cite>
              </blockquote>
              
              <p className="text-muted-foreground leading-relaxed">
                Ces témoignages soulignent comment le neurofeedback NeurOptimal peut véritablement <strong>améliorer le sommeil</strong> de manière efficace.
              </p>

              {/* Section: En savoir plus */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                En savoir plus
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Pour des informations complémentaires sur le sommeil et les solutions naturelles, consultez les ressources de l'
                <a 
                  href="https://institut-sommeil-vigilance.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Institut National du Sommeil et de la Vigilance
                  <ExternalLink size={14} />
                </a>.
              </p>

              {/* Section: FAQ */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                FAQ - Questions fréquentes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Combien de séances sont nécessaires ?</h3>
                  <p className="text-muted-foreground">
                    Les premiers résultats apparaissent souvent après 3 à 5 séances. Cependant, pour un changement durable, il est recommandé de suivre un programme de 15 à 20 séances. Ce protocole est idéal pour maximiser les effets et <strong>améliorer le sommeil</strong> sur le long terme.
                  </p>
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Est-ce adapté à tout le monde ?</h3>
                  <p className="text-muted-foreground">
                    Oui, NeurOptimal convient aussi bien aux enfants qu'aux adultes. Il s'agit d'une méthode douce et non invasive, sans effets secondaires connus.
                  </p>
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Que ressent-on pendant une séance ?</h3>
                  <p className="text-muted-foreground">
                    La séance est entièrement relaxante. Vous écoutez de la musique pendant que le système effectue son travail en arrière-plan. La plupart des utilisateurs décrivent une sensation de calme et de bien-être après chaque séance.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Prêt à améliorer votre sommeil ?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Investissez dans votre bien-être avec un programme personnalisé de neurofeedback NeurOptimal. Découvrez nos forfaits et commencez votre transformation dès aujourd'hui. Cette méthode révolutionnaire est une solution accessible et efficace pour <strong>améliorer le sommeil</strong> naturellement.
              </p>
              
              <p className="text-lg text-foreground font-medium mt-6">
                Ne laissez pas les troubles du sommeil dicter votre quotidien. Faites le premier pas vers une vie plus équilibrée et reposante dès maintenant.
              </p>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl text-center">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Prenez rendez-vous pour une séance de neurofeedback
                </h3>
                <p className="text-muted-foreground mb-6">
                  Cabinet situé à Tresses, près de Bordeaux
                </p>
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/neurofeedback">
                    Découvrir le neurofeedback
                  </Link>
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-sm text-muted-foreground italic mt-8 pt-6 border-t border-border">
                Ces méthodes visent au bien-être et ne remplacent pas un suivi médical si nécessaire.
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
