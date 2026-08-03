import React from "react";

const categories = [
  {
    id: 1,
    icon: "🔥",
    title: "Hots",
  },
  {
    id: 2,
    icon: "💖",
    title: "Favorite",
  },
  {
    id: 3,
    icon: "JILI",
    title: "JILI",
  },
  {
    id: 4,
    icon: "PG",
    title: "PG",
  },
  {
    id: 5,
    icon: "➤",
    title: "2J",
  },
  {
    id: 6,
    icon: "⚽",
    title: "SPORT",
  },
  {
    id: 7,
    icon: "🎰",
    title: "Slot",
  },
  {
    id: 8,
    icon: "🎮",
    title: "Game",
  },
  {
    id: 9,
    icon: "🎲",
    title: "Casino",
  },
];

const GameCategories = () => {
  return (
    <div className="w-full bg-[#020617] py-3">

      <div
        className="
        flex
        gap-4
        overflow-x-auto
        px-3
        whitespace-nowrap
        no-scrollbar
        "
      >
        {categories.map((item) => (
          <div
            key={item.id}
            className="
            flex-shrink-0
            flex
            flex-col
            items-center
            cursor-pointer
            group
            "
          >
            {/* Icon Box */}
            <div
              className="
              w-[60px]
              h-[60px]

              rounded-2xl

              bg-gradient-to-b
              from-[#5a3608]
              via-[#2f1804]
              to-[#140902]

              border
              border-[#dca648]

              shadow-[0_0_15px_rgba(255,180,0,.35)]

              flex
              items-center
              justify-center

              transition-all
              duration-300

              group-hover:scale-105
              group-hover:shadow-[0_0_20px_rgba(255,200,0,.7)]
              "
            >
              <span
                className="
                text-4xl
                font-bold
                text-yellow-300
                "
              >
                {item.icon}
              </span>
            </div>

            <h3
              className="
              mt-3
              text-[#d8b16b]
              font-semibold
              text-[16px]
              "
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GameCategories;