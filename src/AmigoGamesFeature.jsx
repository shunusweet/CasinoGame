import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import FortuneLove from "./assets/FortuneLove.png";
import OlympusRivals from "./assets/OlympusRivals.png";
import CricketLeague from "./assets/CricketLeague.png";
import DiamondRaid from "./assets/DiamondRaid.png";

import OlympusRivals2 from "./assets/OlympusRivals2.png";
import DiceInvaders from "./assets/DiceInvaders.png";
import CoinBoy from "./assets/CoinBoy.png";
import BlazingCrown from "./assets/BlazingCrown.png";

import FortuneBros from "./assets/FortuneBros.png";
import LampWishes from "./assets/LampWishes.png";
import CloverHell from "./assets/CloverHell.png";
import DiceClub from "./assets/DiceClub.png";


// ================= COMPONENT =================

export default function AmigoGamesFeature() {

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
        image: FortuneLove,
        title: "Super Ace De",
      },
  
      {
        id: 2,
        image: OlympusRivals,
        title: "Olympus Rivals",
      },
  
      {
        id: 3,
        image: CricketLeague,
        title: "Cricket League",
      },
  
      {
        id: 4,
        image: DiamondRaid,
        title: "Mahjong Wins 2",
      },
  
      {
        id: 5,
        image: OlympusRivals2,
        title: "Dynasaur Tycoon",
      },
  
      {
        id: 6,
        image: DiceInvaders,
        title: "Fishing All Star",
      },
  
      {
        id: 7,
        image: CoinBoy,
        title: "Coin Boy",
      },
  
      {
        id: 8,
        image: BlazingCrown,
        title: "Disco Farm",
      },
  
       {
        id: 9,
        image: FortuneBros,
        title: "Coins Ra Deluxe",
      },
  
      {
        id: 10,
        image: LampWishes,
        title: "Spos Lunar Wolf",
      },
  
      {
        id: 11,
        image: CloverHell,
        title: "Coins Of Leprechaun",
      },
  
      {
        id: 12,
        image: DiceClub,
        title: "Pots Great Fortune",
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

      

    </div>

  );
}