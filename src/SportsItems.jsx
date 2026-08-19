import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================
import HbSports1 from "./assets/HbSports1.png";
import SabaSports from "./assets/SabaSports.png";

export default function SportsItems() {

  const [favorite, setFavorite] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);

  const imageRefs = useRef([]);

  // ================= FAVORITE =================

  const toggleFavorite = (id) => {
    setFavorite((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // ================= SPORTS GAMES =================

  const sportsGames = [
    {
      id: 1,
      image: HbSports1,
      title: "HB Sports",
    },
    {
      id: 2,
      image: SabaSports,
      title: "SABA Sports",
    },
  ];

  // ================= IMAGE SCROLL ANIMATION =================

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            const index = Number(
              entry.target.dataset.index
            );

            setVisibleImages((prev) => {

              if (prev.includes(index)) {
                return prev;
              }

              return [...prev, index];
            });

            // Animation sirf ek baar chalegi
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.2,
      }
    );

    imageRefs.current.forEach((image) => {

      if (image) {
        observer.observe(image);
      }

    });

    return () => {
      observer.disconnect();
    };

  }, []);

  return (
    <>
      {/* ================= IMAGE ANIMATION ================= */}

      <style>{`

        @keyframes sportsImageFadeUp {

          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .sports-game-image {
          opacity: 0;
          transform: translateY(45px) scale(0.96);
        }

        .sports-game-image.show {
          animation:
            sportsImageFadeUp
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

      `}</style>

      {/* ================= 540px MAIN CONTAINER ================= */}

      <div
        className="
          w-[540px]
          max-w-full
          bg-[#020617]
          px-3
          py-3
        "
      >

        {/* ================= SPORTS GRID ================= */}

        <div className="grid grid-cols-2 gap-3">

          {sportsGames.map((game, index) => (

            <div
              key={game.id}
              className="
                relative
                overflow-hidden
                rounded-xl
                border
                border-yellow-500
                bg-[#061b3a]
                shadow-[0_0_15px_rgba(255,200,0,.30)]
                cursor-pointer
                hover:scale-[1.03]
                transition-all
                duration-300
              "
            >

              {/* ================= GAME IMAGE ================= */}

              <img
                ref={(element) => {
                  imageRefs.current[index] = element;
                }}
                data-index={index}
                src={game.image}
                alt={game.title}
                className={`
                  sports-game-image

                  ${
                    visibleImages.includes(index)
                      ? "show"
                      : ""
                  }

                  w-full
                  h-[125px]
                  object-cover
                `}
              />

              {/* ================= HEART ================= */}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(game.id);
                }}
                className="
                  absolute
                  top-2
                  right-2
                  w-8
                  h-8
                  rounded-full
                  bg-black/60
                  flex
                  items-center
                  justify-center
                  hover:bg-black/80
                  transition
                "
              >

                <Heart
                  size={18}
                  className={
                    favorite.includes(game.id)
                      ? "fill-red-500 text-red-500"
                      : "text-white"
                  }
                />

              </button>

            </div>

          ))}

        </div>

        {/* Bottom spacing */}
        <div className="h-2" />

      </div>
    </>
  );
}