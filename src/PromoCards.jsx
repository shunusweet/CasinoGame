import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

// ================= IMAGES =================
import RewardBonus from "./assets/RewardBonus.png";
import LuckyRoulete from "./assets/LuckyRoulete.png";
import VipMonthlySallery from "./assets/VipMonthlySallery.png";

// ================= COMPONENT =================
export default function PromoCards({ setCurrentPage }) {
  // ================= FAVORITE STATE =================
  const [favorite, setFavorite] = useState([]);

  // ================= IMAGE VISIBILITY =================
  const [visibleImages, setVisibleImages] = useState([]);

  const imageRefs = useRef([]);

  // ================= FAVORITE FUNCTION =================
  const toggleFavorite = (id) => {
    setFavorite((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }

      return [...prev, id];
    });
  };

  // ================= IMAGE SCROLL ANIMATION =================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index);

          setVisibleImages((prev) => {
            if (prev.includes(index)) {
              return prev;
            }

            return [...prev, index];
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
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
      {/* ================================================= */}
      {/* IMAGE ANIMATION */}
      {/* ================================================= */}

      <style>{`
        @keyframes ppGameImageFadeUp {
          0% {
            opacity: 0;
            transform: translateY(25px) scale(0.97);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .pp-game-image {
          opacity: 0;
          transform: translateY(25px) scale(0.97);
        }

        .pp-game-image.show {
          animation:
            ppGameImageFadeUp
            0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }
      `}</style>

      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div
        className="
          w-full
          max-w-[540px]
          mx-auto
          bg-[#020617]
          px-3
          overflow-hidden
        "
      >
        {/* ================================================= */}
        {/* SPACE BETWEEN BANNERS */}
        {/* ================================================= */}

        <div className="h-2" />

        {/* ================================================= */}
        {/* BANNER GRID */}
        {/* ================================================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-2
            items-stretch
          "
        >
          {/* ================================================= */}
          {/* VIP MONTHLY SALARY */}
          {/* ================================================= */}

          <div
            onClick={() => {
              setCurrentPage("vip-current-level");
            }}
            className="
              relative
              h-[82px]
              sm:h-[90px]

              overflow-hidden
              rounded-xl

              border
              border-blue-500

              bg-[#061b3a]

              shadow-[0_0_15px_rgba(0,100,255,.35)]

              cursor-pointer

              hover:scale-[1.02]

              transition-all
              duration-300
            "
          >
            <img
              ref={(element) => {
                imageRefs.current[1] = element;
              }}
              data-index="1"
              src={VipMonthlySallery}
              alt="VIP Monthly Salary"
              className={`
                pp-game-image
                ${visibleImages.includes(1) ? "show" : ""}

                absolute
                inset-0

                w-full
                h-full

                object-cover
                object-center

                rounded-xl
              `}
            />

            {/* HEART */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(1);
              }}
              className="
                absolute
                top-1
                right-1
                z-10

                w-6
                h-6

                rounded-full
                bg-black/60

                flex
                items-center
                justify-center

                hover:bg-black/80
                hover:scale-110

                transition-all
                duration-200
              "
            >
              <Heart
                size={14}
                className={
                  favorite.includes(1)
                    ? "fill-red-500 text-red-500"
                    : "text-white"
                }
              />
            </button>
          </div>

          {/* ================================================= */}
          {/* REWARD BONUS / INVITE REWARD */}
          {/* ================================================= */}

          <div
            className="
              relative
              row-span-2

              h-[174px]
              sm:h-[188px]

              overflow-hidden
              rounded-xl

              border
              border-blue-500

              bg-[#061b3a]

              shadow-[0_0_18px_rgba(0,100,255,.40)]

              cursor-pointer

              hover:scale-[1.02]

              transition-all
              duration-300
            "
          >
            <img
              ref={(element) => {
                imageRefs.current[2] = element;
              }}
              data-index="2"
              src={RewardBonus}
              alt="Reward Bonus"
              className={`
                pp-game-image
                ${visibleImages.includes(2) ? "show" : ""}

                absolute
                inset-0

                w-full
                h-full

                object-fill

                rounded-xl
              `}
            />

            {/* HEART */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(2);
              }}
              className="
                absolute
                top-1
                right-1
                z-10

                w-7
                h-7

                rounded-full
                bg-black/60

                flex
                items-center
                justify-center

                hover:bg-black/80
                hover:scale-110

                transition-all
                duration-200
              "
            >
              <Heart
                size={15}
                className={
                  favorite.includes(2)
                    ? "fill-red-500 text-red-500"
                    : "text-white"
                }
              />
            </button>
          </div>

          {/* ================================================= */}
          {/* LUCKY ROULETTE */}
          {/* ================================================= */}

          <div
            className="
              relative
              h-[82px]
              sm:h-[90px]

              overflow-hidden
              rounded-xl

              border
              border-blue-500

              bg-[#061b3a]

              shadow-[0_0_15px_rgba(0,100,255,.35)]

              cursor-pointer

              hover:scale-[1.02]

              transition-all
              duration-300
            "
          >
            <img
              ref={(element) => {
                imageRefs.current[3] = element;
              }}
              data-index="3"
              src={LuckyRoulete}
              alt="Lucky Roulette"
              className={`
                pp-game-image
                ${visibleImages.includes(3) ? "show" : ""}

                absolute
                inset-0

                w-full
                h-full

                object-cover
                object-center

                rounded-xl
              `}
            />

            {/* HEART */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(3);
              }}
              className="
                absolute
                top-1
                right-1
                z-10

                w-6
                h-6

                rounded-full
                bg-black/60

                flex
                items-center
                justify-center

                hover:bg-black/80
                hover:scale-110

                transition-all
                duration-200
              "
            >
              <Heart
                size={14}
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
    </>
  );
}