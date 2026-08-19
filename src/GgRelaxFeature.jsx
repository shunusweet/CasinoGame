import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import MoneySleigh from "./assets/MoneySleigh.png";
import BuffaloBlow from "./assets/BuffaloBlow.png";
import QuackinReels from "./assets/QuackinReels.png";
import TheTumbles from "./assets/TheTumbles.png";

import BoneRaiders from "./assets/BoneRaiders.png";
import SpaceAttack from "./assets/SpaceAttack.png";
import AtlantisCrush from "./assets/AtlantisCrush.png";
import GreatPigsby from "./assets/GreatPigsby.png";

import MonkeysGoWild from "./assets/MonkeysGoWild.png";
import FatBox from "./assets/FatBox.png";
import MummyMoltiplier from "./assets/MummyMoltiplier.png";
import BumbleTumble from "./assets/BumbleTumble.png";

// ================= COMPONENT =================

export default function GgRelaxFeature() {
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
      image: MoneySleigh,
      title: "MoneyS leigh",
    },

    {
      id: 2,
      image: BuffaloBlow,
      title: "Buffalo Blow",
    },

    {
      id: 3,
      image: QuackinReels,
      title: "Quack in Reels",
    },

    {
      id: 4,
      image: TheTumbles,
      title: "The Tumbles",
    },

    {
      id: 5,
      image: BoneRaiders,
      title: "Bone Raiders",
    },

    {
      id: 6,
      image: SpaceAttack,
      title: "Space Attack",
    },

    {
      id: 7,
      image: AtlantisCrush,
      title: "Atlant is Crush",
    },

    {
      id: 8,
      image: GreatPigsby,
      title: "Great Pigs by",
    },

    {
      id: 9,
      image: MonkeysGoWild,
      title: "Monkeys Go Wild",
    },

    {
      id: 10,
      image: FatBox,
      title: "Fat Box",
    },

    {
      id: 11,
      image: MummyMoltiplier,
      title: "Mummy Moltiplier",
    },

    {
      id: 12,
      image: BumbleTumble,
      title: "Bumble Tumble",
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