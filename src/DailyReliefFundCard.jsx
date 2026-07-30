import React from "react";

const DailyReliefFundCard = () => {
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
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200"
          alt=""
          className="w-full h-[170px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 via-transparent to-[#020617]/60" />

        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-right">

          <h1 className="text-4xl font-black text-white">
            Daily Rescue
          </h1>

          <p className="text-cyan-300 text-2xl font-bold mt-2">
            Don't worry about losses
          </p>

          <h2 className="text-yellow-300 text-5xl font-black">
            Up To 25%
          </h2>

        </div>

      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center p-4">

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
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-10 h-10"
              alt=""
            />
          </div>

          <div>
            <h2 className="text-white text-3xl font-bold">
              Daily Relief Fund
            </h2>

            <p className="text-cyan-300 text-sm">
              Daily cashback activity
            </p>
          </div>

        </div>

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

export default DailyReliefFundCard;