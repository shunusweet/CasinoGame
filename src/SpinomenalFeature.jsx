import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import SP_777_vegas_voyage from "./assets/SP_777_vegas_voyage.jpg";
import SP_Majestic_Spirit from "./assets/SP_Majestic_Spirit.jpg";
import SP_777_Flamingo_Fever from "./assets/SP_777_Flamingo_Fever.jpg";
import SP_Book_of_majestic_wild_buffalo from "./assets/SP_Book_of_majestic_wild_buffalo.jpg";

import SP_777_Fruits_Fire_Blaze from "./assets/SP_777_Fruits_Fire_Blaze.jpg";
import SP_Buffalo_Rampage_Hold_Hit from "./assets/SP_Buffalo_Rampage_Hold_Hit.jpg";
import SP_777_Dragons_Rage from "./assets/SP_777_Dragons_Rage.jpg";
import SP_Joker_Wild_Ride_Halloween from "./assets/SP_Joker_Wild_Ride_Halloween.jpg";

import SP_Book_Of_Ocean_Outlaws from "./assets/SP_Book_Of_Ocean_Outlaws.jpg";
import SP_TroutTreasure_Egyptian_Catch from "./assets/SP_TroutTreasure_Egyptian_Catch.jpg";
import SP_777_Havana_Nights from "./assets/SP_777_Havana_Nights.jpg";
import SP_Baba_Yaga_Tales_Haunted_Hollows from "./assets/SP_Baba_Yaga_Tales_Haunted_Hollows.jpg";

// ================= COMPONENT =================

export default function SpinomenalFeature() {

  const [favorite, setFavorite] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);

  const imageRefs = useRef([]);

  // ================= FAVORITE =================

  const toggleFavorite = (id) => {
    setFavorite((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // ================= GAMES =================

  const games = [
    {
      id: 1,
      image: SP_777_vegas_voyage,
      title: "MG Break Away",
    },
    {
      id: 2,
      image: SP_Majestic_Spirit,
      title: "MG Basket ball Star",
    },
    {
      id: 3,
      image: SP_777_Flamingo_Fever,
      title: "Football Star",
    },
    {
      id: 4,
      image: SP_Book_of_majestic_wild_buffalo,
      title: "Ladies Nite",
    },
    {
      id: 5,
      image: SP_777_Fruits_Fire_Blaze,
      title: "SP 777 Fruits Fire Blaze",
    },
    {
      id: 6,
      image: SP_Buffalo_Rampage_Hold_Hit,
      title: "SP Buffalo Rampage Hold & Hit",
    },
    {
      id: 7,
      image: SP_777_Dragons_Rage,
      title: "BG Secret Bar Multidice X",
    },
    {
      id: 8,
      image: SP_Joker_Wild_Ride_Halloween,
      title: "BG Gold Magnate",
    },
    {
      id: 9,
      image: SP_Book_Of_Ocean_Outlaws,
      title: "BG Alien Fruits",
    },
    {
      id: 10,
      image: SP_TroutTreasure_Egyptian_Catch,
      title: "EVO Elven Princesses",
    },
    {
      id: 11,
      image: SP_777_Havana_Nights,
      title: "EVO Unlimited Wishes",
    },
    {
      id: 12,
      image: SP_Baba_Yaga_Tales_Haunted_Hollows,
      title: "BG OOF The Goldmine Planet",
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

              return [...prev, index];
            });

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

        @keyframes spinomenalImageFadeUp {

          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .spinomenal-game-image {
          opacity: 0;
          transform: translateY(45px) scale(0.96);
        }

        .spinomenal-game-image.show {
          animation:
            spinomenalImageFadeUp
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

      `}</style>

      {/* ================= 540px MAIN CONTAINER ================= */}

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
                  spinomenal-game-image
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

        {/* Bottom spacing */}
        <div className="h-2" />

      </div>
    </>
  );
}