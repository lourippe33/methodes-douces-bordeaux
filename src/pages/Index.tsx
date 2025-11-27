import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEOContent from "@/components/SEOContent";
import Services from "@/components/Services";
import Formation from "@/components/Formation";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WeightLossPopup from "@/components/WeightLossPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SEOContent />
        <Services />
        <Formation />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
      <WeightLossPopup />
    </div>
  );
};

export default Index;
