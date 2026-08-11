import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import LabubuLuckyBox from "./assets/LabubuLuckyBox.jpg";
import BloodOfTheFallen from "./assets/BloodOfTheFallen.jpg";
import DoomBullet from "./assets/DoomBullet.jpg";
import MagicDrop from "./assets/MagicDrop.jpg";

import YplusizeRock from "./assets/YplusizeRock.jpg";
import XPlusiveRock from "./assets/XPlusiveRock.jpg";
import Cosmic from "./assets/Cosmic.jpg";
import FashOnBassHunter from "./assets/FashOnBassHunter.jpg";

// ================= COMPONENT =================

export default function Gg2JGamesFeature() {

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
      image: LabubuLuckyBox,
      title: "Labubu Lucky Box",
    },

    {
      id: 2,
      image: BloodOfTheFallen,
      title: "Blood Of The Fallen",
    },

    {
      id: 3,
      image: DoomBullet,
      title: "Doom Bullet",
    },

    {
      id: 4,
      image: MagicDrop,
      title: "Mahjong Wins 2",
    },

    {
      id: 5,
      image: YplusizeRock,
      title: "Dynasaur Tycoon",
    },

    {
      id: 6,
      image: XPlusiveRock,
      title: "X Plusive Rock",
    },

    {
      id: 7,
      image: Cosmic,
      title: "Cosmic",
    },

    {
      id: 8,
      image: FashOnBassHunter,
      title: "Fash On Bass Hunter",
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