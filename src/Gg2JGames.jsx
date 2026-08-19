import React from "react";
import Gg2jGames from "./assets/gg2jGames.png";
import Gg2JGamesFeature from "./Gg2JGamesFeature";

export default function Gg2JGames() {
  return (
    <div className="w-full bg-[#020617] px-3 mt-3 overflow-hidden">

      {/* ================= 540px CONTAINER ================= */}

      <div className="w-full max-w-[540px] mx-auto">

        {/* ================= HEADER ================= */}

        <div
          className="
            w-full

            flex
            items-center
            justify-between

            rounded-2xl

            px-3
            py-2

            border
            border-cyan-700

            bg-gradient-to-r
            from-[#061b3a]
            via-[#08244a]
            to-[#061b3a]

            shadow-[0_0_18px_rgba(0,180,255,.25)]
          "
        >

          {/* ================= LEFT ================= */}

          <div className="flex items-center gap-2 sm:gap-3 min-w-0">

            <img
              src={Gg2jGames}
              alt="2J Games"
              className="
                w-10
                h-10

                sm:w-12
                sm:h-12

                object-contain
                flex-shrink-0
              "
            />

            <h2
              className="
                font-bold
                text-cyan-100

                text-lg
                sm:text-xl

                truncate
              "
            >
              2J
            </h2>

          </div>

          {/* ================= RIGHT BUTTONS ================= */}

          <div className="flex items-center gap-2 flex-shrink-0">

            {/* ALL BUTTON */}

            <button
              type="button"
              className="
                px-3
                sm:px-4

                h-9
                sm:h-10

                rounded-xl

                border
                border-cyan-600

                bg-[#0a2145]

                text-cyan-200

                text-xs
                sm:text-sm

                font-bold

                hover:bg-cyan-700
                hover:border-cyan-400

                active:scale-95

                transition-all
                duration-300
              "
            >
              All 27
            </button>

            {/* MORE BUTTON */}

            <button
              type="button"
              className="
                px-3
                sm:px-4

                h-9
                sm:h-10

                rounded-xl

                border
                border-cyan-600

                bg-[#0a2145]

                text-cyan-200

                text-xs
                sm:text-sm

                font-bold

                hover:bg-cyan-700
                hover:border-cyan-400

                active:scale-95

                transition-all
                duration-300
              "
            >
              More
            </button>

          </div>

        </div>

        {/* ================= FEATURE CARDS ================= */}

        <Gg2JGamesFeature />

      </div>

    </div>
  );
}