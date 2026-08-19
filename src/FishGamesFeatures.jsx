import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import HappyFishing from "./assets/HappyFishing.jpg";
import JiliMegaFishing from "./assets/JiliMegaFishing.jpg";
import FortuneKingJackpot from "./assets/FortuneKingJackpot.jpg";
import RoyalFishing from "./assets/RoyalFishing.jpg";

import DynasaurTycoon from "./assets/DynasaurTycoon.jpg";
import FishingAllStar from "./assets/FishingAllStar.jpg";
import OceanKingJackpot from "./assets/OceanKingJackpot.jpg";
import FortuneZombie from "./assets/FortuneZombie.jpg";

// ================= COMPONENT =================

export default function FishGamesFeatures() {

  const [favorite, setFavorite] = useState([]);

  // ================= FAVORITE =================

  const toggleFavorite = (id) => {
    if (favorite.includes(id)) {
      setFavorite(
        favorite.filter((item) => item !== id)
      );
    } else {
      setFavorite([
        ...favorite,
        id
      ]);
    }
  };

  // ================= GAMES =================

  const games = [
    {
      id: 1,
      image: HappyFishing,
      title: "Super Ace De",
    },
    {
      id: 2,
      image: JiliMegaFishing,
      title: "Ice Fire",
    },
    {
      id: 3,
      image: FortuneKingJackpot,
      title: "BBQ Tycoon",
    },
    {
      id: 4,
      image: RoyalFishing,
      title: "Mahjong Wins 2",
    },
    {
      id: 5,
      image: DynasaurTycoon,
      title: "Dynasaur Tycoon",
    },
    {
      id: 6,
      image: FishingAllStar,
      title: "Fishing All Star",
    },
    {
      id: 7,
      image: OceanKingJackpot,
      title: "Ocean King Jackpot",
    },
    {
      id: 8,
      image: FortuneZombie,
      title: "Epreehaun Riches",
    },
  ];

  // ================= RETURN =================

  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto

        bg-[#020617]

        px-2
        sm:px-3

        py-3

        overflow-hidden
      "
    >

      {/* ================= CUSTOM ANIMATION CSS ================= */}

      <style>{`

        @keyframes fishGameFadeIn {

          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.94);
          }

          60% {
            opacity: 0.85;
            transform: translateY(-3px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .fish-game-animation {
          opacity: 0;
          animation-name: fishGameFadeIn;
          animation-duration: 700ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }

        @media (prefers-reduced-motion: reduce) {

          .fish-game-animation {
            animation: none;
            opacity: 1;
            transform: none;
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
          sm:gap-3
        "
      >

        {games.map((game, index) => (

          <div
            key={game.id}

            style={{
              animationDelay: `${index * 100}ms`,
            }}

            className="
              fish-game-animation

              relative
              overflow-hidden

              rounded-lg
              sm:rounded-xl

              border
              border-yellow-500

              bg-[#061b3a]

              shadow-[0_0_12px_rgba(255,200,0,.30)]
              sm:shadow-[0_0_15px_rgba(255,200,0,.30)]

              cursor-pointer

              hover:scale-[1.03]
              sm:hover:scale-105

              hover:-translate-y-1

              hover:shadow-[0_0_25px_rgba(255,200,0,.55)]

              transition-all
              duration-300
            "
          >

            {/* ================= GAME IMAGE ================= */}

            <img
              src={game.image}
              alt={game.title}

              className="
                block
                w-full

                h-[105px]
                min-[400px]:h-[110px]
                sm:h-[115px]

                object-cover

                rounded-lg
                sm:rounded-xl
              "
            />


            {/* ================= HEART BUTTON ================= */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(game.id);
              }}

              aria-label={`Favorite ${game.title}`}

              className="
                absolute

                top-1
                right-1

                w-7
                h-7

                rounded-full

                bg-black/60

                flex
                items-center
                justify-center

                hover:bg-black/80
                hover:scale-110

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