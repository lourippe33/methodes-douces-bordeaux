import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Brain, Sparkles, Heart, Scale, GraduationCap } from "lucide-react";

// Import images for recent articles
import sommeilReparateurImg from "@/assets/sommeil-reparateur-neurofeedback.jpg";
import ameliorerSommeilImg from "@/assets/ameliorer-sommeil-neuroptimal.jpg";
import stressTravailImg from "@/assets/stress-travail-neurofeedback.jpg";
import gestionStressImg from "@/assets/gestion-stress-angoisses.png";
import burnOutImg from "@/assets/neurofeedback-burn-out.png";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Catégories du blog
  const categories = [
    {
      slug: "neurofeedback",
      title: "Neurofeedback",
      description: "Sommeil, stress, concentration, burn-out. Découvrez comment le neurofeedback dynamique accompagne votre bien-être.",
      icon: Brain,
      articleCount: 4,
      color: "text-blue-600"
    },
    {
      slug: "hypnose",
      title: "Hypnose",
      description: "Confiance en soi, lâcher-prise, changement d'habitudes. L'hypnose pour un accompagnement en douceur.",
      icon: Sparkles,
      articleCount: 0,
      color: "text-purple-600"
    },
    {
      slug: "eft-h",
      title: "EFT-H",
      description: "Libération émotionnelle, gestion du stress, apaisement. Les techniques de tapping pour votre équilibre.",
      icon: Heart,
      articleCount: 1,
      color: "text-rose-600"
    },
    {
      slug: "agp",
      title: "Méthode AGP",
      description: "Perte de poids durable, chronobiologie, programme 28 jours. Une approche sans régime strict.",
      icon: Scale,
      articleCount: 0,
      color: "text-green-600"
    },
    {
      slug: "formation",
      title: "Formation",
      description: "Devenir praticien en méthodes douces. Parcours, compétences et installation professionnelle.",
      icon: GraduationCap,
      articleCount: 0,
      color: "text-amber-600"
    }
  ];

  // Derniers articles (tous confondus)
  const recentArticles = [
    {
      slug: "neurofeedback-sommeil-reparateur",
      title: "Retrouver un Sommeil Réparateur avec le Neurofeedback Dynamique",
      excerpt: "Fatigue persistante, concentration difficile, émotions instables ? Découvrez comment le neurofeedback dynamique peut vous aider.",
      date: "Mars 2025",
      category: "Neurofeedback",
      categorySlug: "neurofeedback",
      image: sommeilReparateurImg,
      imageAlt: "Améliorer le sommeil avec le neurofeedback dynamique"
    },
    {
      slug: "ameliorer-sommeil-neuroptimal",
      title: "Améliorer le Sommeil grâce au Neurofeedback NeurOptimal",
      excerpt: "Le neurofeedback NeurOptimal est une méthode naturelle non invasive qui aide votre cerveau à s'autoréguler.",
      date: "Janvier 2025",
      category: "Neurofeedback",
      categorySlug: "neurofeedback",
      image: ameliorerSommeilImg,
      imageAlt: "Améliorer le sommeil naturellement avec le neurofeedback"
    },
    {
      slug: "stress-travail-neurofeedback",
      title: "Réduire le Stress au Travail avec le Neurofeedback Dynamique",
      excerpt: "Entre échéances, responsabilités et attentes, le stress professionnel impacte votre bien-être.",
      date: "Novembre 2024",
      category: "Neurofeedback",
      categorySlug: "neurofeedback",
      image: stressTravailImg,
      imageAlt: "Stress au travail - solutions avec le neurofeedback"
    },
    {
      slug: "gestion-stress-angoisses",
      title: "Gestion du Stress et des Angoisses",
      excerpt: "La gestion du stress est devenue une préoccupation majeure. Découvrez comment retrouver votre équilibre.",
      date: "Octobre 2024",
      category: "EFT-H",
      categorySlug: "eft-h",
      image: gestionStressImg,
      imageAlt: "Gestion du stress et des angoisses"
    },
    {
      slug: "neurofeedback-burn-out",
      title: "Le Neurofeedback face au Burn-out",
      excerpt: "Le burn-out est un épuisement profond. Découvrez comment le neurofeedback dynamique peut vous accompagner.",
      date: "Septembre 2024",
      category: "Neurofeedback",
      categorySlug: "neurofeedback",
      image: burnOutImg,
      imageAlt: "Burn out - un cadeau mal emballé"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Méthodes Douces Bordeaux",
    description: "Articles sur le neurofeedback, l'hypnose, l'EFT-H et le bien-être. Conseils et informations par Eric Gata, praticien à Tresses près de Bordeaux.",
    url: "https://methodes-douces-bordeaux.fr/blog",
    author: {
      "@type": "Person",
      name: "Eric Gata"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog Bien-être | Neurofeedback, Hypnose, EFT-H | Méthodes Douces Bordeaux</title>
        <meta 
          name="description" 
          content="Articles sur le neurofeedback, l'hypnose, l'EFT-H et le bien-être. Conseils et informations par Eric Gata, praticien à Tresses près de Bordeaux." 
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog" />
        <meta property="og:title" content="Blog Bien-être | Neurofeedback, Hypnose, EFT-H" />
        <meta property="og:description" content="Articles sur le neurofeedback, l'hypnose, l'EFT-H et le bien-être. Conseils par Eric Gata." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/blog" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: "Accueil", path: "/" },
              { label: "Blog" }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Blog Bien-être & Méthodes Douces
            </h1>
            <p className="text-xl text-muted-foreground">
              Conseils, informations et actualités sur le neurofeedback, l'hypnose, l'EFT-H 
              et l'accompagnement au bien-être
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
              Explorer par catégorie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link 
                  key={category.slug} 
                  to={`/blog/${category.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                          <category.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {category.title}
                          </CardTitle>
                          <span className="text-sm text-muted-foreground">
                            {category.articleCount} article{category.articleCount > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {category.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium">
                        Voir les articles
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              Derniers articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
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
                      <Link 
                        to={`/blog/${article.categorySlug}`}
                        className="text-primary font-medium hover:underline"
                      >
                        {article.category}
                      </Link>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
