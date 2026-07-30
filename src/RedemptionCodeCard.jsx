import React from "react";

const RedemptionCodeCard = () => {
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
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200"
          alt=""
          className="w-full h-[170px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 via-transparent to-[#020617]/60" />

        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-right">

          <h1 className="text-4xl font-black text-white leading-tight">
            Redeem Code
          </h1>

          <h2 className="text-3xl font-bold text-cyan-300 mt-1">
            Get Big Rewards
          </h2>

          <p className="text-yellow-300 text-xl font-bold mt-2">
            Subscribe Our Contact Channels
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
              src="https://cdn-icons-png.flaticon.com/512/929/929564.png"
              alt=""
              className="w-10 h-10"
            />
          </div>

          <div>

            <h2 className="text-white text-3xl font-bold">
              Redemption Code
            </h2>

            <p className="text-cyan-300 text-sm">
              Redeem exclusive bonus codes
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

export default RedemptionCodeCard;