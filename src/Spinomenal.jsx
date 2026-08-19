import React from "react";
import Gg_spinomal from "./assets/Gg_spinomal.png";
import SpinomenalFeature from "./SpinomenalFeature";

export default function Spinomenal() {
  return (
    <div className="w-full flex justify-center">

      {/* ================= 540PX MAIN CONTAINER ================= */}
      <div className="w-[540px] max-w-full px-3 mt-3">

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
              src={Gg_spinomal}
              alt="Spinomenal"
              className="
                w-12
                h-12
                object-contain
                flex-shrink-0
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
              SPINOMENAL
            </h2>

          </div>


          {/* ================= RIGHT ================= */}

          <div className="flex items-center gap-2 flex-shrink-0">

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

        <SpinomenalFeature />

      </div>

    </div>
  );
}