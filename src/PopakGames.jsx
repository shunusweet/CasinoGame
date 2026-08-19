import React from "react";
import PopokGameLogo from "./assets/PopokGameLogo.png";
import PopokGameFeatures from "./PopokGameFeatures";

export default function PopokGames() {
  return (
    <div className="w-[540px] mt-3">

      {/* ================= HEADER ================= */}

      <div
        className="
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

        <div className="flex items-center gap-3">

          <img
            src={PopokGameLogo}
            alt="POPOK"
            className="
              w-12
              h-12
              object-contain
            "
          />

          <h2
            className="
              font-bold
              text-cyan-100
              text-xl
            "
          >
            POPOK
          </h2>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center gap-2">

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

              hover:bg-cyan-700
              transition
              duration-300
            "
          >
            All 51
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

      <PopokGameFeatures />

    </div>
  );
}