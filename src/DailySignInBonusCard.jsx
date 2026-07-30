import React from "react";

const DailySignInBonusCard = () => {
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
      shadow-[0_0_18px_rgba(0,255,255,.15)]
      "
    >
      {/* Banner */}
      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
          alt=""
          className="w-full h-[170px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/30 via-transparent to-[#020617]/60" />

        {/* Text */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-right">

          <h1 className="text-4xl font-black text-white">
            Daily Login
          </h1>

          <h2 className="text-2xl font-bold text-cyan-300 mt-1">
            Claim Total Bonus
          </h2>

          <h3 className="text-5xl font-black text-yellow-300 mt-2">
            Rs 305
          </h3>

        </div>

      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center p-4">

        {/* Left */}
        <div className="flex items-center gap-4">

          <div
            className="
            w-16
            h-16
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
              src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
              alt=""
              className="w-10 h-10 object-contain"
            />
          </div>

          <div>

            <h2 className="text-white text-3xl font-bold">
              Daily Sign-In Bonus
            </h2>

            <p className="text-cyan-300 text-sm">
              Login daily and collect rewards
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
          shadow-[0_0_15px_rgba(0,255,255,.35)]
          hover:scale-105
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