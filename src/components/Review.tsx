// src/components/Review.tsx
import { useEffect } from "react";

interface ReviewProps {
  websiteId: string;
  theme?: "light" | "dark";
  minRating?: number;
  totalRev?: number;
}

const Review: React.FC<ReviewProps> = ({
  websiteId,
  theme = "light",
  minRating = 5,
  totalRev = 40,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://review-r.godutta.tech/embed.js";
    script.async = true;
    script.setAttribute("data-website-id", websiteId);
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-min-rating", minRating.toString());
    script.setAttribute("data-total-rev", totalRev.toString());

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [websiteId, theme, minRating, totalRev]);

  return (
    <div id="review-widget" className="w-full flex justify-center my-6">
     
    </div>
  );
};

export default Review;
