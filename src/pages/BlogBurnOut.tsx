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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Le Neurofeedback face au Burn Out : Une Solution Naturelle",
    "description": "Découvrez comment le neurofeedback peut vous aider à surmonter le burn out. Réduction du stress, amélioration du sommeil et récupération durable.",
    "image": "https://methodes-douces-bordeaux.fr/assets/neurofeedback-burn-out.png",
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
    "datePublished": "2024-09-15",
    "dateModified": "2025-12-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://methodes-douces-bordeaux.fr/blog/neurofeedback-burn-out"
    },
    "keywords": "burn out, neurofeedback, épuisement professionnel, récupération, stress, fatigue chronique, Tresses, Bordeaux"
  };

  return (
    <>
      <Helmet>
        <title>Burn Out et Neurofeedback : Retrouvez Votre Énergie | Tresses Bordeaux</title>
        <meta name="description" content="Surmonter le burn out grâce au neurofeedback. Méthode naturelle pour réduire le stress, améliorer le sommeil et retrouver la clarté mentale. Cabinet à Tresses." />
        <meta name="keywords" content="burn out, neurofeedback, épuisement professionnel, fatigue chronique, stress, récupération, bien-être, Tresses, Bordeaux" />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/neurofeedback-burn-out" />
        <meta property="og:title" content="Burn Out et Neurofeedback : Retrouvez Votre Énergie" />
        <meta property="og:description" content="Découvrez comment le neurofeedback peut vous aider à surmonter le burn out et retrouver un équilibre durable." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/blog/neurofeedback-burn-out" />
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
                { label: "Burn Out & Neurofeedback" }
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
                  <span>Septembre 2024</span>
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
                Le Neurofeedback face au Burn Out
              </h1>
            </div>
          </section>

          {/* Featured Image */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <img 
                src={burnoutImage} 
                alt="Burn out un cadeau mal emballé - témoignages et conseils pour comprendre le burn out et faire de cette épreuve une chance" 
                className="w-full h-auto rounded-xl shadow-lg"
                width={1200}
                height={400}
                loading="eager"
              />
            </div>
          </section>

          {/* Article Content */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              
              {/* Introduction */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le <strong>burn out</strong> est un épuisement profond, une fatigue qui semble engloutir toute l'énergie. Chaque jour, je me lève avec un poids sur la poitrine, une sensation de vide et d'impuissance. Les tâches qui paraissaient autrefois simples deviennent des montagnes insurmontables. La motivation m'échappe, et je me sens piégé dans une spirale descendante. Mes relations, mes passions, tout ce qui apportait joie et sens à ma vie semble désormais hors de portée.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                J'ai besoin d'une solution qui ne se limite pas à un simple traitement symptomatique, mais qui s'attaque à la racine de mon mal-être. Célébrer de petites victoires serait une grande source de motivation pour moi. Même les progrès minimes me rappelleraient que la guérison est possible et que chaque pas compte.
              </p>

              {/* Section: Comprendre le burn out */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Comprendre le burn out et ses conséquences
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Le <strong>burn out</strong> se produit lorsque les exigences de la vie professionnelle ou personnelle dépassent la capacité d'adaptation d'une personne. Cela entraîne souvent une fatigue persistante et une irritabilité. De plus, les personnes touchées par cette condition peuvent éprouver des difficultés de concentration et des douleurs physiques. La gestion du stress devient alors cruciale pour éviter une détérioration de la santé.
              </p>

              {/* Section: Qu'est-ce que le neurofeedback */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Qu'est-ce que le neurofeedback ?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Le neurofeedback est une technique non invasive qui permet d'analyser et de réguler l'activité cérébrale. En utilisant des capteurs placés sur le cuir chevelu, les praticiens mesurent les ondes cérébrales et fournissent un retour instantané. Cette méthode aide à améliorer le fonctionnement du cerveau en le guidant vers un état plus équilibré.
              </p>

              {/* Section: Les bienfaits */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Les bienfaits du neurofeedback pour le burn out
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Le principal avantage, est qu'il s'agit d'une méthode naturelle qui ne requiert ni médicament, ni intervention invasive. Cette approche est entièrement personnalisée, car elle se base sur l'activité cérébrale unique de chaque individu. Pour les personnes souffrant de <strong>burn out</strong>, il offre plusieurs bienfaits significatifs :
              </p>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">
                1. Réduction du stress
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                En rééquilibrant l'activité cérébrale, cela vous aide à diminuer les niveaux de stress et à retrouver une sensation de calme. Cela peut être particulièrement utile pour les personnes en état d'épuisement émotionnel.
              </p>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">
                2. Amélioration du sommeil
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                C'est un passage où souvent s'installent les troubles du sommeil. En régulant l'activité cérébrale, cette technique aide à retrouver un sommeil réparateur, essentiel pour la récupération mentale et physique. Un meilleur sommeil retrouvé, c'est de nouvelles possibilités.
              </p>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">
                3. Augmentation de la clarté mentale
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Travailler sur votre activité cérébrale est une véritable révélation. Vous commencez à ressentir une clarté d'esprit que vous n'aviez pas connue depuis longtemps. La concentration s'améliore, et la prise de décision devient plus fluide, presque instinctive.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Fini le brouillard permanent qui obscurcissait vos pensées dès le réveil. Vous vous réveillez avec une sensation de légèreté et d'énergie, prêt à affronter la journée. Votre esprit devient plus vif, et chaque choix que vous faites est désormais accompagné d'une confiance nouvelle. Vous retrouvez le plaisir d'agir, d'interagir et de vivre pleinement chaque moment.
              </p>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">
                4. Gestion des émotions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cette méthode vous accompagne dans la stabilisation de vos émotions, vous offrant une véritable bouffée d'air. En réduisant les réactions excessives face au stress, vous ressentez un allègement, comme si un poids était levé de vos épaules. Vous commencez à développer une résilience que vous ne pensiez pas possible, et la gestion de vos émotions devient plus naturelle.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                La fatigue, qui pesait lourdement sur votre quotidien, se transforme en un sentiment de légèreté. Avec chaque jour qui passe, vous constatez une évolution positive dans votre vie. Vous découvrez qu'il devient de plus en plus facile de vivre, de savourer les petits moments et d'affronter les défis avec une nouvelle sérénité.
              </p>

              {/* Section: Prévention */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Un soutien pour la prévention du burn out
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Outre son efficacité pour traiter un <strong>burn out</strong> déjà installé, cette méthode peut également jouer un rôle crucial dans la prévention. Pour les personnes vivant dans des environnements stressants, comme les professionnels en milieu médical, les enseignants ou les entrepreneurs, le neurofeedback peut aider à renforcer la résilience face au stress.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                En apprenant au cerveau à réagir plus sereinement aux situations difficiles, cette technique permet d'éviter l'accumulation de stress prolongé, l'une des principales causes du <strong>burn out</strong>. Ainsi, au lieu de se retrouver dans une situation d'épuisement total, le cerveau est mieux préparé à gérer les tensions quotidiennes.
              </p>

              {/* Section: Pourquoi choisir */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Pourquoi choisir le neurofeedback ?
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                Il offre de nombreux avantages. Il s'agit d'une approche douce, non médicamenteuse, qui agit directement sur la source des problèmes en modifiant l'activité cérébrale. Contrairement aux solutions temporaires, le neurofeedback apporte des changements durables dans la manière dont le cerveau réagit au stress.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                En intégrant cette technique dans une démarche globale de bien-être, les personnes souffrant de <strong>burn out</strong> peuvent retrouver un équilibre plus rapidement et prévenir les rechutes à long terme. En bref, le neurofeedback s'impose comme une méthode efficace et innovante pour aider à surmonter les défis du <strong>burn out</strong>.
              </p>

              {/* Lien externe */}
              <p className="text-muted-foreground leading-relaxed mt-8">
                <a 
                  href="https://www.service-public.fr/particuliers/vosdroits/F35235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  En savoir plus sur le burn out c'est par ici
                  <ExternalLink size={14} />
                </a>
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

export default BlogBurnOut;
