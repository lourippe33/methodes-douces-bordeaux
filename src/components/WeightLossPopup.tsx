import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Scale, Sparkles, Target } from "lucide-react";

const WeightLossPopup = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenWeightLossPopup");
    if (!hasSeenPopup) {
      // Delay d'une seconde pour une meilleure expérience
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenWeightLossPopup", "true");
    setOpen(false);
  };

  const handleCTA = () => {
    localStorage.setItem("hasSeenWeightLossPopup", "true");
    setOpen(false);
    navigate("/programme-28-jours");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md border-primary/20 shadow-2xl">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
            <Scale className="h-8 w-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Défi minceur
            <span className="bg-gradient-hero bg-clip-text text-transparent"> 28 Jours</span>
          </DialogTitle>
          <DialogDescription className="space-y-4 pt-4 text-center text-base">
            <p className="text-foreground font-medium">
              Transformez votre corps et votre esprit en seulement 28 jours
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-left">
                <Target className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Perdez du poids durablement</strong> avec des méthodes douces et efficaces
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <Sparkles className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Accompagnement personnalisé</strong> pour atteindre vos objectifs
                </p>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <Button 
                onClick={handleCTA}
                size="lg" 
                className="w-full bg-gradient-primary hover:shadow-strong text-lg font-semibold"
              >
                Découvrir le programme
              </Button>
              <Button 
                onClick={handleClose}
                variant="ghost"
                className="w-full text-muted-foreground hover:text-foreground"
              >
                Plus tard
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default WeightLossPopup;
