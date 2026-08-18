import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import d530c104f3bab142f3c4007a579d7dad from "./assets/d530c104f3bab142f3c4007a579d7dad.png";
import ClashOfWar from "./assets/ClashOfWar.png";
import KingdomZ from "./assets/KingdomZ.png";
import BlessingTiger from "./assets/BlessingTiger.png";

import MafiaWays from "./assets/MafiaWays.png";
import AztecLegend from "./assets/AztecLegend.png";
import MahjongOfThePhoenix from "./assets/MahjongOfThePhoenix.png";
import GovernmentDisco from "./assets/GovernmentDisco.png";

import SuperAceX from "./assets/SuperAceX.png";
import MarketKing from "./assets/MarketKing.png";
import MoeMoeCute from "./assets/MoeMoeCute.png";
import BlessingDragon from "./assets/BlessingDragon.png";

// ================= COMPONENT =================

export default function AskmeslotFeatures() {

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
      image: d530c104f3bab142f3c4007a579d7dad,
      title: "Rainbow Jackpots",
    },

    {
      id: 2,
      image: ClashOfWar,
      title: "Ancient Script",
    },

    {
      id: 3,
      image: KingdomZ,
      title: "Kingdom Z",
    },

    {
      id: 4,
      image: BlessingTiger,
      title: "Ka Luck88",
    },

    {
      id: 5,
      image: MafiaWays,
      title: "Mafia Ways",
    },

    {
      id: 6,
      image: AztecLegend,
      title: "Aztec Legend",
    },

    {
      id: 7,
      image: MahjongOfThePhoenix,
      title: "Super Strike",
    },

    {
      id: 8,
      image: GovernmentDisco,
      title: "Ka Tanuki Tavern",
    },

    {
      id: 9,
      image: SuperAceX,
      title: "Vault Cracker",
    },

    {
      id: 10,
      image: MarketKing,
      title: "Ka Crystal Fruits",
    },

    {
      id: 11,
      image: MoeMoeCute,
      title: "Ka Island Paradise",
    },

    {
      id: 12,
      image: BlessingDragon,
      title: "Sea Boat",
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
              game-card-animation

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
                z-10
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

        @keyframes gameFadeIn {

          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.92);
          }

          50% {
            opacity: 0.6;
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .game-card-animation {

          opacity: 0;

          animation-name: gameFadeIn;
          animation-duration: 0.7s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;

        }

        @media (prefers-reduced-motion: reduce) {

          .game-card-animation {

            opacity: 1;
            animation: none;
            transform: none;

          }

        }

      `}</style>

    </div>

  );
}