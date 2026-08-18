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

    <div className="bg-[#020617] px-3 py-3">

      {/* ================= CARD GRID ================= */}

      <div className="grid grid-cols-4 gap-3">

        {games.map((game) => (

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
              hover:scale-105
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

                animate-[imageFadeIn_0.8s_ease-out]
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
                transition
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

      {/* ================= BOTTOM SPACE ================= */}

      

    </div>

  );
}