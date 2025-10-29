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

    console.log('Fetching reviews from Google Places API...');

    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&language=fr`
    );

    if (!response.ok) {
      console.error('Google API error:', response.status, await response.text());
      throw new Error(`Google API returned status ${response.status}`);
    }

    const data = await response.json();
    console.log('Google API response status:', data.status);

    if (data.status !== 'OK') {
      console.error('Google API error status:', data.status, data.error_message);
      throw new Error(`Google API error: ${data.status}`);
    }

    const reviews = data.result?.reviews || [];
    console.log(`Found ${reviews.length} reviews`);

    // Filter reviews that have text and get the latest 5
    const filteredReviews = reviews
      .filter((review: any) => review.text && review.text.trim() !== '')
      .slice(0, 5)
      .map((review: any) => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
        relative_time_description: review.relative_time_description,
        profile_photo_url: review.profile_photo_url
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
