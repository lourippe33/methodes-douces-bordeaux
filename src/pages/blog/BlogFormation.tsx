import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, GraduationCap } from "lucide-react";

const BlogFormation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Articles de la catégorie Formation (à compléter avec de futurs articles)
  const articles: Array<{
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    imageAlt: string;
  }> = [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Articles Formation - Blog Méthodes Douces Bordeaux",
    description: "Articles sur les formations en méthodes douces : hypnose, EFT, neurofeedback. Informations et conseils pour futurs praticiens.",
    url: "https://methodes-douces-bordeaux.fr/blog/formation"
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Articles Formation | Devenir Praticien en Méthodes Douces | Blog</title>
        <meta 
          name="description" 
          content="Articles sur les formations en méthodes douces : hypnose, EFT, neurofeedback. Informations et conseils pour devenir praticien en bien-être." 
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/formation" />
        <meta property="og:title" content="Articles Formation | Devenir Praticien en Méthodes Douces" />
        <meta property="og:description" content="Découvrez nos articles sur les formations en méthodes douces : parcours, compétences, installation professionnelle." />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/blog/formation" />
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
              { label: "Formation" }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Articles Formation
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Vous souhaitez devenir praticien en méthodes douces ? 
                Découvrez nos articles sur les formations, parcours et compétences.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/a-propos">
                  En savoir plus sur notre parcours
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Articles Grid or Coming Soon */}
        <section className="container mx-auto px-4 py-16">
          {articles.length > 0 ? (
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
                      <span className="text-primary font-medium">Formation</span>
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
          ) : (
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="p-8 bg-muted/30 rounded-xl border border-border">
                <GraduationCap className="h-16 w-16 text-primary/50 mx-auto mb-6" />
                <h2 className="text-2xl font-heading font-bold mb-4">Articles à venir</h2>
                <p className="text-muted-foreground mb-6">
                  Nous préparons des articles sur les formations en méthodes douces : 
                  parcours de formation, compétences requises, installation professionnelle. 
                  Revenez bientôt !
                </p>
                <Button asChild variant="outline">
                  <Link to="/blog">
                    Voir tous les articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              En savoir plus sur notre approche
            </h2>
            <p className="text-muted-foreground mb-8">
              Découvrez le parcours d'Eric Gata et sa vision de l'accompagnement en méthodes douces.
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/a-propos">Découvrir notre parcours</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogFormation;
