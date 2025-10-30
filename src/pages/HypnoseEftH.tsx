import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const HypnoseEftH = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Hypnose et EFT-H à Tresses (33) - Cabinet près de Bordeaux | Gestion du stress, émotions, confiance en soi";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Praticien en hypnose et EFT-H à Tresses, près de Bordeaux. Accompagnement pour la gestion du stress, des émotions, arrêt du tabac, confiance en soi. Séances en cabinet.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Praticien en hypnose et EFT-H à Tresses, près de Bordeaux. Accompagnement pour la gestion du stress, des émotions, arrêt du tabac, confiance en soi. Séances en cabinet.";
      document.head.appendChild(meta);
    }
  }, []);
  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 100);
  };
  return <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 -ml-2">
            <ArrowLeft className="mr-2" size={16} />
            Retour
          </Button>
          
          <article className="space-y-12">
            <header>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Hypnose et EFT-H : deux approches complémentaires pour un mieux-être durable
              </h1>
            </header>

            <section className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                L'hypnose : agir sur l'inconscient pour retrouver l'équilibre
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L'hypnose est une approche douce et naturelle qui permet d'accéder à l'inconscient afin de favoriser le changement intérieur.
                  Elle aide à modifier les automatismes, apaiser les émotions et rétablir un équilibre global entre le corps et l'esprit.
                </p>
                
                <p>
                  En séance, j'accompagne chaque personne vers un état de conscience modifié, propice à la transformation et à la mise en action des ressources personnelles.
                  Cette méthode s'adresse à toute personne souhaitant :
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>gérer le stress, les angoisses ou les troubles du sommeil,</li>
                  <li>renforcer la confiance en soi ou se libérer de blocages,</li>
                  <li>accompagner un arrêt du tabac ou une gestion du poids,</li>
                  <li>retrouver une stabilité émotionnelle durable.</li>
                </ul>
                
                <p className="italic">
                  L'hypnose ne remplace pas un traitement médical, mais agit en complément, en soutenant les capacités naturelles d'adaptation et d'équilibre du corps.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                L'EFT-H : libérer les émotions et apaiser le mental
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L'EFT-H (Emotional Freedom Techniques – Hypnose) est une technique de libération émotionnelle qui associe la stimulation de points d'acupuncture à des approches issues de l'hypnose.
                  Cette méthode agit à la fois sur le plan énergétique et émotionnel, permettant de réduire l'intensité des émotions désagréables, des souvenirs ou des tensions internes.
                </p>
                
                <p>Elle est particulièrement efficace pour :</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>diminuer le stress et les émotions négatives,</li>
                  <li>surmonter les blocages liés au passé,</li>
                  <li>améliorer la confiance en soi,</li>
                  <li>réguler les comportements liés aux émotions alimentaires ou à la dépendance.</li>
                </ul>
                
                <p>
                  Simple et accessible, l'EFT-H devient rapidement un outil d'autonomie émotionnelle utilisable au quotidien.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Une synergie entre hypnose et EFT-H
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En combinant hypnose et EFT-H, je propose un accompagnement à la fois profond et concret.
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>L'hypnose favorise la transformation durable des schémas inconscients.</li>
                  <li>L'EFT-H agit sur la libération émotionnelle immédiate et la détente corporelle.</li>
                </ul>
                
                <p>
                  Cette synergie permet d'obtenir des résultats rapides tout en consolidant les changements dans le temps.
                  Elle s'adresse à toute personne souhaitant mieux gérer ses émotions, retrouver confiance et améliorer sa qualité de vie.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Déroulement d'une séance
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Chaque séance débute par un temps d'échange afin de définir votre objectif et de choisir la méthode la plus adaptée.
                  L'accompagnement se déroule dans un cadre bienveillant et confidentiel, respectueux de votre rythme et de vos besoins.
                  Le nombre de séances varie selon les situations et les objectifs poursuivis.
                </p>
                
                <p>
                  Je propose principalement les séances en présentiel au cabinet :<br />
                  <strong>📍 9 Galerie Marchande – 33370 Tresses</strong><br />
                  dans un environnement calme, lumineux et propice à la détente.
                </p>
              </div>
            </section>

            <section className="space-y-6 bg-gradient-primary/10 p-8 rounded-2xl border border-primary/20">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Tarification
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-2xl font-bold text-foreground">70€</p>
                    <p className="text-muted-foreground">la séance d'hypnose et/ou EFT-H</p>
                  </div>
                  <a 
                    data-thrivecart-account="ericgata" 
                    data-thrivecart-tpl="v2" 
                    data-thrivecart-product="4" 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 cursor-pointer"
                  >
                    Paiement en ligne
                  </a>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Les séances ne sont pas prises en charge par la Sécurité sociale, mais certaines mutuelles proposent un remboursement partiel.
                </p>
              </div>
            </section>

            <section className="space-y-6 bg-muted/30 p-8 rounded-2xl">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Hypnose et EFT-H à Tresses, près de Bordeaux
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Les accompagnements en hypnose et EFT-H s'adressent à toute personne cherchant à mieux gérer son stress, apaiser ses émotions, ou se libérer de comportements qui limitent son bien-être.
                  Je vous accueille à Tresses, à proximité de Bordeaux, Floirac, Cenon et Artigues-près-Bordeaux, pour un accompagnement professionnel, respectueux et centré sur vos besoins.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={scrollToContact} className="bg-gradient-primary hover:shadow-strong transition-all" size="lg">
                  Prendre rendez-vous dès maintenant
                </Button>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                FAQ – Hypnose et EFT-H
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Quelle est la différence entre l'hypnose et l'EFT-H ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p className="mb-3">
                      L'hypnose permet d'accéder à l'inconscient pour transformer des schémas profonds ou des comportements répétitifs.
                      Par exemple, elle aide à arrêter de fumer, à retrouver un sommeil plus serein, ou à changer son rapport à l'alimentation.
                    </p>
                    <p className="mb-3">
                      L'EFT-H, quant à elle, agit directement sur la réaction émotionnelle : elle aide à calmer rapidement une crise d'angoisse, à dissiper une émotion bloquante (colère, culpabilité, peur), ou à apaiser un souvenir douloureux.
                    </p>
                    <p>
                      En combinant les deux approches, j'agis à la fois sur la cause inconsciente (grâce à l'hypnose) et sur la réponse émotionnelle immédiate (grâce à l'EFT-H), pour un travail complet et durable.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Combien de séances sont nécessaires ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p>
                      Le nombre de séances dépend de chaque personne et de son objectif.
                      Certaines problématiques peuvent nécessiter une à trois séances (par exemple, l'arrêt du tabac ou une phobie ciblée), tandis que d'autres demandes, comme la gestion du poids ou la reconstruction émotionnelle, peuvent nécessiter un accompagnement plus progressif.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Les séances sont-elles remboursées ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p>
                      Les séances d'hypnose et d'EFT-H ne sont pas prises en charge par la Sécurité sociale, mais certaines mutuelles proposent un remboursement partiel ou forfaitaire.
                      Je vous conseille de vérifier auprès de votre complémentaire santé si les soins de médecines douces ou les pratiques alternatives sont inclus.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Peut-on venir pour plusieurs objectifs ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p>
                      Oui, tout à fait. Chaque accompagnement est personnalisé et peut évoluer au fil du temps.
                      Vous pouvez par exemple débuter par une gestion du stress, puis travailler sur la confiance en soi, ou encore sur des comportements alimentaires liés aux émotions.
                      L'idée est d'avancer à votre rythme, en fonction de vos besoins du moment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="space-y-6 border-t pt-12">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Informations pratiques
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Cabinet d'hypnose et EFT-H à Tresses (près de Bordeaux)
                </h3>
                
                <div className="grid gap-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong>Adresse :</strong><br />
                      9 Galerie Marchande – 33370 Tresses
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong>Téléphone :</strong><br />
                      <a href="tel:0652217745" className="hover:text-primary transition-colors">07 82 38 66 21</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong>E-mail :</strong><br />
                      <a href="mailto:eric.gata@gmail.com" className="hover:text-primary transition-colors">
                        eric.gata@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <strong>Horaires :</strong>
                    <ul className="ml-4 space-y-1">
                      <li>lundi, mardi et vendredi : 9 h – 12 h et 14 h 30 - 17 h 30</li>
                      <li>mercredi et jeudi : 9 h - 12 h</li>
                      <li> samedi et dimanche : fermé</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Le cabinet est situé dans un espace calme et accessible, avec un parking gratuit à proximité.
                  Les séances se déroulent exclusivement en présentiel, sur rendez-vous.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>;
};
export default HypnoseEftH;