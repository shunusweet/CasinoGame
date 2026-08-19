import React from "react";
import PgLogo from "./assets/PgLogo.png";
import PGFeatureCards from "./PGFeatureCards";

export default function PGHeader() {
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
            src={PgLogo}
            alt="PG"
            className="
              w-14
              h-14
              object-contain
            "
          />

          <h2
            className="
              text-3xl
              font-bold
              text-cyan-200
            "
          >
            PG
          </h2>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center gap-3">

          <button
            className="
              px-5
              h-12
              rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200
              text-2xl
              font-bold

              hover:bg-cyan-700
              transition
              duration-300
            "
          >
            All 158
          </button>

          <button
            className="
              px-5
              h-12
              rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200
              text-2xl
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

      <PGFeatureCards />

    </div>
  );
}