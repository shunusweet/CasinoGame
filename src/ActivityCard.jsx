import React from "react";

const ActivityCard = ({
  banner,
  icon,
  title,
  reward,
  button,
}) => {
  return (

    <div
      className="
        w-full
        max-w-[540px]
        min-w-0
        mx-auto

        overflow-hidden
        rounded-[20px]
        sm:rounded-[24px]

        border
        border-cyan-500/70

        bg-gradient-to-b
        from-[#061b3a]
        via-[#071426]
        to-[#020617]

        shadow-[0_0_25px_rgba(0,255,255,.18)]

        hover:scale-[1.01]

        transition-all
        duration-300
      "
    >

      {/* ================================================= */}
      {/* BANNER */}
      {/* ================================================= */}

      <div
        className="
          relative
          w-full

          h-[150px]
          sm:h-[180px]

          overflow-hidden
        "
      >

        <img
          src={banner}
          alt={title}
          className="
            w-full
            h-full

            object-cover

            block
          "
        />

        {/* ================= DARK OVERLAY ================= */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-[#020617]/80
            via-[#061b3a]/30
            to-[#020617]/60
          "
        />

        {/* ================= TEXT ================= */}

        <div
          className="
            absolute
            inset-0

            flex
            flex-col
            justify-center

            px-4
            sm:px-6

            min-w-0
          "
        >

          {/* Limited Event */}

          <p
            className="
              text-cyan-300

              uppercase
              tracking-[2px]
              sm:tracking-widest

              text-[9px]
              sm:text-xs

              font-semibold

              truncate
            "
          >
            Limited Event
          </p>

          {/* Title */}

          <h2
            className="
              text-white

              text-xl
              sm:text-3xl

              font-black

              leading-tight

              max-w-full

              truncate
            "
          >
            {title}
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-1
              sm:mt-2

              text-cyan-200

              text-[10px]
              sm:text-sm

              leading-tight

              max-w-[85%]

              truncate
            "
          >
            Invite friends and complete missions
          </p>

          {/* Reward */}

          <h1
            className="
              mt-2
              sm:mt-3

              text-yellow-300

              text-2xl
              sm:text-4xl

              font-black

              leading-none

              truncate
            "
          >
            {reward}
          </h1>

        </div>

      </div>


      {/* ================================================= */}
      {/* BOTTOM SECTION */}
      {/* ================================================= */}

      <div
        className="
          w-full

          flex
          items-center
          justify-between

          gap-2

          p-3
          sm:p-4

          min-w-0
        "
      >

        {/* ================================================= */}
        {/* LEFT SECTION */}
        {/* ================================================= */}

        <div
          className="
            flex
            items-center

            gap-2
            sm:gap-3

            min-w-0
            flex-1
          "
        >

          {/* ================= ICON ================= */}

          <div
            className="
              shrink-0

              w-12
              h-12

              sm:w-16
              sm:h-16

              rounded-xl
              sm:rounded-2xl

              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-blue-700

              border
              border-cyan-300

              flex
              items-center
              justify-center

              shadow-[0_0_15px_rgba(0,255,255,.35)]
            "
          >

            <img
              src={icon}
              alt=""
              className="
                w-7
                h-7

                sm:w-9
                sm:h-9

                object-contain
              "
            />

          </div>


          {/* ================= TITLE INFO ================= */}

          <div
            className="
              min-w-0
              flex-1
            "
          >

            <h3
              className="
                text-white

                font-bold

                text-sm
                sm:text-lg

                leading-tight

                truncate
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-1

                text-cyan-300

                text-[9px]
                sm:text-xs

                leading-tight

                truncate
              "
            >
              Complete activity & earn rewards
            </p>

          </div>

        </div>


        {/* ================================================= */}
        {/* BUTTON */}
        {/* ================================================= */}

        <button
          className="
            shrink-0

            px-3
            sm:px-5

            py-2
            sm:py-2.5

            rounded-lg
            sm:rounded-xl

            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-blue-700

            border
            border-cyan-300

            text-white

            text-[10px]
            sm:text-sm

            font-bold

            whitespace-nowrap

            shadow-[0_0_15px_rgba(0,255,255,.35)]

            hover:brightness-110
            hover:scale-105

            transition-all
            duration-300
          "
        >
          {button}
        </button>

      </div>

    </div>
  );
};

export default ActivityCard;