import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import BG_Wild_Tiger from "./assets/BG_Wild_Tiger.jpg";
import BG_Burning_Chilli_X from "./assets/BG_Burning_Chilli_X.jpg";
import BG_Elvis_Frog_Trueways from "./assets/BG_Elvis_Frog_Trueways.jpg";
import BG_Joker_Queen from "./assets/BG_Joker_Queen.jpg";

import BG_Panda_Luck from "./assets/BG_Panda_Luck.jpg";
import BG_Forty_Fruity_Million from "./assets/BG_Forty_Fruity_Million.jpg"
import BG_Secret_Bar_Multidice_X from "./assets/BG_Secret_Bar_Multidice_X.jpg";
import BG_Gold_Magnate from "./assets/BG_Gold_Magnate.jpg";

import BG_Alien_Fruits from "./assets/BG_Alien_Fruits.jpg";
import BG_Gold_Of_Minos from "./assets/BG_Gold_Of_Minos.jpg"
import BG_Chicken_Rush from "./assets/BG_Chicken_Rush.jpg";
import BG_OOF_The_Goldmine_Planet from "./assets/BG_OOF_The_Goldmine_Planet.jpg";

// ================= COMPONENT =================

export default function Gg_bgFeature() {

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
      image: BG_Wild_Tiger,
      title: "MG Break Away",
    },

    {
      id: 2,
      image: BG_Burning_Chilli_X,
      title: "MG Basket ball Star",
    },

    {
      id: 3,
      image: BG_Elvis_Frog_Trueways,
      title: "Football Star",
    },

    {
      id: 4,
      image: BG_Joker_Queen,
      title: "Ladies Nite",
    },

    {
      id: 5,
      image: BG_Panda_Luck,
      title: "BG Panda Luck",
    },

    {
      id: 6,
      image: BG_Forty_Fruity_Million,
      title: "BG Forty Fruity Million",
    },

    {
      id: 7,
      image: BG_Secret_Bar_Multidice_X,
      title: "BG Secret Bar Multidice X",
    },

    {
      id: 8,
      image: BG_Gold_Magnate,
      title: "BG Gold Magnate.jpg",
    },

    {
      id: 9,
      image: BG_Alien_Fruits,
      title: "BG Alien Fruits",
    },

    {
      id: 10,
      image: BG_Gold_Of_Minos,
      title: "EVO Elven Princesses",
    },

    {
      id: 11,
      image: BG_Chicken_Rush,
      title: "EVO Unlimited Wishes",
    },

    {
      id: 12,
      image: BG_OOF_The_Goldmine_Planet,
      title: "BG OOF The Goldmine Planet",
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