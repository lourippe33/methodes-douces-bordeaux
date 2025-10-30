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

    const systemPrompt = `Tu es l'assistant virtuel d'Antoine Gata-Porteix, praticien en hypnose et EFT-H. 

Informations sur les services:
- Séances d'hypnose et EFT-H pour le bien-être et l'équilibre personnel
- Accompagnement personnalisé et bienveillant
- Consultations en cabinet à Marseille
- Tarifs: 60€ la séance (durée: 1h à 1h30)
- Formation certifiante en hypnose et EFT disponible

Contact:
- Téléphone: 06 50 17 59 66
- Email: contact@antoinegata-hypnose.fr
- Adresse: 15 Rue de la République, 13001 Marseille

Ton rôle:
- Répondre aux questions sur les services, tarifs, disponibilités
- Expliquer les méthodes utilisées (hypnose, EFT-H)
- Guider vers la prise de rendez-vous
- Être empathique, rassurant et professionnel
- Répondre en français de manière claire et concise`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5-mini-2025-08-07',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        max_completion_tokens: 500,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return new Response(JSON.stringify({ error: 'OpenAI API error' }), {
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
