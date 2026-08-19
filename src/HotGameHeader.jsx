import React from "react";
import { Flame } from "lucide-react";

const HotGameHeader = () => {
  return (
    <div className="w-full max-w-[540px] mx-auto px-3 mt-3">

      {/* ================= HEADER ================= */}

      <div
        className="
          h-[72px]

          rounded-xl

          border
          border-cyan-600

          bg-gradient-to-r
          from-[#061b3a]
          via-[#08244a]
          to-[#061b3a]

          flex
          items-center
          justify-between

          px-4

          shadow-[0_0_18px_rgba(0,180,255,.30)]

          overflow-hidden
        "
      >

        {/* ================= LEFT ================= */}

        <div className="flex items-center gap-3 min-w-0">

          {/* FLAME */}

          <div
            className="
              w-12
              h-12

              rounded-xl

              flex
              items-center
              justify-center

              bg-[#0a2145]

              border
              border-cyan-700

              shadow-[0_0_12px_rgba(0,180,255,.25)]
            "
          >

            <Flame
              size={38}
              className="
                text-orange-500
                fill-orange-500
              "
            />

          </div>


          {/* TITLE */}

          <h2
            className="
              text-cyan-100
              text-3xl
              font-serif
              font-semibold
              whitespace-nowrap
            "
          >
            Hots
          </h2>

        </div>


        {/* ================= RIGHT BUTTONS ================= */}

        <div className="flex items-center gap-2 shrink-0">

          {/* ALL */}

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
              hover:text-white
              hover:scale-105

              transition-all
              duration-300
            "
          >
            All 35
          </button>


          {/* MORE */}

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
              hover:text-white
              hover:scale-105

              transition-all
              duration-300
            "
          >
            More
          </button>

        </div>

      </div>

    </div>
  );
};

export default HotGameHeader;