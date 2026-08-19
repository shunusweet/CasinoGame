import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import SevenSevenSeven from "./assets/SevenSevenSeven.png";
import LuckyAce from "./assets/TripleLucky.png";
import BuffaloKingMegaWays from "./assets/BuffaloKingMegaWays.png";
import CrazyRichMan from "./assets/CrazyRichMan.png";

import DoubleSlot from "./assets/DoubleSlot.png";
import MysteryGem from "./assets/MysteryGem.png";
import LuckyStarTreasure from "./assets/CandyIsland.png";
import CandyIsland from "./assets/DiscoFarm.png";

// ================= COMPONENT =================

export default function RichGamesFeature() {

  // ================= FAVORITE =================

  const [favorite, setFavorite] = useState([]);

  // ================= IMAGE VISIBILITY =================

  const [visibleImages, setVisibleImages] = useState([]);

  const imageRefs = useRef([]);

  // ================= FAVORITE FUNCTION =================

  const toggleFavorite = (id) => {

    setFavorite((prev) => {

      if (prev.includes(id)) {

        return prev.filter(
          (item) => item !== id
        );

      }

      return [
        ...prev,
        id
      ];

    });

  };

  // ================= GAMES =================

  const games = [

    {
      id: 1,
      image: SevenSevenSeven,
      title: "Super Ace De",
    },

    {
      id: 2,
      image: LuckyAce,
      title: "Lucky Ace",
    },

    {
      id: 3,
      image: BuffaloKingMegaWays,
      title: "Buffalo King Mega Ways",
    },

    {
      id: 4,
      image: CrazyRichMan,
      title: "Mahjong Wins 2",
    },

    {
      id: 5,
      image: DoubleSlot,
      title: "Dynasaur Tycoon",
    },

    {
      id: 6,
      image: MysteryGem,
      title: "Fishing All Star",
    },

    {
      id: 7,
      image: LuckyStarTreasure,
      title: "Ocean King Jackpot",
    },

    {
      id: 8,
      image: CandyIsland,
      title: "Disco Farm",
    },

  ];

  // ================= IMAGE SCROLL ANIMATION =================

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          const index = Number(
            entry.target.dataset.index
          );

          setVisibleImages((prev) => {

            if (prev.includes(index)) {
              return prev;
            }

            return [
              ...prev,
              index
            ];

          });

          // Animation sirf ek baar chalegi
          observer.unobserve(entry.target);

        });

      },

      {
        threshold: 0.2,
      }

    );

    imageRefs.current.forEach((image) => {

      if (image) {
        observer.observe(image);
      }

    });

    return () => {
      observer.disconnect();
    };

  }, []);

  // ================= RETURN =================

  return (
    <>

      {/* ================= IMAGE ANIMATION ================= */}

      <style>{`

        @keyframes richGameImageFadeUp {

          0% {
            opacity: 0;
            transform:
              translateY(45px)
              scale(0.96);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }

        }

        .rich-game-image {

          opacity: 0;

          transform:
            translateY(45px)
            scale(0.96);

        }

        .rich-game-image.show {

          animation:
            richGameImageFadeUp
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

        }

      `}</style>

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          w-[540px]
          bg-[#020617]
          px-3
          py-3
        "
      >

        {/* ================= CARD GRID ================= */}

        <div
          className="
            grid
            grid-cols-4
            gap-3
          "
        >

          {games.map((game, index) => (

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
                ref={(element) => {

                  imageRefs.current[index] =
                    element;

                }}
                data-index={index}
                src={game.image}
                alt={game.title}
                className={`
                  rich-game-image

                  ${
                    visibleImages.includes(index)
                      ? "show"
                      : ""
                  }

                  w-full
                  h-[115px]
                  object-cover
                  rounded-xl
                `}
              />

              {/* ================= HEART BUTTON ================= */}

              <button
                type="button"
                onClick={(e) => {

                  e.stopPropagation();

                  toggleFavorite(game.id);

                }}
                aria-label={
                  favorite.includes(game.id)
                    ? `Remove ${game.title} from favorites`
                    : `Add ${game.title} to favorites`
                }
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

        {/* ================= BOTTOM SPACING ================= */}

        <div className="mt-5"></div>

      </div>

    </>
  );
}