import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import BuffaloBlitz from "./assets/BuffaloBlitz.jpg";
import PT_Age_of_the_Gods_Norse_Book_of_Dwarves from "./assets/PT_Age_of_the_Gods_Norse_Book_of_Dwarves.jpg";
import PT_Absolutely_Mammoth from "./assets/PT_Absolutely_Mammoth.jpg";
import PT_Age_of_Egypt from "./assets/PT_Age_of_Egypt.jpg";

import PT_Alohawaii_Cash_Collect from "./assets/PT_Alohawaii_Cash_Collect.jpg";
import PT_Anaconda_Uncoiled from "./assets/PT_Anaconda_Uncoiled.jpg";
import PT_Mega_Fire_Blaze_3_Wizards from "./assets/PT_Mega_Fire_Blaze_3_Wizards.jpg";
import PT_Mega_Fire_Blaze_Big_Circus from "./assets/PT_Mega_Fire_Blaze_Big_Circus.jpg";

import PT_Anaconda_Wild_2 from "./assets/PT_Anaconda_Wild_2.jpg";
import PT_Mega_Fire_Blaze_Emperor_of_Rome from "./assets/PT_Mega_Fire_Blaze_Emperor_of_Rome.jpg";
import PT_Mega_Fire_Blaze_Khonsu_God_of_Moon from "./assets/PT_Mega_Fire_Blaze_Khonsu_God_of_Moon.jpg";
import PT_Anaconda_Wild_Scratch from "./assets/PT_Anaconda_Wild_Scratch.jpg";

// ================= COMPONENT =================

export default function PlayTechFeature() {

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
      image: BuffaloBlitz,
      title: "MoneyS leigh",
    },

    {
      id: 2,
      image: PT_Age_of_the_Gods_Norse_Book_of_Dwarves,
      title: "PT Age of the Gods Norse Book of Dwarves",
    },

    {
      id: 3,
      image: PT_Absolutely_Mammoth,
      title: "PT Absolutely Mammoth",
    },

    {
      id: 4,
      image: PT_Age_of_Egypt,
      title: "PT Age of Egypt",
    },

    {
      id: 5,
      image: PT_Alohawaii_Cash_Collect,
      title: "Bone Raiders",
    },

    {
      id: 6,
      image: PT_Anaconda_Uncoiled,
      title: "Space Attack",
    },

    {
      id: 7,
      image: PT_Mega_Fire_Blaze_3_Wizards,
      title: "Atlant is Crush",
    },

    {
      id: 8,
      image: PT_Mega_Fire_Blaze_Big_Circus,
      title: "PT Mega Fire Blaze Big Circus",
    },

    {
      id: 9,
      image: PT_Anaconda_Wild_2,
      title: "Monkeys Go Wild",
    },

    {
      id: 10,
      image: PT_Mega_Fire_Blaze_Emperor_of_Rome,
      title: "Fat Box",
    },

    {
      id: 11,
      image: PT_Mega_Fire_Blaze_Khonsu_God_of_Moon,
      title: "PT Mega Fire Blaze Khonsu God of Moon",
    },

    {
      id: 12,
      image: PT_Anaconda_Wild_Scratch,
      title: "Bumble Tumble",
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

        @keyframes playTechImageFadeUp {

          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .playtech-game-image {

          opacity: 0;
          transform: translateY(45px) scale(0.96);

        }

        .playtech-game-image.show {

          animation:
            playTechImageFadeUp
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
                  playtech-game-image

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

        {/* ================= BOTTOM SPACE ================= */}

        <div className="mt-4"></div>

      </div>
    </>
  );
}