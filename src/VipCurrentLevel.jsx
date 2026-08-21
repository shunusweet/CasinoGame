import React from "react";
import {
  ArrowLeft,
  ReceiptText,
  ChevronDown,
  Coins,
  Gift,
  Crown,
} from "lucide-react";

const vipLevels = [
  ["VIP1", "500", "10"],
  ["VIP2", "1,000", "15"],
  ["VIP3", "3,000", "30"],
  ["VIP4", "10,000", "50"],
  ["VIP5", "30,000", "80"],
  ["VIP6", "50,000", "120"],
  ["VIP7", "100,000", "200"],
  ["VIP8", "300,000", "500"],
  ["VIP9", "600,000", "1,000"],
  ["VIP10", "1,000,000", "2,000"],
  ["VIP11", "3,000,000", "5,000"],
  ["VIP12", "6,000,000", "10,000"],
  ["VIP13", "10,000,000", "20,000"],
  ["VIP14", "30,000,000", "30,000"],
  ["VIP15", "60,000,000", "50,000"],
  ["VIP16", "1,000,000,000", "80,000"],
  ["VIP17", "3,000,000,000", "120,000"],
  ["VIP18", "6,000,000,000", "180,000"],
  ["VIP19", "10,000,000,000", "300,000"],
  ["VIP20", "30,000,000,000", "500,000"],
  ["VIP21", "60,000,000,000", "800,000"],
  ["VIP22", "100,000,000,000", "1,200,000"],
  ["VIP23", "300,000,000,000", "2,000,000"],
  ["VIP24", "600,000,000,000", "5,000,000"],
  ["VIP25", "1,000,000,000,000", "10,000,000"],
];

