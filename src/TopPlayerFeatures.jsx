import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================
import GoldenCity from "./assets/GoldenCity.png";
import FortuneDragons from "./assets/FortuneDragons.png";
import BBQTycoon from "./assets/BBQTycoon.png";
import LuckyPun from "./assets/LuckyPun.png";

import DragonOfFortune from "./assets/DragonOfFortune.png";
import LuckyPiggy1 from "./assets/LuckyPiggy1.png";
import GoldenOfCity from "./assets/GoldenOfCity.png";
import PileOfGold from "./assets/PileOfGold.png";

export default function TopPlayerFeatures() {
  const [favorite, setFavorite] = useState([]);

  const toggleFavorite = (id) => {
    if (favorite.includes(id)) {
      setFavorite(favorite.filter((item) => item !== id));
    } else {
      setFavorite([...favorite, id]);
    }
  };
    // ================= GAMES =================

  const games = [
    {
      id: 1,
      image: GoldenCity ,
      title: "Zeus Typhon",
    },
    {
      id: 2,
      image: FortuneDragons,
      title: "Wolf Gold",
    },
    {
      id: 3,
      image: BBQTycoon,
      title: "BBQTycoon",
    },
    {
      id: 4,
      image: LuckyPun,
      title: "Wisdom Of Athena",
    },
    {
      id: 5,
      image: DragonOfFortune,
      title: "Dragon Of Fortune",
    },
    {
      id: 6,
      image: LuckyPiggy1,
      title: "Wheel Of Happiness",
    },
    {
      id: 7,
      image: GoldenOfCity,
      title: "Golden Of City",
    },
    {
      id: 8,
      image: PileOfGold,
      title: "Pile Of Gold",
    },
  ];
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

            {/* Game Image */}

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

            {/* ================= HEART ================= */}

            <button
              onClick={() => toggleFavorite(game.id)}
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
            {/* ================= BOTTOM SPACING ================= */}

      <div className="mt-5"></div>

    </div>
  );
}