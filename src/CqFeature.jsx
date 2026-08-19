import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import SixGacha from "./assets/SixGacha.png";
import JumpHigh from "./assets/JumpHigh.png";
import RaveJump from "./assets/RaveJump.png";
import RaveJumpz from "./assets/RaveJumpz.png";

import LuckyBets from "./assets/LuckyBets.png";
import RaveJumpGame from "./assets/RaveJumpGame.png";
import BlackWakong from "./assets/BlackWakong.png";
import StrikerWild from "./assets/StrikerWild.png";

// ================= COMPONENT =================

export default function CqFeature() {

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
      image: SixGacha,
      title: "Six Gacha",
    },
    {
      id: 2,
      image: JumpHigh,
      title: "Jump High",
    },
    {
      id: 3,
      image: RaveJump,
      title: "Rave Jump",
    },
    {
      id: 4,
      image: RaveJumpz,
      title: "Rave Jumpz",
    },
    {
      id: 5,
      image: LuckyBets,
      title: "Lucky Bets",
    },
    {
      id: 6,
      image: RaveJumpGame,
      title: "Rave Jump Game",
    },
    {
      id: 7,
      image: BlackWakong,
      title: "Black Wakong",
    },
    {
      id: 8,
      image: StrikerWild,
      title: "Striker Wild",
    },
  ];

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
      "
    >

      {/* ================= ANIMATION CSS ================= */}

      <style>{`

        @keyframes gameFadeIn {

          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.94);
          }

          60% {
            opacity: 0.8;
            transform: translateY(-3px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .game-card-animation {
          opacity: 0;
          animation: gameFadeIn 0.7s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {

          .game-card-animation {
            opacity: 1;
            animation: none;
          }

        }

      `}</style>


      {/* ================= CARD GRID ================= */}

      <div
        className="
          grid
          grid-cols-4

          gap-2
          sm:gap-3

          w-full
        "
      >

        {games.map((game, index) => (

          <div
            key={game.id}

            style={{
              animationDelay: `${index * 0.12}s`,
            }}

            className="
              game-card-animation

              relative
              overflow-hidden

              rounded-lg
              sm:rounded-xl

              border
              border-yellow-500/80

              bg-[#061b3a]

              shadow-[0_0_12px_rgba(255,200,0,.25)]
              sm:shadow-[0_0_15px_rgba(255,200,0,.30)]

              cursor-pointer

              hover:scale-[1.04]
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

                h-[78px]
                xs:h-[90px]
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

                w-6
                h-6

                sm:w-7
                sm:h-7

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
                size={14}
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