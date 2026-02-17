import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ZoneIntervention = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10 flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-primary" />
            Cabinet à Tresses – Accompagnement partout en France
          </h2>

          <div className="bg-card p-8 rounded-xl border border-border shadow-soft mb-8 text-center">
            <p className="text-xl font-semibold text-foreground mb-4">
              Cabinet situé à Tresses (33370), entre Bordeaux et Libourne.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Le programme AGP a été conçu à Bordeaux par un praticien local et accompagne 
              des clients de toute la Gironde : Bordeaux, Tresses, Libourne, Cenon, Floirac, 
              Artigues-près-Bordeaux, Carbon-Blanc, Bègles, Talence, Mérignac, Pessac, 
              Lormont, Bassens, Saint-Loubès… et partout en France en visioconférence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl border border-primary/10 text-center">
            <p className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Questions ou prise de rendez-vous
            </p>
            <a
              href="tel:0782386621"
              className="text-2xl font-bold text-primary hover:underline mb-4 inline-block"
            >
              07 82 38 66 21
            </a>
            <p className="mt-4">
              <Link
                to="/#contact"
                className="text-primary hover:underline font-medium"
              >
                Ou contactez-nous via notre formulaire →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneIntervention;
