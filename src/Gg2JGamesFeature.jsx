import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import LabubuLuckyBox from "./assets/LabubuLuckyBox.jpg";
import BloodOfTheFallen from "./assets/BloodOfTheFallen.jpg";
import DoomBullet from "./assets/DoomBullet.jpg";
import MagicDrop from "./assets/MagicDrop.jpg";

import YplusizeRock from "./assets/YplusizeRock.jpg";
import XPlusiveRock from "./assets/XPlusiveRock.jpg";
import Cosmic from "./assets/Cosmic.jpg";
import FashOnBassHunter from "./assets/FashOnBassHunter.jpg";

// ================= COMPONENT =================

export default function Gg2JGamesFeature() {
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
      image: LabubuLuckyBox,
      title: "Labubu Lucky Box",
    },
    {
      id: 2,
      image: BloodOfTheFallen,
      title: "Blood Of The Fallen",
    },
    {
      id: 3,
      image: DoomBullet,
      title: "Doom Bullet",
    },
    {
      id: 4,
      image: MagicDrop,
      title: "Mahjong Wins 2",
    },
    {
      id: 5,
      image: YplusizeRock,
      title: "Dynasaur Tycoon",
    },
    {
      id: 6,
      image: XPlusiveRock,
      title: "X Plusive Rock",
    },
    {
      id: 7,
      image: Cosmic,
      title: "Cosmic",
    },
    {
      id: 8,
      image: FashOnBassHunter,
      title: "Fash On Bass Hunter",
    },
  ];

  return (
    <div className="w-full bg-[#020617] py-3 overflow-hidden">

      {/* ================= ANIMATION CSS ================= */}

      <style>{`

        @keyframes gg2jFadeIn {

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

        .gg2j-game-animation {
          opacity: 0;
          animation-name: gg2jFadeIn;
          animation-duration: 650ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }

        @media (prefers-reduced-motion: reduce) {

          .gg2j-game-animation {
            animation: none;
            opacity: 1;
          }

        }

      `}</style>

      {/* ================= 540px CONTAINER ================= */}

      <div className="w-full max-w-[540px] mx-auto px-0">

        {/* ================= CARD GRID ================= */}

        <div className="grid grid-cols-4 gap-2 sm:gap-3">

          {games.map((game, index) => (
            <div
              key={game.id}
              style={{
                animationDelay: `${index * 90}ms`,
              }}
              className="
                gg2j-game-animation

                relative
                overflow-hidden
                rounded-xl

                border
                border-yellow-500

                bg-[#061b3a]

                shadow-[0_0_15px_rgba(255,200,0,.30)]

                cursor-pointer

                transition-transform
                duration-300
                ease-out

                hover:scale-105
              "
            >

              {/* ================= GAME IMAGE ================= */}

              <img
                src={game.image}
                alt={game.title}
                className="
                  w-full

                  h-[100px]
                  min-[400px]:h-[108px]
                  sm:h-[115px]

                  object-cover
                  rounded-xl

                  transition-transform
                  duration-500

                  hover:scale-110
                "
              />

              {/* ================= IMAGE OVERLAY ================= */}

              <div
                className="
                  absolute
                  inset-0
                  pointer-events-none

                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent
                "
              />

              {/* ================= HEART BUTTON ================= */}

              <button
                type="button"
                aria-label={`Favorite ${game.title}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(game.id);
                }}
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

                  hover:bg-black/85

                  transition-all
                  duration-300

                  hover:scale-110

                  active:scale-90
                "
              >

                <Heart
                  size={16}
                  className={`
                    transition-all
                    duration-300

                    ${
                      favorite.includes(game.id)
                        ? "fill-red-500 text-red-500 scale-125"
                        : "text-white"
                    }
                  `}
                />

              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}