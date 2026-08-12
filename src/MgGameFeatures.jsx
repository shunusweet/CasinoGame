import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import MG_Break_Away from "./assets/MG_Break_Away.jpg";
import MG_Basketball_Star from "./assets/MG_Basketball_Star.jpg";
import Football_Star from "./assets/Football_Star.jpg";
import Ladies_Nite from "./assets/Ladies_Nite.jpg";

import MG_Deadmau5 from "./assets/MG_Deadmau5.jpg";
import BurningDesire from "./assets/BurningDesire.jpg"

import MG_Cricket_Star from "./assets/MG_Cricket_Star.jpg";
import MG_Western_Gold from "./assets/MG_Western_Gold.jpg";

// ================= COMPONENT =================

export default function MgGameFeatures() {

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
      image: MG_Break_Away,
      title: "MG Break Away",
    },

    {
      id: 2,
      image: MG_Basketball_Star,
      title: "MG Basket ball Star",
    },

    {
      id: 3,
      image: Football_Star,
      title: "Football Star",
    },

    {
      id: 4,
      image: Ladies_Nite,
      title: "Ladies Nite",
    },

    {
      id: 5,
      image: BurningDesire,
      title: "Burning Desire",
    },

    {
      id: 6,
      image: MG_Cricket_Star,
      title: "Cricket Star",
    },

    {
      id: 7,
      image: MG_Deadmau5,
      title: "MG Deadmau5",
    },

    {
      id: 8,
      image: MG_Western_Gold,
      title: "Western Gold",
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

      <div className="mt-4"></div>

    </div>

  );
}