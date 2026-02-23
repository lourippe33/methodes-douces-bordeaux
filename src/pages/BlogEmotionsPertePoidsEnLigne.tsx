import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import featuredImage from "@/assets/manger-emotions-perte-poids.jpg";
import ericPortrait from "@/assets/eric-gata-portrait.png";

const BlogEmotionsPertePoidsEnLigne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "J'ai dépensé 1500€ en régimes avant de comprendre pourquoi je mangeais",
    alternativeHeadline: "Pourquoi je mange mes émotions ? Comprendre pour perdre du poids",
    image: "https://methodes-douces-bordeaux.fr/og-agp-1200x630.jpg",
    author: {
      "@type": "Person",
      name: "Éric Gata",
      url: "https://methodes-douces-bordeaux.fr/a-propos",
      jobTitle: "Praticien en méthodes douces",
      worksFor: {
        "@type": "Organization",
        name: "Méthodes Douces Bordeaux",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Méthodes Douces Bordeaux",
    },
    datePublished: "2026-02-23",
    dateModified: "2026-02-23",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://methodes-douces-bordeaux.fr/blog/pourquoi-je-mange-mes-emotions-comprendre-pour-perdre-du-poids",
    },
    articleSection: "Perte de poids",
    keywords: "pourquoi je mange mes émotions, manger émotionnel, perte de poids, hypnose, méthode AGP, Bordeaux",
    wordCount: 2100,
    mentions: [
      {
        "@type": "Service",
        name: "Programme AGP 30 Jours",
        provider: {
          "@type": "LocalBusiness",
          name: "Méthodes Douces Bordeaux",
          address: {
            "@type": "PostalAddress",
            streetAddress: "9 Galerie Marchande",
            addressLocality: "Tresses",
            postalCode: "33370",
            addressRegion: "Gironde",
            addressCountry: "FR",
          },
        },
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "J'ai peur d'échouer encore une fois. Comment savoir si cette fois sera différente ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cette fois est différente parce qu'on ne travaille pas sur les mêmes choses. Les régimes travaillent sur l'alimentation. Le Programme AGP travaille sur vos émotions, vos automatismes et votre relation à la nourriture. C'est un changement de fond, pas de surface. Et si après 7 jours vous ne le sentez pas, vous êtes remboursé(e) intégralement.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que je vais devoir arrêter de manger certains aliments ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Aucun aliment n'est interdit. On travaille sur le quand (chronobiologie), le pourquoi (émotions) et le comment (automatismes). Pas sur le quoi. La restriction crée la frustration, et la frustration crée l'échec.",
        },
      },
      {
        "@type": "Question",
        name: "Je mange beaucoup par stress. Est-ce que le programme peut vraiment m'aider ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, c'est exactement pour ça qu'il a été conçu. Les outils d'hypnose et d'EFT-H intégrés dans l'application sont spécifiquement pensés pour gérer le stress et les émotions sans passer par la nourriture. Et le coaching hebdomadaire vous aide à identifier vos déclencheurs émotionnels et à les travailler en profondeur.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour voir des changements ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les premiers changements — notamment sur la relation à la nourriture et les fringales émotionnelles — se font souvent sentir dès les 2 premières semaines. Les changements physiques (perte de poids) suivent naturellement, de façon progressive et durable. L'objectif n'est pas la vitesse, c'est la stabilité.",
        },
      },
      {
        "@type": "Question",
        name: "Le programme est accessible où ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le programme est 100% en ligne. L'application fonctionne partout en France. Les sessions de coaching se font en visioconférence depuis le cabinet à Tresses (Gironde), mais vous pouvez y participer depuis n'importe où — Bordeaux, Paris, Lyon, ou ailleurs.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pourquoi je mange mes émotions ? Comprendre pour perdre du poids</title>
        <meta
          name="description"
          content="J'ai dépensé 1500€ en régimes avant de comprendre pourquoi je mangeais. Et si le vrai problème n'était pas la nourriture ? Témoignage et solution douce."
        />
        <meta
          name="keywords"
          content="pourquoi je mange mes émotions, arrêter de manger par stress, culpabilité nourriture, manger émotionnel solution, méthode respectueuse perte de poids, perdre du poids sans se priver, relation à la nourriture"
        />
        <link
          rel="canonical"
          href="https://methodes-douces-bordeaux.fr/blog/pourquoi-je-mange-mes-emotions-comprendre-pour-perdre-du-poids"
        />
        <meta property="og:title" content="Pourquoi je mange mes émotions ? Comprendre pour perdre du poids" />
        <meta
          property="og:description"
          content="J'ai dépensé 1500€ en régimes avant de comprendre pourquoi je mangeais. Témoignage sur le chemin vers une relation apaisée avec la nourriture."
        />
        <meta
          property="og:url"
          content="https://methodes-douces-bordeaux.fr/blog/pourquoi-je-mange-mes-emotions-comprendre-pour-perdre-du-poids"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/og-agp-1200x630.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="article:published_time" content="2026-02-23T10:00:00+01:00" />
        <meta property="article:author" content="Éric Gata" />
        <meta property="article:section" content="Perte de poids" />
        <script type="application/ld+json">{JSON.stringify(articleStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: "Accueil", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: "Perte de poids", path: "/blog/agp" },
              { label: "Pourquoi je mange mes émotions" },
            ]}
          />
        </div>

        {/* Featured Image */}
        <section className="container mx-auto px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-warm">
              <img
                src={featuredImage}
                alt="Femme seule dans sa cuisine tard le soir, réfléchissant devant un paquet de gâteaux - illustration manger émotionnel"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                width="1200"
                height="675"
              />
            </div>
          </div>
        </section>

        {/* Article Metadata */}
        <section className="container mx-auto px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6 hover:bg-primary/10">
              <Link to="/blog/agp">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux articles Perte de poids
              </Link>
            </Button>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              J'ai dépensé 1500€ en régimes avant de comprendre pourquoi je mangeais
            </h1>
            <p className="text-xl text-muted-foreground mb-6 italic">
              Et si le problème n'était pas la nourriture, mais votre relation avec elle ?
            </p>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                23 février 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} /> 8 min de lecture
              </span>
              <span className="flex items-center gap-1">
                <User size={16} /> Éric Gata
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose-lg">
            {/* Introduction - storytelling */}
            <section className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Je me souviens très bien de ce soir de novembre. Il faisait froid. J'étais devant ma télé, 
                épuisée après une journée au bureau. Sur mes genoux, un paquet de biscuits. 
                Un paquet que j'avais pourtant juré de ne plus acheter.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Le pire, ce n'était pas les biscuits. Le pire, c'est la petite voix dans ma tête : 
                <em className="text-foreground"> « Tu es nulle. Tu n'as aucune volonté. Tu ne changeras jamais. »</em>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Cette voix, je l'ai écoutée pendant des années. J'ai fait Weight Watchers (300€), 
                un rééquilibrage alimentaire avec une nutritionniste (600€), une cure détox en ligne (200€), 
                un programme de sport premium (400€). <strong className="text-foreground">Total : plus de 1500€.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Résultat ? J'ai perdu du poids. Chaque fois. Et chaque fois, je l'ai repris. 
                Avec quelques kilos en bonus, comme une récompense ironique de mes efforts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jusqu'au jour où quelqu'un m'a posé la bonne question : 
                <strong className="text-foreground"> « Et si le problème, ce n'était pas ce que tu manges... mais pourquoi tu manges ? »</strong>
              </p>
            </section>

            {/* Section 1 - Le problème */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Manger ses émotions : ce que personne ne vous explique
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                On mange pour se nourrir, bien sûr. Mais on mange aussi pour se consoler, se récompenser, 
                se calmer, combler un vide, s'occuper. 
                <strong className="text-foreground"> Le manger émotionnel touche plus de 75% des personnes en surpoids.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Et pourtant, aucun régime au monde n'aborde cette dimension. On vous dit quoi manger, 
                combien manger, quand manger. Mais jamais <em>pourquoi</em> vous mangez.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Les signaux qui ne trompent pas</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">Vous mangez vos émotions si :</p>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>Vous mangez sans vraiment avoir faim
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>Vous ressentez un besoin <em>urgent</em> de manger après un stress ou une émotion forte
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>Vous vous sentez coupable après avoir mangé
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>Vous mangez en cachette ou tard le soir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>La nourriture est votre « récompense » après une journée difficile
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>Vous avez l'impression de ne pas pouvoir vous arrêter une fois que vous commencez
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Si vous vous reconnaissez dans au moins 3 de ces points, 
                <strong className="text-foreground"> ce n'est pas un problème de volonté. C'est un problème de stratégie émotionnelle.</strong>
              </p>
            </section>

            {/* Section 2 - Le cycle infernal */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Le cycle infernal : restriction → frustration → craquage → culpabilité
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Voici ce qui se passe dans la vie de la plupart des personnes qui mangent leurs émotions :
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mb-6 space-y-3">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">1. Décision :</strong> « Lundi, c'est décidé, je commence un régime. »
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">2. Restriction :</strong> Moins de calories, moins de plaisir, plus de frustration.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">3. Tension :</strong> Le corps et l'esprit résistent. Le stress s'accumule.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">4. Craquage :</strong> Un soir, vous « craquez ». Souvent après une émotion forte.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">5. Culpabilité :</strong> « Je suis nul(le), je n'y arriverai jamais. »
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">6. Retour au 1 :</strong> Nouveau régime, nouveau cycle. Et quelques kilos de plus.
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Ce cycle peut durer des années. Des décennies. Et à chaque tour, il laisse un peu plus de dégâts 
                sur l'estime de soi. Ce n'est pas de la faiblesse. 
                <strong className="text-foreground"> C'est un système qui est conçu pour échouer.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La bonne nouvelle ? On peut en sortir. Pas en faisant un énième régime. 
                En changeant complètement d'approche.
              </p>
            </section>

            {/* Section 3 - La solution */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                La vraie question : pourquoi mangez-vous ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Quand j'ai commencé à travailler avec Éric Gata, au{" "}
                <Link to="/a-propos" className="text-primary hover:underline">
                  cabinet de Tresses près de Bordeaux
                </Link>
                , la première chose qu'il m'a dite, c'est : 
                <em className="text-foreground"> « On ne va pas parler de nourriture aujourd'hui. On va parler de vous. »</em>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                C'est la base de la{" "}
                <Link to="/programme-30-jours" className="text-primary hover:underline">
                  méthode AGP
                </Link>{" "}
                : comprendre <em>pourquoi</em> vous mangez pour pouvoir changer <em>comment</em> vous mangez.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Les 3 clés du manger émotionnel
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-bold text-foreground mb-2">🧠 Les automatismes</h4>
                  <p className="text-muted-foreground text-base">
                    Votre cerveau a appris que nourriture = réconfort. C'est un schéma automatique, 
                    pas un choix conscient. L'{" "}
                    <Link to="/hypnose-eft-h" className="text-primary hover:underline">
                      hypnose
                    </Link>{" "}
                    permet de reprogrammer ces automatismes en profondeur.
                  </p>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-bold text-foreground mb-2">💛 Les émotions non gérées</h4>
                  <p className="text-muted-foreground text-base">
                    Stress, anxiété, tristesse, ennui : tant que ces émotions n'ont pas d'autre exutoire, 
                    la nourriture reste votre refuge. L'{" "}
                    <Link to="/hypnose-eft-h" className="text-primary hover:underline">
                      EFT-H
                    </Link>{" "}
                    offre des outils concrets pour libérer ces tensions.
                  </p>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-bold text-foreground mb-2">⏰ Le rythme biologique</h4>
                  <p className="text-muted-foreground text-base">
                    Manger n'importe quoi à n'importe quelle heure dérègle votre métabolisme. 
                    La chronobiologie vous aide à manger en phase avec votre corps.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 - Le Programme AGP */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Comment le Programme AGP 30 Jours change la donne
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Le{" "}
                <Link to="/programme-30-jours" className="text-primary hover:underline">
                  Programme AGP 30 Jours
                </Link>{" "}
                n'est pas un régime de plus. C'est un programme qui travaille sur les trois dimensions 
                que les régimes ignorent : vos émotions, vos automatismes et votre rythme biologique.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Ce que contient le programme
              </h3>
              <ul className="space-y-3 mb-8 text-lg text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">Une application guidée</strong> avec des audios d'hypnose 
                    et d'EFT-H pour travailler sur vos fringales, votre stress et vos automatismes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">4 séances de coaching en visio</strong> avec un praticien 
                    qui vous connaît, vous écoute, et adapte le programme à votre réalité
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">Un plan de chronobiologie</strong> pour manger en respectant 
                    les rythmes naturels de votre métabolisme
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">Une communauté WhatsApp</strong> pour ne jamais vous sentir 
                    seul(e) dans votre démarche
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">Aucun aliment interdit</strong> — la restriction crée la 
                    frustration, et la frustration crée l'échec
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Pourquoi ça marche quand les régimes échouent
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Parce qu'un régime traite le symptôme (le poids). Le Programme AGP traite la cause 
                (les émotions, les automatismes, le rythme biologique). C'est comme la différence entre 
                prendre un antidouleur et soigner la blessure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le programme a été créé par Éric Gata depuis le{" "}
                <Link to="/a-propos" className="text-primary hover:underline">
                  cabinet de Tresses, en Gironde
                </Link>
                , et est accessible en visioconférence depuis n'importe où en France — Bordeaux, Paris, 
                Lyon ou ailleurs.
              </p>
            </section>

            {/* Inline CTA */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 md:p-10 rounded-2xl border border-primary/20 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  🎯 Prêt(e) à commencer votre propre transformation ?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                  Le Programme AGP 30 Jours a été conçu pour les personnes comme vous — qui ont essayé les régimes, 
                  qui savent que le problème n'est pas juste alimentaire, et qui cherchent enfin une approche 
                  respectueuse et durable.
                </p>
                <div className="bg-card p-6 rounded-xl mb-6 inline-block">
                  <p className="text-2xl font-bold text-primary mb-1">90€ au lieu de 149€</p>
                  <p className="text-sm text-muted-foreground">(offre de lancement)</p>
                </div>
                <ul className="text-left max-w-xl mx-auto mb-6 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Application guidée avec outils d'hypnose et EFT-H intégrés
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Coaching hebdomadaire personnalisé en visio (4 sessions)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Chronobiologie et rééquilibrage émotionnel
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Garantie satisfait ou remboursé 7 jours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Accessible partout en France
                  </li>
                </ul>
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <a
                    href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Je rejoins le Programme AGP à 90€
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </section>

            {/* Section 5 - Témoignage */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                « J'ai arrêté les régimes et j'ai perdu 14 kilos »
              </h2>
              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/20 rounded-r-lg mb-6">
                <p className="text-lg text-muted-foreground italic mb-2">
                  "Pendant 15 ans, j'ai fait des régimes. Tous les régimes. J'ai été mince, j'ai été grosse, 
                  j'ai été mince à nouveau. Un yo-yo permanent. Quand j'ai découvert le Programme AGP, 
                  je ne voulais plus y croire. Mais pour 90€, je me suis dit 'pourquoi pas'. 
                  Aujourd'hui, 6 mois plus tard, j'ai perdu 14 kilos. Sans frustration, sans interdits, 
                  sans cette culpabilité que je traînais depuis toujours. La différence ? On ne m'a pas dit 
                  quoi manger. On m'a appris pourquoi je mangeais."
                </p>
                <footer className="text-sm font-semibold text-foreground">— Nathalie, 47 ans, Bordeaux</footer>
              </blockquote>
            </section>

            {/* Articles liés */}
            <section className="mb-12">
              <div className="p-6 bg-muted/20 rounded-xl border border-border space-y-3">
                <p className="text-sm text-muted-foreground mb-2">À lire aussi :</p>
                <Link
                  to="/blog/perdre-poids-sans-regime-bordeaux"
                  className="block text-lg font-semibold text-primary hover:underline"
                >
                  Perdre du Poids sans Régime à Bordeaux : La Méthode AGP Expliquée →
                </Link>
                <Link
                  to="/blog/programme-perte-de-poids-en-ligne-coaching-bordeaux"
                  className="block text-lg font-semibold text-primary hover:underline"
                >
                  Programme Perte de Poids en Ligne : Pourquoi l'Application Seule ne Suffit Pas →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                FAQ : vos questions sur le manger émotionnel
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "J'ai peur d'échouer encore une fois. Comment savoir si cette fois sera différente ?",
                    a: "Cette fois est différente parce qu'on ne travaille pas sur les mêmes choses. Les régimes travaillent sur l'alimentation. Le Programme AGP travaille sur vos émotions, vos automatismes et votre relation à la nourriture. C'est un changement de fond, pas de surface. Et si après 7 jours vous ne le sentez pas, vous êtes remboursé(e) intégralement.",
                  },
                  {
                    q: "Est-ce que je vais devoir arrêter de manger certains aliments ?",
                    a: "Non. Aucun aliment n'est interdit. On travaille sur le quand (chronobiologie), le pourquoi (émotions) et le comment (automatismes). Pas sur le quoi. La restriction crée la frustration, et la frustration crée l'échec.",
                  },
                  {
                    q: "Je mange beaucoup par stress. Est-ce que le programme peut vraiment m'aider ?",
                    a: "Oui, c'est exactement pour ça qu'il a été conçu. Les outils d'hypnose et d'EFT-H intégrés dans l'application sont spécifiquement pensés pour gérer le stress et les émotions sans passer par la nourriture. Et le coaching hebdomadaire vous aide à identifier vos déclencheurs émotionnels.",
                  },
                  {
                    q: "Combien de temps faut-il pour voir des changements ?",
                    a: "Les premiers changements — notamment sur la relation à la nourriture et les fringales émotionnelles — se font souvent sentir dès les 2 premières semaines. Les changements physiques suivent naturellement, de façon progressive et durable.",
                  },
                  {
                    q: "Le programme est accessible où ?",
                    a: "Le programme est 100% en ligne. L'application fonctionne partout en France. Les sessions de coaching se font en visioconférence depuis le cabinet à Tresses (Gironde), mais vous pouvez y participer depuis n'importe où — Bordeaux, Paris, Lyon, ou ailleurs.",
                  },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Author Bio */}
            <section className="mb-12">
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-muted/20 rounded-xl border border-border">
                <img
                  src={ericPortrait}
                  alt="Praticien bien-être hypnose neurofeedback à Tresses"
                  className="w-24 h-24 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Éric Gata</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Praticien et créateur de la méthode AGP. Plus de 10 ans d'expérience dans l'accompagnement 
                    à la perte de poids, 450 praticiens formés. Cabinet à Tresses, entre Bordeaux et Libourne.
                  </p>
                </div>
              </div>
            </section>

            {/* Location mention */}
            <section className="mb-12">
              <p className="text-sm text-muted-foreground italic text-center">
                📍 Article rédigé depuis le Cabinet Méthodes Douces Bordeaux à Tresses (Gironde). 
                Le Programme AGP 30 Jours est accessible partout en France en ligne.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <p className="text-xs text-muted-foreground/70 italic border-t border-border pt-4">
                Cet article est fourni à titre informatif et ne constitue pas un avis médical. 
                La méthode AGP est un accompagnement bien-être destiné aux personnes en bonne santé. 
                Si vous souffrez de troubles du comportement alimentaire ou suivez un traitement médical, 
                consultez votre médecin avant de commencer tout programme.
              </p>
            </section>
          </div>
        </article>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Arrêtez de manger vos émotions. Commencez à les comprendre.
            </h2>
            <p className="text-muted-foreground mb-4">
              Programme 30 Jours AGP — <strong>90€ au lieu de 149€</strong> — Garantie satisfait ou remboursé 7 jours.
            </p>
            <p className="text-muted-foreground mb-6">
              100% en ligne • Accessible depuis Bordeaux, Gironde et toute la France
            </p>
            <p className="text-muted-foreground mb-8">
              📞 Besoin de parler avant de vous lancer ?{" "}
              <a href="tel:+33782386621" className="text-primary hover:underline font-semibold">
                07 82 38 66 21
              </a>
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <a
                href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Je rejoins le Programme AGP à 90€
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogEmotionsPertePoidsEnLigne;
