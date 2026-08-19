import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import BG_Wild_Tiger from "./assets/BG_Wild_Tiger.jpg";
import BG_Burning_Chilli_X from "./assets/BG_Burning_Chilli_X.jpg";
import BG_Elvis_Frog_Trueways from "./assets/BG_Elvis_Frog_Trueways.jpg";
import BG_Joker_Queen from "./assets/BG_Joker_Queen.jpg";

import BG_Panda_Luck from "./assets/BG_Panda_Luck.jpg";
import BG_Forty_Fruity_Million from "./assets/BG_Forty_Fruity_Million.jpg";
import BG_Secret_Bar_Multidice_X from "./assets/BG_Secret_Bar_Multidice_X.jpg";
import BG_Gold_Magnate from "./assets/BG_Gold_Magnate.jpg";

import BG_Alien_Fruits from "./assets/BG_Alien_Fruits.jpg";
import BG_Gold_Of_Minos from "./assets/BG_Gold_Of_Minos.jpg";
import BG_Chicken_Rush from "./assets/BG_Chicken_Rush.jpg";
import BG_OOF_The_Goldmine_Planet from "./assets/BG_OOF_The_Goldmine_Planet.jpg";

// ================= COMPONENT =================

export default function Gg_bgFeature() {
  const [favorite, setFavorite] = useState([]);

  // ================= FAVORITE =================

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
      image: BG_Wild_Tiger,
      title: "MG Break Away",
    },
    {
      id: 2,
      image: BG_Burning_Chilli_X,
      title: "MG Basketball Star",
    },
    {
      id: 3,
      image: BG_Elvis_Frog_Trueways,
      title: "Football Star",
    },
    {
      id: 4,
      image: BG_Joker_Queen,
      title: "Ladies Nite",
    },
    {
      id: 5,
      image: BG_Panda_Luck,
      title: "BG Panda Luck",
    },
    {
      id: 6,
      image: BG_Forty_Fruity_Million,
      title: "BG Forty Fruity Million",
    },
    {
      id: 7,
      image: BG_Secret_Bar_Multidice_X,
      title: "BG Secret Bar Multidice X",
    },
    {
      id: 8,
      image: BG_Gold_Magnate,
      title: "BG Gold Magnate",
    },
    {
      id: 9,
      image: BG_Alien_Fruits,
      title: "BG Alien Fruits",
    },
    {
      id: 10,
      image: BG_Gold_Of_Minos,
      title: "EVO Elven Princesses",
    },
    {
      id: 11,
      image: BG_Chicken_Rush,
      title: "EVO Unlimited Wishes",
    },
    {
      id: 12,
      image: BG_OOF_The_Goldmine_Planet,
      title: "BG OOF The Goldmine Planet",
    },
  ];

  return (
    <div className="w-full bg-[#020617] py-3">

      {/* ================= 540px CONTAINER ================= */}

      <div
        className="
          w-full
          max-w-[540px]
          mx-auto
          px-0
        "
      >

        {/* ================= ANIMATION ================= */}

        <style>{`

          @keyframes ggBgFadeIn {

            0% {
              opacity: 0;
              transform: translateY(35px) scale(0.92);
            }

            60% {
              opacity: 0.85;
              transform: translateY(-4px) scale(1.01);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }

          }

          .gg-bg-card {

            opacity: 0;

            animation-name: ggBgFadeIn;
            animation-duration: 650ms;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;

          }

          @media (prefers-reduced-motion: reduce) {

            .gg-bg-card {
              animation: none;
              opacity: 1;
            }

          }

        `}</style>

        {/* ================= GRID ================= */}

        <div
          className="
            grid
            grid-cols-4
            gap-2
            sm:gap-3
          "
        >

          {games.map((game, index) => (
            <div
              key={game.id}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
              className="
                gg-bg-card

                relative
                w-full

                overflow-hidden
                rounded-xl

                border
                border-yellow-500

                bg-[#061b3a]

                shadow-[0_0_14px_rgba(255,200,0,.30)]

                cursor-pointer

                transition-all
                duration-300
                ease-out

                hover:scale-[1.05]
                hover:border-yellow-300
                hover:shadow-[0_0_22px_rgba(255,200,0,.65)]

                active:scale-95
              "
            >

              {/* ================= IMAGE ================= */}

              <img
                src={game.image}
                alt={game.title}
                className="
                  block
                  w-full
                  aspect-[1/1.25]
                  object-cover
                "
              />

              {/* ================= HEART ================= */}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(game.id);
                }}
                className="
                  absolute
                  top-1.5
                  right-1.5

                  w-7
                  h-7

                  rounded-full

                  bg-black/60
                  backdrop-blur-sm

                  flex
                  items-center
                  justify-center

                  hover:bg-black/85

                  transition-all
                  duration-200

                  active:scale-90
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

              {/* ================= BOTTOM GRADIENT ================= */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-16

                  bg-gradient-to-t
                  from-black/95
                  via-black/50
                  to-transparent

                  pointer-events-none
                "
              />

              {/* ================= TITLE ================= */}

              <div
                className="
                  absolute
                  bottom-1.5
                  left-0
                  right-0
                  px-1
                  text-center
                  pointer-events-none
                "
              >
                <h2
                  className="
                    text-white

                    text-[9px]
                    min-[400px]:text-[10px]
                    sm:text-[12px]

                    font-bold
                    leading-tight

                    truncate

                    drop-shadow-[0_1px_3px_rgba(0,0,0,1)]
                  "
                >
                  {game.title}
                </h2>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}