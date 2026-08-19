import React from "react";
import BetSoftLogo from "./assets/BetSoftLogo.png";
import BetsoftFeature from "./BetsoftFeature";

export default function BetSoft() {
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

          rounded-xl
          sm:rounded-2xl

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

          <img
            src={BetSoftLogo}
            alt="BetSoft"
            className="
              w-10
              h-10

              sm:w-12
              sm:h-12

              shrink-0

              object-contain
            "
          />

          <h2
            className="
              font-bold

              text-cyan-100

              text-base
              sm:text-xl

              truncate
            "
          >
            RICH88
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
              sm:px-4

              h-9
              sm:h-10

              rounded-lg
              sm:rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200

              text-xs
              sm:text-sm

              font-bold

              whitespace-nowrap

              hover:bg-cyan-700
              hover:text-white

              transition-all
              duration-300
            "
          >
            All 55
          </button>


          {/* MORE BUTTON */}

          <button
            className="
              px-2.5
              sm:px-4

              h-9
              sm:h-10

              rounded-lg
              sm:rounded-xl

              border
              border-cyan-600

              bg-[#0a2145]

              text-cyan-200

              text-xs
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


      {/* ================= FEATURE CARDS ================= */}

      <div className="w-full">
        <BetsoftFeature />
      </div>

    </div>
  );
}