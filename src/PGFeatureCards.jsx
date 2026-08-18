import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================
import PinataWins from "./assets/PinataWins.png";
import Apollo from "./assets/Apollo.png";
import FortuneRabbit from "./assets/FortuneRabbit.jpg";

import FortuneOx from "./assets/FortuneOx.png";
import FortuneHorse from "./assets/FortuneHorse.png";
import FortuneDragon from "./assets/FortuneDragon.png";
import DoubleFortune from "./assets/DoubleFortune.png";

export default function PGFeatureCards() {

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
      id: 4,
      image: FortuneOx
    },
    {
      id: 5,
      image: FortuneHorse
    },
    {
      id: 6,
      image: FortuneDragon
    },
    {
      id: 7,
      image: DoubleFortune
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

  // ================= RETURN =================

  return (
    <>
      {/* ================= IMAGE ANIMATION ================= */}

      <style>{`

        @keyframes pgImageFadeUp {

          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .pg-game-image {

          opacity: 0;
          transform: translateY(45px) scale(0.96);

        }

        .pg-game-image.show {

          animation:
            pgImageFadeUp
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

        }

      `}</style>

      <div className="bg-[#020617] px-3 py-3">

        {/* ================= TOP SECTION ================= */}

        <div className="grid grid-cols-[2fr_1fr] gap-3">

          {/* ================= BIG LEFT CARD ================= */}

          <div
            className="
              relative
              rounded-2xl
              overflow-hidden
              border
              border-cyan-500
              bg-[#061b3a]
              shadow-[0_0_18px_rgba(0,180,255,.35)]
            "
          >

            <img
              ref={(element) => {
                imageRefs.current[0] = element;
              }}
              data-index="0"
              src={PinataWins}
              alt=""
              className={`
                pg-game-image
                ${
                  visibleImages.includes(0)
                    ? "show"
                    : ""
                }

                w-full
                h-[220px]
                object-cover
              `}
            />

            <button
              onClick={() => toggleFavorite(1)}
              className="
                absolute
                top-2
                right-2
                w-9
                h-9
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
                  favorite.includes(1)
                    ? "fill-red-500 text-red-500"
                    : "text-white"
                }
              />

            </button>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex flex-col gap-3">

            {/* ================= APOLLO ================= */}

            <div
              className="
                relative
                rounded-2xl
                overflow-hidden
                border
                border-cyan-500
                bg-[#061b3a]
                shadow-[0_0_18px_rgba(0,180,255,.35)]
              "
            >

              <img
                ref={(element) => {
                  imageRefs.current[1] = element;
                }}
                data-index="1"
                src={Apollo}
                alt="Apollo"
                className={`
                  pg-game-image
                  ${
                    visibleImages.includes(1)
                      ? "show"
                      : ""
                  }

                  w-full
                  h-[104px]
                  object-cover
                `}
              />

              <button
                onClick={() => toggleFavorite(2)}
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
                    favorite.includes(2)
                      ? "fill-red-500 text-red-500"
                      : "text-white"
                  }
                />

              </button>

            </div>

            {/* ================= FORTUNE RABBIT ================= */}

            <div
              className="
                relative
                rounded-2xl
                overflow-hidden
                border
                border-cyan-500
                bg-[#061b3a]
                shadow-[0_0_18px_rgba(0,180,255,.35)]
              "
            >

              <img
                ref={(element) => {
                  imageRefs.current[2] = element;
                }}
                data-index="2"
                src={FortuneRabbit}
                alt="Fortune Rabbit"
                className={`
                  pg-game-image
                  ${
                    visibleImages.includes(2)
                      ? "show"
                      : ""
                  }

                  w-full
                  h-[104px]
                  object-cover
                `}
              />

              <button
                onClick={() => toggleFavorite(3)}
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
                    favorite.includes(3)
                      ? "fill-red-500 text-red-500"
                      : "text-white"
                  }
                />

              </button>

            </div>

          </div>

        </div>

        {/* ================= GAME GRID ================= */}

        <div className="grid grid-cols-4 gap-3 mt-4">

          {games.map((game, gameIndex) => {

            const imageIndex = gameIndex + 3;

            return (

              <div
                key={game.id}
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-cyan-500
                  bg-[#061b3a]
                  shadow-[0_0_15px_rgba(0,180,255,.30)]
                  cursor-pointer
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >

                <img
                  ref={(element) => {
                    imageRefs.current[imageIndex] = element;
                  }}
                  data-index={imageIndex}
                  src={game.image}
                  alt=""
                  className={`
                    pg-game-image
                    ${
                      visibleImages.includes(imageIndex)
                        ? "show"
                        : ""
                    }

                    w-full
                    h-[120px]
                    object-cover
                  `}
                />

                <button
                  onClick={() =>
                    toggleFavorite(game.id)
                  }
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

            );

          })}

        </div>

      </div>
    </>
  );
}