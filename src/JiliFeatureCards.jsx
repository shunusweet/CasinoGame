import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================
import SuperAce from "./assets/SuperAce.png";
import FortuneCoins from "./assets/FortuneCoins.png";
import ChargeBuffalo from "./assets/ChargeBuffalo.png";

import BoxingKing from "./assets/BoxingKing.jpg";
import MonkeyPot from "./assets/MonkeyPot.png";
import JungleKing from "./assets/JungleKing.jpg";
import TrialOfPhonix from "./assets/TrialOfPhonix.png";

export default function JiliFeatureCards() {
  const [favorite, setFavorite] = useState([]);

  const toggleFavorite = (id) => {
    if (favorite.includes(id)) {
      setFavorite(favorite.filter((item) => item !== id));
    } else {
      setFavorite([...favorite, id]);
    }
  };

  const smallGames = [
    { id: 4, image: BoxingKing },
    { id: 5, image: MonkeyPot },
    { id: 6, image: JungleKing },
    { id: 7, image: TrialOfPhonix },
  ];

  return (
    <div className="bg-[#020617] px-3 py-3">

      {/* ================= TOP SECTION ================= */}

      <div className="grid grid-cols-[2fr_1fr] gap-3">

        {/* Left Big Card */}

        <div className="relative overflow-hidden rounded-2xl border border-cyan-500 bg-[#061b3a] shadow-[0_0_18px_rgba(0,180,255,.35)] hover:scale-[1.02] duration-300">

          <img
            src={SuperAce}
            alt=""
            className="w-full h-[190px] object-cover"
          />

          <button
            onClick={() => toggleFavorite(1)}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center"
          >
            <Heart
              size={18}
              className={
                favorite.includes(1)
                  ? "fill-red-500 text-red-500"
                  : "text-white"
              }
            />
          </button>

        </div>

        {/* Right Side */}

        <div className="flex flex-col gap-3">

          {/* Fortune Coins */}

          <div className="relative overflow-hidden rounded-2xl border border-cyan-500 bg-[#061b3a] shadow-[0_0_18px_rgba(0,180,255,.35)] hover:scale-105 duration-300">

            <img
              src={FortuneCoins}
              alt=""
              className="w-full h-[89px] object-cover"
            />

            <button
              onClick={() => toggleFavorite(2)}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center"
            >
              <Heart
                size={16}
                className={
                  favorite.includes(2)
                    ? "fill-red-500 text-red-500"
                    : "text-white"
                }
              />
            </button>

          </div>

          {/* Charge Buffalo */}

          <div className="relative overflow-hidden rounded-2xl border border-cyan-500 bg-[#061b3a] shadow-[0_0_18px_rgba(0,180,255,.35)] hover:scale-105 duration-300">

            <img
              src={ChargeBuffalo}
              alt=""
              className="w-full h-[89px] object-cover"
            />

            <button
              onClick={() => toggleFavorite(3)}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center"
            >
              <Heart
                size={16}
                className={
                  favorite.includes(3)
                    ? "fill-red-500 text-red-500"
                    : "text-white"
                }
              />
            </button>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM 4 CARDS ================= */}

      <div className="grid grid-cols-4 gap-3 mt-4">

        {smallGames.map((game) => (

          <div
            key={game.id}
            className="relative overflow-hidden rounded-2xl border border-cyan-500 bg-[#061b3a] shadow-[0_0_15px_rgba(0,180,255,.30)] hover:scale-105 duration-300"
          >

            <img
              src={game.image}
              alt=""
              className="w-full h-[115px] object-cover"
            />

            <button
              onClick={() => toggleFavorite(game.id)}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center"
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