import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================
import TreasureBowl from "./assets/TreasureBowl.jpg";
import SuperNiubi from "./assets/SuperNiubi.png";
import OlympianTemple from "./assets/OlympianTemple.png";
import Lucky777 from "./assets/Lucky777.png";

import FortuneJewel from "./assets/FortuneJewel.png";
import ElementalLinkFire from "./assets/ElementalLinkFire.png";
import OlymPic from "./assets/OlymPic.png";
import Golaifu from "./assets/Golaifu.png";

export default function JDBGames() {
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
      image: TreasureBowl,
      title: "Treasure Bowl",
    },
    {
      id: 2,
      image: SuperNiubi,
      title: "Super Niubi",
    },
    {
      id: 3,
      image: OlympianTemple,
      title: "Olympian Temple",
    },
    {
      id: 4,
      image: Lucky777,
      title: "Lucky 777",
    },
    {
      id: 5,
      image: FortuneJewel,
      title: "Fortune Jewel",
    },
    {
      id: 6,
      image: ElementalLinkFire,
      title: "Elemental Link Fire",
    },
    {
      id: 7,
      image: OlymPic,
      title: "Olympic",
    },
    {
      id: 8,
      image: Golaifu,
      title: "Golaifu",
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
              "
            />

            {/* Heart Button */}

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

    </div>
  );
}