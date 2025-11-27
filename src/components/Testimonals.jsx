import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rohan Prakash",
      role: "Fleet Supervisor",
      comment:
        "The live map tracking is incredibly accurate. MapMate helped us reduce delays and improve fleet coordination.",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Megha Sharma",
      role: "Operations Manager",
      comment:
        "A very intuitive platform. The visibility it gives us over active routes is a complete game-changer.",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Karan Patel",
      role: "Transport Head",
      comment:
        "Fuel usage and delivery timings have improved drastically. Very reliable real-time tracking.",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Priya Nair",
      role: "Business Owner",
      comment:
        "The accuracy and frequency of live updates give me full confidence while monitoring drivers remotely.",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    {
      name: "Vikram Rao",
      role: "Logistics Analyst",
      comment:
        "The route history and reports helped optimize trips by reducing unnecessary stops.",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Utility: get two circular items
  const getTwoCards = () => {
    const second = (index + 1) % reviews.length;
    return [reviews[index], reviews[second]];
  };

  const twoCards = getTwoCards();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          What Our Users Say
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-80 bg-white rounded-xl p-5 shadow-md border border-indigo-100 opacity-0 translate-y-4 animate-fadeUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border border-indigo-300"
                />
                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp { animation: fadeUp .7s ease-out forwards; }
  `}</style>
    </section>
  );
}
