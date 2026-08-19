import React from "react";
import JDBLOGO from "./assets/JDBLOGO.png";
import JDBFeatureCards from "./JDBFeatureCards";

export default function JDBHeader() {
  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto
        px-3
        mt-3
      "
    >

      {/* ================= HEADER ================= */}

      <div
        className="
          flex
          items-center
          justify-between

          w-full

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
            src={JDBLOGO}
            alt="JDB"
            className="
              w-14
              h-14
              object-contain
              shrink-0
            "
          />

          <h2
            className="
              font-bold
              text-cyan-100
              text-xl
            "
          >
            JDB
          </h2>

        </div>


        {/* ================= RIGHT ================= */}

        <div className="flex items-center gap-2 shrink-0">

          {/* ALL BUTTON */}

          <button
            className="
              px-4
              h-11

              rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200
              text-sm
              font-bold

              hover:bg-cyan-700
              hover:text-white

              transition
              duration-300
            "
          >
            All 64
          </button>


          {/* MORE BUTTON */}

          <button
            className="
              px-4
              h-11

              rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200
              text-sm
              font-bold

              hover:bg-cyan-700
              hover:text-white

              transition
              duration-300
            "
          >
            More
          </button>

        </div>

      </div>


      {/* ================= JDB FEATURE CARDS ================= */}

      <JDBFeatureCards />

    </div>
  );
}