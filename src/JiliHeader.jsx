import React from "react";
import Jili777 from "./assets/Jili777.jpg";

export default function JiliHeader() {
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
          w-full

          flex
          items-center
          justify-between

          px-3
          py-2

          rounded-xl

          bg-gradient-to-r
          from-[#06142d]
          via-[#0b2344]
          to-[#06142d]

          border
          border-cyan-700

          shadow-[0_0_15px_rgba(0,180,255,.25)]
        "
      >

        {/* ================= LEFT SIDE ================= */}

        <div className="flex items-center gap-2 min-w-0">

          <img
            src={Jili777}
            alt="JILI"
            className="
              w-12
              h-12

              rounded-lg

              object-cover

              border
              border-cyan-400

              shrink-0
            "
          />

          <h2
            className="
              text-2xl
              sm:text-3xl

              font-bold

              bg-gradient-to-r
              from-cyan-300
              to-blue-500

              bg-clip-text
              text-transparent
            "
          >
            JILI
          </h2>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            flex
            items-center

            gap-2

            shrink-0
          "
        >

          {/* ALL BUTTON */}

          <button
            className="
              px-3
              sm:px-5

              h-10
              sm:h-11

              rounded-xl

              border
              border-cyan-500

              bg-[#0b2344]

              text-cyan-300

              font-bold

              text-sm
              sm:text-base

              hover:bg-cyan-500
              hover:text-white

              transition
              duration-300
            "
          >
            All 134
          </button>


          {/* MORE BUTTON */}

          <button
            className="
              px-3
              sm:px-5

              h-10
              sm:h-11

              rounded-xl

              border
              border-cyan-500

              bg-[#0b2344]

              text-cyan-300

              font-bold

              text-sm
              sm:text-base

              hover:bg-cyan-500
              hover:text-white

              transition
              duration-300
            "
          >
            More
          </button>

        </div>

      </div>

    </div>
  );
}