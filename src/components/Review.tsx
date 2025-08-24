import React, { useEffect } from "react";

export default function Review() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">What People Say</h2>
        <p className="text-gray-600 mb-10">
          Hear from people who have worked with me or experienced my projects.
        </p>
        <div id="review-embed" className="w-full"></div>
        <ReviewEmbed
          websiteid={"48defcb5-df19-4882-94ab-f567bcdffb89"}
          theme={"light"}
          minrat={"0"}
          tot={"40"}
          embedSentiment={"positive"}
        />

       
        <div className="mt-10">
          <a
            href="https://review-r.godutta.tech/review/d7a557a0-3db5-4013-9040-8345613d22fa" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Leave Your Review
          </a>
        </div>
      </div>
    </section>
  );
}

export function ReviewEmbed({
  websiteid,
  theme,
  minrat,
  tot,
  embedSentiment,
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://review-r.godutta.tech/embed.js";
    script.async = true;
    script.setAttribute("data-website-id", websiteid);
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-min-rating", minrat);
    script.setAttribute("data-total-rev", tot);
    script.setAttribute("data-sentiment", embedSentiment);

    const container = document.getElementById("review-embed");
    if (container) {
      container.innerHTML = ""; 
      container.appendChild(script);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, [websiteid, theme, minrat, tot, embedSentiment]);

  return null;
}
