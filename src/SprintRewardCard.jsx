import React from "react";
import { Zap, Trophy } from "lucide-react";

const SprintRewardCard = () => {
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
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
          alt="Sprint Reward"
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
          via-[#020617]/35
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
          <p className="text-cyan-300 text-sm uppercase tracking-wider">
            Daily Mission
          </p>

          <h1
            className="
            text-white
            text-4xl
            font-black
            "
          >
            Sprint Rewards
          </h1>

          <p
            className="
            text-yellow-300
            text-2xl
            font-bold
            mt-2
            "
          >
            Win Rs 800 + 2000
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
            <Zap
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
              Sprint Rewards
            </h2>

            <p className="text-cyan-300 text-sm">
              Complete daily tasks to earn rewards
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
          <Trophy size={18} />
          Join
        </button>

      </div>
    </div>
  );
};

export default SprintRewardCard;