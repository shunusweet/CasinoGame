import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================
import HbSports1 from "./assets/HbSports1.png";
import SabaSports from "./assets/SabaSports.png";

export default function SportsItems() {
  const [favorite, setFavorite] = useState([]);

  const toggleFavorite = (id) => {
    if (favorite.includes(id)) {
      setFavorite(favorite.filter((item) => item !== id));
    } else {
      setFavorite([...favorite, id]);
    }
  };

  const sportsGames = [
    {
      id: 1,
      image: HbSports1,
      title: "HB Sports",
    },
    {
      id: 2,
      image: SabaSports,
      title: "SABA Sports",
    },
  ];

  return (
    <div className="bg-[#020617] px-3 py-3">
      <div className="grid grid-cols-2 gap-3">
        {sportsGames.map((game) => (
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
              hover:scale-[1.03]
              duration-300
            "
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-[125px] object-cover"
            />

            <button
              onClick={() => toggleFavorite(game.id)}
              className="
                absolute
                top-2
                right-2
                w-8
                h-8
                rounded-full
                bg-black/60
                flex
                items-center
                justify-center
              "
            >
              <Heart
                size={18}
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