import React from "react";

const BetChallengeCard = () => {
  return (
    <div className="rounded-[22px] overflow-hidden border border-cyan-500 bg-gradient-to-b from-[#061b3a] via-[#071426] to-[#020617] shadow-[0_0_18px_rgba(0,255,255,.15)]">

      {/* Banner */}
      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200"
          alt=""
          className="w-full h-[170px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/20 via-transparent to-[#020617]/60" />

        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-right">

          <h1 className="text-4xl font-black text-white">
            Challenge Tasks
          </h1>

          <h2 className="text-3xl font-bold text-cyan-300 mt-1">
            Win Big Rewards
          </h2>

          <h3 className="text-5xl font-black text-yellow-300 mt-2">
            88,888
          </h3>

          <p className="text-xl text-white font-semibold">
            Bonus
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center p-4">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-cyan-500 to-blue-700 border border-cyan-300 flex items-center justify-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2948/2948037.png"
              alt=""
              className="w-10 h-10"
            />

          </div>

          <div>

            <h2 className="text-white text-3xl font-bold">
              Bet Challenge
            </h2>

            <p className="text-cyan-300 text-sm">
              Complete tasks to win rewards
            </p>

          </div>

        </div>

        <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 border border-cyan-300 text-white font-bold">
          In Progress
        </button>

      </div>

    </div>
  );
};

export default BetChallengeCard;