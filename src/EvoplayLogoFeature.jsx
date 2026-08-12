import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import EVO_Northern_Temple_Bonus_Buy from "./assets/EVO_Northern_Temple_Bonus_Buy.jpg";
import EVO_Mystery_Planet from "./assets/EVO_Mystery_Planet.jpg";
import EVO_Hot_Triple_Sevens_Hold_Win from "./assets/EVO_Hot_Triple_Sevens_Hold_Win.jpg";
import EVO_Budai_Reels_Bonus_Buy from "./assets/EVO_Budai_Reels_Bonus_Buy.jpg";

import EVO_Temple_of_Thunder from "./assets/EVO_Temple_of_Thunder.jpg";
import EVO_Food_Feast from "./assets/EVO_Food_Feast.jpg"
import EVO_Jelly_Boom from "./assets/EVO_Jelly_Boom.jpg";
import EVO_Sweet_Sugar from "./assets/EVO_Sweet_Sugar.jpg";

import Gold_of_Sirens from "./assets/EVO_Gold_of_Sirens.jpg";
import EVO_Elven_Princesses from "./assets/EVO_Elven_Princesses.jpg"
import EVO_Unlimited_Wishes from "./assets/EVO_Unlimited_Wishes.jpg";
import EVO_Maze_Desire_For_Power from "./assets/EVO_Maze_Desire_For_Power.jpg";

// ================= COMPONENT =================

export default function EvoplayLogoFeature() {

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
      image: EVO_Northern_Temple_Bonus_Buy,
      title: "MG Break Away",
    },

    {
      id: 2,
      image: EVO_Mystery_Planet,
      title: "MG Basket ball Star",
    },

    {
      id: 3,
      image: EVO_Hot_Triple_Sevens_Hold_Win,
      title: "Football Star",
    },

    {
      id: 4,
      image: EVO_Budai_Reels_Bonus_Buy,
      title: "Ladies Nite",
    },

    {
      id: 5,
      image: EVO_Food_Feast,
      title: "EVO Food Feast",
    },

    {
      id: 6,
      image: EVO_Temple_of_Thunder,
      title: "Cricket Star",
    },

    {
      id: 7,
      image: EVO_Jelly_Boom,
      title: "EVO Jelly Boom",
    },

    {
      id: 8,
      image: Gold_of_Sirens,
      title: "Gold of Sirens",
    },

    {
      id: 9,
      image: EVO_Sweet_Sugar,
      title: "EVO Sweet Sugar",
    },

    {
      id: 10,
      image: EVO_Elven_Princesses,
      title: "EVO Elven Princesses",
    },

    {
      id: 11,
      image: EVO_Unlimited_Wishes,
      title: "EVO Unlimited Wishes",
    },

    {
      id: 12,
      image: EVO_Maze_Desire_For_Power,
      title: "EVO Maze Desire For Power",
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