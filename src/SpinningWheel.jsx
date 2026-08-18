import  { useState } from "react";
import { ArrowLeft, Share2, WalletCards } from "lucide-react";

export default function SpinningWheel({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState("Winners list");

  const winners = [
    ["923****82841", "Already received", "Rs. 1500"],
    ["923****29878", "Already received", "Rs. 1500"],
    ["923****23794", "Already received", "Rs. 1500"],
    ["923****74968", "Already received", "Rs. 1500"],
    ["923****03889", "Already received", "Rs. 1500"],
    ["923****10245", "Already received", "Rs. 1500"],
  ];

  return (
    <div className="w-full h-full bg-[#020617] text-white overflow-y-auto">

     

      {/* ================= BALANCE BOX ================= */}
      <div className="px-3 pt-3">

        <div
          className="
            rounded-2xl
            border
            border-cyan-700
            bg-gradient-to-b
            from-[#172b45]
            to-[#071426]
            p-3
            shadow-[0_0_15px_rgba(0,180,255,.15)]
          "
        >
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-300
                  to-blue-700
                  flex
                  items-center
                  justify-center
                "
              >
                <WalletCards size={22} className="text-white" />
              </div>

              <span className="text-2xl font-bold text-yellow-400">
                0.00
              </span>
            </div>

            <button
              className="
                px-5
                py-2
                rounded-lg
                bg-gradient-to-b
                from-cyan-400
                to-blue-700
                text-white
                font-bold
                shadow-[0_0_10px_rgba(0,200,255,.4)]
              "
            >
              Receive
            </button>
          </div>

          <div className="mt-3 h-[6px] bg-gray-700 rounded-full overflow-hidden">
            <div className="w-0 h-full bg-cyan-400" />
          </div>

          <p className="text-center text-xs text-gray-300 mt-3 font-serif">
            Requires{" "}
            <span className="text-yellow-400 font-bold">
              1500.00
            </span>{" "}
            for bonus claim
          </p>
        </div>
      </div>

      {/* ================= WHEEL AREA ================= */}
      <div
        className="
          relative
          mt-3
          h-[320px]
          overflow-hidden
          bg-gradient-to-b
          from-[#0b3157]
          via-[#061b3a]
          to-[#020617]
        "
      >

        {/* Decorative glow */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(0,200,255,.25),transparent_55%)]
          "
        />

        {/* Characters / decoration placeholders */}
        <div className="absolute left-1 top-5 text-6xl">
          👩‍🎤
        </div>

        <div className="absolute right-0 top-8 text-6xl">
          👸
        </div>

        <div className="absolute left-5 bottom-2 text-5xl">
          🎁
        </div>

        <div className="absolute right-5 bottom-2 text-5xl">
          💰
        </div>

        {/* Wheel */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[225px]
            h-[225px]
            rounded-full
            border-[9px]
            border-yellow-400
            bg-gradient-to-br
            from-[#f5c542]
            via-[#6b4300]
            to-[#f5c542]
            shadow-[0_0_35px_rgba(255,200,0,.8)]
            flex
            items-center
            justify-center
          "
        >

          {/* Wheel inner */}
          <div
            className="
              w-[200px]
              h-[200px]
              rounded-full
              border-[5px]
              border-yellow-200
              bg-[#111827]
              relative
              overflow-hidden
            "
          >

            {/* Wheel sectors */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-[conic-gradient(
                  #172554 0deg 45deg,
                  #374151 45deg 90deg,
                  #172554 90deg 135deg,
                  #374151 135deg 180deg,
                  #172554 180deg 225deg,
                  #374151 225deg 270deg,
                  #172554 270deg 315deg,
                  #374151 315deg 360deg
                )]
              "
            />

            {/* Wheel numbers */}
            <span className="absolute top-5 left-[82px] text-yellow-300 text-xl font-bold">
              100
            </span>

            <span className="absolute right-5 top-[82px] text-yellow-300 text-xl font-bold">
              50
            </span>

            <span className="absolute bottom-5 left-[78px] text-yellow-300 text-xl font-bold">
              200
            </span>

            <span className="absolute left-5 top-[82px] text-yellow-300 text-xl font-bold">
              10
            </span>

            {/* Center */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[65px]
                h-[65px]
                rounded-full
                bg-gradient-to-b
                from-pink-500
                via-purple-600
                to-pink-700
                border-4
                border-yellow-400
                flex
                items-center
                justify-center
                shadow-[0_0_20px_rgba(255,0,200,.7)]
              "
            >
              <span className="text-3xl font-bold">
                1
              </span>
            </div>
          </div>

          {/* Pointer */}
          <div
            className="
              absolute
              -top-[18px]
              left-1/2
              -translate-x-1/2
              text-yellow-300
              text-4xl
            "
          >
            ▼
          </div>
        </div>
      </div>

      {/* ================= EXPIRATION ================= */}
      <div
        className="
          text-center
          py-2
          bg-gradient-to-r
          from-[#020617]
          via-[#102a43]
          to-[#020617]
          font-serif
          text-sm
        "
      >
        Expiration time{" "}
        <span className="font-bold text-white">
          6d 23:59:20
        </span>
      </div>

      {/* ================= SHARE BUTTON ================= */}
      <div className="px-5 mt-3">

        <button
          className="
            w-full
            h-[48px]
            rounded-xl
            border
            border-cyan-700
            bg-gradient-to-r
            from-[#071426]
            to-[#172b45]
            flex
            items-center
            justify-between
            px-4
            text-sm
            font-serif
          "
        >
          <span>
            Invite friends to help with withdrawal
          </span>

          <Share2
            size={23}
            className="text-yellow-400"
          />
        </button>

      </div>

      {/* ================= WINNER TABS ================= */}
      <div className="px-5 mt-4">

        <div
          className="
            flex
            rounded-t-2xl
            overflow-hidden
            bg-[#172033]
          "
        >

          <button
            onClick={() => setActiveTab("Winners list")}
            className={`
              flex-1
              py-3
              font-serif
              font-bold
              ${
                activeTab === "Winners list"
                  ? "bg-gradient-to-b from-cyan-500 to-blue-700 text-white rounded-t-2xl"
                  : "text-gray-300"
              }
            `}
          >
            Winners list
          </button>

          <button
            onClick={() => setActiveTab("My records")}
            className={`
              flex-1
              py-3
              font-serif
              font-bold
              ${
                activeTab === "My records"
                  ? "bg-gradient-to-b from-cyan-500 to-blue-700 text-white rounded-t-2xl"
                  : "text-gray-300"
              }
            `}
          >
            My records
          </button>

        </div>

        {/* ================= WINNERS ================= */}
        {activeTab === "Winners list" && (
          <div
            className="
              border
              border-cyan-700
              border-t-0
              rounded-b-2xl
              bg-[#071426]
              overflow-hidden
            "
          >

            {winners.map((winner, index) => (
              <div
                key={index}
                className="
                  grid
                  grid-cols-[1.2fr_1fr_.7fr]
                  items-center
                  px-3
                  py-2.5
                  text-[10px]
                  border-b
                  border-gray-700
                "
              >
                <span className="font-bold">
                  {winner[0]}
                </span>

                <span className="text-gray-400 text-center">
                  {winner[1]}
                </span>

                <span className="text-yellow-400 text-right">
                  {winner[2]}
                </span>
              </div>
            ))}

          </div>
        )}

        {/* ================= MY RECORDS ================= */}
        {activeTab === "My records" && (
          <div
            className="
              h-[190px]
              border
              border-cyan-700
              border-t-0
              rounded-b-2xl
              bg-[#071426]
              flex
              items-center
              justify-center
              text-gray-400
              text-sm
            "
          >
            No records yet
          </div>
        )}

      </div>

      {/* ================= ACTIVITY DESCRIPTION ================= */}
      <div className="px-5 mt-8 pb-[30px]">

        <div className="flex items-center gap-3 mb-4">

          <div className="flex-1 h-[1px] bg-cyan-800" />

          <h2 className="font-serif font-bold text-cyan-100 text-sm">
            Activity Description
          </h2>

          <div className="flex-1 h-[1px] bg-cyan-800" />

        </div>

        <div
          className="
            text-[10px]
            leading-[18px]
            text-gray-200
            font-serif
          "
        >

          <p className="mb-2">
            1. Meet the conditions within 7 days to claim the reward.
          </p>

          <p className="mb-2">
            2. Each IP can appear only once per game round.
          </p>

          <p className="mb-2">
            3. This promotion is limited to one member
            (one device, one contact, one address/IP).
            Any violation may result in reward cancellation
            and recovery.
          </p>

          <p className="mb-2">
            4. The website reserves the right to stop,
            block, or freeze group accounts suspected of cheating.
          </p>

          <p className="mb-2">
            5. Rewards must meet a 1x wagering requirement
            before withdrawal access.
          </p>

          <p className="mb-2">
            6. Reward Round Rules: Daily login: +1 extra spin.
            Daily deposit +1 free spin. During promotion,
            invited friends play/bet: +1 free spin.
          </p>

          <p>
            During promotion, invited friends deposit:
            +1 free spin.
          </p>

        </div>

      </div>
      <div className="mt-8 mb-30"></div>

    </div>
  );
}