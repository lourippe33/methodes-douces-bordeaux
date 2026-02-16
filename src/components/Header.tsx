import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-agp.jpg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  const navigateToAbout = () => {
    setIsMenuOpen(false);
    navigate("/a-propos");
  };
  const navigateToProgramme = () => {
    setIsMenuOpen(false);
    navigate("/programme-30-jours");
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
            <img src={logo} alt="Logo AGP cabinet bien-être Tresses Bordeaux" className="h-12 w-auto" width="48" height="48" loading="lazy" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={navigateToProgramme} className="text-foreground hover:text-primary transition-colors font-medium">
              Programme Perte de Poids
            </button>
            <button onClick={() => navigate("/neurofeedback")} className="text-foreground hover:text-primary transition-colors font-medium">
              Neurofeedback
            </button>
            <button onClick={() => scrollToSection("formation")} className="text-foreground hover:text-primary transition-colors font-medium">
              Formation
            </button>
            <button onClick={navigateToAbout} className="text-foreground hover:text-primary transition-colors font-medium">
              À propos
            </button>
            <button onClick={() => navigate("/blog")} className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </button>
            <button onClick={navigateToProgramme} className="relative text-foreground hover:text-primary transition-colors font-medium group">
              <span className="relative inline-flex items-center gap-2">
                Défi minceur 30 Jours
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full animate-pulse text-xs whitespace-nowrap">
                  🔥 NOUVEAU
                </span>
              </span>
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-gradient-primary hover:shadow-strong transition-all hover:scale-105">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button onClick={navigateToProgramme} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Programme Perte de Poids
            </button>
            <button onClick={() => navigate("/neurofeedback")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Neurofeedback
            </button>
            <button onClick={() => scrollToSection("formation")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Formation
            </button>
            <button onClick={navigateToAbout} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              À propos
            </button>
            <button onClick={() => navigate("/blog")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              Blog
            </button>
            <button onClick={navigateToProgramme} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
              <span className="flex items-center gap-2">
                Programme 30 jours
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full animate-pulse text-xs whitespace-nowrap">
                  🔥 NOUVEAU
                </span>
              </span>
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-gradient-primary w-full hover:scale-105 transition-transform">
              Contact
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;