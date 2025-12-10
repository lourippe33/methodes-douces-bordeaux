import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HypnoseEftH from "./pages/HypnoseEftH";
import Neurofeedback from "./pages/Neurofeedback";
import Blog from "./pages/Blog";
import BlogSommeilNeurofeedback from "./pages/BlogSommeilNeurofeedback";
import BlogAmeliorerSommeil from "./pages/BlogAmeliorerSommeil";
import BlogStressTravail from "./pages/BlogStressTravail";
import BlogGestionStress from "./pages/BlogGestionStress";
import BlogBurnOut from "./pages/BlogBurnOut";
import About from "./pages/About";
import Programme28Jours from "./pages/Programme28Jours";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import Confidentialite from "./pages/Confidentialite";
import NotFound from "./pages/NotFound";
import NeurofeedbackBordeaux from "./pages/NeurofeedbackBordeaux";
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
          <Route path="/blog/neurofeedback-sommeil-reparateur" element={<BlogSommeilNeurofeedback />} />
          <Route path="/blog/ameliorer-sommeil-neuroptimal" element={<BlogAmeliorerSommeil />} />
          <Route path="/blog/stress-travail-neurofeedback" element={<BlogStressTravail />} />
          <Route path="/blog/gestion-stress-angoisses" element={<BlogGestionStress />} />
          <Route path="/blog/neurofeedback-burn-out" element={<BlogBurnOut />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/programme-28-jours" element={<Programme28Jours />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/neurofeedback-bordeaux" element={<NeurofeedbackBordeaux />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
