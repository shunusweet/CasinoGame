import React from "react";
import Gg_bgLogo from "./assets/Gg_bgLogo.png";
import Gg_bgFeature from "./Gg_bgFeature";

export default function Gg_bg() {
  return (
    <div className="px-3 mt-3">

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
            src={Gg_bgLogo}
            alt="Fish Games"
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
            BGAMING
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
            All 79
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

      <Gg_bgFeature />

    </div>
  );
}


