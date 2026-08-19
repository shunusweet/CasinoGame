import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import LeBandit from "./assets/LeBandit.png";
import WantedDeadOrAWild from "./assets/WantedDeadOrAWild.png";
import BuffaloStackSync from "./assets/BuffaloStackSync.png";
import StackEm from "./assets/StackEm.png";

import WildDie from "./assets/WildDie.png";
import Hack_Mystery_Motel from "./assets/Hack_Mystery_Motel.jpg";
import StickEm from "./assets/StickEm.png";

import OmoM from "./assets/OmoM.png";

import MiaMiMultiplier from "./assets/MiaMiMultiplier.png";
import Cubes from "./assets/Cubes.png";
import CashMpass from "./assets/CashMpass.png";
import Respinner from "./assets/Respinner.png";

// ================= COMPONENT =================

export default function HacksawGamesFeature() {

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
      image: LeBandit,
      title: "Bon Bon Game",
    },

    {
      id: 2,
      image: WantedDeadOrAWild,
      title: "Wanted Dead Or AWild",
    },

    {
      id: 3,
      image: BuffaloStackSync,
      title: "Kingdom Z",
    },

    {
      id: 4,
      image: StackEm,
      title: "Ka Luck88",
    },

    {
      id: 5,
      image: WildDie,
      title: "Wild Die",
    },

    {
      id: 6,
      image: Hack_Mystery_Motel,
      title: "Hack Mystery Motel",
    },

    {
      id: 7,
      image: StickEm,
      title: "Stick Em",
    },

    {
      id: 8,
      image: OmoM,
      title: "Omo M",
    },

    {
      id: 9,
      image: MiaMiMultiplier,
      title: "MiaMiMultiplier",
    },

    {
      id: 10,
      image: Cubes,
      title: "Cubes",
    },

    {
      id: 11,
      image: CashMpass,
      title: "Cash M pass",
    },

    {
      id: 12,
      image: Respinner,
      title: "Respinner",
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