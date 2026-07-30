import React from "react";
import { Gift, Users } from "lucide-react";

const InviteBonusCard = () => {
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
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
          alt="Invite Bonus"
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
          from-[#020617]/80
          via-[#020617]/30
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
          <p className="text-cyan-300 text-sm uppercase tracking-widest">
            Invite Friends
          </p>

          <h1
            className="
            text-white
            text-4xl
            font-black
            "
          >
            Invite Bonus
          </h1>

          <p
            className="
            text-yellow-300
            text-2xl
            font-bold
            mt-2
            "
          >
            Rs 200 + 800 + 2000
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div
        className="
        flex
        justify-between
        items-center

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
            via-blue-500
            to-blue-800

            border
            border-cyan-300

            flex
            items-center
            justify-center
            "
          >
            <Users
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
              Invite Bonus
            </h2>

            <p className="text-cyan-300 text-sm">
              Invite friends and earn bonus rewards
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
          <Gift size={18} />
          Invite
        </button>

      </div>
    </div>
  );
};

export default InviteBonusCard;