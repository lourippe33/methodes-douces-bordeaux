import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Heart } from "lucide-react";

// Import images
import gestionStressImg from "@/assets/gestion-stress-angoisses.png";

const BlogEftH = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Articles de la catégorie EFT-H
  const articles = [
    {
      slug: "gestion-stress-angoisses",
      title: "Gestion du Stress et des Angoisses",
      excerpt: "La gestion du stress est devenue une préoccupation majeure. Découvrez comment retrouver votre équilibre avec des méthodes naturelles.",
      date: "Octobre 2024",
      image: gestionStressImg,
      imageAlt: "Gestion du stress et des angoisses"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Articles EFT-H - Blog Méthodes Douces Bordeaux",
    description: "Articles et conseils sur l'EFT-H (Emotional Freedom Techniques) : libération émotionnelle, gestion du stress, apaisement. Informations par Eric Gata à Tresses.",
    url: "https://methodes-douces-bordeaux.fr/blog/eft-h",
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
        <title>Articles EFT-H | Libération Émotionnelle, Stress | Blog</title>
        <meta 
          name="description" 
          content="Articles et conseils sur l'EFT-H : libération émotionnelle, gestion du stress, apaisement mental. Informations par Eric Gata, praticien à Tresses près de Bordeaux." 
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/eft-h" />
        <meta property="og:title" content="Articles EFT-H | Libération Émotionnelle, Stress" />
        <meta property="og:description" content="Découvrez nos articles sur l'EFT-H : libération émotionnelle, gestion du stress, techniques de tapping." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/blog/eft-h" />
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
              { label: "EFT-H" }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Articles EFT-H
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                L'EFT-H (Emotional Freedom Techniques) combine stimulation de points énergétiques 
                et mise en mots pour libérer les émotions bloquées. Découvrez nos articles.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/hypnose-eft-h">
                  En savoir plus sur l'EFT-H
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
                    <span className="text-primary font-medium">EFT-H</span>
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

          {/* More articles coming */}
          <div className="max-w-2xl mx-auto text-center py-12 mt-8">
            <p className="text-muted-foreground">
              D'autres articles sur l'EFT-H arrivent bientôt. Restez informé !
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Découvrir l'EFT-H
            </h2>
            <p className="text-muted-foreground mb-8">
              L'EFT-H est une méthode douce pour apaiser les émotions et retrouver un équilibre intérieur.
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/hypnose-eft-h">Découvrir l'accompagnement EFT-H</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogEftH;
