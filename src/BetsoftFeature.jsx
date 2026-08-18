import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import MonsterPop from "./assets/MonsterPop.png";
import TripleLucky from "./assets/TripleLucky.png";
import TheSlotFatherBookOfWins from "./assets/TheSlotFatherBookOfWins.png";
import SuperGoldenDragon from "./assets/SuperGoldenDragon.png";

import TheGoldenOwlAthena from "./assets/TheGoldenOwlAthena.png";
import BambooRush from "./assets/BambooRush.png";
import CoinsHalloween from "./assets/CoinsHalloween.png";
import DiscoFarm from "./assets/DiscoFarm.png";

import CoinsRaDeluxe from "./assets/CoinsRaDeluxe.jpg";
import SposLunarWolf from "./assets/SposLunarWolf.png";
import CoinsOfLeprechaun from "./assets/CoinsOfLeprechaun.png";
import PotsGreatFortune from "./assets/PotsGreatFortune.png";

// ================= COMPONENT =================

export default function BetsoftFeature() {

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
      image: MonsterPop,
      title: "Super Ace De",
    },

    {
      id: 2,
      image: TripleLucky,
      title: "Ice Fire",
    },

    {
      id: 3,
      image: TheSlotFatherBookOfWins,
      title: "The Slot Father Book Of Wins",
    },

    {
      id: 4,
      image: SuperGoldenDragon,
      title: "Mahjong Wins 2",
    },

    {
      id: 5,
      image: TheGoldenOwlAthena,
      title: "Dynasaur Tycoon",
    },

    {
      id: 6,
      image: BambooRush,
      title: "Fishing All Star",
    },

    {
      id: 7,
      image: CoinsHalloween,
      title: "Ocean King Jackpot",
    },

    {
      id: 8,
      image: DiscoFarm,
      title: "Disco Farm",
    },

    {
      id: 9,
      image: CoinsRaDeluxe,
      title: "Coins Ra Deluxe",
    },

    {
      id: 10,
      image: SposLunarWolf,
      title: "Spos Lunar Wolf",
    },

    {
      id: 11,
      image: CoinsOfLeprechaun,
      title: "Coins Of Leprechaun",
    },

    {
      id: 12,
      image: PotsGreatFortune,
      title: "Pots Great Fortune",
    },

  ];

  // ================= RETURN =================

  return (

    <div className="bg-[#020617] px-3 py-3">

      {/* ================= ANIMATION CSS ================= */}

      <style>{`

        @keyframes gameFadeIn {

          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.94);
          }

          60% {
            opacity: 0.85;
            transform: translateY(-3px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .game-card-animation {
          opacity: 0;
          animation: gameFadeIn 0.7s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {

          .game-card-animation {
            opacity: 1;
            animation: none;
          }

        }

      `}</style>

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

              hover:shadow-[0_0_25px_rgba(255,200,0,.55)]

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
                hover:scale-110

                transition-all
                duration-200
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