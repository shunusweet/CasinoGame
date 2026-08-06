import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= LOGO =================
import GoShowLogo from "./assets/GoShowLogo.png";

// ================= FEATURE IMAGES =================
import RosyOrbit from "./assets/RosyOrbit.png";
import LegacyOfUndeadDragon from "./assets/LegacyOfUndeadDragon.png";
import LawnnDisorder from "./assets/LawnnDisorder.png";

// Correct filename
import DiamondDig from "./assets/DiamindDig.png";

import GoBuffaloWealth from "./assets/GoBuffaloWealth.png";

// Correct filename
import TheGreekBknight from "./assets/TheGreebKnight.png";

import MysteryEgg from "./assets/MysteryEgg.png";
import TheGoShow777Crystal from "./assets/TheGoShow777Crystal.png";

import GoUnderFeatedXerxes from "./assets/GoUnderFeatedXerxes.png";
import GoGarFantToonz from "./assets/GoGarFantToonz.png";
import GoScrollOfSeth from "./assets/GoScrollOfSeth.png";
import GoRascalRiches from "./assets/GoRascalRiches.png";

export default function PlayNgo() {
  const [favorite, setFavorite] = useState([]);

  const toggleFavorite = (id) => {
    if (favorite.includes(id)) {
      setFavorite(favorite.filter((item) => item !== id));
    } else {
      setFavorite([...favorite, id]);
    }
  };

  const games = [
    { id: 1, image: RosyOrbit },
    { id: 2, image: LegacyOfUndeadDragon },
    { id: 3, image: LawnnDisorder },
    { id: 4, image: DiamondDig },

    { id: 5, image: GoBuffaloWealth },
    { id: 6, image: TheGreekBknight },
    { id: 7, image: MysteryEgg },
    { id: 8, image: TheGoShow777Crystal },

    { id: 9, image: GoUnderFeatedXerxes },
    { id: 10, image: GoGarFantToonz },
    { id: 11, image: GoScrollOfSeth },
    { id: 12, image: GoRascalRiches },
  ];

  return (
    <div className="bg-[#020617] px-3 py-3">

      {/* ================= HEADER ================= */}

     

           {/* ================= GAME GRID ================= */}

      <div className="grid grid-cols-4 gap-3">

        {games.map((game) => (

          <div
            key={game.id}
            className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-cyan-500
              bg-[#061b3a]
              shadow-[0_0_15px_rgba(0,180,255,.30)]
              cursor-pointer
              hover:scale-105
              duration-300
            "
          >

            <img
              src={game.image}
              alt=""
              className="
                w-full
                h-[120px]
                object-cover
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