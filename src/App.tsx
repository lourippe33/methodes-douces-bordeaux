import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HypnoseEftH from "./pages/HypnoseEftH";
import Neurofeedback from "./pages/Neurofeedback";
import Blog from "./pages/Blog";
import BlogNeurofeedback from "./pages/blog/BlogNeurofeedback";
import BlogHypnose from "./pages/blog/BlogHypnose";
import BlogEftH from "./pages/blog/BlogEftH";
import BlogAgp from "./pages/blog/BlogAgp";
import BlogFormation from "./pages/blog/BlogFormation";
import BlogSommeilNeurofeedback from "./pages/BlogSommeilNeurofeedback";
import BlogAmeliorerSommeil from "./pages/BlogAmeliorerSommeil";
import BlogStressTravail from "./pages/BlogStressTravail";
import BlogGestionStress from "./pages/BlogGestionStress";
import BlogBurnOut from "./pages/BlogBurnOut";
import About from "./pages/About";
import Programme30Jours from "./pages/Programme30Jours";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import Confidentialite from "./pages/Confidentialite";
import NotFound from "./pages/NotFound";
import NeurofeedbackBordeaux from "./pages/NeurofeedbackBordeaux";
import NeurofeedbackCenon from "./pages/NeurofeedbackCenon";
import NeurofeedbackFloirac from "./pages/NeurofeedbackFloirac";
import HypnoseBordeaux from "./pages/HypnoseBordeaux";
import HypnoseCenon from "./pages/HypnoseCenon";
import HypnoseFloirac from "./pages/HypnoseFloirac";
import EftBordeaux from "./pages/EftBordeaux";
import EftCenon from "./pages/EftCenon";
import EftFloirac from "./pages/EftFloirac";
import CookieConsent from "@/components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hypnose-eft-h" element={<HypnoseEftH />} />
          <Route path="/neurofeedback" element={<Neurofeedback />} />
          <Route path="/blog" element={<Blog />} />
          {/* Catégories du blog */}
          <Route path="/blog/neurofeedback" element={<BlogNeurofeedback />} />
          <Route path="/blog/hypnose" element={<BlogHypnose />} />
          <Route path="/blog/eft-h" element={<BlogEftH />} />
          <Route path="/blog/agp" element={<BlogAgp />} />
          <Route path="/blog/formation" element={<BlogFormation />} />
          {/* Articles du blog */}
          <Route path="/blog/neurofeedback-sommeil-reparateur" element={<BlogSommeilNeurofeedback />} />
          <Route path="/blog/ameliorer-sommeil-neuroptimal" element={<BlogAmeliorerSommeil />} />
          <Route path="/blog/stress-travail-neurofeedback" element={<BlogStressTravail />} />
          <Route path="/blog/gestion-stress-angoisses" element={<BlogGestionStress />} />
          <Route path="/blog/neurofeedback-burn-out" element={<BlogBurnOut />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/programme-30-jours" element={<Programme30Jours />} />
          <Route path="/programme-28-jours" element={<Programme30Jours />} /> {/* Redirect ancienne URL */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          {/* Pages locales SEO - Neurofeedback */}
          <Route path="/neurofeedback-bordeaux" element={<NeurofeedbackBordeaux />} />
          <Route path="/neurofeedback-cenon" element={<NeurofeedbackCenon />} />
          <Route path="/neurofeedback-floirac" element={<NeurofeedbackFloirac />} />
          {/* Pages locales SEO - Hypnose */}
          <Route path="/hypnose-bordeaux" element={<HypnoseBordeaux />} />
          <Route path="/hypnose-cenon" element={<HypnoseCenon />} />
          <Route path="/hypnose-floirac" element={<HypnoseFloirac />} />
          {/* Pages locales SEO - EFT */}
          <Route path="/eft-bordeaux" element={<EftBordeaux />} />
          <Route path="/eft-cenon" element={<EftCenon />} />
          <Route path="/eft-floirac" element={<EftFloirac />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
