import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import FireOfHuluwa from "./assets/FireOfHuluwa.png";
import HooHeyHow from "./assets/HooHeyHow.png";
import TombOfDragonEmperor from "./assets/TombOfDragonEmperor.png";
import BbinAllStar from "./assets/BbinAllStar.png";

import RichHarvest from "./assets/RichHarvest.png";
import PiggyBank from "./assets/PiggyBank.jpg";

import JiuWeiHu from "./assets/JiuWeiHu.png";
import GrapTurnDragon from "./assets/GrapTurnDragon.png";

// ================= COMPONENT =================

export default function BbGamesFeatures() {

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
      image: FireOfHuluwa,
      title: "Six Gacha",
    },

    {
      id: 2,
      image: HooHeyHow,
      title: "Hoo Hey How",
    },

    {
      id: 3,
      image: TombOfDragonEmperor,
      title: "Tomb Of Dragon Emperor",
    },

    {
      id: 4,
      image: BbinAllStar,
      title: "Bbin All Star",
    },

    {
      id: 5,
      image: PiggyBank,
      title: "Piggy Bank",
    },

    {
      id: 6,
      image: RichHarvest,
      title: "Rich Harvest",
    },

    {
      id: 7,
      image: JiuWeiHu,
      title: "Jiu Wei Hu",
    },

    {
      id: 8,
      image: GrapTurnDragon,
      title: "Grap Turn Dragon",
    },

  ];

  // ================= RETURN =================

  return (

    <div className="bg-[#020617] px-3 py-3">

      {/* ================= CARD GRID ================= */}

      <div className="grid grid-cols-4 gap-3">

        {games.map((game, index) => (

          <div
            key={game.id}
            style={{
              animationDelay: `${index * 0.12}s`,
            }}
            className="
              animate-gameCard

              relative
              overflow-hidden
              rounded-xl
              border
              border-yellow-500
              bg-[#061b3a]
              shadow-[0_0_15px_rgba(255,200,0,.30)]
              cursor-pointer

              hover:scale-105
              hover:-translate-y-1

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
{/* ================= ANIMATION CSS ================= */}

      <style>{`
        @keyframes gameCardFadeIn {
          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.92);
          }

          60% {
            opacity: 1;
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-gameCard {
          opacity: 0;
          animation-name: gameCardFadeIn;
          animation-duration: 0.7s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-gameCard {
            opacity: 1;
            animation: none;
            transform: none;
          }
        }
      `}</style>

    </div>

  );
}