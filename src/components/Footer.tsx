import logo from "@/assets/logo-agp.png";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="AGP Logo" className="h-16 w-auto" />
            <p className="text-muted-foreground text-sm">
              Accompagnement Gestion du Poids et méthodes douces pour votre bien-être
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#formation" className="hover:text-primary transition-colors">Formation</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
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
