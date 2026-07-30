import React from "react";

const Sidebar = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-300 ${
          openMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0
        h-screen
        w-[86%]
        max-w-[360px]
        z-50
        transition-all duration-500
        ${
          openMenu
            ? "translate-x-0"
            : "-translate-x-full"
        }

        bg-gradient-to-b
        from-[#061b3a]
        via-[#071426]
        to-[#020617]

        border-r
        border-cyan-600

        shadow-[0_0_30px_rgba(0,255,255,.25)]
        `}
      >
        {/* Top */}
        <div className="px-5 pt-6">

          <button
            onClick={() => setOpenMenu(false)}
            className="text-white text-3xl"
          >
            ←
          </button>

          <h1 className="mt-10 text-5xl font-black text-cyan-400">
            33RS
          </h1>

          <p className="text-cyan-200 mt-2 tracking-[4px] text-xs uppercase">
            Gaming Platform
          </p>

          {/* Menu Grid */}
          <div className="grid grid-cols-3 gap-4 mt-10">

            <div className="bg-[#0b2d55] border border-cyan-500 rounded-2xl p-4 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,255,255,.2)]">
              <span className="text-4xl">🌍</span>
              <p className="text-white text-sm mt-3">Language</p>
            </div>

            <div className="bg-[#0b2d55] border border-cyan-500 rounded-2xl p-4 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,255,255,.2)]">
              <span className="text-4xl">🎁</span>
              <p className="text-white text-sm mt-3">Invitation</p>
            </div>

            <div className="bg-[#0b2d55] border border-cyan-500 rounded-2xl p-4 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,255,255,.2)]">
              <span className="text-4xl">🎉</span>
              <p className="text-white text-sm mt-3">Bonus</p>
            </div>

            <div className="bg-[#0b2d55] border border-cyan-500 rounded-2xl p-4 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,255,255,.2)]">
              <span className="text-4xl">💰</span>
              <p className="text-white text-sm mt-3">Wallet</p>
            </div>

            <div className="bg-[#0b2d55] border border-cyan-500 rounded-2xl p-4 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,255,255,.2)] relative">
              <span className="text-4xl">🎡</span>

              <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                1
              </span>

              <p className="text-white text-sm mt-3">Reward</p>
            </div>

            <div className="bg-[#0b2d55] border border-cyan-500 rounded-2xl p-4 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,255,255,.2)]">
              <span className="text-4xl">💎</span>
              <p className="text-white text-sm mt-3">VIP</p>
            </div>

          </div>

          {/* Customer Service */}
          <div className="mt-10 rounded-2xl border border-cyan-600 bg-[#081b36] p-5 shadow-[0_0_20px_rgba(0,255,255,.2)]">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <span className="text-3xl">🎧</span>

                <div>

                  <h2 className="text-white font-bold">
                    Customer Service
                  </h2>

                  <p className="text-cyan-300 text-xs">
                    Professional service
                  </p>

                </div>

              </div>

              <span className="text-cyan-300 text-2xl">
                →
              </span>

            </div>

          </div>

          {/* Social */}
          <div className="mt-8 border border-cyan-600 rounded-2xl p-4">

            <h3 className="text-center text-cyan-300 mb-4">
              Share
            </h3>

            <div className="flex justify-around text-4xl">
              <span>📘</span>
              <span>🟢</span>
              <span>✈️</span>
              <span>📷</span>
              <span>❌</span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;