import React from "react";
import Gg_bgLogo from "./assets/Gg_bgLogo.png";
import Gg_bgFeature from "./Gg_bgFeature";

export default function Gg_bg() {
  return (
    <div className="w-full bg-[#020617]">

      {/* ================= 540px CONTAINER ================= */}

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

            <img
              src={Gg_bgLogo}
              alt="BGAMING"
              className="
                w-10
                h-10

                sm:w-12
                sm:h-12

                object-contain
                flex-shrink-0
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
              BGAMING
            </h2>

          </div>

          {/* ================= RIGHT ================= */}

          <div
            className="
              flex
              items-center
              gap-1.5
              sm:gap-2

              flex-shrink-0
            "
          >

            {/* ================= ALL ================= */}

            <button
              type="button"
              className="
                px-3
                sm:px-4

                h-8
                sm:h-10

                rounded-xl

                border
                border-cyan-600

                bg-[#0a2145]

                text-cyan-200

                text-xs
                sm:text-sm

                font-bold

                hover:bg-cyan-700
                hover:border-cyan-400

                active:scale-95

                transition-all
                duration-300
              "
            >
              All 79
            </button>

            {/* ================= MORE ================= */}

            <button
              type="button"
              className="
                px-3
                sm:px-4

                h-8
                sm:h-10

                rounded-xl

                border
                border-cyan-600

                bg-[#0a2145]

                text-cyan-200

                text-xs
                sm:text-sm

                font-bold

                hover:bg-cyan-700
                hover:border-cyan-400

                active:scale-95

                transition-all
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

    </div>
  );
}