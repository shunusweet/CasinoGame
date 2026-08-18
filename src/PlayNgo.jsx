import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= LOGO =================
import GoShowLogo from "./assets/GoShowLogo.png";

// ================= FEATURE IMAGES =================
import RosyOrbit from "./assets/RosyOrbit.png";
import LegacyOfUndeadDragon from "./assets/LegacyOfUndeadDragon.png";
import LawnnDisorder from "./assets/LawnnDisorder.png";

// Correct filename
import DiamondDig from "./assets/DiamindDig.png";

import GoBuffaloWealth from "./assets/GoBuffaloWealth.png";

// Correct filename
import TheGreekBknight from "./assets/TheGreebKnight.png";

import MysteryEgg from "./assets/MysteryEgg.png";
import TheGoShow777Crystal from "./assets/TheGoShow777Crystal.png";

import GoUnderFeatedXerxes from "./assets/GoUnderFeatedXerxes.png";
import GoGarFantToonz from "./assets/GoGarFantToonz.png";
import GoScrollOfSeth from "./assets/GoScrollOfSeth.png";
import GoRascalRiches from "./assets/GoRascalRiches.png";

export default function PlayNgo() {

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

    { id: 1, image: RosyOrbit },
    { id: 2, image: LegacyOfUndeadDragon },
    { id: 3, image: LawnnDisorder },
    { id: 4, image: DiamondDig },

    { id: 5, image: GoBuffaloWealth },
    { id: 6, image: TheGreekBknight },
    { id: 7, image: MysteryEgg },
    { id: 8, image: TheGoShow777Crystal },

    { id: 9, image: GoUnderFeatedXerxes },
    { id: 10, image: GoGarFantToonz },
    { id: 11, image: GoScrollOfSeth },
    { id: 12, image: GoRascalRiches },

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

        @keyframes playNgoImageFadeUp {

          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .playngo-game-image {

          opacity: 0;
          transform: translateY(45px) scale(0.96);

        }

        .playngo-game-image.show {

          animation:
            playNgoImageFadeUp
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

        }

      `}</style>

      <div className="bg-[#020617] px-3 py-3">

        {/* ================= GAME GRID ================= */}

        <div className="grid grid-cols-4 gap-3">

          {games.map((game, index) => (

            <div
              key={game.id}
              className="
                relative
                overflow-hidden
                rounded-xl
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

              {/* ================= GAME IMAGE ================= */}

              <img
                ref={(element) => {
                  imageRefs.current[index] = element;
                }}
                data-index={index}
                src={game.image}
                alt=""
                className={`
                  playngo-game-image

                  ${
                    visibleImages.includes(index)
                      ? "show"
                      : ""
                  }

                  w-full
                  h-[120px]
                  object-cover
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