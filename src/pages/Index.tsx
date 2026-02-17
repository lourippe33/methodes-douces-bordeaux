import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocalIntro from "@/components/LocalIntro";
import SEOContent from "@/components/SEOContent";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Formation from "@/components/Formation";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import ZoneIntervention from "@/components/ZoneIntervention";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WeightLossPopup from "@/components/WeightLossPopup";

const Index = () => {
  useEffect(() => {
    document.title = "Perte de poids Bordeaux & Gironde – Programme AGP créé à Bordeaux";

    const metaDescription = document.querySelector('meta[name="description"]');
    const descContent = "Programme de perte de poids structuré par un praticien bordelais à Tresses (33). Hypnose, chronobiologie & neurofeedback – suivi en ligne ou en cabinet.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descContent);
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", "perte de poids bordeaux, neurofeedback tresses, programme minceur gironde, hypnose perte de poids, cabinet bien-être bordeaux, méthode AGP bordeaux");

    // Open Graph
    const setOgMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setOgMeta("og:title", "Perte de poids Bordeaux & Gironde – Programme AGP créé à Bordeaux");
    setOgMeta("og:description", "Programme de perte de poids structuré par un praticien bordelais à Tresses (33). Hypnose, chronobiologie & neurofeedback – suivi en ligne ou en cabinet.");
    setOgMeta("og:type", "website");

    // Schema Markup LocalBusiness
    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.setAttribute("data-homepage-schema", "true");
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Méthodes Douces Bordeaux - Eric Gata",
      "description": "Cabinet spécialisé en perte de poids (Méthode AGP) et neurofeedback à Tresses près de Bordeaux",
      "url": "https://methodes-douces-bordeaux.fr",
      "telephone": "+33782386621",
      "priceRange": "90€-690€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 Galerie Marchande",
        "addressLocality": "Tresses",
        "postalCode": "33370",
        "addressRegion": "Gironde",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "44.8386",
        "longitude": "-0.4676"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      "areaServed": [
        { "@type": "City", "name": "Bordeaux" },
        { "@type": "City", "name": "Tresses" },
        { "@type": "City", "name": "Libourne" },
        { "@type": "AdministrativeArea", "name": "Gironde" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "55"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services proposés",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Programme Perte de Poids 30 Jours AGP",
              "price": "90",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Neurofeedback"
            }
          }
        ]
      }
    });

    // Remove old schema if present
    const oldSchema = document.querySelector('script[data-homepage-schema]');
    if (oldSchema) oldSchema.remove();
    document.head.appendChild(structuredData);

    return () => {
      if (structuredData.parentNode) {
        structuredData.parentNode.removeChild(structuredData);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LocalIntro />
        <SEOContent />
        <Services />
        <WhyChooseUs />
        <Formation />
        <About />
        <Reviews />
        <Contact />
        <ZoneIntervention />
      </main>
      <Footer />
      <ChatBot />
      <WeightLossPopup />
    </div>
  );
};

export default Index;
