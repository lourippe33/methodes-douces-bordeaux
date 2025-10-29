import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MentionsLegales = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Mentions Légales - AGP Méthodes Douces Bordeaux";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Mentions légales du site AGP Méthodes Douces - Informations légales conformes à la législation française."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>

          <article className="prose prose-lg max-w-4xl mx-auto">
            <h1>Mentions légales</h1>

            <section>
              <h2>Informations légales</h2>
              <h3>1. Présentation du site</h3>
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
                il est précisé aux utilisateurs du site <strong>https://www.methodes-douces-bordeaux.fr/</strong> l'identité 
                des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <ul>
                <li><strong>Propriétaire :</strong> Eric GATA GUERRA – Auto entrepreneur</li>
                <li><strong>Siret :</strong> 813 904 729 00015</li>
                <li><strong>Adresse :</strong> 81 Avenue du Maréchal de Lattre de Tassigny</li>
                <li><strong>Créateur :</strong> GATA GUERRA Eric</li>
                <li><strong>Responsable publication :</strong> GATA GUERRA Eric – eric.gata@gmail.com</li>
                <li><strong>Webmaster :</strong> GATA GUERRA Eric – eric.gata@gmail.com</li>
                <li><strong>Hébergeur :</strong> OVH – Siège social : 2 rue Kellermann - 59100 Roubaix - France</li>
                <li><strong>Crédits :</strong> MOTAS Romain</li>
              </ul>
            </section>

            <section>
              <h3>2. Conditions générales d'utilisation du site et des services proposés</h3>
              <p>
                L'utilisation du site <strong>https://www.methodes-douces-bordeaux.fr/</strong> implique l'acceptation pleine 
                et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles 
                d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
              </p>
              <p>
                Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique 
                peut être toutefois décidée par Eric GATA GUERRA, qui s'efforcera alors de communiquer préalablement aux utilisateurs 
                les dates et heures de l'intervention.
              </p>
              <p>
                Le site est mis à jour régulièrement par GATA GUERRA Eric. De la même façon, les mentions légales peuvent être modifiées 
                à tout moment : elles s'imposent néanmoins à l'utilisateur qui est invité à s'y référer le plus souvent possible afin 
                d'en prendre connaissance.
              </p>
            </section>

            <section>
              <h3>3. Description des services fournis</h3>
              <p>
                Le site <strong>https://www.methodes-douces-bordeaux.fr/</strong> a pour objet de fournir une information concernant 
                l'ensemble des activités de la société.
              </p>
              <p>
                Eric GATA GUERRA s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra 
                être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait 
                ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p>
                Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d'évoluer. 
                Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications 
                ayant été apportées depuis leur mise en ligne.
              </p>
            </section>

            <section>
              <h3>4. Limitations contractuelles sur les données techniques</h3>
              <p>Le site utilise la technologie JavaScript.</p>
              <p>
                Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, 
                l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et 
                avec un navigateur de dernière génération mis à jour.
              </p>
            </section>

            <section>
              <h3>5. Propriété intellectuelle et contrefaçons</h3>
              <p>
                Eric GATA GUERRA est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les 
                éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Eric GATA GUERRA.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme 
                constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du 
                Code de Propriété Intellectuelle.
              </p>
            </section>

            <section>
              <h3>6. Limitations de responsabilité</h3>
              <p>
                Eric GATA GUERRA ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, 
                lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées 
                au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
              <p>
                Eric GATA GUERRA ne pourra également être tenu responsable des dommages indirects (tels par exemple qu'une perte de 
                marché ou perte d'une chance) consécutifs à l'utilisation du site.
              </p>
              <p>
                Des espaces interactifs (possibilité de poser des questions dans l'espace contact) sont à la disposition des utilisateurs. 
                Eric GATA GUERRA se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace 
                qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
              </p>
              <p>
                Le cas échéant, Eric GATA GUERRA se réserve également la possibilité de mettre en cause la responsabilité civile et/ou 
                pénale de l'utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, 
                quel que soit le support utilisé (texte, photographie…).
              </p>
            </section>

            <section>
              <h3>7. Gestion des données personnelles</h3>
              <p>
                En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 
                du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
              </p>
              <p>
                À l'occasion de l'utilisation du site <strong>https://www.methodes-douces-bordeaux.fr/</strong>, peuvent être recueillies : 
                l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site, le fournisseur d'accès de l'utilisateur, 
                l'adresse de protocole Internet (IP) de l'utilisateur.
              </p>
              <p>
                En tout état de cause Eric GATA GUERRA ne collecte des informations personnelles relatives à l'utilisateur que pour le 
                besoin de certains services proposés par le site. L'utilisateur fournit ces informations en toute connaissance de cause, 
                notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site l'obligation ou non 
                de fournir ces informations.
              </p>
              <p>
                Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, 
                aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données 
                personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec 
                signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
              </p>
              <p>
                Aucune information personnelle de l'utilisateur du site n'est publiée à l'insu de l'utilisateur, échangée, transférée, 
                cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de Eric GATA GUERRA et de ses droits 
                permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation 
                de conservation et de modification des données vis à vis de l'utilisateur du site.
              </p>
              <p>
                Le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles.
              </p>
              <p>
                Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 
                11 mars 1996 relative à la protection juridique des bases de données.
              </p>
            </section>

            <section>
              <h3>8. Liens hypertextes et cookies</h3>
              <p>
                Le site <strong>https://www.methodes-douces-bordeaux.fr/</strong> contient un certain nombre de liens hypertextes vers 
                d'autres sites, mis en place avec l'autorisation de Eric GATA GUERRA. Cependant, Eric GATA GUERRA n'a pas la possibilité 
                de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
              </p>
              <p>
                La navigation sur le site est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. 
                Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des 
                informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la 
                navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
              </p>
              <p>
                Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut 
                toutefois configurer son ordinateur de la manière suivante, pour refuser l'installation des cookies :
              </p>
              <ul>
                <li>
                  <strong>Sous Internet Explorer :</strong> onglet outil (pictogramme en forme de rouage en haut à droite) / options internet. 
                  Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.
                </li>
                <li>
                  <strong>Sous Firefox :</strong> en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans 
                  l'onglet Options. Cliquer sur l'onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres 
                  personnalisés pour l'historique. Enfin décochez-la pour désactiver les cookies.
                </li>
                <li>
                  <strong>Sous Safari :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). 
                  Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur 
                  Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.
                </li>
                <li>
                  <strong>Sous Chrome :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois 
                  lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", 
                  cliquez sur préférences. Dans l'onglet "Confidentialité", vous pouvez bloquer les cookies.
                </li>
              </ul>
            </section>

            <section>
              <h3>9. Droit applicable et attribution de juridiction</h3>
              <p>
                Tout litige en relation avec l'utilisation du site <strong>https://www.methodes-douces-bordeaux.fr/</strong> est soumis 
                au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
              </p>
            </section>

            <section>
              <h3>10. Les principales lois concernées</h3>
              <ul>
                <li>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, 
                aux fichiers et aux libertés.</li>
                <li>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</li>
              </ul>
            </section>

            <section>
              <h3>11. Lexique</h3>
              <ul>
                <li>
                  <strong>Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.
                </li>
                <li>
                  <strong>Informations personnelles :</strong> « les informations qui permettent, sous quelque forme que ce soit, 
                  directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi 
                  n° 78-17 du 6 janvier 1978).
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
