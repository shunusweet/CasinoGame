import React from "react";
import { Gift, CircleDollarSign } from "lucide-react";

const LuckyWheelCard = () => {
  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto

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
      {/* ================= BANNER ================= */}

      <div className="relative w-full">

        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
          alt="Lucky Wheel"
          className="
            w-full
            h-[150px]
            sm:h-[170px]
            object-cover
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-[#020617]/80
            via-[#020617]/30
            to-transparent
          "
        />

        {/* ================= TEXT ================= */}

        <div
          className="
            absolute
            left-4
            sm:left-5

            top-1/2
            -translate-y-1/2
          "
        >

          <p
            className="
              text-cyan-300
              text-xs
              sm:text-sm
            "
          >
            Daily Event
          </p>

          <h1
            className="
              text-white
              text-2xl
              sm:text-4xl
              font-black
              leading-tight
            "
          >
            Lucky Wheel
          </h1>

          <p
            className="
              text-yellow-300
              text-base
              sm:text-2xl
              font-bold
              mt-1
              sm:mt-2
            "
          >
            Win up to Rs 50,000
          </p>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}

      <div
        className="
          flex
          items-center
          justify-between

          gap-3

          p-3
          sm:p-4
        "
      >

        {/* ================= LEFT ================= */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-4

            min-w-0
          "
        >

          {/* Icon */}

          <div
            className="
              flex
              items-center
              justify-center

              shrink-0

              w-12
              h-12

              sm:w-16
              sm:h-16

              rounded-xl
              sm:rounded-2xl

              bg-gradient-to-b
              from-cyan-400
              to-blue-700

              border
              border-cyan-300
            "
          >

            <Gift
              size={26}
              className="
                text-yellow-300
                sm:hidden
              "
            />

            <Gift
              size={34}
              className="
                text-yellow-300
                hidden
                sm:block
              "
            />

          </div>

          {/* Text */}

          <div className="min-w-0">

            <h2
              className="
                text-white

                text-base
                sm:text-2xl

                font-bold

                truncate
              "
            >
              Lucky Wheel
            </h2>

            <p
              className="
                text-cyan-300

                text-[10px]
                sm:text-sm

                truncate
              "
            >
              Spin and win exciting prizes
            </p>

          </div>

        </div>

        {/* ================= BUTTON ================= */}

        <button
          className="
            shrink-0

            px-4
            py-2

            sm:px-6
            sm:py-3

            rounded-xl
            sm:rounded-2xl

            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-blue-700

            border
            border-cyan-300

            text-white

            text-sm
            sm:text-base

            font-bold

            flex
            items-center
            gap-1
            sm:gap-2

            shadow-[0_0_15px_rgba(0,255,255,.45)]

            hover:scale-105
            active:scale-95

            transition-all
            duration-300
          "
        >

          <CircleDollarSign
            size={16}
            className="sm:hidden"
          />

          <CircleDollarSign
            size={18}
            className="hidden sm:block"
          />

          Spin

        </button>

      </div>

    </div>
  );
};

export default LuckyWheelCard;