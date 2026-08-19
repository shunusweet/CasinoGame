import React from "react";
import DbGameLogo from "./assets/DbGameLogo.png";
import DBGameFeatures from "./DBGameFeatures";

export default function DbGames() {
  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto
        px-2
        sm:px-3
        mt-3
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

        <div className="flex items-center gap-2 sm:gap-3 min-w-0">

          <img
            src={DbGameLogo}
            alt="PP Games"
            className="
              w-10
              h-10
              min-[400px]:w-12
              min-[400px]:h-12
              sm:w-14
              sm:h-14
              object-contain
              shrink-0
            "
          />

          <h2
            className="
              font-bold
              text-cyan-100
              text-base
              min-[400px]:text-lg
              sm:text-xl
              truncate
            "
          >
            PP
          </h2>

        </div>


        {/* ================= RIGHT ================= */}

        <div
          className="
            flex
            items-center
            gap-1.5
            min-[400px]:gap-2
            sm:gap-3
            shrink-0
          "
        >

          {/* All Button */}

          <button
            className="
              px-2.5
              min-[400px]:px-3
              sm:px-5

              h-9
              min-[400px]:h-10
              sm:h-12

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

              hover:bg-cyan-700
              hover:scale-105

              transition-all
              duration-300

              whitespace-nowrap
            "
          >
            All 30
          </button>


          {/* More Button */}

          <button
            className="
              px-2.5
              min-[400px]:px-3
              sm:px-5

              h-9
              min-[400px]:h-10
              sm:h-12

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

              hover:bg-cyan-700
              hover:scale-105

              transition-all
              duration-300

              whitespace-nowrap
            "
          >
            More
          </button>

        </div>

      </div>


      {/* ================= GAME FEATURES ================= */}

      <DBGameFeatures />

    </div>
  );
}