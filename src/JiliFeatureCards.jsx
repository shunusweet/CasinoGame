import React, { useEffect, useRef, useState } from "react";
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

  // ================= IMAGE ANIMATION =================

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

  const smallGames = [

    {
      id: 4,
      image: BoxingKing
    },

    {
      id: 5,
      image: MonkeyPot
    },

    {
      id: 6,
      image: JungleKing
    },

    {
      id: 7,
      image: TrialOfPhonix
    },

  ];

  // ================= SCROLL OBSERVER =================

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

        @keyframes jiliImageFadeUp {

          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .jili-game-image {

          opacity: 0;
          transform: translateY(45px) scale(0.96);

        }

        .jili-game-image.show {

          animation:
            jiliImageFadeUp
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

        }

      `}</style>

      <div className="bg-[#020617] px-3 py-3">

        {/* ================= TOP SECTION ================= */}

        <div className="grid grid-cols-[2fr_1fr] gap-3">

          {/* ================= LEFT BIG CARD ================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-cyan-500
              bg-[#061b3a]
              shadow-[0_0_18px_rgba(0,180,255,.35)]
              hover:scale-[1.02]
              duration-300
            "
          >

            <img
              ref={(element) => {
                imageRefs.current[0] = element;
              }}
              data-index="0"
              src={SuperAce}
              alt=""
              className={`
                jili-game-image

                ${
                  visibleImages.includes(0)
                    ? "show"
                    : ""
                }

                w-full
                h-[190px]
                object-cover
              `}
            />

            <button
              onClick={() => toggleFavorite(1)}
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
                  favorite.includes(1)
                    ? "fill-red-500 text-red-500"
                    : "text-white"
                }
              />

            </button>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex flex-col gap-3">

            {/* ================= FORTUNE COINS ================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-cyan-500
                bg-[#061b3a]
                shadow-[0_0_18px_rgba(0,180,255,.35)]
                hover:scale-105
                duration-300
              "
            >

              <img
                ref={(element) => {
                  imageRefs.current[1] = element;
                }}
                data-index="1"
                src={FortuneCoins}
                alt=""
                className={`
                  jili-game-image

                  ${
                    visibleImages.includes(1)
                      ? "show"
                      : ""
                  }

                  w-full
                  h-[89px]
                  object-cover
                `}
              />

              <button
                onClick={() => toggleFavorite(2)}
                className="
                  absolute
                  top-2
                  right-2
                  w-7
                  h-7
                  rounded-full
                  bg-black/60
                  flex
                  items-center
                  justify-center
                "
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

            {/* ================= CHARGE BUFFALO ================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-cyan-500
                bg-[#061b3a]
                shadow-[0_0_18px_rgba(0,180,255,.35)]
                hover:scale-105
                duration-300
              "
            >

              <img
                ref={(element) => {
                  imageRefs.current[2] = element;
                }}
                data-index="2"
                src={ChargeBuffalo}
                alt=""
                className={`
                  jili-game-image

                  ${
                    visibleImages.includes(2)
                      ? "show"
                      : ""
                  }

                  w-full
                  h-[89px]
                  object-cover
                `}
              />

              <button
                onClick={() => toggleFavorite(3)}
                className="
                  absolute
                  top-2
                  right-2
                  w-7
                  h-7
                  rounded-full
                  bg-black/60
                  flex
                  items-center
                  justify-center
                "
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

          {smallGames.map((game, index) => {

            const imageIndex = index + 3;

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
                  hover:scale-105
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
                    jili-game-image

                    ${
                      visibleImages.includes(imageIndex)
                        ? "show"
                        : ""
                    }

                    w-full
                    h-[115px]
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
                    w-7
                    h-7
                    rounded-full
                    bg-black/60
                    flex
                    items-center
                    justify-center
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

            );

          })}

        </div>

      </div>
    </>
  );
}