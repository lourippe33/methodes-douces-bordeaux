import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Target, TrendingDown, CheckCircle2 } from "lucide-react";

const Programme28Jours = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-pulse">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-semibold text-primary">Nouveau Programme</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Programme 28 Jours
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Transformez votre corps et votre esprit en seulement 28 jours
              </p>
              
              <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
                Un programme complet de perte de poids alliant nutrition, exercice et accompagnement personnalisé pour des résultats durables.
              </p>
              
              <Button size="lg" className="bg-gradient-primary hover:shadow-strong text-lg px-8 py-6">
                Réserver ma place
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">28 Jours</h3>
                <p className="text-muted-foreground">Programme structuré et progressif</p>
              </div>

              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Objectifs Clairs</h3>
                <p className="text-muted-foreground">Résultats mesurables et atteignables</p>
              </div>

              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Perte de Poids</h3>
                <p className="text-muted-foreground">Méthode éprouvée et efficace</p>
              </div>

              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Suivi Personnalisé</h3>
                <p className="text-muted-foreground">Accompagnement tout au long du programme</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programme Details Section */}
        <section className="py-20 bg-muted/30">
          <style dangerouslySetInnerHTML={{__html: `
            .agp-wrap{--agp-green:#4A7729;--agp-green-light:#81C784;--agp-cream:#F4F3EE;--agp-text:#2b2b2b;}
            .agp-container{max-width:1100px;margin:0 auto;padding:56px 20px;}
            .agp-hero{background:linear-gradient(135deg,var(--agp-cream),#e9f3ea);border-radius:22px;padding:42px 28px;display:grid;gap:22px}
            .agp-badge{display:inline-flex;align-items:center;gap:10px;background:#fff;border:1px solid #e6e6e6;border-radius:999px;padding:8px 14px;font-size:14px}
            .agp-title{font-size:clamp(28px,5vw,44px);line-height:1.1;margin:0;color:var(--agp-green);}
            .agp-sub{font-size:clamp(16px,3.4vw,20px);color:var(--agp-text);margin:6px 0 0}
            .agp-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:8px}
            .btn-primary{background:var(--agp-green);color:#fff;padding:14px 18px;border-radius:12px;font-weight:600;text-decoration:none;display:inline-flex;gap:10px;align-items:center}
            .btn-primary:hover{filter:brightness(1.05)}
            .btn-ghost{background:#fff;color:var(--agp-green);border:1px solid var(--agp-green);padding:12px 16px;border-radius:12px;text-decoration:none;font-weight:600}
            .agp-grid{display:grid;gap:18px}
            @media(min-width:900px){.agp-grid.cols-3{grid-template-columns:repeat(3,1fr)}}
            @media(min-width:900px){.agp-hero{grid-template-columns:1.2fr .8fr;align-items:center}}
            .card{background:#fff;border:1px solid #edf0ec;border-radius:18px;padding:18px}
            .card h3{margin:4px 0 8px;font-size:18px;color:#1f4020}
            .muted{color:#666}
            .offer{background:linear-gradient(145deg,#ffffff,var(--agp-cream));border:1px solid #e9efe6;border-radius:18px;padding:22px;display:grid;gap:12px}
            .price{font-size:34px;color:var(--agp-green);font-weight:800}
            .strike{color:#9aa19a;text-decoration:line-through;font-weight:600;margin-left:8px}
            .list{display:grid;gap:10px}
            .li{display:grid;grid-template-columns:24px auto;gap:10px;align-items:flex-start}
            .tick{width:24px;height:24px;border-radius:999px;background:var(--agp-green);color:#fff;display:grid;place-items:center;font-weight:800}
            .small{font-size:13px}
            .center{text-align:center}
            .sep{height:1px;background:#ececec;margin:22px 0}
            .proof{display:inline-flex;gap:8px;align-items:center;background:#f7fbf6;border:1px dashed #cfe6d2;border-radius:12px;padding:8px 12px}
          `}} />
          
          <div className="agp-container">
            <div className="agp-hero">
              <div>
                <div className="agp-badge" aria-label="Créateur de la méthode AGP">
                  <span>Créateur de la méthode AGP</span>
                  <span aria-hidden="true">•</span>
                  <strong>450+ praticiens formés</strong>
                </div>
                <h1 className="agp-title">Programme AGP – Hypnose & Gestion du Poids</h1>
                <p className="agp-sub">28 jours pour <strong>reprendre le contrôle</strong> sans régime ni culpabilité. Application guidée + séances d'hypnose & EFT + suivi hebdomadaire.</p>
                <div className="agp-cta">
                  <a className="btn-primary" href="/paiement" aria-label="Acheter le programme AGP maintenant">
                    <span>🚀 Rejoindre maintenant — 90€</span>
                  </a>
                  <a className="btn-ghost" href="#agp-faq">En savoir plus</a>
                </div>
                <div className="proof small" style={{marginTop: '10px'}}>
                  <span>💬 Edition lancement : vous participez au groupe pilote et donnez vos retours sur l'app.</span>
                </div>
              </div>

              <figure className="card center" style={{padding: 0}}>
                <img src="https://images.unsplash.com/photo-1514511542530-4f3f87c34d87?q=80&w=1200&auto=format&fit=crop" alt="Cette fois-ci, je me choisis" style={{width: '100%', height: 'auto', borderRadius: '18px 18px 0 0'}} />
                <figcaption className="small muted" style={{padding: '10px 14px'}}>« Cette fois-ci, je me choisis »</figcaption>
              </figure>
            </div>

            <div className="agp-grid cols-3" style={{marginTop: '26px'}}>
              <div className="card">
                <h3>📱 Application guidée</h3>
                <p className="muted">Des actions simples chaque jour, basées sur la <strong>chronobiologie</strong>.</p>
              </div>
              <div className="card">
                <h3>🎧 Hypnose & EFT</h3>
                <p className="muted">Apaiser les envies, diminuer le stress et sortir des compulsions.</p>
              </div>
              <div className="card">
                <h3>🤝 Suivi hebdomadaire</h3>
                <p className="muted">Un accompagnement réel. Vous n'êtes pas seul(e).</p>
              </div>
            </div>

            <div className="card" style={{marginTop: '20px'}}>
              <h3>Important</h3>
              <p className="muted">Le programme AGP n'est pas un régime. Il aide à <strong>installer de nouveaux comportements</strong> dans une relation apaisée à l'alimentation.</p>
            </div>

            <div className="agp-grid cols-3" style={{marginTop: '20px'}}>
              <div className="card">
                <h3>Pour vous si…</h3>
                <div className="list">
                  <div className="li"><span className="tick">✓</span>Vous mangez par stress ou fatigue.</div>
                  <div className="li"><span className="tick">✓</span>Les régimes ne fonctionnent pas sur la durée.</div>
                  <div className="li"><span className="tick">✓</span>Vous souhaitez avancer <strong>sans culpabilité</strong>.</div>
                </div>
              </div>
              <div className="card">
                <h3>Vous allez gagner…</h3>
                <div className="list">
                  <div className="li"><span className="tick">✓</span>Apaisement face à la nourriture.</div>
                  <div className="li"><span className="tick">✓</span>Capacité à <strong>dire stop</strong> calmement.</div>
                  <div className="li"><span className="tick">✓</span>Fierté & stabilité.</div>
                </div>
              </div>
              <div className="offer">
                <div><strong>Offre de lancement</strong></div>
                <div><span className="price">90€</span><span className="strike">190€</span></div>
                <p className="muted small">Groupe pilote — vous partagez vos retours.</p>
                <a className="btn-primary" href="/paiement">👉 Je rejoins le programme</a>
              </div>
            </div>

            <div className="sep"></div>

            <div id="agp-faq" className="agp-grid" style={{gap: '16px'}}>
              <h2 className="agp-title" style={{fontSize: '28px'}}>FAQ</h2>

              <details className="card">
                <summary><strong>Combien de temps par jour ?</strong></summary>
                <p className="muted">10 à 20 minutes.</p>
              </details>

              <details className="card">
                <summary><strong>Je dois supprimer des aliments ?</strong></summary>
                <p className="muted">Non, aucune restriction.</p>
              </details>

              <details className="card">
                <summary><strong>Et si je craque ?</strong></summary>
                <p className="muted">On en parle au suivi. Sans jugement.</p>
              </details>

              <details className="card">
                <summary><strong>Et si c'est émotionnel ?</strong></summary>
                <p className="muted">Je vous oriente vers un soutien adapté.</p>
              </details>
            </div>

            <div className="center" style={{marginTop: '28px'}}>
              <a className="btn-primary" href="/paiement">Je commence aujourd'hui — 90€</a>
              <p className="small muted" style={{marginTop: '10px'}}>« Cette fois-ci, je me choisis. »</p>
            </div>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Programme AGP – Hypnose & Gestion du Poids (28 jours)",
            "description": "Application guidée + Hypnose & EFT + suivi hebdomadaire. 28 jours pour reprendre le contrôle sans régime.",
            "brand": {"@type": "Brand", "name": "AGP"},
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "90",
              "availability": "https://schema.org/InStock",
              "url": "/paiement"
            }
          })}} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programme28Jours;
