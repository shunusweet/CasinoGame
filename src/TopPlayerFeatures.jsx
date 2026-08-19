import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import GoldenCity from "./assets/GoldenCity.png";
import FortuneDragons from "./assets/FortuneDragons.png";
import BBQTycoon from "./assets/BBQTycoon.png";
import LuckyPun from "./assets/LuckyPun.png";

import DragonOfFortune from "./assets/DragonOfFortune.png";
import LuckyPiggy1 from "./assets/LuckyPiggy1.png";
import GoldenOfCity from "./assets/GoldenOfCity.png";
import PileOfGold from "./assets/PileOfGold.png";

export default function TopPlayerFeatures() {

  const [favorite, setFavorite] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);

  const imageRefs = useRef([]);

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
      image: GoldenCity,
      title: "Zeus Typhon",
    },

    {
      id: 2,
      image: FortuneDragons,
      title: "Wolf Gold",
    },

    {
      id: 3,
      image: BBQTycoon,
      title: "BBQ Tycoon",
    },

    {
      id: 4,
      image: LuckyPun,
      title: "Wisdom Of Athena",
    },

    {
      id: 5,
      image: DragonOfFortune,
      title: "Dragon Of Fortune",
    },

    {
      id: 6,
      image: LuckyPiggy1,
      title: "Wheel Of Happiness",
    },

    {
      id: 7,
      image: GoldenOfCity,
      title: "Golden Of City",
    },

    {
      id: 8,
      image: PileOfGold,
      title: "Pile Of Gold",
    },

  ];

  // ================= IMAGE SCROLL OBSERVER =================

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

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

          }

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

  return (

    <>

      {/* ================= IMAGE ANIMATION ================= */}

      <style>{`

        @keyframes topPlayerImageFadeUp {

          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .top-player-game-image {

          opacity: 0;
          transform: translateY(45px) scale(0.96);

        }

        .top-player-game-image.show {

          animation:
            topPlayerImageFadeUp
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

        }

      `}</style>

      {/* ================= MAIN 540PX CONTAINER ================= */}

      <div
        className="
          w-[540px]
          max-w-full
          bg-[#020617]
          px-3
          py-3
        "
      >

        {/* ================= CARD GRID ================= */}

        <div className="grid grid-cols-4 gap-3">

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

                transition-all
                duration-300

                hover:scale-105
              "
            >

              {/* ================= GAME IMAGE ================= */}

              <img
                ref={(element) => {
                  imageRefs.current[index] = element;
                }}
                data-index={index}
                src={game.image}
                alt={game.title}
                className={`

                  top-player-game-image

                  ${
                    visibleImages.includes(index)
                      ? "show"
                      : ""
                  }

                  block
                  w-full
                  h-[115px]
                  object-cover
                  rounded-xl

                `}
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
                  top-1
                  right-1

                  w-7
                  h-7

                  rounded-full

                  bg-black/60

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-200

                  hover:scale-110
                  hover:bg-black/80
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

    </>

  );

}