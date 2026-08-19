import React from "react";

const DailySignInBonusCard = () => {
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

        shadow-[0_0_18px_rgba(0,255,255,.15)]
      "
    >
      {/* ================= BANNER ================= */}

      <div className="relative w-full h-[150px] sm:h-[170px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
          alt="Daily Login"
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
            from-[#020617]/40
            via-[#020617]/10
            to-[#020617]/70
          "
        />

        {/* ================= BANNER TEXT ================= */}

        <div
          className="
            absolute
            right-3
            sm:right-5
            top-1/2
            -translate-y-1/2

            text-right
            max-w-[65%]
          "
        >
          <h1
            className="
              text-xl
              sm:text-3xl
              md:text-4xl

              font-black
              text-white

              leading-tight
            "
          >
            Daily Login
          </h1>

          <h2
            className="
              text-sm
              sm:text-xl
              md:text-2xl

              font-bold
              text-cyan-300

              mt-1
              leading-tight
            "
          >
            Claim Total Bonus
          </h2>

          <h3
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl

              font-black
              text-yellow-300

              mt-1
              sm:mt-2
            "
          >
            Rs 305
          </h3>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}

      <div
        className="
          flex
          flex-col
          sm:flex-row

          sm:justify-between
          sm:items-center

          gap-4

          p-3
          sm:p-4
        "
      >

        {/* ================= LEFT ================= */}

        <div
          className="
            flex
            items-center
            gap-3
            sm:gap-4

            min-w-0
            w-full
            sm:w-auto
          "
        >

          {/* Icon */}

          <div
            className="
              shrink-0

              w-14
              h-14
              sm:w-16
              sm:h-16

              rounded-2xl

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
              src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
              alt=""
              className="
                w-8
                h-8
                sm:w-10
                sm:h-10
                object-contain
              "
            />
          </div>

          {/* Text */}

          <div className="min-w-0">
            <h2
              className="
                text-white

                text-lg
                sm:text-2xl
                md:text-3xl

                font-bold

                leading-tight

                truncate
              "
            >
              Daily Sign-In Bonus
            </h2>

            <p
              className="
                text-cyan-300

                text-xs
                sm:text-sm

                mt-1
              "
            >
              Login daily and collect rewards
            </p>
          </div>

        </div>

        {/* ================= BUTTON ================= */}

        <button
          className="
            w-full
            sm:w-auto

            shrink-0

            px-5
            sm:px-6

            py-2.5
            sm:py-3

            rounded-2xl

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

            shadow-[0_0_15px_rgba(0,255,255,.35)]

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

export default DailySignInBonusCard;