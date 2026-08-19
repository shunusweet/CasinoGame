import React from "react";

const SiteWideRebateCard = () => {
  return (
    <div
      className="
        w-[540px]
        max-w-full

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

      <div className="relative w-full">

        <img
          src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop"
          alt="Site Wide Rebate"
          className="
            w-full
            h-[170px]
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
            via-transparent
            to-[#020617]/70
          "
        />

        {/* Banner Text */}

        <div
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-right
          "
        >

          <h2
            className="
              text-3xl
              font-black
              text-white
              leading-tight
            "
          >
            No Daily Limit
          </h2>

          <p
            className="
              text-cyan-300
              text-xl
              font-bold
              mt-1
            "
          >
            Claim Rebate
          </p>

          <h1
            className="
              text-yellow-300
              text-4xl
              font-black
              leading-tight
            "
          >
            Up To 3%
          </h1>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-3
          p-4
        "
      >

        {/* ================= LEFT ================= */}

        <div
          className="
            flex
            items-center
            gap-3
            min-w-0
          "
        >

          {/* Icon */}

          <div
            className="
              w-14
              h-14
              shrink-0

              rounded-2xl

              bg-gradient-to-b
              from-cyan-500
              to-blue-700

              border
              border-cyan-300

              flex
              items-center
              justify-center
            "
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
              alt="Rebate"
              className="
                w-9
                h-9
                object-contain
              "
            />

          </div>


          {/* Text */}

          <div className="min-w-0">

            <h2
              className="
                text-white
                text-2xl
                font-bold
                leading-tight
                truncate
              "
            >
              Site-wide Rebate
            </h2>

            <p
              className="
                text-cyan-300
                text-sm
                mt-1
                whitespace-nowrap
              "
            >
              Daily cashback on every bet.
            </p>

          </div>

        </div>


        {/* ================= BUTTON ================= */}

        <button
          className="
            shrink-0

            px-5
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

            shadow-[0_0_15px_rgba(0,255,255,.4)]

            hover:scale-105
            hover:shadow-[0_0_22px_rgba(0,255,255,.6)]

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

export default SiteWideRebateCard;