import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================
import ZeusTyphon from "./assets/ZeusTyphon.png";
import WolfGold from "./assets/WolfGold.png";
import WitchHeart from "./assets/WitchHeart.png";
import WisdomOfAthena from "./assets/WisdomOfAthena.png";

import WildWestGold from "./assets/WildWestGold.png";
import WheelOfHappiness from "./assets/WheelOfHappiness.png";
import WealthyFrog from "./assets/WealthyFrog.png";
import WavesOfPoseidon from "./assets/WavesOfPoseidon.png";

export default function PPGamesFeatures() {
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
      image: ZeusTyphon,
      title: "Zeus Typhon",
    },
    {
      id: 2,
      image: WolfGold,
      title: "Wolf Gold",
    },
    {
      id: 3,
      image: WitchHeart,
      title: "Witch Heart",
    },
    {
      id: 4,
      image: WisdomOfAthena,
      title: "Wisdom Of Athena",
    },
    {
      id: 5,
      image: WildWestGold,
      title: "Wild West Gold",
    },
    {
      id: 6,
      image: WheelOfHappiness,
      title: "Wheel Of Happiness",
    },
    {
      id: 7,
      image: WealthyFrog,
      title: "Wealthy Frog",
    },
    {
      id: 8,
      image: WavesOfPoseidon,
      title: "Waves Of Poseidon",
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