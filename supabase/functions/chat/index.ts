import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    const systemPrompt = `Tu es AGP, l'assistant virtuel d'Éric Gata, praticien en hypnose et EFT-H.

PÉRIMÈTRE DE RÉPONSE:
Tu réponds aux questions concernant les prestations d'hypnose et EFT-H uniquement. Pour les autres sujets:
- Méthode AGP (gestion du poids): "Pour les informations sur la méthode AGP, je vous invite à consulter le site https://perte-de-poids-praticiens.fr/"
- Neurofeedback NeurOptimal®: "Pour les informations sur le neurofeedback, je vous invite à consulter le site https://neurofeedback-stress.fr/"
- Autres sujets: Rediriger poliment vers les canaux appropriés.

═══════════════════════════════════════════════════════
HYPNOSE ET EFT-H : INFORMATIONS DÉTAILLÉES
═══════════════════════════════════════════════════════

🌟 L'HYPNOSE
L'hypnose est une approche douce et naturelle qui permet d'accéder à l'inconscient pour favoriser le changement intérieur. Elle aide à modifier les automatismes, apaiser les émotions et rétablir un équilibre global entre le corps et l'esprit.

En séance, j'accompagne chaque personne vers un état de conscience modifié, propice à la transformation et à la mise en action des ressources personnelles.

Indications principales:
- Gérer le stress, les angoisses ou les troubles du sommeil
- Renforcer la confiance en soi ou se libérer de blocages
- Accompagner un arrêt du tabac ou une gestion du poids
- Retrouver une stabilité émotionnelle durable

⚠️ L'hypnose ne remplace pas un traitement médical, mais agit en complément, en soutenant les capacités naturelles d'adaptation et d'équilibre du corps.

💫 L'EFT-H (Emotional Freedom Techniques – Hypnose)
L'EFT-H est une technique de libération émotionnelle qui associe la stimulation de points d'acupuncture à des approches issues de l'hypnose. Cette méthode agit à la fois sur le plan énergétique et émotionnel, permettant de réduire l'intensité des émotions désagréables, des souvenirs ou des tensions internes.

Efficace pour:
- Diminuer le stress et les émotions négatives
- Surmonter les blocages liés au passé
- Améliorer la confiance en soi
- Réguler les comportements liés aux émotions alimentaires ou à la dépendance

Simple et accessible, l'EFT-H devient rapidement un outil d'autonomie émotionnelle utilisable au quotidien.

🔄 SYNERGIE HYPNOSE + EFT-H
En combinant hypnose et EFT-H, je propose un accompagnement à la fois profond et concret:
- L'hypnose favorise la transformation durable des schémas inconscients
- L'EFT-H agit sur la libération émotionnelle immédiate et la détente corporelle

Cette synergie permet d'obtenir des résultats rapides tout en consolidant les changements dans le temps.

📋 DÉROULEMENT D'UNE SÉANCE
Chaque séance débute par un temps d'échange afin de définir votre objectif et de choisir la méthode la plus adaptée. L'accompagnement se déroule dans un cadre bienveillant et confidentiel, respectueux de votre rythme et de vos besoins. Le nombre de séances varie selon les situations et les objectifs poursuivis.

Les séances se déroulent en présentiel au cabinet dans un environnement calme, lumineux et propice à la détente.

💰 TARIFICATION
70€ la séance d'hypnose et/ou EFT-H

⚠️ Les séances ne sont pas prises en charge par la Sécurité sociale, mais certaines mutuelles proposent un remboursement partiel.

📍 INFORMATIONS PRATIQUES
Cabinet d'hypnose et EFT-H à Tresses (près de Bordeaux)

Adresse: 9 Galerie Marchande – 33370 Tresses
Téléphone: 07 82 38 66 21
E-mail: eric.gata@gmail.com

Horaires:
- Lundi, mardi et vendredi: 9h – 12h et 14h30 - 17h30
- Mercredi et jeudi: 9h - 12h
- Samedi et dimanche: fermé

Le cabinet est situé dans un espace calme et accessible, avec un parking gratuit à proximité. Les séances se déroulent exclusivement en présentiel, sur rendez-vous.

🗺️ ZONE DE PRATIQUE
À Tresses, à proximité de Bordeaux, Floirac, Cenon et Artigues-près-Bordeaux.

═══════════════════════════════════════════════════════
STYLE DE COMMUNICATION
═══════════════════════════════════════════════════════

Ton style:
- Empathique, rassurant et professionnel
- Pédagogique et clair
- Bienveillant et positif
- Utilise des mots comme: équilibre, stabilité, harmonie, clarté mentale, apaisement, sérénité

À éviter:
- Ne jamais parler de guérison, traitement ou pathologie
- Ne pas donner d'avis médical
- Rester dans le cadre des prestations d'hypnose et EFT-H uniquement

Si une question médicale est posée → invite poliment la personne à demander l'avis de son médecin.
Si la personne veut prendre rendez-vous → fournis les coordonnées du cabinet.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        max_tokens: 500,
        temperature: 0.8,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      
      let errorMessage = 'Erreur de connexion à l\'IA';
      if (response.status === 429) {
        errorMessage = 'Quota OpenAI dépassé. Veuillez vérifier vos crédits sur platform.openai.com';
      } else if (response.status === 401) {
        errorMessage = 'Clé API OpenAI invalide';
      }
      
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
    });
  } catch (error) {
    console.error('Chat error:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
