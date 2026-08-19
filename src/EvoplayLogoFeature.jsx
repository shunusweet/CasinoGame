import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import EVO_Northern_Temple_Bonus_Buy from "./assets/EVO_Northern_Temple_Bonus_Buy.jpg";
import EVO_Mystery_Planet from "./assets/EVO_Mystery_Planet.jpg";
import EVO_Hot_Triple_Sevens_Hold_Win from "./assets/EVO_Hot_Triple_Sevens_Hold_Win.jpg";
import EVO_Budai_Reels_Bonus_Buy from "./assets/EVO_Budai_Reels_Bonus_Buy.jpg";

import EVO_Food_Feast from "./assets/EVO_Food_Feast.jpg";
import EVO_Temple_of_Thunder from "./assets/EVO_Temple_of_Thunder.jpg";
import EVO_Jelly_Boom from "./assets/EVO_Jelly_Boom.jpg";
import EVO_Sweet_Sugar from "./assets/EVO_Sweet_Sugar.jpg";

import EVO_Gold_of_Sirens from "./assets/EVO_Gold_of_Sirens.jpg";
import EVO_Elven_Princesses from "./assets/EVO_Elven_Princesses.jpg";
import EVO_Unlimited_Wishes from "./assets/EVO_Jelly_Boom.jpg";
import EVO_Maze_Desire_For_Power from "./assets/EVO_Maze_Desire_For_Power.jpg";

// ================= COMPONENT =================

export default function EvoplayLogoFeature() {

  // ================= FAVORITE =================

  const [favorite, setFavorite] = useState([]);

  // ================= VISIBLE CARDS =================

  const [visibleCards, setVisibleCards] = useState([]);

  const cardRefs = useRef([]);

  // ================= FAVORITE FUNCTION =================

  const toggleFavorite = (id) => {

    setFavorite((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );

  };

  // ================= GAMES =================

  const games = [

    {
      id: 1,
      image: EVO_Northern_Temple_Bonus_Buy,
      title: "EVO Northern Temple Bonus Buy",
    },

    {
      id: 2,
      image: EVO_Mystery_Planet,
      title: "EVO Mystery Planet",
    },

    {
      id: 3,
      image: EVO_Hot_Triple_Sevens_Hold_Win,
      title: "EVO Hot Triple Sevens Hold Win",
    },

    {
      id: 4,
      image: EVO_Budai_Reels_Bonus_Buy,
      title: "EVO Budai Reels Bonus Buy",
    },

    {
      id: 5,
      image: EVO_Food_Feast,
      title: "EVO Food Feast",
    },

    {
      id: 6,
      image: EVO_Temple_of_Thunder,
      title: "EVO Temple of Thunder",
    },

    {
      id: 7,
      image: EVO_Jelly_Boom,
      title: "EVO Jelly Boom",
    },

    {
      id: 8,
      image: EVO_Sweet_Sugar,
      title: "EVO Sweet Sugar",
    },

    {
      id: 9,
      image: EVO_Gold_of_Sirens,
      title: "EVO Gold of Sirens",
    },

    {
      id: 10,
      image: EVO_Elven_Princesses,
      title: "EVO Elven Princesses",
    },

    {
      id: 11,
      image: EVO_Unlimited_Wishes,
      title: "EVO Unlimited Wishes",
    },

    {
      id: 12,
      image: EVO_Maze_Desire_For_Power,
      title: "EVO Maze Desire For Power",
    },

  ];

  // =========================================================
  // SCROLL FADE-IN OBSERVER
  // =========================================================

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          const index = Number(
            entry.target.dataset.index
          );

          setVisibleCards((prev) => {

            if (prev.includes(index)) {
              return prev;
            }

            return [
              ...prev,
              index
            ];

          });

          // Animation sirf ek baar chalegi
          observer.unobserve(entry.target);

        });

      },

      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }

    );

    // Observe all cards

    cardRefs.current.forEach((card) => {

      if (card) {
        observer.observe(card);
      }

    });

    // Cleanup

    return () => {
      observer.disconnect();
    };

  }, []);

  // ================= RETURN =================

  return (

    <div
      className="
        w-full
        max-w-[540px]
        mx-auto

        bg-[#020617]

        px-2
        min-[400px]:px-2.5
        sm:px-3

        py-3

        overflow-hidden
      "
    >

      {/* ================= ANIMATION CSS ================= */}

      <style>{`

        /* ================= FADE IN UP ================= */

        @keyframes evoFadeInUp {

          0% {
            opacity: 0;
            transform:
              translateY(40px)
              scale(0.94);
          }

          60% {
            opacity: 0.8;
            transform:
              translateY(-4px)
              scale(1.01);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }

        }


        /* ================= HIDDEN CARD ================= */

        .evo-game-card {

          opacity: 0;

          transform:
            translateY(40px)
            scale(0.94);

        }


        /* ================= SHOW CARD ================= */

        .evo-game-card.show {

          animation:
            evoFadeInUp
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

        }


        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {

          .evo-game-card {

            opacity: 1;

            transform: none;

            animation: none;

          }

        }

      `}</style>


      {/* ================= CARD GRID ================= */}

      <div
        className="
          grid

          grid-cols-2
          min-[400px]:grid-cols-3
          sm:grid-cols-4

          gap-2
          min-[400px]:gap-2.5
          sm:gap-3
        "
      >

        {games.map((game, index) => (

          <div
            key={game.id}

            ref={(element) => {
              cardRefs.current[index] = element;
            }}

            data-index={index}

            className={`
              evo-game-card

              ${
                visibleCards.includes(index)
                  ? "show"
                  : ""
              }

              relative

              w-full
              min-w-0

              overflow-hidden

              rounded-lg
              sm:rounded-xl

              border
              border-yellow-500

              bg-[#061b3a]

              shadow-[0_0_12px_rgba(255,200,0,.30)]

              cursor-pointer

              hover:scale-[1.03]
              sm:hover:scale-105

              hover:-translate-y-1

              hover:shadow-[0_0_25px_rgba(255,200,0,.55)]

              transition-all
              duration-300
            `}

            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >

            {/* ================= GAME IMAGE ================= */}

            <img
              src={game.image}
              alt={game.title}
              draggable="false"

              className="
                block

                w-full

                h-[100px]
                min-[360px]:h-[105px]
                min-[400px]:h-[110px]
                sm:h-[115px]

                object-cover

                rounded-lg
                sm:rounded-xl
              "
            />


            {/* ================= HEART ================= */}

            <button
              type="button"

              onClick={(e) => {

                e.stopPropagation();

                toggleFavorite(game.id);

              }}

              aria-label={
                favorite.includes(game.id)
                  ? `Remove ${game.title} from favorites`
                  : `Add ${game.title} to favorites`
              }

              className="
                absolute

                top-1
                right-1

                w-7
                h-7

                rounded-full

                bg-black/60
                backdrop-blur-sm

                flex
                items-center
                justify-center

                hover:bg-black/80
                hover:scale-110

                active:scale-95

                transition-all
                duration-200

                z-10
              "
            >

              <Heart
                size={16}

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

    </div>

  );
}