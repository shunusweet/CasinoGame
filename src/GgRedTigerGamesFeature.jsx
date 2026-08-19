import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import RainbowJackpots from "./assets/RainbowJackpots.jpeg";
import AncientScript from "./assets/AncientScript.jpeg";
import ZeusLightning from "./assets/ZeusLightning.png";
import MoonSpell from "./assets/MoonSpell.jpeg";

import DrFranCashSlein from "./assets/DrFranCashSlein.png";
import RedLineRush from "./assets/RedLineRush.jpeg";
import SuperStrike from "./assets/SuperStrike.jpeg";
import Astros from "./assets/Astros.png";

import VaultCracker from "./assets/VaultCracker.png";
import GloverCraze from "./assets/GloverCraze.png";
import ChristmasMorning from "./assets/ChristmasMorning.jpeg";
import SeaBoat from "./assets/SeaBoat.jpeg";

// ================= COMPONENT =================

export default function GgRedTigerGamesFeature() {

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
      image: RainbowJackpots,
      title: "Rainbow Jackpots",
    },

    {
      id: 2,
      image: AncientScript,
      title: "Ancient Script",
    },

    {
      id: 3,
      image: ZeusLightning,
      title: "Zeus Lightning",
    },

    {
      id: 4,
      image: MoonSpell,
      title: "Moon Spell",
    },

    {
      id: 5,
      image: DrFranCashSlein,
      title: "Dr FranCash Slein",
    },

    {
      id: 6,
      image: RedLineRush,
      title: "Red Line Rush",
    },

    {
      id: 7,
      image: SuperStrike,
      title: "Super Strike",
    },

    {
      id: 8,
      image: Astros,
      title: "Astros",
    },

    {
      id: 9,
      image: VaultCracker,
      title: "Vault Cracker",
    },

    {
      id: 10,
      image: GloverCraze,
      title: "Glover Craze",
    },

    {
      id: 11,
      image: ChristmasMorning,
      title: "Christmas Morning",
    },

    {
      id: 12,
      image: SeaBoat,
      title: "Sea Boat",
    },

  ];

  // ================= RETURN =================

  return (

    <div className="bg-[#020617] w-[540px] max-w-full mx-auto px-3 py-3">

      {/* ================= CARD GRID ================= */}

      <div className="grid grid-cols-4 gap-3">

        {games.map((game, index) => (

          <div
            key={game.id}

            style={{
              animationDelay: `${index * 100}ms`,
            }}

            className="
              relative
              overflow-hidden
              rounded-xl

              border
              border-yellow-500

              bg-[#061b3a]

              shadow-[0_0_15px_rgba(255,200,0,.30)]

              cursor-pointer

              opacity-0

              animate-[fadeInUp_0.6s_ease-out_forwards]

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

                transition-transform
                duration-500

                hover:scale-110
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

                transition-all
                duration-300

                hover:scale-110
              "
            >

              <Heart
                size={16}

                className={`
                  transition-all
                  duration-300

                  ${
                    favorite.includes(game.id)
                      ? "fill-red-500 text-red-500 scale-125"
                      : "text-white"
                  }
                `}
              />

            </button>

          </div>

        ))}

      </div>



      {/* ================= ANIMATION ================= */}

      <style>{`

        @keyframes fadeInUp {

          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

      `}</style>

    </div>

  );
}