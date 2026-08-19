import React from "react";

const categories = [
  { id: 1, icon: "🔥", title: "Hots" },
  { id: 2, icon: "💖", title: "Favorite" },
  { id: 3, icon: "JILI", title: "JILI" },
  { id: 4, icon: "PG", title: "PG" },
  { id: 5, icon: "➤", title: "2J" },
  { id: 6, icon: "⚽", title: "SPORT" },
  { id: 7, icon: "🎰", title: "Slot" },
  { id: 8, icon: "🎮", title: "Game" },
  { id: 9, icon: "🎲", title: "Casino" },
];

const GameCategories = () => {
  return (
    <div className="w-full bg-[#020817] py-3">

      {/* ================= 540px CONTAINER ================= */}

      <div
        className="
          w-full
          max-w-[540px]
          mx-auto
          px-2
        "
      >

        {/* ================= CATEGORY SCROLL ================= */}

        <div
          className="
            flex
            items-start
            gap-[8px]

            overflow-x-auto
            overflow-y-hidden

            pb-2

            whitespace-nowrap
            scroll-smooth
            no-scrollbar
          "
        >

          {categories.map((item, index) => (

            <div
              key={item.id}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
              className="
                category-animation

                flex
                flex-shrink-0
                flex-col
                items-center

                w-[55px]

                cursor-pointer
                group
              "
            >

              {/* ================= ICON ================= */}

              <div
                className="
                  relative

                  w-[52px]
                  h-[52px]

                  rounded-xl

                  bg-gradient-to-b
                  from-[#0B5FA5]
                  via-[#073765]
                  to-[#031A32]

                  border
                  border-[#168DDF]

                  shadow-[0_0_12px_rgba(0,160,255,.35)]

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-300
                  ease-out

                  group-hover:scale-110
                  group-hover:-translate-y-1

                  group-hover:border-[#55C8FF]

                  group-hover:shadow-[0_0_22px_rgba(0,190,255,.80)]

                  active:scale-95
                "
              >

                {/* ================= BLUE GLOW ================= */}

                <div
                  className="
                    absolute
                    inset-0

                    rounded-xl

                    bg-cyan-400/10

                    opacity-0

                    group-hover:opacity-100

                    transition-opacity
                    duration-300
                  "
                />

                {/* ================= TOP LIGHT ================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0

                    h-[2px]
                    w-[65%]

                    -translate-x-1/2

                    rounded-full

                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300
                    to-transparent

                    opacity-70

                    blur-[1px]
                  "
                />

                {/* ================= ICON ================= */}

                <span
                  className="
                    relative
                    z-10

                    text-[25px]

                    font-bold
                    text-cyan-200

                    drop-shadow-[0_0_5px_rgba(80,210,255,.55)]

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                >
                  {item.icon}
                </span>

              </div>


              {/* ================= TITLE ================= */}

              <h3
                className="
                  mt-2

                  w-full

                  text-center

                  text-[#8FCBEA]

                  font-semibold

                  text-[10px]

                  leading-tight

                  truncate

                  transition-all
                  duration-300

                  group-hover:text-cyan-300

                  group-hover:drop-shadow-[0_0_6px_rgba(0,200,255,.65)]
                "
              >
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </div>


      {/* ================= ANIMATION ================= */}

      <style>{`

        @keyframes categoryFadeIn {

          0% {
            opacity: 0;
            transform: translateY(25px) scale(0.85);
          }

          60% {
            opacity: 0.8;
            transform: translateY(-3px) scale(1.03);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }


        .category-animation {

          opacity: 0;

          animation:
            categoryFadeIn
            600ms
            ease-out
            forwards;

        }


        @media (prefers-reduced-motion: reduce) {

          .category-animation {

            opacity: 1;

            animation: none;

          }

        }


        /* ================= HIDE SCROLLBAR ================= */

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

      `}</style>

    </div>
  );
};

export default GameCategories;