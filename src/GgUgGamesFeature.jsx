import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import MahjongMaster from "./assets/MahjongMaster.jpg";
import AztecGold from "./assets/AztecGold.jpg";
import WestWorld from "./assets/WestWorld.jpg";
import MayanTemple from "./assets/MayanTemple.jpg";

import MermaidSecrets from "./assets/MermaidSecrets.jpg";
import DragonsFortune from "./assets/DragonsFortune.jpg";
import FortuneArara from "./assets/FortuneArara.jpg";
import JogoDoBicho from "./assets/JogoDoBicho.jpg";

import CaptainsTreasure from "./assets/CaptainsTreasure.jpg";
import WrathOfOlympus from "./assets/WrathOfOlympus.jpg";
import SweetMelee from "./assets/SweetMelee.jpg";
import PuppyLove from "./assets/PuppyLove.jpg";

// ================= COMPONENT =================

export default function GgUgGamesFeature() {

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
      image: MahjongMaster,
      title: "Mahjong Master",
    },

    {
      id: 2,
      image: AztecGold,
      title: "Aztec Gold",
    },

    {
      id: 3,
      image: WestWorld,
      title: "West World",
    },

    {
      id: 4,
      image: MayanTemple,
      title: "Mayan Temple",
    },

    {
      id: 5,
      image: MermaidSecrets,
      title: "Mermaid Secrets",
    },

    {
      id: 6,
      image: DragonsFortune,
      title: "Dragons Fortune",
    },

    {
      id: 7,
      image: FortuneArara,
      title: "Fortune Arara",
    },

    {
      id: 8,
      image: JogoDoBicho,
      title: "Jogo Do Bicho",
    },

    {
      id: 9,
      image: CaptainsTreasure,
      title: "Captains Treasure",
    },

    {
      id: 10,
      image: WrathOfOlympus,
      title: "Wrath Of Olympus",
    },

    {
      id: 11,
      image: SweetMelee,
      title: "Sweet Melee",
    },

    {
      id: 12,
      image: PuppyLove,
      title: "Puppy Love",
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