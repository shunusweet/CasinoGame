import React from "react";

const BetChallengeCard = () => {
  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto

        overflow-hidden
        rounded-[18px]
        sm:rounded-[22px]

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

      <div
        className="
          relative
          w-full
          h-[150px]
          sm:h-[170px]

          overflow-hidden
        "
      >

        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200"
          alt="Bet Challenge"
          className="
            block
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
            from-[#020617]/30
            via-transparent
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
              text-lg
              sm:text-3xl
              md:text-4xl

              font-black
              text-white

              leading-tight
            "
          >
            Challenge Tasks
          </h1>

          <h2
            className="
              text-sm
              sm:text-xl
              md:text-3xl

              font-bold
              text-cyan-300

              mt-1
            "
          >
            Win Big Rewards
          </h2>

          <h3
            className="
              text-2xl
              sm:text-4xl
              md:text-5xl

              font-black
              text-yellow-300

              mt-1
              sm:mt-2
            "
          >
            88,888
          </h3>

          <p
            className="
              text-xs
              sm:text-lg
              md:text-xl

              text-white
              font-semibold
            "
          >
            Bonus
          </p>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div
        className="
          flex
          items-center
          justify-between

          gap-2
          sm:gap-4

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
              from-cyan-500
              to-blue-700

              border
              border-cyan-300
            "
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/2948/2948037.png"
              alt="Bet Challenge"
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

                text-base
                sm:text-xl
                md:text-3xl

                font-bold

                truncate
              "
            >
              Bet Challenge
            </h2>

            <p
              className="
                text-cyan-300

                text-[10px]
                sm:text-xs

                truncate
              "
            >
              Complete tasks to win rewards
            </p>

          </div>

        </div>


        {/* ================= BUTTON ================= */}

        <button
          className="
            shrink-0

            px-3
            sm:px-5
            md:px-6

            py-2
            sm:py-2.5
            md:py-3

            rounded-xl
            sm:rounded-2xl

            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-blue-700

            border
            border-cyan-300

            text-white

            text-[10px]
            sm:text-xs
            md:text-sm

            font-bold

            whitespace-nowrap

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

export default BetChallengeCard;