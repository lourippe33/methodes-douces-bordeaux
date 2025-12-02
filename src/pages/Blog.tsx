import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog - Neurofeedback et Bien-être | Eric Gata";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Articles sur le neurofeedback, la gestion du stress, le sommeil et le bien-être. Conseils et informations par Eric Gata, praticien à Tresses.");
    }
  }, []);

  const articles = [
    {
      slug: "neurofeedback-sommeil-reparateur",
      title: "Retrouver un Sommeil Réparateur avec le Neurofeedback",
      excerpt: "Fatigue persistante, concentration difficile, émotions instables ? Découvrez comment le neurofeedback dynamique peut vous aider à retrouver un sommeil de qualité.",
      date: "Mars 2025",
      category: "Sommeil"
    },
    {
      slug: "ameliorer-sommeil-neuroptimal",
      title: "Améliorer le Sommeil grâce au Neurofeedback",
      excerpt: "Le neurofeedback NeurOptimal est une méthode naturelle non invasive qui aide votre cerveau à s'autoréguler pour un sommeil réparateur.",
      date: "Janvier 2025",
      category: "Sommeil"
    },
    {
      slug: "stress-travail-neurofeedback",
      title: "Réduire le Stress au Travail avec le Neurofeedback",
      excerpt: "Entre échéances, responsabilités et attentes, le stress professionnel impacte votre bien-être. Découvrez comment le neurofeedback peut vous aider.",
      date: "Novembre 2024",
      category: "Stress"
    },
    {
      slug: "gestion-stress-angoisses",
      title: "Gestion du Stress et des Angoisses",
      excerpt: "La gestion du stress est devenue une préoccupation majeure. Découvrez comment retrouver votre équilibre avec des méthodes naturelles.",
      date: "Octobre 2024",
      category: "Stress"
    },
    {
      slug: "neurofeedback-burn-out",
      title: "Le Neurofeedback face au Burn-out",
      excerpt: "Le burn-out est un épuisement profond. Découvrez comment le neurofeedback dynamique peut accompagner votre chemin vers la récupération.",
      date: "Septembre 2024",
      category: "Bien-être"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              Blog Neurofeedback & Bien-être
            </h1>
            <p className="text-xl text-muted-foreground">
              Conseils, informations et actualités sur le neurofeedback, la gestion du stress et l'accompagnement au bien-être
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-500 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="text-primary">{article.category}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
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
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
