import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import MahjongMaster from "./assets/MahjongMaster.jpg";
import AztecGold from "./assets/AztecGold.jpg";
import WestWorld from "./assets/WestWorld.jpg";
import MayanTemple from "./assets/MayanTemple.jpg";

import MermaidSecrets from "./assets/MermaidSecrets.jpg";
import DragonsFortune from "./assets/DragonsFortune.jpg"
import FortuneArara from "./assets/FortuneArara.jpg";
import JogoDoBicho from "./assets/JogoDoBicho.jpg";

import CaptainsTreasure from "./assets/CaptainsTreasure.jpg";
import WrathOfOlympus from "./assets/WrathOfOlympus.jpg"
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
      image: WestWorld ,
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

      {/* ================= BOTTOM SPACE ================= */}

      <div className="mt-4"></div>

    </div>

  );
}