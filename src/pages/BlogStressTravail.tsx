import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import stressImage from "@/assets/stress-travail-neurofeedback.jpg";

const BlogStressTravail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Réduisez Votre Stress au Travail grâce au Neurofeedback Dynamique",
    "description": "Découvrez comment réduire le stress au travail avec le neurofeedback dynamique. Solution naturelle pour améliorer concentration, productivité et bien-être professionnel.",
    "image": "https://methodes-douces-bordeaux.fr/assets/stress-travail-neurofeedback.jpg",
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
    "datePublished": "2024-11-15",
    "dateModified": "2025-12-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://methodes-douces-bordeaux.fr/blog/stress-travail-neurofeedback"
    },
    "keywords": "stress au travail, neurofeedback dynamique, burn-out, gestion du stress, bien-être professionnel, Tresses, Bordeaux"
  };

  return (
    <>
      <Helmet>
        <title>Stress au Travail : Réduisez-le avec le Neurofeedback Dynamique | Tresses</title>
        <meta name="description" content="Gérez votre stress au travail efficacement grâce au neurofeedback dynamique. Améliorez concentration, productivité et bien-être. Cabinet à Tresses près de Bordeaux." />
        <meta name="keywords" content="stress au travail, neurofeedback dynamique, burn-out, gestion du stress, concentration, productivité, bien-être professionnel, Tresses, Bordeaux" />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/stress-travail-neurofeedback" />
        <meta property="og:title" content="Stress au Travail : Réduisez-le avec le Neurofeedback Dynamique" />
        <meta property="og:description" content="Découvrez comment le neurofeedback dynamique peut vous aider à gérer le stress au travail et prévenir le burn-out." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/blog/stress-travail-neurofeedback" />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/assets/stress-travail-neurofeedback.jpg" />
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
                { label: "Stress au Travail" }
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
                  <span>Novembre 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>7 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Eric Gata</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Réduisez Votre Stress au Travail grâce au Neurofeedback Dynamique
              </h1>
            </div>
          </section>

          {/* Featured Image */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <img 
                src={stressImage} 
                alt="Stress au travail - illustration d'un employé stressé au bureau et solutions avec le neurofeedback dynamique" 
                className="w-full h-auto rounded-xl shadow-lg"
                width={800}
                height={800}
                loading="eager"
              />
            </div>
          </section>

          {/* Article Content */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              
              {/* Introduction */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-8 mb-6">
                Stress au travail : quelles conséquences sur votre bien-être ?
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le <strong>stress au travail</strong> est un phénomène de plus en plus répandu dans notre société moderne. Entre les échéances à respecter, les responsabilités multiples et les attentes croissantes, il n'est pas rare de se sentir débordé, voire épuisé. Mais comment gérer cette pression qui semble parfois insurmontable ?
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Selon plusieurs études, environ 60 % des travailleurs admettent ressentir un <strong>stress au travail</strong> régulièrement. Ces tensions, souvent banalisées, peuvent entraîner de lourdes conséquences :
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                <li>Une fatigue persistante qui impacte les performances.</li>
                <li>Une irritabilité accrue, rendant les relations professionnelles plus complexes.</li>
                <li>Des difficultés de concentration, augmentant les erreurs ou ralentissant le travail.</li>
                <li>Une santé mentale fragilisée, avec un risque élevé d'épuisement professionnel ou de burn-out.</li>
                <li>Des troubles somatiques comme les maux de tête, les douleurs musculaires ou des insomnies.</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed">
                Si ce stress persiste, il peut mener à un véritable{" "}
                <Link to="/blog/neurofeedback-burn-out" className="text-primary hover:underline">
                  épuisement professionnel (burn-out)
                </Link>
                , nécessitant un accompagnement adapté.
              </p>

              {/* Section: Neurofeedback dynamique */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Qu'est-ce que le neurofeedback dynamique ?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Le neurofeedback dynamique est une méthode d'entraînement cérébral qui utilise une technologie de pointe pour aider le cerveau à s'autoréguler. Contrairement aux approches classiques qui ciblent des fréquences cérébrales spécifiques, cette méthode agit comme un miroir. Elle fournit au cerveau des informations en temps réel sur son propre fonctionnement, lui permettant de corriger naturellement les déséquilibres.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Ce processus non invasif est particulièrement efficace pour réduire le <strong>stress au travail</strong>, mais aussi pour améliorer la qualité du sommeil, renforcer la concentration et apaiser les émotions. Une véritable clé pour mieux gérer les exigences du quotidien.
              </p>

              {/* Section: Pourquoi adapté */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Pourquoi est-ce particulièrement adapté au stress au travail ?
              </h2>
              
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Calmer les réactions de stress excessives</strong> : Le neurofeedback aide à rétablir un équilibre émotionnel, permettant de mieux faire face aux situations tendues.
                </li>
                <li>
                  <strong>Améliorer la concentration et la productivité</strong> : Cette méthode renforce la capacité de votre cerveau à rester focalisé, vous aidant à travailler plus efficacement.
                </li>
                <li>
                  <strong>Prévenir le burn-out</strong> : Grâce à son action préventive, le neurofeedback identifie et corrige les schémas de stress avant qu'ils ne deviennent problématiques.
                </li>
                <li>
                  <strong>Favoriser un sommeil de qualité</strong> : En apaisant l'activité cérébrale, le neurofeedback améliore la récupération nocturne, indispensable pour affronter les défis quotidiens.
                </li>
                <li>
                  <strong>Renforcer la gestion émotionnelle</strong> : Avec un cerveau équilibré, les réactions impulsives diminuent, laissant place à des prises de décision plus claires.
                </li>
              </ul>

              {/* Section: Déroulement séance */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Comment se déroule une séance ?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Une séance de neurofeedback est simple et relaxante. Voici comment elle se déroule :
              </p>
              
              <ol className="space-y-4 text-muted-foreground list-decimal list-inside">
                <li>
                  Vous vous installez confortablement pendant que des capteurs sont placés sur votre cuir chevelu pour mesurer votre activité cérébrale.
                </li>
                <li>
                  Pendant la séance, vous écoutez de la musique ou regardez une vidéo. Le système détecte les déséquilibres et envoie des micro-pauses dans le flux audio ou visuel, incitant le cerveau à se réorganiser.
                </li>
                <li>
                  Une séance dure généralement entre 30 et 45 minutes. Les effets, bien que subtils au départ, se cumulent au fil des séances pour des résultats durables.
                </li>
              </ol>

              {/* Section: Témoignages */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Témoignages : des résultats concrets
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                De nombreux professionnels témoignent des bénéfices qu'ils ont obtenus grâce au neurofeedback dynamique pour gérer leur <strong>stress au travail</strong> :
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « Depuis que j'ai commencé les séances, je me sens beaucoup plus calme au travail. Les conflits ou les imprévus ne m'affectent plus autant. »
                </p>
              </blockquote>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « Ma concentration a nettement augmenté, et je termine mes tâches plus rapidement. Cela m'a permis de retrouver un meilleur équilibre entre vie professionnelle et personnelle. »
                </p>
              </blockquote>
              
              <p className="text-muted-foreground leading-relaxed">
                Le stress chronique impacte aussi fortement la qualité du sommeil. Découvrez comment le neurofeedback peut vous aider à{" "}
                <Link to="/blog/neurofeedback-sommeil-reparateur" className="text-primary hover:underline">
                  retrouver un sommeil réparateur
                </Link>.
              </p>

              {/* Conclusion */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Pourquoi attendre ? Agissez dès maintenant contre le stress au travail !
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Le <strong>stress au travail</strong> n'est pas une fatalité. En prenant soin de votre cerveau avec le neurofeedback dynamique, vous pouvez améliorer vos performances tout en préservant votre bien-être. Que vous soyez au bord du burn-out ou que vous souhaitiez simplement mieux gérer les pressions quotidiennes, cette méthode offre une solution adaptée à vos besoins.
              </p>
              
              <p className="text-lg text-foreground font-medium mt-6">
                Prenez rendez-vous dès aujourd'hui et découvrez comment réduire durablement votre <strong>stress au travail</strong> grâce au neurofeedback dynamique.
              </p>

              {/* Articles liés */}
              <div className="p-6 bg-muted/20 rounded-xl border border-border mt-8 mb-8">
                <p className="text-sm text-muted-foreground mb-3">À lire aussi :</p>
                <div className="space-y-2">
                  <Link 
                    to="/blog/neurofeedback-burn-out" 
                    className="block text-primary hover:underline font-medium"
                  >
                    Burn-out : Comprendre, Respirer, Se Reconstruire avec le Neurofeedback →
                  </Link>
                  <Link 
                    to="/blog/gestion-stress-angoisses" 
                    className="block text-primary hover:underline font-medium"
                  >
                    Gestion du Stress, des Angoisses et des Insomnies →
                  </Link>
                </div>
              </div>

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

export default BlogStressTravail;
