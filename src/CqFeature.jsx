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