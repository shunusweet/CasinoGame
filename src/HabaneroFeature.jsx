import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import Habanero_Gold_Rush from "./assets/Habanero_Gold_Rush.jpg";
import Habanero_Tower_Of_Pizza from "./assets/Habanero_Tower_Of_Pizza.jpg";
import Habanero_Panda_Panda from "./assets/Habanero_Panda_Panda.jpg";
import Habanero_Lucky_Lucky from "./assets/Habanero_Lucky_Lucky.jpg";

import Habanero_Legendary_Beasts from "./assets/Habanero_Legendary_Beasts.jpg";
import Habanero_Taberna_DeLos_Muertos from "./assets/Habanero_Taberna_DeLos_Muertos.jpg"
import Habanero_Safari_Rumble from "./assets/Habanero_Safari_Rumble.jpg";
import Habanero_Mummy_Hunter from "./assets/Habanero_Mummy_Hunter.jpg";

import Habanero_Mystic_Rings from "./assets/Habanero_Mystic_Rings.jpg";
import Habanero_Mystic_Ring from "./assets/Habanero_Mystic_Ring.jpg"
import Habanero_Love_And_Riches_Eldorado from "./assets/Habanero_Love_And_Riches_Eldorado.jpg";
import Habanero_Carnival_Cove from "./assets/Habanero_Carnival_Cove.jpg";


// ================= COMPONENT =================

export default function HabaneroFeature() {

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
        image: Habanero_Gold_Rush,
        title: "Habanero Gold Rush",
      },
  
      {
        id: 2,
        image: Habanero_Tower_Of_Pizza,
        title: "Habanero Tower Of Pizza",
      },
  
      {
        id: 3,
        image: Habanero_Panda_Panda,
        title: "Habanero Panda Panda",
      },
  
      {
        id: 4,
        image: Habanero_Lucky_Lucky,
        title: "Habanero Lucky Lucky",
      },
  
      {
        id: 5,
        image: Habanero_Legendary_Beasts,
        title: "Habanero Legendary Beasts",
      },
  
      {
        id: 6,
        image: Habanero_Taberna_DeLos_Muertos,
        title: "Habanero Taberna DeLos Muertos",
      },
  
      {
        id: 7,
        image: Habanero_Safari_Rumble,
        title: "Stick Em",
      },
  
      {
        id: 8,
        image: Habanero_Mummy_Hunter,
        title: "Omo M",
      },
  
      {
        id: 9,
        image: Habanero_Mystic_Rings,
        title: "MiaMiMultiplier",
      },
  
      {
        id: 10,
        image:  Habanero_Mystic_Ring,
        title: " Cubes",
      },
  
      {
        id: 11,
        image: Habanero_Love_And_Riches_Eldorado,
        title: "Cash M pass",
      },
  
      {
        id: 12,
        image: Habanero_Carnival_Cove,
        title: "Respinner",
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