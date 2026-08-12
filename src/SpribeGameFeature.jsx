import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import Avator1 from "./assets/Avator1.png";
import AvatorImage from "./assets/AvatorImage.jpg";
import Spribe_Plinko from "./assets/Spribe_Plinko.jpg";
import Spribe_Balloon from "./assets/Spribe_Balloon.jpg";

import Spribe_Dice from "./assets/Spribe_Dice.jpg";
import Spribe_Hotline from "./assets/Spribe_Hotline.jpg";
import Spribe_Keno_80 from "./assets/Spribe_Keno_80.jpg";
import Spribe_Trader from "./assets/Spribe_Trader.jpg";

// ================= COMPONENT =================

export default function SpribeGameFeaure() {

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
      image: Avator1,
      title: "Avator1",
    },

    {
      id: 2,
      image: AvatorImage,
      title: "Avator Image",
    },

    {
      id: 3,
      image: Spribe_Plinko,
      title: "Spribe Plinko",
    },

    {
      id: 4,
      image: Spribe_Balloon,
      title: "Spribe Balloon",
    },

    {
      id: 5,
      image: Spribe_Dice,
      title: "Spribe Dice",
    },

    {
      id: 6,
      image: Spribe_Hotline,
      title: "X Plusive Rock",
    },

    {
      id: 7,
      image: Spribe_Keno_80,
      title: "Spribe Keno",
    },

    {
      id: 8,
      image: Spribe_Trader,
      title: "Spribe Trader",
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