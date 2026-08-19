import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import ZeusTyphon from "./assets/ZeusTyphon.png";
import WolfGold from "./assets/WolfGold.png";
import WitchHeart from "./assets/WitchHeart.png";
import WisdomOfAthena from "./assets/WisdomOfAthena.png";

import WildWestGold from "./assets/WildWestGold.png";
import WheelOfHappiness from "./assets/WheelOfHappiness.png";
import WealthyFrog from "./assets/WealthyFrog.png";
import WavesOfPoseidon from "./assets/WavesOfPoseidon.png";

export default function PPGamesFeatures() {

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
      image: ZeusTyphon,
      title: "Zeus Typhon",
    },

    {
      id: 2,
      image: WolfGold,
      title: "Wolf Gold",
    },

    {
      id: 3,
      image: WitchHeart,
      title: "Witch Heart",
    },

    {
      id: 4,
      image: WisdomOfAthena,
      title: "Wisdom Of Athena",
    },

    {
      id: 5,
      image: WildWestGold,
      title: "Wild West Gold",
    },

    {
      id: 6,
      image: WheelOfHappiness,
      title: "Wheel Of Happiness",
    },

    {
      id: 7,
      image: WealthyFrog,
      title: "Wealthy Frog",
    },

    {
      id: 8,
      image: WavesOfPoseidon,
      title: "Waves Of Poseidon",
    },

  ];

  // ================= IMAGE SCROLL ANIMATION =================

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

        @keyframes ppGameImageFadeUp {

          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .pp-game-image {

          opacity: 0;
          transform: translateY(45px) scale(0.96);

        }

        .pp-game-image.show {

          animation:
            ppGameImageFadeUp
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

        }

      `}</style>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="w-[540px] bg-[#020617] px-3 py-3">

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
                hover:scale-105
                transition-all
                duration-300
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
                  pp-game-image

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

              {/* ================= HEART ================= */}

              <button
                onClick={() => toggleFavorite(game.id)}
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

    </>
  );
}