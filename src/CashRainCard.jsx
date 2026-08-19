import React from "react";

const CashRainCard = () => {
  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto

        overflow-hidden
        rounded-[20px]

        border
        border-cyan-500/70

        bg-gradient-to-b
        from-[#061b3a]
        via-[#071426]
        to-[#020617]

        shadow-[0_0_18px_rgba(0,255,255,.15)]

        transition-all
        duration-300

        hover:shadow-[0_0_25px_rgba(0,255,255,.30)]
      "
    >

      {/* ================= BANNER ================= */}

      <div className="relative w-full h-[150px] sm:h-[170px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200"
          alt="Cash Rain"
          className="
            w-full
            h-full
            object-cover
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-[#020617]/70
            via-[#020617]/20
            to-[#020617]/70
          "
        />

        {/* ================= BANNER TEXT ================= */}

        <div
          className="
            absolute
            inset-0

            flex
            flex-col
            justify-center
            items-end

            text-right

            px-4
            sm:px-5
          "
        >

          <h1
            className="
              text-white
              text-2xl
              sm:text-4xl

              font-black

              leading-tight

              drop-shadow-[0_2px_5px_rgba(0,0,0,.8)]
            "
          >
            Download App
          </h1>

          <h2
            className="
              text-cyan-300

              text-sm
              sm:text-2xl

              font-bold

              mt-1

              max-w-[85%]
            "
          >
            Click Your 24 Red Envelopes
          </h2>

          <h3
            className="
              text-yellow-300

              text-3xl
              sm:text-5xl

              font-black

              mt-1

              leading-none
            "
          >
            Maximum 5000
          </h3>

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

          {/* ICON */}

          <div
            className="
              shrink-0

              w-12
              h-12

              sm:w-16
              sm:h-16

              rounded-xl
              sm:rounded-2xl

              bg-gradient-to-b
              from-cyan-500
              to-blue-700

              border
              border-cyan-300

              flex
              items-center
              justify-center

              shadow-[0_0_15px_rgba(0,255,255,.25)]
            "
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"
              alt=""
              className="
                w-7
                h-7

                sm:w-10
                sm:h-10

                object-contain
              "
            />

          </div>


          {/* TEXT */}

          <div className="min-w-0">

            <h2
              className="
                text-white

                text-lg
                sm:text-3xl

                font-bold

                truncate
              "
            >
              Cash Rain
            </h2>

            <p
              className="
                text-cyan-300

                text-[10px]
                sm:text-sm

                truncate
              "
            >
              Daily cash rewards
            </p>

          </div>

        </div>


        {/* ================= BUTTON ================= */}

        <button
          className="
            shrink-0

            px-3
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

            text-xs
            sm:text-sm

            font-bold

            whitespace-nowrap

            shadow-[0_0_12px_rgba(0,200,255,.25)]

            hover:scale-105
            hover:brightness-110

            transition-all
            duration-300
          "
        >
          In Progress
        </button>

      </div>

    </div>
  );
};

export default CashRainCard;