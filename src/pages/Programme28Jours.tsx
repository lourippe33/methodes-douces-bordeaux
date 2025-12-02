import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Calendar, Target, TrendingDown, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
const Programme28Jours = () => {
  useEffect(() => {
    document.title = "Programme 28 Jours - Défi Minceur | Cabinet AGP Tresses";

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://methodes-douces-bordeaux.fr/programme-28-jours");
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Programme AGP en ligne pour une perte de poids durable, sans régime strict. Méthode simple, structurée et personnalisée, accessible partout en francophonie.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Programme AGP en ligne pour une perte de poids durable, sans régime strict. Méthode simple, structurée et personnalisée, accessible partout en francophonie.";
      document.head.appendChild(meta);
    }

    // Structured Data - Event/Course
    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Programme 28 Jours - Défi Minceur",
      description: "Programme complet de gestion du poids sur 28 jours avec hypnose, EFT-H et suivi personnalisé",
      provider: {
        "@id": "https://methodes-douces-bordeaux.fr/#business",
      },
      offers: {
        "@type": "Offer",
        price: "90",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-27",
      },
    });
    document.head.appendChild(structuredData);
    return () => {
      if (structuredData.parentNode) {
        structuredData.parentNode.removeChild(structuredData);
      }
    };
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              {
                label: "Programme 28 Jours",
              },
            ]}
          />
        </div>
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

              <div className="space-y-4 text-lg text-foreground/80 mb-8 max-w-3xl mx-auto text-left">
                <p>
                  Le Programme 28 Jours AGP est destiné à toute personne francophone souhaitant perdre du poids de
                  manière durable, sans régime strict ni frustration. Cet accompagnement se déroule entièrement en
                  ligne, avec un suivi pratique et progressif basé sur l'écoute du corps, la gestion des habitudes
                  alimentaires et la compréhension du rythme biologique. Vous êtes guidé pas à pas, quel que soit votre
                  lieu de vie, avec des conseils simples, applicables au quotidien et adaptés à votre organisation
                  personnelle.
                </p>
                <p>
                  Ce programme peut également être associé, si vous le souhaitez, à un travail en cabinet à Tresses pour
                  renforcer la motivation ou faciliter certaines étapes. L'objectif reste le même : un changement
                  durable, agréable et respectueux de votre équilibre.
                </p>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Transformez votre quotidien en seulement 28 jours
              </p>

              <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
                Un programme complet alliant méthodes douces et accompagnement personnalisé pour des résultats durables
                et sans frustration.
              </p>

              <Button size="lg" className="bg-gradient-primary hover:shadow-strong text-lg px-8 py-6" asChild>
                <a
                  href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver ma place
                </a>
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
                <h3 className="text-xl font-semibold mb-2">Résultats durables</h3>
                <p className="text-muted-foreground">Méthode douce et efficace</p>
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

        {/* Program Details Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Détails du Programme</h2>

              {/* Introduction */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">🌿 Défi minceur 28 jours</h3>
                <p className="text-xl font-semibold text-primary mb-6">
                  28 jours pour reprendre le contrôle en douceur, naturellement.
                </p>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Vous avez peut-être déjà essayé plusieurs régimes, compté les calories, supprimé des aliments,
                    repris, re-perdu, puis reperdu confiance dans votre capacité à changer. Si c'est le cas, sachez une
                    chose : <strong>ce n'est pas vous le problème.</strong>
                  </p>
                  <p>
                    Le corps, les émotions et les automatismes alimentaires travaillent ensemble. Si l'un prend le
                    dessus, tout devient lutte.
                  </p>
                  <p>
                    Le programme AGP a été conçu pour vous permettre de sortir de cette bataille intérieure, sans
                    régime, sans frustration, et sans culpabilité.
                  </p>
                </div>
              </div>

              {/* Origin */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>✨</span> D'où vient cette méthode ?
                </h3>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Je suis le créateur de la méthode AGP, une approche globale de la gestion du poids et du
                    comportement alimentaire, qui a déjà permis de former plus de 450 praticiens. Cette méthode existe
                    depuis plus de 10 ans.
                  </p>
                  <p>
                    Le programme AGP 28 jours est la version destinée au grand public : une méthode accessible, guidée,
                    simple à suivre, qui vous permet d'agir sur votre relation à la nourriture, à votre rythme. C'est
                    une application qui vous guide et vous permet d'avancer à votre rythme.
                  </p>
                </div>
              </div>

              {/* How it works */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span>🧭</span> Comment fonctionne le programme ?
                </h3>
                <p className="text-foreground/80 mb-6">
                  Pendant 28 jours, vous êtes accompagné(e) étape par étape via :
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span>📱</span> Une application dédiée
                    </h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Chaque jour, des indications claires</li>
                      <li>• Des conseils alimentaires basés sur la chronobiologie</li>
                      <li>• Des exercices courts pour intégrer des nouveaux comportements</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span>🎧</span> Des séances d'hypnose et d'EFT
                    </h4>
                    <p className="text-foreground/80 mb-2">Pour :</p>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• apaiser les envies impulsives</li>
                      <li>• diminuer le stress</li>
                      <li>• relâcher le besoin de compenser avec la nourriture</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span>💬</span> Un suivi hebdomadaire personnalisé
                    </h4>
                    <p className="text-foreground/80 mb-2">
                      Vous n'êtes pas seul(e). Chaque semaine, nous faisons un point ensemble, en visio, pour :
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• ajuster</li>
                      <li>• soutenir</li>
                      <li>• encourager</li>
                      <li>• maintenir l'élan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What it's not */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>💛</span> Ce que ce programme n'est pas
                </h3>
                <ul className="space-y-3 text-foreground/80 mb-6">
                  <li>• Ce n'est pas un régime</li>
                  <li>• Ce n'est pas du contrôle par la force</li>
                  <li>• Ce n'est pas de la restriction</li>
                </ul>
                <p className="text-foreground/80 mb-4">
                  Le but n'est pas que vous vous battiez avec vous-même. Le but est que vous retrouviez votre pouvoir,
                  naturellement.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Si vous vivez une difficulté émotionnelle plus profonde (trauma, anxiété intense, blessure
                  affective…), l'application vous en informera et je vous orienterai vers un accompagnement
                  complémentaire adapté. Vous ne serez jamais seul(e).
                </p>
              </div>

              {/* Who is it for */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🎯</span> Pour qui est-il fait ?
                </h3>
                <ul className="space-y-3 text-foreground/80 mb-4">
                  <li>• Si vous mangez par stress, fatigue, ennui ou vide</li>
                  <li>• Si vous avez l'impression de "perdre le contrôle"</li>
                  <li>• Si vous cherchez une solution douce mais durable</li>
                  <li>• Si vous voulez vous sentir fière, stable, alignée</li>
                  <li>• Si vous voulez arrêter de commencer / arrêter / recommencer</li>
                </ul>
                <p className="text-lg font-semibold text-primary">Alors ce programme est pour vous.</p>
              </div>

              {/* Launch Offer */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg border-2 border-primary/20 mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🚀</span> Une offre à ne pas rater !
                </h3>
                <p className="text-foreground/80 mb-6">
                  Je propose actuellement ce programme, à tarif réduit, pour donner un coup de boost à votre perte de
                  poids :
                </p>
                <div className="bg-card p-6 rounded-lg mb-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">
                    Profitez de cette offre de lancement à 90€ au lieu de 149€
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
                <Button size="lg" className="w-full bg-gradient-primary hover:shadow-strong text-lg" asChild>
                  <a
                    href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Réserver ma place
                  </a>
                </Button>
              </div>

              {/* What you'll find */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🧡</span> Ce que vous allez retrouver
                </h3>
                <ul className="space-y-3 text-foreground/80 mb-6">
                  <li>• La sensation de vous choisir</li>
                  <li>• Le plaisir de manger sans culpabilité</li>
                  <li>• Une relation plus douce avec votre corps</li>
                  <li>• Une capacité à dire stop, calmement</li>
                  <li>• Et surtout : de la fierté</li>
                </ul>
                <div className="space-y-2 text-lg font-semibold text-primary">
                  <p>Cette fois-ci, vous ne serez pas seul(e).</p>
                  <p>Cette fois-ci, vous avancez accompagné(e).</p>
                  <p>Cette fois-ci… vous vous choisissez.</p>
                </div>
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
