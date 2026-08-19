import React from "react";
import Amigo from "./assets/Amigo.png";
import AmigoGamesFeature from "./AmigoGamesFeature";

export default function AmigoGames() {
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

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div
        className="
          w-full

          flex
          items-center
          justify-between

          gap-2

          rounded-2xl

          px-2
          sm:px-3

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

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3

            min-w-0
          "
        >

          {/* LOGO */}

          <img
            src={Amigo}
            alt="Amigo Games"
            className="
              flex-shrink-0

              w-9
              h-9

              sm:w-12
              sm:h-12

              object-contain
            "
          />

          {/* TITLE */}

          <h2
            className="
              font-bold

              text-cyan-100

              text-base
              sm:text-xl

              truncate
            "
          >
            Amigo
          </h2>

        </div>


        {/* ================= RIGHT ================= */}

        <div
          className="
            flex
            items-center

            gap-1
            sm:gap-2

            flex-shrink-0
          "
        >

          {/* ALL BUTTON */}

          <button
            className="
              px-2.5
              sm:px-4

              h-8
              sm:h-10

              rounded-lg
              sm:rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200

              text-[11px]
              sm:text-sm

              font-bold

              whitespace-nowrap

              hover:bg-cyan-700
              hover:text-white

              transition-all
              duration-300
            "
          >
            All 95
          </button>


          {/* MORE BUTTON */}

          <button
            className="
              px-2.5
              sm:px-4

              h-8
              sm:h-10

              rounded-lg
              sm:rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200

              text-[11px]
              sm:text-sm

              font-bold

              whitespace-nowrap

              hover:bg-cyan-700
              hover:text-white

              transition-all
              duration-300
            "
          >
            More
          </button>

        </div>

      </div>


      {/* ================================================= */}
      {/* FEATURE CARDS */}
      {/* ================================================= */}

      <div className="w-full max-w-full overflow-hidden">
        <AmigoGamesFeature />
      </div>

    </div>
  );
}