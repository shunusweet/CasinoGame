import React from "react";
import { Crown, CircleDollarSign } from "lucide-react";

const VipBonusCard = () => {
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

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
          alt="VIP Bonus"
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
          from-[#020617]/75
          via-[#020617]/25
          to-transparent
          "
        />

        {/* Banner Text */}

        <div
          className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          "
        >

          <p className="text-cyan-300 text-sm uppercase tracking-wider">
            VIP Exclusive
          </p>

          <h1
            className="
            text-white
            text-4xl
            font-black
            "
          >
            VIP Bonus
          </h1>

          <p
            className="
            text-yellow-300
            text-2xl
            font-bold
            mt-2
            "
          >
            Earn up to Rs 500,000
          </p>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}

      <div
        className="
        flex
        justify-between
        items-center
        gap-3
        p-4
        "
      >

        {/* ================= LEFT ================= */}

        <div className="flex items-center gap-3 min-w-0">

          <div
            className="
            w-14
            h-14
            shrink-0

            rounded-2xl

            bg-gradient-to-b
            from-cyan-400
            via-blue-500
            to-blue-800

            border
            border-cyan-300

            flex
            items-center
            justify-center
            "
          >

            <Crown
              size={30}
              className="text-yellow-300"
            />

          </div>

          <div className="min-w-0">

            <h2
              className="
              text-white
              text-2xl
              font-bold
              truncate
              "
            >
              VIP Bonus
            </h2>

            <p className="text-cyan-300 text-xs">
              Unlock exclusive VIP rewards every day
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

          flex
          items-center
          gap-2

          shadow-[0_0_15px_rgba(0,255,255,.45)]

          hover:scale-105
          transition
          duration-300
          "
        >

          <CircleDollarSign size={18} />

          Claim

        </button>

      </div>

    </div>
  );
};

export default VipBonusCard;