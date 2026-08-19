import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import SuperAceDe from "./assets/SuperAceDe.png";
import IceFire from "./assets/IceFire.png";
import MahjongWins from "./assets/MahjongWins.png";
import MahjongWins2 from "./assets/MahjongWins2.png";

import VegasRockets from "./assets/VegasRockets.png";
import GoldenToad from "./assets/GoldenToad.png";
import SweetEliminate from "./assets/SweetEliminate.png";
import EpreehaunRiches from "./assets/EpreehaunRiches.png";


// ================= COMPONENT =================

export default function DBGameFeatures() {

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
      image: SuperAceDe,
      title: "Super AceDe",
    },
    {
      id: 2,
      image: IceFire,
      title: "Ice Fire",
    },
    {
      id: 3,
      image: MahjongWins,
      title: "BBQTycoon",
    },
    {
      id: 4,
      image: MahjongWins2,
      title: "Mahjong Wins 2",
    },
    {
      id: 5,
      image: VegasRockets,
      title: "Vegas Rockets",
    },
    {
      id: 6,
      image: GoldenToad,
      title: "Wheel Of Happiness",
    },
    {
      id: 7,
      image: SweetEliminate,
      title: "Sweet Eliminate",
    },
    {
      id: 8,
      image: EpreehaunRiches,
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
        min-[400px]:px-2.5
        sm:px-3

        py-3

        overflow-hidden
      "
    >

      {/* ================= ANIMATION CSS ================= */}

      <style>{`

        @keyframes gameFadeIn {

          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.94);
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

          animation-name: gameFadeIn;
          animation-duration: 0.7s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;

        }


        @media (prefers-reduced-motion: reduce) {

          .game-card-animation {

            opacity: 1;

            animation: none;

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
          min-[400px]:gap-2.5
          sm:gap-3
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
            "
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

              aria-label={`Favorite ${game.title}`}

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