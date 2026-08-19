import React from "react";
import FishGamesLogo from "./assets/FishGamesLogo.png";
import FishGamesFeatures from "./FishGamesFeatures";

export default function FishGames() {
  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto
        px-2
        sm:px-3
        mt-3
        overflow-hidden
      "
    >

      {/* ================= HEADER ================= */}

      <div
        className="
          w-full

          flex
          items-center
          justify-between

          gap-2

          rounded-xl
          sm:rounded-2xl

          px-2
          py-2
          sm:px-3

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

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3

            min-w-0
          "
        >

          <img
            src={FishGamesLogo}
            alt="Fish Games"
            className="
              w-10
              h-10

              sm:w-12
              sm:h-12

              object-contain
              shrink-0
            "
          />

          <h2
            className="
              font-bold
              text-cyan-100

              text-sm
              min-[400px]:text-base
              sm:text-xl

              truncate
            "
          >
            Fish Games
          </h2>

        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="
            flex
            items-center
            gap-1.5
            sm:gap-2

            shrink-0
          "
        >

          {/* ALL BUTTON */}

          <button
            className="
              px-2.5
              h-9

              min-[400px]:px-3
              min-[400px]:h-10

              sm:px-4

              rounded-lg
              sm:rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200

              text-xs
              min-[400px]:text-sm
              sm:text-base

              font-bold

              whitespace-nowrap

              hover:bg-cyan-700
              transition
              duration-300
            "
          >
            All 27
          </button>

          {/* MORE BUTTON */}

          <button
            className="
              px-2.5
              h-9

              min-[400px]:px-3
              min-[400px]:h-10

              sm:px-4

              rounded-lg
              sm:rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200

              text-xs
              min-[400px]:text-sm
              sm:text-base

              font-bold

              whitespace-nowrap

              hover:bg-cyan-700
              transition
              duration-300
            "
          >
            More
          </button>

        </div>

      </div>

      {/* ================= FEATURE CARDS ================= */}

      <FishGamesFeatures />

    </div>
  );
}