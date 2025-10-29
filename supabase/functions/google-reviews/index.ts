import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    const placeId = 'ChIJ7W8nH4k2VQ0Rnt0xhp5hXBg';

    if (!apiKey) {
      console.error('GOOGLE_PLACES_API_KEY is not set');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Fetching reviews from Google Places API (New)...');

    // Use the new Places API
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews'
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google API error:', response.status, errorText);
      throw new Error(`Google API returned status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log('Google API response received');

    const reviews = data.reviews || [];
    console.log(`Found ${reviews.length} reviews`);

    // Filter reviews that have text and get the latest 5
    const filteredReviews = reviews
      .filter((review: any) => review.text?.text && review.text.text.trim() !== '')
      .slice(0, 5)
      .map((review: any) => ({
        author_name: review.authorAttribution?.displayName || 'Anonyme',
        rating: review.rating || 0,
        text: review.text?.text || '',
        time: review.publishTime ? new Date(review.publishTime).getTime() / 1000 : Date.now() / 1000,
        relative_time_description: review.relativePublishTimeDescription || '',
        profile_photo_url: review.authorAttribution?.photoUri || null
      }));

    console.log(`Returning ${filteredReviews.length} filtered reviews`);

    return new Response(
      JSON.stringify({ reviews: filteredReviews }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error in google-reviews function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
