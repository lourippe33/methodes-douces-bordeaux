import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('google-reviews');

        if (error) {
          console.error('Error fetching reviews:', error);
          toast({
            title: "Erreur",
            description: "Impossible de charger les avis Google",
            variant: "destructive"
          });
          return;
        }

        setReviews(data.reviews || []);
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les avis Google",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [toast]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🩵 Ils témoignent de leur expérience
          </h2>
          <div className="text-center text-muted-foreground">
            Chargement des avis...
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🩵 Ils témoignent de leur expérience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {review.profile_photo_url ? (
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {getInitials(review.author_name)}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {review.author_name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
                <div className="mb-3">{renderStars(review.rating)}</div>
                <p className="text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
