import React, { useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import AnubisWrath from "./assets/AnubisWrath.png";
import Aviator from "./assets/Avator1.png";
import Aviator2 from "./assets/AvatorImage.jpg";
import AztexGame from "./assets/AztexGame.png";
import FortuneGems from "./assets/FortuneGems2.jpg";
import Jili777 from "./assets/Jili777.jpg";
import Labubu from "./assets/LabubuLuckyBox.jpg";
import LuckyNeko from "./assets/LuckyNeko.png";
import LuckyPiggy from "./assets/LuckyPiggy.png";
import MoneyComing from "./assets/MonerComing.jpg";
import ShowDown from "./assets/ShowDown.png";

// ================= GAMES =================

const games = [
  {
    id: 1,
    provider: "SPRIBE",
    image: Aviator,
    title: "Aviator",
  },
  {
    id: 2,
    provider: "PG",
    image: FortuneGems,
    title: "Fortune Gems",
  },
  {
    id: 3,
    provider: "SPRIBE",
    image: Aviator2,
    title: "Aviator 2",
  },
  {
    id: 4,
    image: MoneyComing,
    title: "Money Coming",
  },
  {
    id: 5,
    image: ShowDown,
    title: "Show Down",
  },
  {
    id: 6,
    image: LuckyPiggy,
    title: "Lucky Piggy",
  },
  {
    id: 7,
    image: Labubu,
    title: "Labubu Lucky Box",
  },
  {
    id: 8,
    image: AnubisWrath,
    title: "Anubis Wrath",
  },
  {
    id: 9,
    image: LuckyNeko,
    title: "Lucky Neko",
  },
  {
    id: 10,
    image: AnubisWrath,
    title: "Anubis Wrath",
  },
  {
    id: 11,
    image: Jili777,
    title: "JILI 777",
  },
  {
    id: 12,
    provider: "PG",
    image: AztexGame,
    title: "Aztec Game",
  },
];

// ================= COMPONENT =================

export default function GameGridCard() {
  const [favorite, setFavorite] = useState([]);

  // ================= FAVORITE =================

  const toggleFavorite = (id) => {
    if (favorite.includes(id)) {
      setFavorite(favorite.filter((item) => item !== id));
    } else {
      setFavorite([...favorite, id]);
    }
  };

  return (
    <div className="w-full bg-[#020617] py-3">

      {/* ================= 540px CONTAINER ================= */}

      <div
        className="
          w-full
          max-w-[540px]
          mx-auto
          px-2
        "
      >

        {/* ================= ANIMATION CSS ================= */}

        <style>{`

          @keyframes gameCardFadeIn {

            0% {
              opacity: 0;
              transform: translateY(35px) scale(0.92);
            }

            60% {
              opacity: 0.85;
              transform: translateY(-4px) scale(1.01);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }

          }

          .game-card-animation {

            opacity: 0;

            animation-name: gameCardFadeIn;
            animation-duration: 650ms;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;

          }

          @media (prefers-reduced-motion: reduce) {

            .game-card-animation {
              animation: none;
              opacity: 1;
            }

          }

        `}</style>

        {/* ================= CARD GRID ================= */}

        <div
          className="
            grid
            grid-cols-4
            gap-2
            sm:gap-3
          "
        >

          {games.map((game, index) => (

            <div
              key={game.id}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
              className="
                game-card-animation

                relative
                w-full

                rounded-xl
                overflow-hidden

                border
                border-blue-500

                bg-[#111]

                shadow-[0_0_12px_rgba(0,100,255,.35)]

                cursor-pointer

                transition-all
                duration-300
                ease-out

                hover:scale-[1.04]
                hover:border-blue-300
                hover:shadow-[0_0_20px_rgba(0,120,255,.65)]

                active:scale-95
              "
            >

              {/* ================= IMAGE ================= */}

              <img
                src={game.image}
                alt={game.title}
                className="
                  block
                  w-full
                  aspect-[1/1.25]
                  object-cover
                "
              />

              {/* ================= HEART ================= */}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(game.id);
                }}
                className="
                  absolute
                  top-1.5
                  right-1.5

                  w-7
                  h-7

                  rounded-full

                  bg-black/60

                  backdrop-blur-sm

                  flex
                  items-center
                  justify-center

                  hover:bg-black/85

                  transition-all
                  duration-200

                  active:scale-90
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

              {/* ================= BOTTOM GRADIENT ================= */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0

                  h-16

                  bg-gradient-to-t
                  from-black/95
                  via-black/55
                  to-transparent

                  pointer-events-none
                "
              />

              {/* ================= GAME TITLE ================= */}

              <div
                className="
                  absolute
                  bottom-1.5
                  left-0
                  right-0

                  px-1.5

                  text-center

                  pointer-events-none
                "
              >

                <h2
                  className="
                    text-white

                    text-[10px]
                    min-[400px]:text-[11px]
                    sm:text-[12px]

                    font-bold
                    leading-tight

                    truncate

                    drop-shadow-[0_1px_3px_rgba(0,0,0,1)]
                  "
                >
                  {game.title}
                </h2>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}