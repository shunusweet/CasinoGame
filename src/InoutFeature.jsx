import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import ChickenRoad from "./assets/ChickenRoad.jpg";
import ChickenRoadInout from "./assets/ChickenRoadInout.jpg";
import PenaltyUnlimited from "./assets/PenaltyUnlimited.jpg";
import Ballonix from "./assets/Ballonix.jpg";

import RockPaper from "./assets/RockPaper.jpg";
import SugarDaddy from "./assets/SugarDaddy.jpg";
import ForestArrow from "./assets/ForestArrow.jpg";
import HumsterRun from "./assets/HumsterRun.jpg";

// ================= COMPONENT =================

export default function InoutFeature() {

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
      image: ChickenRoad,
      title: "Chicken Road",
    },

    {
      id: 2,
      image: ChickenRoadInout,
      title: "Chicken Road Inout",
    },

    {
      id: 3,
      image: PenaltyUnlimited,
      title: "Penalty Unlimited",
    },

    {
      id: 4,
      image: Ballonix,
      title: "Ballonix",
    },

    {
      id: 5,
      image: RockPaper,
      title: "Rock Paper",
    },

    {
      id: 6,
      image: SugarDaddy,
      title: "Fishing All Star",
    },

    {
      id: 7,
      image: ForestArrow,
      title: "Forest Arrow",
    },

    {
      id: 8,
      image: HumsterRun,
      title: "Humster Run",
    },

  ];

  // ================= RETURN =================

  return (

    <div className="bg-[#020617] w-[540px] max-w-full mx-auto px-3 py-3">

      {/* ================= CARD GRID ================= */}

      <div className="grid grid-cols-4 gap-3">

        {games.map((game, index) => (

          <div
            key={game.id}

            style={{
              animationDelay: `${index * 100}ms`,
            }}

            className="
              game-fade-in

              relative
              overflow-hidden
              rounded-xl

              border
              border-yellow-500

              bg-[#061b3a]

              shadow-[0_0_15px_rgba(255,200,0,.30)]

              cursor-pointer

              hover:scale-105
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >

            {/* ================= GAME IMAGE ================= */}

            <img
              src={game.image}
              alt={game.title}

              className="
                w-full
                h-[115px]

                object-cover
                rounded-xl

                transition-transform
                duration-500

                hover:scale-110
              "
            />

            {/* ================= HEART BUTTON ================= */}

            <button
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

                flex
                items-center
                justify-center

                hover:bg-black/80

                transition-all
                duration-300

                hover:scale-110

                z-10
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


      {/* ================= FADE IN ANIMATION ================= */}

      <style>{`

        @keyframes gameFadeIn {

          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .game-fade-in {
          opacity: 0;
          animation: gameFadeIn 0.6s ease-out forwards;
        }

      `}</style>

    </div>

  );
}