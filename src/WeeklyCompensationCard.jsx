import React from "react";

const WeeklyCompensationCard = () => {
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
          src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-full h-[170px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/30 via-transparent to-[#020617]/60" />

        {/* Banner Text */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-right">

          <h1 className="text-4xl font-black text-white leading-tight">
            Weekly Loss Cashback
          </h1>

          <h2 className="text-5xl font-black text-yellow-300 mt-2">
            Up To 30%
          </h2>

          <p className="text-cyan-300 text-xl font-bold mt-2">
            No Bonus Limit
          </p>

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
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
              className="w-10 h-10 object-contain"
            />
          </div>

          <div>

            <h2 className="text-white text-3xl font-bold">
              Weekly Compensation
            </h2>

            <p className="text-cyan-300 text-sm">
              Weekly cashback rewards
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

export default WeeklyCompensationCard;