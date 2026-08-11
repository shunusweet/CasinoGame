import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================
import SuperAceDe from "./assets/SuperAceDe.png";
import IceFire from "./assets/IceFire.png";
import MahjongWins from "./assets/MahjongWins.png";
import MahjongWins2 from "./assets/MahjongWins2.png";

import VegasRockets from "./assets/VegasRockets.png";
import GoldenToad from "./assets/GoldenToad.png";
import SweetEliminate from "./assets/SweetEliminate.png";
import EpreehaunRiches from "./assets/EpreehaunRiches.png";

export default function DBGameFeatures() {
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
      image: SuperAceDe ,
      title: "Super AceDe",
    },
    {
      id: 2,
      image: IceFire,
      title: "Ice Fire",
    },
    {
      id: 3,
      image: MahjongWins,
      title: "BBQTycoon",
    },
    {
      id: 4,
      image: MahjongWins2,
      title: "Mahjong Wins 2",
    },
    {
      id: 5,
      image: VegasRockets,
      title: "Vegas Rockets",
    },
    {
      id: 6,
      image: GoldenToad,
      title: "Wheel Of Happiness",
    },
    {
      id: 7,
      image: SweetEliminate,
      title: "Sweet Eliminate",
    },
    {
      id: 8,
      image: EpreehaunRiches,
      title: "Epreehaun Riches",
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
           

      

    </div>
  );
}