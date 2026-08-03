import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import AnubisWrath from "./assets/AnubisWrath.png";
import Aviator from "./assets/Avator1.png";
import Aviator2 from "./assets/AvatorImage.jpg";
import AztexGame from "./assets/AztexGame.png";
import FortuneGems from "./assets/FortuneGems2.jpg";
import Jili777 from "./assets/Jili777.jpg";
import Labubu from "./assets/LabubuLuckyBox.jpg";
import LuckyNeko from "./assets/LuckyNeko.png";
import LuckyPiggy from "./assets/LuckyPiggy.png";
import MoneyComing from "./assets/MonerComing.jpg";
import ShowDown from "./assets/ShowDown.png";

const games = [
  {
    id: 1,
    provider: "SPRIBE",
    image: Aviator,
  },
  {
    id: 2,
    provider: "PG",
    image: FortuneGems,
  },
  {
    id: 3,
    provider: "SPRIBE",
    image: Aviator2,
  },
  {
    id: 4,
    image: MoneyComing,
  },
  {
    id: 5,
    image: ShowDown,
    
  },
  {
    id: 6,
    image: LuckyPiggy,
  },
  {
    id: 7,
    image: Labubu,
  },
  {
    id: 8,
    image: AnubisWrath,
  },
  {
    id: 9,
    image: LuckyNeko,
  },
  {
    id: 10,
    image: AnubisWrath,
  },
  {
    id: 11,
    image: Jili777,
  },
  {
    id: 12,
    provider: "PG",
    image: AztexGame,
  },
];

export default function GameGridCard() {
  const [favorite, setFavorite] = useState([]);

  const toggleFavorite = (id) => {
    if (favorite.includes(id)) {
      setFavorite(favorite.filter((item) => item !== id));
    } else {
      setFavorite([...favorite, id]);
    }
  };

  return (
    <div
      className="
      bg-[#020617]
      px-2
      py-3
      "
    >
      <div
        className="
        grid
        grid-cols-4
        gap-3
        "
      >
        {games.map((game) => (
          <div
            key={game.id}
            className="
            relative
            rounded-2xl
            overflow-hidden

            border
            border-yellow-500

            bg-[#111]

            shadow-[0_0_12px_rgba(255,180,0,.35)]

            cursor-pointer

            hover:scale-105

            duration-300
            "
          >
            {/* Image */}

            <img
              src={game.image}
              alt={game.title}
              className="
              w-full
              h-[140px]
              object-cover
              "
            />

            

            {/* Heart */}
            <button
              onClick={() => toggleFavorite(game.id)}
              className="
              absolute
              top-2
              right-2

              w-8
              h-8

              rounded-full

              bg-black/55

              flex
              items-center
              justify-center
              "
            >
              <Heart
                size={18}
                className={
                  favorite.includes(game.id)
                    ? "fill-red-500 text-red-500"
                    : "text-white"
                }
              />
            </button>
                        {/* Bottom Gradient */}
            <div
              className="
              absolute
              inset-x-0
              bottom-0
              h-20
              bg-gradient-to-t
              from-black/90
              via-black/40
              to-transparent
              "
            />

            {/* Game Title */}
            <div
              className="
              absolute
              bottom-7
              left-0
              right-0

              px-2

              text-center
              "
            >
              <h2
                className="
                text-white
                text-[13px]
                font-bold
                leading-4
                drop-shadow-lg
                "
              >
                {game.title}
              </h2>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
}