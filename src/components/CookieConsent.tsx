import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Declare dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Push consent event to GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'cookie_consent_granted',
      'consent_analytics': true
    });
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 text-sm text-foreground">
            <p className="mb-2">
              <strong>🍪 Cookies et confidentialité</strong>
            </p>
            <p className="text-muted-foreground">
              Nous utilisons des cookies pour analyser le trafic du site et améliorer votre expérience. 
              Aucun cookie publicitaire n'est utilisé. Vous pouvez accepter ou refuser leur utilisation.{" "}
              <a href="/confidentialite" className="underline hover:text-primary">
                En savoir plus
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="whitespace-nowrap"
            >
              Refuser
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="whitespace-nowrap"
            >
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
