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
      overflow-hidden
      rounded-[24px]

      border
      border-cyan-500/70

      bg-gradient-to-b
      from-[#061b3a]
      via-[#071426]
      to-[#020617]

      shadow-[0_0_25px_rgba(0,255,255,.18)]

      hover:scale-[1.01]
      duration-300
      "
    >
      {/* Banner */}
      <div className="relative h-[180px] overflow-hidden">

        <img
          src={banner}
          alt={title}
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
          from-[#020617]/70
          via-[#061b3a]/20
          to-[#020617]/50
          "
        />

        {/* Text */}
        <div
          className="
          absolute
          inset-0

          flex
          flex-col
          justify-center

          px-6
          "
        >
          <p
            className="
            text-cyan-300
            uppercase
            tracking-widest
            text-xs
            "
          >
            Limited Event
          </p>

          <h2
            className="
            text-white
            text-3xl
            font-black
            leading-tight
            "
          >
            {title}
          </h2>

          <p
            className="
            mt-2
            text-cyan-200
            text-sm
            "
          >
            Invite friends and complete missions
          </p>

          <h1
            className="
            mt-3

            text-yellow-300

            text-4xl

            font-black
            "
          >
            {reward}
          </h1>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="
        flex
        items-center
        justify-between

        p-4
        "
      >
        {/* Left */}
        <div className="flex items-center gap-3">

          <div
            className="
            w-16
            h-16

            rounded-2xl

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
              className="w-9 h-9 object-contain"
            />
          </div>

          <div>

            <h3
              className="
              text-white
              font-bold
              text-lg
              "
            >
              {title}
            </h3>

            <p
              className="
              text-cyan-300
              text-xs
              "
            >
              Complete activity & earn rewards
            </p>

          </div>

        </div>

        {/* Button */}
        <button
          className="
          px-5
          py-2.5

          rounded-xl

          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-blue-700

          border
          border-cyan-300

          text-white
          text-sm
          font-bold

          shadow-[0_0_15px_rgba(0,255,255,.35)]

          hover:brightness-110
          hover:scale-105

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