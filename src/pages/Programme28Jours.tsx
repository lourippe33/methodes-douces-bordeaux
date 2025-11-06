import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Target, TrendingDown, CheckCircle2 } from "lucide-react";

const Programme28Jours = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-pulse">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-semibold text-primary">Nouveau Programme</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Programme 28 Jours
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Transformez votre corps et votre esprit en seulement 28 jours
              </p>
              
              <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
                Un programme complet de perte de poids alliant nutrition, exercice et accompagnement personnalisé pour des résultats durables.
              </p>
              
              <Button size="lg" className="bg-gradient-primary hover:shadow-strong text-lg px-8 py-6">
                Réserver ma place
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">28 Jours</h3>
                <p className="text-muted-foreground">Programme structuré et progressif</p>
              </div>

              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Objectifs Clairs</h3>
                <p className="text-muted-foreground">Résultats mesurables et atteignables</p>
              </div>

              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Perte de Poids</h3>
                <p className="text-muted-foreground">Méthode éprouvée et efficace</p>
              </div>

              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Suivi Personnalisé</h3>
                <p className="text-muted-foreground">Accompagnement tout au long du programme</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Détails du Programme
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Plus d'informations disponibles prochainement
              </p>
              <div className="bg-card p-8 rounded-lg border border-border">
                <p className="text-lg mb-6">
                  Inscrivez-vous à notre liste d'attente pour être informé du lancement officiel et bénéficier d'offres exclusives.
                </p>
                <Button size="lg" className="bg-gradient-primary">
                  Rejoindre la liste d'attente
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programme28Jours;
