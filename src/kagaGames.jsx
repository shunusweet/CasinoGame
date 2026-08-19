import React from "react";
import Gg_kagaGames from "./assets/Gg_kagaGames.png";
import Gg_kagaGamesFeatures from "./Gg_kagaGamesFeatures";

export default function KagaGames() {
  return (
    <div className="w-full max-w-[540px] mx-auto px-3 mt-3">

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

        <div className="flex items-center gap-3 min-w-0">

          <img
            src={Gg_kagaGames}
            alt="KAGA"
            className="
              w-12
              h-12
              object-contain
              shrink-0
            "
          />

          <h2
            className="
              font-bold
              text-cyan-100
              text-xl
              truncate
            "
          >
            KAGA
          </h2>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center gap-2 shrink-0">

          <button
            className="
              px-4
              h-10

              rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200
              font-bold
              text-sm

              hover:bg-cyan-700
              transition
              duration-300
            "
          >
            All 140
          </button>

          <button
            className="
              px-4
              h-10

              rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200
              font-bold
              text-sm

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

      <Gg_kagaGamesFeatures />

    </div>
  );
}