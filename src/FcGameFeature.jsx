import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import FcGoldenPanther from "./assets/FcGoldenPanther.jpg";
import FC_Three_Little_Pigs from "./assets/FC_Three_Little_Pigs.jpg";
import NightMarket from "./assets/NightMarket.jpg";
import PandaDragonBoat from "./assets/PandaDragonBoat.jpg";

import ChineseNewYear from "./assets/ChineseNewYear.jpg";
import FC_Pong_Pong_Hu from "./assets/FC_Pong_Pong_Hu.jpg";
import FC_Lucky_Fortunes from "./assets/FC_Lucky_Fortunes.jpg";
import FC_Egypt_Bonanza from "./assets/FC_Egypt_Bonanza.jpg";

// ================= COMPONENT =================

export default function FcGameFeature() {

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
      image: FcGoldenPanther,
      title: "Golden Panther",
    },
    {
      id: 2,
      image: FC_Three_Little_Pigs,
      title: "Three Little Pigs",
    },
    {
      id: 3,
      image: NightMarket,
      title: "Night Market",
    },
    {
      id: 4,
      image: PandaDragonBoat,
      title: "Panda Dragon Boat",
    },
    {
      id: 5,
      image: ChineseNewYear,
      title: "Chinese New Year",
    },
    {
      id: 6,
      image: FC_Pong_Pong_Hu,
      title: "FC Pong Pong Hu",
    },
    {
      id: 7,
      image: FC_Lucky_Fortunes,
      title: "Lucky Fortunes",
    },
    {
      id: 8,
      image: FC_Egypt_Bonanza,
      title: "Egypt Bonanza",
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
        min-[400px]:px-3

        py-3
      "
    >

      {/* ================= ANIMATION CSS ================= */}

      <style>{`

        @keyframes fcGameFadeIn {

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

        .fc-game-animation {
          opacity: 0;
          animation-name: fcGameFadeIn;
          animation-duration: 700ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }

        @media (prefers-reduced-motion: reduce) {

          .fc-game-animation {
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
          min-[500px]:grid-cols-4

          gap-2
          min-[400px]:gap-3
        "
      >

        {games.map((game, index) => (

          <div
            key={game.id}

            style={{
              animationDelay: `${index * 100}ms`,
            }}

            className="
              fc-game-animation

              relative
              overflow-hidden

              rounded-lg
              min-[400px]:rounded-xl

              border
              border-yellow-500

              bg-[#061b3a]

              shadow-[0_0_12px_rgba(255,200,0,.30)]
              min-[400px]:shadow-[0_0_15px_rgba(255,200,0,.30)]

              cursor-pointer

              hover:scale-[1.03]
              min-[500px]:hover:scale-105

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

                h-[95px]
                min-[400px]:h-[105px]
                min-[500px]:h-[115px]

                object-cover

                rounded-lg
                min-[400px]:rounded-xl
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

                min-[400px]:w-7
                min-[400px]:h-7

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