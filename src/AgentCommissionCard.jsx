import React from "react";

const AgentCommissionCard = () => {
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

          <h1 className="text-4xl font-black text-white">
            Become Partner
          </h1>

          <p className="text-cyan-300 text-2xl font-bold mt-2">
            Team Commission
          </p>

          <h2 className="text-yellow-300 text-5xl font-black">
            Up To 5%
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
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              className="w-10 h-10"
              alt=""
            />
          </div>

          <div>
            <h2 className="text-white text-3xl font-bold">
              Agent Commission
            </h2>

            <p className="text-cyan-300 text-sm">
              Invite friends and earn
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

export default AgentCommissionCard;