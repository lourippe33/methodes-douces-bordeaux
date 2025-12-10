import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import sommeilImage from "@/assets/sommeil-reparateur-neurofeedback.jpg";

const BlogSommeilNeurofeedback = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Retrouver un Sommeil Réparateur grâce au Neurofeedback",
    description:
      "Découvrez comment le neurofeedback aide à retrouver un sommeil réparateur : réduction des insomnies, des réveils nocturnes et de la fatigue chronique. Solution naturelle à Tresses, près de Bordeaux.",
    image: "https://methodes-douces-bordeaux.fr/assets/sommeil-reparateur-neurofeedback.jpg",
    author: {
      "@type": "Person",
      name: "Eric Gata",
      url: "https://methodes-douces-bordeaux.fr/a-propos",
    },
    publisher: {
      "@type": "Organization",
      name: "Méthodes Douces Bordeaux",
      logo: {
        "@type": "ImageObject",
        url: "https://methodes-douces-bordeaux.fr/logo-agp.png",
      },
    },
    datePublished: "2025-03-01",
    dateModified: "2025-12-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://methodes-douces-bordeaux.fr/blog/neurofeedback-sommeil-reparateur",
    },
    keywords:
      "neurofeedback sommeil réparateur, neurofeedback sommeil, neurofeedback dynamique, améliorer le sommeil, troubles du sommeil, insomnie, Tresses, Bordeaux",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Le neurofeedback dynamique est-il douloureux ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, cette méthode est totalement indolore et non invasive. Vous êtes simplement installé confortablement pendant la séance.",
        },
      },
      {
        "@type": "Question",
        name: "En combien de temps peut-on voir des résultats avec le neurofeedback dynamique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les effets varient selon les personnes, mais certains ressentent une amélioration de la qualité de leur sommeil dès les premières séances.",
        },
      },
      {
        "@type": "Question",
        name: "Le neurofeedback dynamique est-il adapté à tout le monde ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, cette approche peut être utilisée par tous, quel que soit l'âge. Elle est douce, naturelle et sans effets secondaires connus.",
        },
      },
      {
        "@type": "Question",
        name: "Le neurofeedback dynamique a-t-il d'autres bienfaits ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, il contribue également à la gestion du stress, à l'amélioration de la concentration et au bien-être général.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Neurofeedback & Sommeil Réparateur | Retrouver des Nuits Paisibles à Tresses</title>
        <meta
          name="description"
          content="Retrouvez un sommeil réparateur grâce au neurofeedback : réduction des insomnies, des réveils nocturnes et de la fatigue chronique. Approche naturelle à Tresses, près de Bordeaux."
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/blog/neurofeedback-sommeil-reparateur" />
        <meta property="og:title" content="Retrouver un Sommeil Réparateur grâce au Neurofeedback" />
        <meta
          property="og:description"
          content="Découvrez comment le neurofeedback peut vous aider à améliorer votre sommeil naturellement : insomnies, réveils nocturnes, fatigue chronique."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/blog/neurofeedback-sommeil-reparateur" />
        <meta
          property="og:image"
          content="https://methodes-douces-bordeaux.fr/assets/sommeil-reparateur-neurofeedback.jpg"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs
              items={[
                { label: "Accueil", path: "/" },
                { label: "Blog", path: "/blog" },
                { label: "Sommeil Réparateur & Neurofeedback" },
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
                  <span>Mars 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>10 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Eric Gata</span>
                </div>
              </div>

              {/* H1 SEO optimisé */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Retrouver un Sommeil Réparateur grâce au Neurofeedback
              </h1>

              <p className="text-xl text-primary font-medium mb-8">
                Fatigue persistante, réveils nocturnes, esprit agité ? Le neurofeedback peut vous aider à retrouver des
                nuits paisibles.
              </p>
            </div>
          </section>

          {/* Featured Image */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <img
                src={sommeilImage}
                alt="Retrouver un sommeil réparateur grâce au neurofeedback dynamique à Tresses près de Bordeaux"
                className="w-full h-auto rounded-xl shadow-lg"
                width={800}
                height={533}
                loading="eager"
              />
            </div>
          </section>

          {/* Article Content */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              {/* Introduction */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vous ressentez une fatigue constante malgré des nuits qui semblent suffisamment longues ? Vous avez du
                mal à vous concentrer durant la journée et vos émotions vous paraissent plus difficiles à gérer qu’avant
                ? Ces symptômes sont souvent le signe que votre sommeil n’est pas vraiment réparateur.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                De nombreuses personnes souffrent de troubles du sommeil : <strong>insomnies</strong>, réveils
                nocturnes, difficultés d’endormissement, sommeil léger… Avec le temps, ces perturbations impactent
                profondément la qualité de vie et la santé globale : fatigue chronique, irritabilité, stress accru,
                baisse de motivation.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Face à ces difficultés, le <strong>neurofeedback</strong> est une approche naturelle qui aide le cerveau
                à retrouver un fonctionnement plus stable. Il le guide vers des nuits plus profondes et reposantes,
                permettant de retrouver un <strong>sommeil réparateur</strong> sur la durée.
              </p>

              {/* Pour qui ? */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Pour qui le neurofeedback est-il indiqué en cas de troubles du sommeil ?
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Le neurofeedback est particulièrement adapté aux personnes qui souhaitent améliorer leur sommeil sans
                recourir systématiquement à des solutions médicamenteuses. Il peut vous aider si vous vous reconnaissez
                dans l’une des situations suivantes :
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>Vous mettez beaucoup de temps à vous endormir ou votre esprit reste en activité le soir.</li>
                <li>Vous vous réveillez souvent la nuit, parfois sans réussir à vous rendormir facilement.</li>
                <li>
                  Vous avez l’impression de « dormir » mais de vous lever épuisé, comme si la nuit n’avait pas vraiment
                  reposé votre corps et votre esprit.
                </li>
                <li>
                  Vous vivez une période de{" "}
                  <Link to="/blog/gestion-stress-angoisses" className="text-primary font-medium">
                    stress important
                  </Link>{" "}
                  ou de surcharge mentale.
                </li>
                <li>
                  Vous cherchez une approche douce pour accompagner des difficultés de sommeil chez un adolescent ou un
                  adulte.
                </li>
              </ul>

              {/* Pourquoi un sommeil de qualité */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Pourquoi un sommeil de qualité est essentiel ?
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Le sommeil n’est pas seulement une pause dans la journée. Il joue un rôle central dans la récupération
                physique, émotionnelle et cognitive. Un <strong>sommeil réparateur</strong> permet :
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong>Une meilleure récupération physique</strong> : le corps se régénère, les tissus se réparent,
                  l’énergie est rechargée.
                </li>
                <li>
                  <strong>Une meilleure gestion des émotions</strong> : un bon sommeil aide à stabiliser l’humeur et à
                  mieux faire face aux imprévus.
                </li>
                <li>
                  <strong>Une mémoire et une concentration optimales</strong> : le cerveau consolide les apprentissages
                  et améliore les capacités cognitives.
                </li>
                <li>
                  <strong>Une régulation du métabolisme</strong> : l’appétit et les signaux de faim/satiété sont mieux
                  régulés.
                </li>
                <li>
                  <strong>Un système immunitaire plus fort</strong> : le corps se défend mieux contre les infections.
                </li>
              </ul>

              {/* Symptômes */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Les conséquences d’un sommeil non réparateur
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Lorsque le sommeil n’est plus suffisamment profond ou stable, de nombreux signes peuvent apparaître :
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong>Fatigue chronique</strong> et sensation de lourdeur dès le matin.
                </li>
                <li>
                  <strong>Irritabilité et sensibilité accrue au stress</strong>.
                </li>
                <li>
                  <strong>Baisse de motivation</strong> et sentiment de ne plus avoir d’élan.
                </li>
                <li>
                  <strong>Difficultés de concentration</strong> et confusion mentale.
                </li>
                <li>Risque accru de troubles métaboliques et de déséquilibres hormonaux.</li>
              </ul>

              {/* Causes */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Les causes les plus fréquentes des troubles du sommeil
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Les troubles du sommeil ont souvent plusieurs causes combinées :
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong>Stress et anxiété</strong> : ruminations, pensées envahissantes au coucher.
                </li>
                <li>
                  <strong>Exposition aux écrans</strong> : la lumière bleue perturbe la sécrétion de mélatonine.
                </li>
                <li>
                  <strong>Horaires irréguliers</strong> : se coucher et se lever à des heures différentes dérègle
                  l’horloge interne.
                </li>
                <li>
                  <strong>Environnement de sommeil inadapté</strong> : bruit, lumière, température.
                </li>
                <li>
                  <strong>Habitudes alimentaires</strong> : repas lourds, alcool, caféine le soir.
                </li>
              </ul>

              {/* Neurofeedback dynamique */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Comment le neurofeedback aide à retrouver un sommeil réparateur
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Le <strong>neurofeedback</strong> est une méthode qui permet au cerveau de mieux s’autoréguler. En
                recevant des informations en temps réel sur sa propre activité, il est capable d’ajuster ses schémas de
                fonctionnement, notamment ceux qui perturbent le sommeil.
              </p>

              <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">
                Le principe du neurofeedback
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Pendant la séance, vous êtes confortablement installé, vous écoutez de la musique ou regardez un écran
                pendant que le système analyse l’activité cérébrale. De très brèves interruptions sonores renvoient au
                cerveau une information précise, l’aidant à sortir de modes de fonctionnement liés au stress, à
                l’hypervigilance ou aux ruminations.
              </p>

              <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">
                Les effets du neurofeedback sur le sommeil
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Au fil des séances, de nombreux utilisateurs constatent :
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>
                  Un <strong>endormissement plus naturel</strong>, avec un esprit moins agité.
                </li>
                <li>
                  Des <strong>réveils nocturnes moins fréquents</strong>.
                </li>
                <li>
                  Un <strong>sommeil plus profond</strong> et plus stable.
                </li>
                <li>
                  Un <strong>réveil plus léger</strong>, avec la sensation d’avoir vraiment récupéré.
                </li>
              </ul>

              {/* Témoignages */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Témoignages de personnes ayant retrouvé un sommeil réparateur avec le neurofeedback
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Voici quelques témoignages de personnes accompagnées grâce au <strong>neurofeedback</strong> :
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « J'avais des insomnies depuis plusieurs années et je me réveillais épuisée. Après quelques séances de
                  neurofeedback, j'ai retrouvé un sommeil plus profond et plus stable. »
                </p>
                <cite className="text-sm text-primary font-medium">— Sophie, 42 ans</cite>
              </blockquote>

              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « J'étais constamment stressé et cela impactait mes nuits. Avec le neurofeedback, j’ai appris à me
                  détendre naturellement, et mon sommeil s’est nettement amélioré. »
                </p>
                <cite className="text-sm text-primary font-medium">— Marc, 35 ans</cite>
              </blockquote>

              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                <p className="text-muted-foreground italic">
                  « Je me réveillais plusieurs fois par nuit. Depuis que je pratique le neurofeedback, mes nuits sont
                  plus continues et je me sens enfin reposée au réveil. »
                </p>
                <cite className="text-sm text-primary font-medium">— Isabelle, 50 ans</cite>
              </blockquote>

              {/* Conseils */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Conseils complémentaires pour optimiser votre sommeil
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Le neurofeedback s’intègre parfaitement dans une démarche globale d’amélioration du sommeil. Voici
                quelques habitudes simples à adopter en complément :
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li>Réduire l’exposition aux écrans en soirée.</li>
                <li>Mettre en place une routine du soir (lecture, respiration, relaxation).</li>
                <li>Se coucher et se lever à des horaires réguliers, même le week-end.</li>
                <li>Créer un environnement propice au sommeil : chambre calme, fraîche, obscurité.</li>
                <li>Préférer un dîner léger et éviter l’alcool et la caféine en fin de journée.</li>
              </ul>

              {/* FAQ titre */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Foire aux questions (FAQ) sur le neurofeedback et le sommeil
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    1. Le neurofeedback dynamique est-il douloureux ?
                  </h3>
                  <p className="text-muted-foreground">
                    Non, cette méthode est totalement indolore et non invasive. Vous êtes simplement installé
                    confortablement pendant la séance.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    2. En combien de temps peut-on voir des résultats ?
                  </h3>
                  <p className="text-muted-foreground">
                    Chaque personne est différente, mais certains ressentent une amélioration de leur sommeil dès les
                    premières séances. D’autres bénéficient d’un changement plus progressif.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    3. Cette méthode est-elle adaptée à tout le monde ?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui, elle peut être proposée aux enfants, adolescents et adultes. Elle convient aussi bien aux
                    profils stressés qu’aux personnes simplement en recherche d’un meilleur sommeil.
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    4. Le neurofeedback a-t-il d’autres bienfaits ?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui, il aide également à la{" "}
                    <Link to="/blog/gestion-stress-angoisses" className="text-primary font-medium">
                      gestion du stress
                    </Link>
                    , à l’amélioration de la concentration et au bien-être général. C’est une approche globale de
                    régulation du fonctionnement cérébral.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Offrez-vous un sommeil véritablement réparateur
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Le sommeil est l’un des piliers essentiels de votre santé. Si vous avez l’impression de ne plus
                récupérer correctement malgré vos nuits, le <strong>neurofeedback</strong> peut être un accompagnement
                précieux pour vous aider à retrouver un <strong>sommeil réparateur</strong>.
              </p>

              <p className="text-lg text-foreground font-medium mt-6">
                Pour en savoir plus ou démarrer un accompagnement, découvrez notre{" "}
                <Link to="/neurofeedback" className="text-primary font-medium">
                  page dédiée au neurofeedback
                </Link>.
              </p>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl text-center">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Prenez rendez-vous pour une séance de neurofeedback
                </h3>
                <p className="text-muted-foreground mb-6">Cabinet situé à Tresses, près de Bordeaux</p>
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/neurofeedback">Découvrir le neurofeedback</Link>
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

export default BlogSommeilNeurofeedback;
