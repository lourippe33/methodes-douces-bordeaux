import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, MapPin, ExternalLink } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Cabinet bien-être neurofeedback hypnose Tresses Bordeaux" className="h-16 w-auto" />
            <p className="text-muted-foreground text-sm">
              Cabinet de bien-être à Tresses près de Bordeaux. Hypnose, neurofeedback et méthodes douces pour adultes, enfants et adolescents.
            </p>
            <p className="text-muted-foreground text-xs italic mt-2">
              Ces méthodes visent au bien-être et ne remplacent pas un suivi médical si nécessaire.
            </p>
          </div>

          {/* NAP - Name, Address, Phone */}
          <div>
            <h3 className="font-semibold mb-4">AGP – Méthodes douces & Neurofeedback</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <address className="not-italic">
                  9 Galerie Marchande<br />
                  33370 Tresses<br />
                  <span className="text-primary font-medium">Cabinet proche de Bordeaux</span>
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a 
                  href="tel:+33782386621" 
                  className="hover:text-primary transition-colors"
                >
                  07 82 38 66 21
                </a>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <ExternalLink className="h-4 w-4 flex-shrink-0 text-primary" />
                <a 
                  href="https://share.google/Fplupp8bDIzNgaPJo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a 
                  href="/#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Prestations
                </a>
              </li>
              <li>
                <a 
                  href="/#formation" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("formation");
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Formation
                </a>
              </li>
              <li>
                <a 
                  href="/#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                  className="hover:text-primary transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link to="/mentions-legales" className="hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="hover:text-primary transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="hover:text-primary transition-colors">
                  Confidentialité
                </Link>
              </li>
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
