import React from "react";

const AgentCommissionCard = () => {
  return (
    <div
      className="
        w-full
        max-w-[540px]
        mx-auto

        overflow-hidden
        rounded-[22px]

        border
        border-cyan-500

        bg-gradient-to-b
        from-[#061b3a]
        via-[#071426]
        to-[#020617]

        shadow-[0_0_18px_rgba(0,255,255,.15)]
      "
    >

      {/* ================================================= */}
      {/* BANNER */}
      {/* ================================================= */}

      <div className="relative w-full h-[150px] sm:h-[170px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200"
          alt="Agent Commission"
          className="
            w-full
            h-full
            object-cover
          "
        />

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-[#020617]/60
            via-[#020617]/20
            to-[#020617]/70
          "
        />


        {/* Banner Text */}

        <div
          className="
            absolute
            right-3
            sm:right-5

            top-1/2
            -translate-y-1/2

            text-right

            max-w-[70%]
          "
        >

          <h1
            className="
              text-xl
              xs:text-2xl
              sm:text-4xl

              font-black
              text-white

              leading-tight

              drop-shadow-[0_2px_5px_rgba(0,0,0,.7)]
            "
          >
            Become Partner
          </h1>


          <p
            className="
              text-cyan-300

              text-sm
              sm:text-2xl

              font-bold

              mt-1
              sm:mt-2
            "
          >
            Team Commission
          </p>


          <h2
            className="
              text-3xl
              sm:text-5xl

              font-black
              text-yellow-300

              leading-none
            "
          >
            Up To 5%
          </h2>

        </div>

      </div>


      {/* ================================================= */}
      {/* BOTTOM SECTION */}
      {/* ================================================= */}

      <div
        className="
          w-full

          flex
          flex-col
          sm:flex-row

          justify-between
          items-center

          gap-4

          p-3
          sm:p-4
        "
      >

        {/* ================= LEFT ================= */}

        <div
          className="
            w-full
            sm:w-auto

            flex
            items-center

            gap-3
            sm:gap-4

            min-w-0
          "
        >

          {/* ICON */}

          <div
            className="
              flex-shrink-0

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
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              className="
                w-8
                h-8

                sm:w-10
                sm:h-10

                object-contain
              "
              alt="Agent"
            />

          </div>


          {/* TEXT */}

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
              Agent Commission
            </h2>


            <p
              className="
                text-cyan-300

                text-xs
                sm:text-sm

                mt-1
              "
            >
              Invite friends and earn
            </p>

          </div>

        </div>


        {/* ================= BUTTON ================= */}

        <button
          className="
            w-full
            sm:w-auto

            flex-shrink-0

            px-5
            sm:px-6

            py-2.5
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

            whitespace-nowrap

            shadow-[0_0_15px_rgba(0,255,255,.25)]

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

export default AgentCommissionCard;