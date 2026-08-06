import React from "react";

import Jili777 from "./assets/Jili777.jpg";

export default function JiliHeader() {
  return (
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
      {/* Left Side */}
      <div className="flex items-center gap-2">

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
          "
        />

        <h2
          className="
          text-3xl
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

      {/* Right Side */}
      <div className="flex gap-3">

        <button
          className="
          px-5
          py-2

          rounded-xl

          border
          border-cyan-500

          bg-[#0b2344]

          text-cyan-300

          font-bold
          text-xl

          hover:bg-cyan-500
          hover:text-white

          duration-300
          "
        >
          All 134
        </button>

        <button
          className="
          px-6
          py-2

          rounded-xl

          border
          border-cyan-500

          bg-[#0b2344]

          text-cyan-300

          font-bold
          text-xl

          hover:bg-cyan-500
          hover:text-white

          duration-300
          "
        >
          More
        </button>

      </div>
    </div>
  );
}