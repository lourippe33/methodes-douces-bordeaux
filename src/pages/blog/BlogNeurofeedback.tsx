import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Brain } from "lucide-react";

// Import images
import sommeilReparateurImg from "@/assets/sommeil-reparateur-neurofeedback.jpg";
import ameliorerSommeilImg from "@/assets/ameliorer-sommeil-neuroptimal.jpg";
import stressTravailImg from "@/assets/stress-travail-neurofeedback.jpg";
import burnOutImg from "@/assets/neurofeedback-burn-out.png";

const BlogNeurofeedback = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Articles de la catégorie Neurofeedback
  const articles = [
    {
      slug: "neurofeedback-sommeil-reparateur",
      title: "Retrouver un Sommeil Réparateur avec le Neurofeedback Dynamique",
      excerpt: "Fatigue persistante, concentration difficile, émotions instables ? Découvrez comment le neurofeedback dynamique peut vous aider à retrouver un sommeil de qualité.",
      date: "Mars 2025",
      image: sommeilReparateurImg,
      imageAlt: "Améliorer le sommeil avec le neurofeedback dynamique"
    },
    {
      slug: "ameliorer-sommeil-neuroptimal",
      title: "Améliorer le Sommeil grâce au Neurofeedback NeurOptimal",
      excerpt: "Le neurofeedback NeurOptimal est une méthode naturelle non invasive qui aide votre cerveau à s'autoréguler pour un sommeil réparateur.",
      date: "Janvier 2025",
      image: ameliorerSommeilImg,
      imageAlt: "Améliorer le sommeil naturellement avec le neurofeedback"
    },
    {
      slug: "stress-travail-neurofeedback",
      title: "Réduire le Stress au Travail avec le Neurofeedback Dynamique",
      excerpt: "Entre échéances, responsabilités et attentes, le stress professionnel impacte votre bien-être. Découvrez comment le neurofeedback peut vous aider.",
      date: "Novembre 2024",
      image: stressTravailImg,
      imageAlt: "Stress au travail - solutions avec le neurofeedback"
    },
    {
      slug: "neurofeedback-burn-out",
      title: "Le Neurofeedback face au Burn-out",
      excerpt: "Le burn-out est un épuisement profond. Découvrez comment le neurofeedback dynamique peut accompagner votre chemin vers la récupération.",
      date: "Septembre 2024",
      image: burnOutImg,
      imageAlt: "Burn out - un cadeau mal emballé"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Articles Neurofeedback - Blog Méthodes Douces Bordeaux",
    description: "Articles et conseils sur le neurofeedback dynamique : sommeil, stress, burn-out, concentration. Informations par Eric Gata, praticien à Tresses près de Bordeaux.",
    url: "https://methodes-douces-bordeaux.fr/blog/neurofeedback",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://methodes-douces-bordeaux.fr/blog/${article.slug}`
      }))
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Articles Neurofeedback | Sommeil, Stress, Bien-être | Blog</title>
        <meta 
          name="description" 
          content="Articles et conseils sur le neurofeedback dynamique : sommeil, stress, burn-out, concentration. Informations par Eric Gata, praticien à Tresses près de Bordeaux." 
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/neurofeedback" />
        <meta property="og:title" content="Articles Neurofeedback | Sommeil, Stress, Bien-être" />
        <meta property="og:description" content="Découvrez nos articles sur le neurofeedback dynamique : amélioration du sommeil, gestion du stress, récupération du burn-out." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/blog/neurofeedback" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: "Accueil", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: "Neurofeedback" }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Brain className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Articles Neurofeedback
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Le neurofeedback dynamique permet au cerveau de s'autoréguler naturellement. 
                Découvrez nos articles sur le sommeil, le stress et le bien-être.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/neurofeedback">
                  En savoir plus sur le neurofeedback
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <Link to={`/blog/${article.slug}`} className="block overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Link>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="text-primary font-medium">Neurofeedback</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <Link to={`/blog/${article.slug}`}>
                      Lire l'article
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Envie d'essayer le neurofeedback ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Découvrez comment le neurofeedback dynamique peut vous accompagner vers plus de sérénité.
            </p>
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

export default BlogNeurofeedback;
