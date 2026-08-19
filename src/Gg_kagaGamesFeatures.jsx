import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import Ka_Blocky_Block from "./assets/Ka_Blocky_Block.jpg";
import Ka_Treasure_Bowl from "./assets/Ka_Treasure_Bowl.jpg";
import Ka_Wen_Ding from "./assets/Ka_Wen_Ding.jpg";
import Ka_Luck88 from "./assets/Ka_Luck88.jpg";

import Ka_The_Lotus_Lamp from "./assets/Ka_The_Lotus_Lamp.jpg";
import Ka_Dragon_Inn from "./assets/Ka_Dragon_Inn.jpg";
import Ka_Sunny_Bikini from "./assets/Ka_Sunny_Bikini.jpg";
import Ka_Tanuki_Tavern from "./assets/Ka_Tanuki_Tavern.jpg";

import Ka_Tuan_Yuan from "./assets/Ka_Tuan_Yuan.jpg";
import Ka_Crystal_Fruits from "./assets/Ka_Crystal_Fruits.jpg";
import Ka_Island_Paradise from "./assets/Ka_Island_Paradise.jpg";
import Ka_Big_Apple from "./assets/Ka_Big_Apple.jpg";

// ================= COMPONENT =================

export default function Gg_kagaGamesFeatures() {
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
      image: Ka_Blocky_Block,
      title: "Rainbow Jackpots",
    },
    {
      id: 2,
      image: Ka_Treasure_Bowl,
      title: "Ancient Script",
    },
    {
      id: 3,
      image: Ka_Wen_Ding,
      title: "Zeus Lightning",
    },
    {
      id: 4,
      image: Ka_Luck88,
      title: "Ka Luck88",
    },
    {
      id: 5,
      image: Ka_The_Lotus_Lamp,
      title: "Dr FranCash Slein",
    },
    {
      id: 6,
      image: Ka_Dragon_Inn,
      title: "Red Line Rush",
    },
    {
      id: 7,
      image: Ka_Sunny_Bikini,
      title: "Super Strike",
    },
    {
      id: 8,
      image: Ka_Tanuki_Tavern,
      title: "Ka Tanuki Tavern",
    },
    {
      id: 9,
      image: Ka_Tuan_Yuan,
      title: "Vault Cracker",
    },
    {
      id: 10,
      image: Ka_Crystal_Fruits,
      title: "Ka Crystal Fruits",
    },
    {
      id: 11,
      image: Ka_Island_Paradise,
      title: "Ka Island Paradise",
    },
    {
      id: 12,
      image: Ka_Big_Apple,
      title: "Sea Boat",
    },
  ];

  return (
    <div className="w-full bg-[#020617] px-3 py-3 overflow-hidden">

      {/* ================= CUSTOM ANIMATION ================= */}

      <style>{`

        @keyframes kagaGameFadeIn {

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

        .kaga-game-animation {

          opacity: 0;

          animation-name: kagaGameFadeIn;
          animation-duration: 650ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;

        }

        @media (prefers-reduced-motion: reduce) {

          .kaga-game-animation {
            animation: none;
            opacity: 1;
          }

        }

      `}</style>

      {/* ================= 540px CONTAINER ================= */}

      <div className="w-full max-w-[540px] mx-auto">

        {/* ================= CARD GRID ================= */}

        <div className="grid grid-cols-4 gap-2 sm:gap-3">

          {games.map((game, index) => (
            <div
              key={game.id}
              style={{
                animationDelay: `${index * 90}ms`,
              }}
              className="
                kaga-game-animation

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

              {/* ================= IMAGE ================= */}

              <img
                src={game.image}
                alt={game.title}
                className="
                  w-full
                  h-[105px]
                  min-[400px]:h-[110px]
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

                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent

                  pointer-events-none
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