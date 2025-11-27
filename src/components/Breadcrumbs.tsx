import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  useEffect(() => {
    // Add structured data for breadcrumbs
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://methodes-douces-bordeaux.fr"
        },
        ...items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": item.label,
          "item": item.path 
            ? `https://methodes-douces-bordeaux.fr${item.path}` 
            : `https://methodes-douces-bordeaux.fr/${item.label.toLowerCase().replace(/\s+/g, '-')}`
        }))
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <Link 
            to="/" 
            className="hover:text-primary transition-colors flex items-center gap-1"
            aria-label="Retour à l'accueil"
          >
            <Home size={16} />
            <span>Accueil</span>
          </Link>
          <ChevronRight size={16} />
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.path ? (
              <>
                <Link 
                  to={item.path} 
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
                {index < items.length - 1 && <ChevronRight size={16} />}
              </>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
