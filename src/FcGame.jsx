import React from "react";
import FcGameLogo from "./assets/FcGameLogo.png";
import FcGameFeature from "./FcGameFeature";

export default function FcGame() {
  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto
        px-2
        min-[400px]:px-3
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

          rounded-xl
          min-[400px]:rounded-2xl

          px-2
          min-[400px]:px-3

          py-2

          border
          border-cyan-700

          bg-gradient-to-r
          from-[#061b3a]
          via-[#08244a]
          to-[#061b3a]

          shadow-[0_0_18px_rgba(0,180,255,.25)]

          overflow-hidden
        "
      >

        {/* ================= LEFT ================= */}

        <div className="flex items-center gap-2 min-[400px]:gap-3 min-w-0">

          <img
            src={FcGameLogo}
            alt="FC Game Logo"
            className="
              w-10
              h-10

              min-[400px]:w-12
              min-[400px]:h-12

              object-contain
              shrink-0
            "
          />

          <h2
            className="
              font-bold
              text-cyan-100

              text-base
              min-[400px]:text-xl

              truncate
            "
          >
            FC
          </h2>

        </div>


        {/* ================= RIGHT ================= */}

        <div
          className="
            flex
            items-center
            gap-1.5
            min-[400px]:gap-2

            shrink-0
          "
        >

          {/* ALL BUTTON */}

          <button
            className="
              px-2.5
              min-[400px]:px-4

              h-9
              min-[400px]:h-10

              rounded-lg
              min-[400px]:rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200

              text-xs
              min-[400px]:text-sm

              font-bold

              hover:bg-cyan-700

              transition
              duration-300

              whitespace-nowrap
            "
          >
            All 46
          </button>


          {/* MORE BUTTON */}

          <button
            className="
              px-2.5
              min-[400px]:px-4

              h-9
              min-[400px]:h-10

              rounded-lg
              min-[400px]:rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200

              text-xs
              min-[400px]:text-sm

              font-bold

              hover:bg-cyan-700

              transition
              duration-300

              whitespace-nowrap
            "
          >
            More
          </button>

        </div>

      </div>


      {/* ================= FEATURE CARDS ================= */}

      <FcGameFeature />

    </div>
  );
}