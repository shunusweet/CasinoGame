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
    <div className="fixed bottom-0 left-0 w-full flex justify-center z-50">
      <div
        className="
          w-full
          max-w-[430px]
          bg-gradient-to-t
          from-[#020617]
          via-[#071426]
          to-[#061b3a]
          border-t
          border-cyan-700
          rounded-t-3xl
          shadow-[0_-5px_25px_rgba(0,200,255,.40)]
        "
      >
        <div className="flex justify-around items-end h-24">

          {/* ================= HOME ================= */}
          <button
            onClick={() => setCurrentPage("home")}
            className={`flex flex-col items-center duration-300 ${
              currentPage === "home"
                ? "text-cyan-300"
                : "text-gray-500"
            }`}
          >
            <House size={28} />
            <p className="text-xs mt-1 font-medium">
              Home
            </p>
          </button>

          {/* ================= DEPOSIT ================= */}
          <button
            onClick={() => setCurrentPage("deposit")}
            className={`flex flex-col items-center duration-300 ${
              currentPage === "deposit"
                ? "text-cyan-300"
                : "text-gray-500"
            }`}
          >
            <Wallet size={28} />
            <p className="text-xs mt-1 font-medium">
              Deposit
            </p>
          </button>

          {/* ================= AGENCY ================= */}
          <button
            className="
              relative
              -mt-10
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                w-20
                h-20
                rounded-full
                bg-gradient-to-b
                from-cyan-300
                via-blue-500
                to-blue-800
                border-4
                border-cyan-400
                flex
                items-center
                justify-center
                shadow-[0_0_30px_rgba(0,200,255,.80)]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <CircleDollarSign
                size={42}
                className="text-white"
              />
            </div>

            <p className="text-cyan-300 text-xs mt-1 font-semibold">
              Agency
            </p>
          </button>

          {/* ================= ACTIVITY ================= */}
          <button
            onClick={() => setCurrentPage("activity")}
            className={`flex flex-col items-center duration-300 ${
              currentPage === "activity"
                ? "text-cyan-300"
                : "text-gray-500"
            }`}
          >
            <Gift size={28} />
            <p className="text-xs mt-1 font-medium">
              Activity
            </p>
          </button>

          {/* ================= ME ================= */}
          <button
            onClick={() => setLoginOpen(true)}
            className="flex flex-col items-center text-gray-500 hover:text-cyan-300 duration-300"
          >
            <User size={28} />
            <p className="text-xs mt-1 font-medium">
              Me
            </p>
          </button>

        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;