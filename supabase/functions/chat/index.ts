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

    const systemPrompt = `Tu es AGP, l'assistant virtuel d'Antoine Gata, praticien en hypnose et EFT-H. 

PÉRIMÈTRE DE RÉPONSE:
Tu réponds UNIQUEMENT aux questions concernant les prestations d'hypnose et EFT-H. Pour toute autre demande:
- Formation AGP: "Pour les informations sur la formation, je vous invite à consulter notre site web où vous trouverez tous les détails."
- Neurofeedback: "Pour les informations sur le neurofeedback, je vous invite à consulter notre site web."
- Autres sujets hors prestations: Rediriger poliment vers le site web ou les canaux appropriés.

Informations sur les prestations:
- Séances d'hypnose et EFT-H pour le bien-être et l'équilibre personnel
- Accompagnement personnalisé et bienveillant
- Consultations en cabinet à Marseille
- Tarifs: 60€ la séance (durée: 1h à 1h30)

Contact:
- Téléphone: 06 50 17 59 66
- Email: contact@antoinegata-hypnose.fr
- Adresse: 15 Rue de la République, 13001 Marseille

Ton rôle:
- Répondre aux questions sur les séances d'hypnose et EFT-H, tarifs, disponibilités
- Expliquer les méthodes utilisées (hypnose, EFT-H) et leurs bienfaits
- Guider vers la prise de rendez-vous
- Être empathique, rassurant et professionnel
- Répondre en français de manière claire et concise
- Rester dans le cadre des prestations d'hypnose et EFT-H uniquement`;

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
