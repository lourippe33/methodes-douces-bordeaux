import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HypnoseEftH = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 -ml-2"
          >
            <ArrowLeft className="mr-2" size={16} />
            Retour
          </Button>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Hypnose & EFT-H
            </h1>
            
            <div className="space-y-6 text-muted-foreground">
              {/* Le contenu sera ajouté ici par l'utilisateur */}
              <p className="text-lg leading-relaxed">
                Contenu à venir...
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HypnoseEftH;
