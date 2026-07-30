import React from "react";
import { Gift, CircleDollarSign } from "lucide-react";

const LuckyWheelCard = () => {
  return (
    <div
      className="
      rounded-[22px]
      overflow-hidden

      border
      border-cyan-500

      bg-gradient-to-b
      from-[#061b3a]
      via-[#071426]
      to-[#020617]

      shadow-[0_0_20px_rgba(0,255,255,.18)]
      "
    >
      {/* Banner */}
      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="
          w-full
          h-[170px]
          object-cover
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#020617]/70
          via-[#020617]/20
          to-transparent
          "
        />

        {/* Text */}
        <div
          className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          "
        >

          <p className="text-cyan-300 text-sm">
            Daily Event
          </p>

          <h1
            className="
            text-white
            text-4xl
            font-black
            "
          >
            Lucky Wheel
          </h1>

          <p
            className="
            text-yellow-300
            text-2xl
            font-bold
            mt-2
            "
          >
            Win up to Rs 50,000
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div
        className="
        flex
        items-center
        justify-between
        p-4
        "
      >

        {/* Left */}
        <div className="flex items-center gap-4">

          <div
            className="
            w-16
            h-16

            rounded-2xl

            bg-gradient-to-b
            from-cyan-400
            to-blue-700

            border
            border-cyan-300

            flex
            items-center
            justify-center
            "
          >
            <Gift
              size={34}
              className="text-yellow-300"
            />
          </div>

          <div>

            <h2
              className="
              text-white
              text-2xl
              font-bold
              "
            >
              Lucky Wheel
            </h2>

            <p className="text-cyan-300 text-sm">
              Spin and win exciting prizes
            </p>

          </div>

        </div>

        {/* Button */}
        <button
          className="
          px-6
          py-3

          rounded-2xl

          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-blue-700

          border
          border-cyan-300

          text-white
          font-bold

          flex
          items-center
          gap-2

          shadow-[0_0_15px_rgba(0,255,255,.45)]

          hover:scale-105
          duration-300
          "
        >
          <CircleDollarSign size={18} />
          Spin
        </button>

      </div>
    </div>
  );
};

export default LuckyWheelCard;