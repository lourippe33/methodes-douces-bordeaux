import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-agp.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="Cabinet bien-être neurofeedback hypnose Tresses Bordeaux" className="h-16 w-auto" />
            <p className="text-muted-foreground text-sm">
              Cabinet de bien-être à Tresses près de Bordeaux. Hypnose, neurofeedback et méthodes douces pour adultes, enfants et adolescents.
            </p>
            <p className="text-muted-foreground text-xs italic mt-2">
              Ces méthodes visent au bien-être et ne remplacent pas un suivi médical si nécessaire.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Prestations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("formation")} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Formation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="hover:text-primary transition-colors text-left"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</a></li>
              <li><a href="/cgv" className="hover:text-primary transition-colors">CGV</a></li>
              <li><a href="/confidentialite" className="hover:text-primary transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} AGP - Accompagnement Gestion du Poids. Tous droits réservés.
          </p>
          <p className="text-center text-muted-foreground text-xs mt-2">
            Médiateur de la consommation : CNPM - MEDIATION - CONSOMMATION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
