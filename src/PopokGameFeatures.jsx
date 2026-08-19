import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================

import BonBonGame from "./assets/BonBonGame.jpg";
import RichyPanda from "./assets/RichyPanda.jpg";
import HueaChaga from "./assets/HueaChaga.jpg";
import LionLegacy from "./assets/LionLegacy.png";

import HappyValentineDay from "./assets/HappyValentineDay.jpg";
import YoDragon from "./assets/YoDragon.jpg";
import ParadiseBeach from "./assets/ParadiseBeach.png";
import RicoTiger from "./assets/RicoTiger.jpg";

import FieryFruitsSixFold from "./assets/FieryFruitsSixFold.png";
import AlpacaPays from "./assets/AlpacaPays.png";
import RiceDj from "./assets/RiceDj.jpg";
import BookOfSherLock from "./assets/BookOfSherLock.png";

// ================= COMPONENT =================

export default function PopokGameFeatures() {

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
      image: BonBonGame,
      title: "Bon Bon Game",
    },

    {
      id: 2,
      image: RichyPanda,
      title: "Richy Panda",
    },

    {
      id: 3,
      image: HueaChaga,
      title: "Kingdom Z",
    },

    {
      id: 4,
      image: LionLegacy,
      title: "Ka Luck88",
    },

    {
      id: 5,
      image: HappyValentineDay,
      title: "Happy Valentine Day",
    },

    {
      id: 6,
      image: YoDragon,
      title: "Yo Dragon",
    },

    {
      id: 7,
      image: ParadiseBeach,
      title: "Paradise Beach",
    },

    {
      id: 8,
      image: RicoTiger,
      title: "Rico Tiger",
    },

    {
      id: 9,
      image: FieryFruitsSixFold,
      title: "Vault Cracker",
    },

    {
      id: 10,
      image: AlpacaPays,
      title: "Ka Crystal Fruits",
    },

    {
      id: 11,
      image: RiceDj,
      title: "Ka Island Paradise",
    },

    {
      id: 12,
      image: BookOfSherLock,
      title: "Sea Boat",
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

        @keyframes popokImageFadeUp {

          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        .popok-game-image {

          opacity: 0;
          transform: translateY(45px) scale(0.96);

        }

        .popok-game-image.show {

          animation:
            popokImageFadeUp
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
                  popok-game-image

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