export default function VipCurrentLevel({ setCurrentPage }) {
  return (
    <div
      className="
        relative
        w-full
        max-w-[540px]
        min-h-screen
        mx-auto
        overflow-x-hidden
        text-white
        bg-[#020b1d]
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          fixed
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_50%_0%,rgba(0,153,255,.20),transparent_35%),linear-gradient(180deg,#03152f_0%,#020b1d_48%,#01030b_100%)]
        "
      />

      {/* ================================================= */}
      {/* TOP HEADER */}
      {/* ================================================= */}

      <header
        className="
          relative
          z-20
          w-full
          h-[82px]
          overflow-hidden
          bg-gradient-to-b
          from-[#073b78]
          via-[#062754]
          to-[#03152f]
          border-b
          border-blue-400/30
          shadow-[0_4px_20px_rgba(0,100,255,.25)]
        "
      >
        {/* Header Glow */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-[radial-gradient(circle_at_50%_-20%,rgba(0,191,255,.35),transparent_65%)]
          "
        />

        {/* Header Content */}

        <div
          className="
            relative
            z-10
            h-full
            w-full
            flex
            items-center
            justify-between
            px-4
          "
        >
          {/* BACK BUTTON */}

          <button
            type="button"
            onClick={() => {
              if (setCurrentPage) {
                setCurrentPage("home");
              }
            }}
            className="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-full
              text-white
              hover:bg-blue-400/10
              active:scale-90
              transition-all
              duration-200
            "
          >
            <ArrowLeft
              size={28}
              strokeWidth={1.8}
            />
          </button>

          {/* TITLE */}

          <h1
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              text-[30px]
              font-serif
              font-bold
              tracking-wide
              text-white
              drop-shadow-[0_0_8px_rgba(0,200,255,.55)]
            "
          >
            VIP
          </h1>

          {/* HISTORY BUTTON */}

          <button
            type="button"
            className="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-xl
              text-cyan-300
              hover:bg-cyan-400/10
              active:scale-90
              transition-all
              duration-200
            "
          >
            <ReceiptText
              size={27}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Bottom Line */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-cyan-400/70
            to-transparent
          "
        />
      </header>

      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

      <main className="relative z-10 w-full px-3 pb-10">

        {/* ================================================= */}
        {/* VIP CURRENT LEVEL */}
        {/* ================================================= */}

        <div
          className="
            relative
            h-[125px]
            overflow-hidden
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_50%_45%,rgba(0,140,255,.28),transparent_45%)]
            "
          />

          {/* LEFT VIP */}

          <div
            className="
              absolute
              left-3
              top-[43px]
              text-[27px]
              font-black
              italic
              tracking-wide
              text-transparent
              bg-clip-text
              bg-gradient-to-b
              from-white
              via-blue-200
              to-blue-500
              drop-shadow-[0_0_8px_rgba(0,140,255,.7)]
            "
          >
            VIP
          </div>

          {/* LEFT LINE */}

          <div
            className="
              absolute
              left-[62px]
              top-[50px]
              w-[42px]
              h-[2px]
              bg-gradient-to-r
              from-blue-500
              to-transparent
              rotate-[-12deg]
            "
          />

          {/* VIP CIRCLE */}

          <div
            className="
              absolute
              left-1/2
              top-[23px]
              -translate-x-1/2
              w-[80px]
              h-[80px]
              rounded-full
              flex
              items-center
              justify-center
              bg-gradient-to-b
              from-[#0b2f5e]
              via-[#063b80]
              to-[#02152e]
              border-[4px]
              border-blue-400
              shadow-[0_0_0_3px_rgba(0,80,180,.45),0_0_25px_rgba(0,140,255,.75)]
            "
          >
            <div
              className="
                absolute
                inset-[5px]
                rounded-full
                border
                border-blue-300/70
              "
            />

            <span
              className="
                relative
                text-[32px]
                font-bold
                text-white
                drop-shadow-[0_0_8px_rgba(0,180,255,.8)]
              "
            >
              0
            </span>
          </div>

          {/* CURRENT LEVEL */}

          <div
            className="
              absolute
              right-2
              top-[43px]
              text-right
              leading-[19px]
              font-bold
              italic
              text-blue-100
              text-[16px]
              drop-shadow-[0_0_7px_rgba(0,140,255,.7)]
            "
          >
            Current
            <br />
            Level
          </div>

          {/* RIGHT LINE */}

          <div
            className="
              absolute
              right-[65px]
              top-[50px]
              w-[38px]
              h-[2px]
              bg-gradient-to-l
              from-blue-500
              to-transparent
              rotate-[12deg]
            "
          />
        </div>

        {/* ================================================= */}
        {/* CUMULATIVE BETS */}
        {/* ================================================= */}

        <section
          className="
            relative
            rounded-xl
            border
            border-blue-300/80
            bg-gradient-to-b
            from-[#0b315b]
            via-[#092744]
            to-[#06182e]
            px-3
            pt-3
            pb-3
            shadow-[0_0_18px_rgba(0,100,255,.25)]
          "
        >
          {/* CUMULATIVE TITLE */}

          <div className="flex items-center justify-between">
            <span
              className="
                text-[11px]
                font-bold
                text-blue-100
              "
            >
              Cumulative Bets:
            </span>

            <span
              className="
                text-[12px]
                font-bold
                text-white
              "
            >
              0.00
            </span>
          </div>

          {/* PROGRESS BAR */}

          <div
            className="
              mt-2
              h-[7px]
              w-full
              rounded-full
              bg-[#020b1d]
              overflow-hidden
              border
              border-blue-900/50
            "
          >
            <div
              className="
                h-full
                w-0
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-cyan-300
              "
            />
          </div>

          {/* RANGE */}

          <div
            className="
              flex
              justify-between
              mt-1
              text-[9px]
            "
          >
            <span className="text-gray-400">
              0.00
            </span>

            <span className="text-cyan-300">
              500.00 (VIP 1)
            </span>
          </div>

          {/* MONTHLY BETS */}

          <div
            className="
              mt-2
              rounded-lg
              bg-[#0b1e33]
              border
              border-blue-900/40
              px-2
              py-2
            "
          >
            <div className="flex items-center justify-between">
              <span
                className="
                  text-[11px]
                  font-bold
                  text-blue-100
                "
              >
                The Monthly Bets:
              </span>

              <span
                className="
                  text-[12px]
                  font-bold
                  text-white
                "
              >
                0.00
              </span>
            </div>

            {/* PROGRESS */}

            <div
              className="
                mt-2
                h-[7px]
                w-full
                rounded-full
                bg-[#020b1d]
                overflow-hidden
              "
            >
              <div
                className="
                  h-full
                  w-0
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-400
                "
              />
            </div>

            {/* INFO */}

            <div
              className="
                flex
                justify-between
                mt-1
                text-[9px]
              "
            >
              <span className="text-gray-400">
                0.00
              </span>

              <span className="text-cyan-300">
                Relegation Points: 0.00
              </span>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* VIP LEVEL BENEFITS */}
        {/* ================================================= */}

        <div className="flex items-center gap-1 mt-4 mb-2">

          <ChevronDown
            size={18}
            className="
              text-blue-300
              rotate-[-90deg]
            "
          />

          <h2
            className="
              text-[14px]
              font-bold
              text-white
              drop-shadow-[0_0_5px_rgba(0,150,255,.6)]
            "
          >
            VIP Level Benefits
          </h2>

          <div
            className="
              flex-1
              h-[1px]
              ml-1
              bg-gradient-to-r
              from-blue-500/60
              to-transparent
            "
          />
        </div>

        {/* ================================================= */}
        {/* BENEFIT CARDS */}
        {/* ================================================= */}

        <div className="grid grid-cols-3 gap-2">

          {/* WEEKLY */}

          <div
            className="
              relative
              h-[132px]
              rounded-lg
              overflow-hidden
              border
              border-blue-400/80
              bg-gradient-to-b
              from-[#092d52]
              via-[#071d35]
              to-[#041225]
              shadow-[0_0_12px_rgba(0,100,255,.22)]
            "
          >
            <div className="flex justify-center pt-3">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#082d54]
                  border
                  border-blue-400/50
                  shadow-[0_0_12px_rgba(0,140,255,.35)]
                "
              >
                <Coins
                  size={24}
                  className="text-cyan-300"
                />
              </div>
            </div>

            <div
              className="
                mt-1
                text-center
                text-[11px]
                font-bold
                leading-[13px]
                text-white
              "
            >
              Weekly
              <br />
              Rewards
            </div>

            <div
              className="
                text-center
                text-[12px]
                font-bold
                text-cyan-300
                mt-1
              "
            >
              + 0.00
            </div>

            <button
              type="button"
              disabled
              className="
                absolute
                bottom-2
                left-2
                right-2
                h-6
                rounded-md
                border
                border-blue-500/40
                bg-gradient-to-b
                from-[#124a7c]
                to-[#062342]
                text-[10px]
                text-blue-300
                font-semibold
              "
            >
              Receive
            </button>
          </div>

          {/* MONTHLY */}

          <div
            className="
              relative
              h-[132px]
              rounded-lg
              overflow-hidden
              border
              border-blue-400/80
              bg-gradient-to-b
              from-[#092d52]
              via-[#071d35]
              to-[#041225]
              shadow-[0_0_12px_rgba(0,100,255,.22)]
            "
          >
            <div className="flex justify-center pt-3">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#082d54]
                  border
                  border-blue-400/50
                  shadow-[0_0_12px_rgba(0,140,255,.35)]
                "
              >
                <Gift
                  size={24}
                  className="text-blue-300"
                />
              </div>
            </div>

            <div
              className="
                mt-1
                text-center
                text-[11px]
                font-bold
                leading-[13px]
                text-white
              "
            >
              Monthly
              <br />
              Rewards
            </div>

            <div
              className="
                text-center
                text-[12px]
                font-bold
                text-cyan-300
                mt-1
              "
            >
              + 0.00
            </div>

            <button
              type="button"
              disabled
              className="
                absolute
                bottom-2
                left-2
                right-2
                h-6
                rounded-md
                border
                border-blue-500/40
                bg-gradient-to-b
                from-[#124a7c]
                to-[#062342]
                text-[10px]
                text-blue-300
                font-semibold
              "
            >
              Receive
            </button>
          </div>

          {/* UPGRADE */}

          <div
            className="
              relative
              h-[132px]
              rounded-lg
              overflow-hidden
              border
              border-blue-400/80
              bg-gradient-to-b
              from-[#092d52]
              via-[#071d35]
              to-[#041225]
              shadow-[0_0_12px_rgba(0,100,255,.22)]
            "
          >
            <div className="flex justify-center pt-3">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#082d54]
                  border
                  border-blue-400/50
                  shadow-[0_0_12px_rgba(0,140,255,.35)]
                "
              >
                <Crown
                  size={24}
                  className="text-cyan-300"
                />
              </div>
            </div>

            <div
              className="
                mt-1
                text-center
                text-[11px]
                font-bold
                leading-[13px]
                text-white
              "
            >
              Upgrade
              <br />
              Rewards
            </div>

            <div
              className="
                text-center
                text-[12px]
                font-bold
                text-cyan-300
                mt-1
              "
            >
              + 0.00
            </div>

            <button
              type="button"
              disabled
              className="
                absolute
                bottom-2
                left-2
                right-2
                h-6
                rounded-md
                border
                border-blue-500/40
                bg-gradient-to-b
                from-[#124a7c]
                to-[#062342]
                text-[10px]
                text-blue-300
                font-semibold
              "
            >
              Receive
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* VIP REWARD TABS */}
        {/* ================================================= */}

        <div className="mt-5">

          <div
            className="
              grid
              grid-cols-4
              h-[42px]
              rounded-t-lg
              overflow-hidden
              border
              border-blue-500/30
              border-b-0
              bg-[#04172e]
            "
          >
            {/* UPGRADE */}

            <button
              type="button"
              className="
                relative
                flex
                items-center
                justify-center
                text-center
                text-[10px]
                leading-[11px]
                font-semibold
                text-cyan-300
                bg-gradient-to-b
                from-[#0b315b]
                to-[#061b34]
              "
            >
              Upgrade
              <br />
              Rewards

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-[3px]
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-300
                  to-blue-500
                  shadow-[0_0_8px_rgba(0,180,255,.8)]
                "
              />
            </button>

            {/* MONTHLY */}

            <button
              type="button"
              className="
                flex
                items-center
                justify-center
                text-center
                text-[10px]
                leading-[11px]
                font-semibold
                text-white
                bg-[#06182e]
              "
            >
              Monthly
              <br />
              Reward
            </button>

            {/* WEEKLY */}

            <button
              type="button"
              className="
                flex
                items-center
                justify-center
                text-center
                text-[10px]
                leading-[11px]
                font-semibold
                text-white
                bg-[#06182e]
              "
            >
              Weekly
              <br />
              Reward
            </button>

            {/* RELEGATION */}

            <button
              type="button"
              className="
                flex
                items-center
                justify-center
                text-center
                text-[10px]
                leading-[11px]
                font-semibold
                text-white
                bg-[#06182e]
              "
            >
              Relegation
              <br />
              Points
            </button>
          </div>

          {/* ================================================= */}
          {/* VIP TABLE */}
          {/* ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-b-xl
              border
              border-blue-500/30
              bg-gradient-to-b
              from-[#092b4d]
              via-[#061d34]
              to-[#041225]
              shadow-[0_0_20px_rgba(0,100,255,.20)]
            "
          >
            {/* TABLE HEADER */}

            <div
              className="
                grid
                grid-cols-[.8fr_1.5fr_1.2fr]
                items-center
                h-[42px]
                px-3
                bg-gradient-to-r
                from-[#0c3b67]
                via-[#0a2b4c]
                to-[#08203a]
                border-b
                border-blue-400/20
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  text-blue-100
                "
              >
                Grade
              </span>

              <span
                className="
                  text-[10px]
                  font-bold
                  text-blue-100
                  text-center
                "
              >
                Requirement Points
              </span>

              <span
                className="
                  text-[10px]
                  font-bold
                  text-blue-100
                  text-center
                "
              >
                Upgrade Rewards
              </span>
            </div>

            {/* TABLE ROWS */}

            {vipLevels.map((row, index) => (
              <div
                key={row[0]}
                className={`
                  grid
                  grid-cols-[.8fr_1.5fr_1.2fr]
                  items-center
                  min-h-[36px]
                  px-3
                  border-b
                  border-blue-400/10
                  ${
                    index % 2 === 0
                      ? "bg-[#07233d]/80"
                      : "bg-[#051b31]/80"
                  }
                  hover:bg-blue-500/10
                  transition-colors
                `}
              >
                {/* GRADE */}

                <span
                  className="
                    text-[10px]
                    font-semibold
                    text-cyan-300
                  "
                >
                  {row[0]}
                </span>

                {/* REQUIREMENT */}

                <span
                  className="
                    text-[10px]
                    text-white
                    text-center
                  "
                >
                  {row[1]}
                </span>

                {/* REWARD */}

                <span
                  className="
                    text-[10px]
                    text-white
                    text-center
                  "
                >
                  {row[2]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* ACTIVITY DESCRIPTION */}
        {/* ================================================= */}

        <section className="mt-7 pb-8">

          {/* TITLE */}

          <div className="flex items-center justify-center gap-2">

            <div
              className="
                h-[1px]
                w-[55px]
                bg-gradient-to-r
                from-transparent
                to-blue-500/70
              "
            />

            <h2
              className="
                text-[14px]
                font-bold
                text-cyan-300
                drop-shadow-[0_0_7px_rgba(0,180,255,.6)]
                whitespace-nowrap
              "
            >
              Activity Description
            </h2>

            <div
              className="
                h-[1px]
                w-[55px]
                bg-gradient-to-l
                from-transparent
                to-blue-500/70
              "
            />

          </div>

          {/* DESCRIPTION */}

          <div
            className="
              mt-3
              px-1
              text-[9px]
              leading-[18px]
              text-blue-100/80
            "
          >
            <p>
              1. Reach the required turnover points to claim the upgrade reward.
            </p>

            <p>
              2. Please claim your monthly reward at 4:00 AM (GMT+5) on the 1st of each month.
            </p>

            <p>
              3. Weekly rewards can be claimed at 4:00 AM (GMT+5) every Monday.
            </p>

            <p>
              4. Must meet 1× turnover requirement to withdraw.
            </p>

            <p>
              5. To maintain fairness, honesty, and transparency, the website
              reserves the right to stop, block, or freeze group accounts
              suspected of cheating; retains the final interpretation rights,
              and may stop or modify promotions without prior notice.
            </p>
          </div>
        </section>

      </main>
      <div className="mb-50"></div>
    </div>
  );
}