import React from "react";
import {
  House,
  Wallet,
  Gift,
  User,
  CircleDollarSign,
} from "lucide-react";

const BottomNavbar = ({
  setLoginOpen,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        flex
        justify-center
        pointer-events-none
      "
    >
      {/* ================= 540px CONTAINER ================= */}

      <div
        className="
          pointer-events-auto
          w-full
          max-w-[540px]

          bg-gradient-to-t
          from-[#020617]
          via-[#071426]
          to-[#061b3a]

          border-t
          border-cyan-700/80

          rounded-t-3xl

          shadow-[0_-5px_30px_rgba(0,200,255,.35)]
        "
      >
        <div
          className="
            relative
            flex
            items-end
            justify-around

            h-[82px]

            px-2
            sm:px-4
          "
        >

          {/* ================= HOME ================= */}

          <button
            onClick={() => setCurrentPage("home")}
            className={`
              flex
              flex-1
              flex-col
              items-center
              justify-center

              h-full

              transition-all
              duration-300

              ${
                currentPage === "home"
                  ? "text-cyan-300 scale-105"
                  : "text-gray-500 hover:text-cyan-300"
              }
            `}
          >
            <House
              size={26}
              strokeWidth={2}
            />

            <p className="text-[11px] sm:text-xs mt-1 font-medium">
              Home
            </p>
          </button>


          {/* ================= DEPOSIT ================= */}

          <button
            onClick={() => setCurrentPage("deposit")}
            className={`
              flex
              flex-1
              flex-col
              items-center
              justify-center

              h-full

              transition-all
              duration-300

              ${
                currentPage === "deposit"
                  ? "text-cyan-300 scale-105"
                  : "text-gray-500 hover:text-cyan-300"
              }
            `}
          >
            <Wallet
              size={26}
              strokeWidth={2}
            />

            <p className="text-[11px] sm:text-xs mt-1 font-medium">
              Deposit
            </p>
          </button>


          {/* ================= AGENCY ================= */}

          <button
            onClick={() => setCurrentPage("agency")}
            className="
              relative
              flex
              flex-1
              flex-col
              items-center

              h-full

              transition-all
              duration-300
            "
          >

            {/* FLOATING CIRCLE */}

            <div
              className="
                absolute
                -top-[38px]

                w-[68px]
                h-[68px]

                sm:w-[74px]
                sm:h-[74px]

                rounded-full

                bg-gradient-to-b
                from-cyan-300
                via-blue-500
                to-blue-800

                border-[3px]
                border-cyan-300

                flex
                items-center
                justify-center

                shadow-[0_0_28px_rgba(0,200,255,.75)]

                hover:scale-105

                transition-all
                duration-300
              "
            >
              <CircleDollarSign
                size={38}
                className="text-white"
                strokeWidth={2}
              />
            </div>

            {/* LABEL */}

            <p
              className="
                absolute
                bottom-[7px]

                text-cyan-300
                text-[11px]
                sm:text-xs
                font-semibold
              "
            >
              Agency
            </p>

          </button>


          {/* ================= ACTIVITY ================= */}

          <button
            onClick={() => setCurrentPage("activity")}
            className={`
              flex
              flex-1
              flex-col
              items-center
              justify-center

              h-full

              transition-all
              duration-300

              ${
                currentPage === "activity"
                  ? "text-cyan-300 scale-105"
                  : "text-gray-500 hover:text-cyan-300"
              }
            `}
          >
            <Gift
              size={26}
              strokeWidth={2}
            />

            <p className="text-[11px] sm:text-xs mt-1 font-medium">
              Activity
            </p>
          </button>


          {/* ================= ME ================= */}

          <button
            onClick={() => setLoginOpen(true)}
            className="
              flex
              flex-1
              flex-col
              items-center
              justify-center

              h-full

              text-gray-500

              hover:text-cyan-300
              hover:scale-105

              transition-all
              duration-300
            "
          >
            <User
              size={26}
              strokeWidth={2}
            />

            <p className="text-[11px] sm:text-xs mt-1 font-medium">
              Me
            </p>
          </button>

        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;