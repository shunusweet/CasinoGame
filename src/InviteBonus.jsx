import React from "react";
import { ArrowLeft } from "lucide-react";
import Invite1Friend from "./assets/Invite1Friend.png";

export default function InviteBonus({ setCurrentPage }) {
  return (
    <div className="w-full h-full bg-[#020617] text-white overflow-y-auto">

      

      {/* ================= BANNER ================= */}
      <div className="w-full">
        <img
          src={Invite1Friend}
          alt="Invite 1 Friend"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="px-4 py-5">

        {/* Share Box */}
        <div
          className="
            rounded-xl
            border
            border-cyan-700
            bg-[#071426]
            p-4
            shadow-[0_0_15px_rgba(0,180,255,.15)]
          "
        >
          <h2 className="font-serif font-bold text-cyan-100 mb-3">
            Share Link:
          </h2>

          <div
            className="
              flex
              items-center
              justify-between
              bg-[#020617]
              border
              border-cyan-900
              rounded-lg
              px-3
              py-3
            "
          >
            <span className="text-[11px] text-gray-300 truncate">
              https://33rs2s.com/s/x
            </span>

            <button
              className="
                ml-2
                w-9
                h-9
                rounded-lg
                bg-gradient-to-b
                from-cyan-400
                to-blue-700
                flex
                items-center
                justify-center
              "
            >
              📋
            </button>
          </div>

          {/* Social Media */}
          <h3 className="text-center mt-5 mb-3 font-serif font-bold">
            Share to Social Media:
          </h3>

          <div className="flex justify-center gap-5">

            <div className="text-center">
              <div className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center">
                <span className="font-bold text-white text-xl">f</span>
              </div>
              <p className="text-[8px] mt-1">Facebook</p>
            </div>

            <div className="text-center">
              <div className="w-9 h-9 rounded-full bg-[#25d366] flex items-center justify-center">
                <span className="text-white text-sm">●</span>
              </div>
              <p className="text-[8px] mt-1">Whatsapp</p>
            </div>

            <div className="text-center">
              <div className="w-9 h-9 rounded-full bg-[#229ed9] flex items-center justify-center">
                <span className="text-white">➤</span>
              </div>
              <p className="text-[8px] mt-1">Telegram</p>
            </div>

            <div className="text-center">
              <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center">
                <span className="text-white">◎</span>
              </div>
              <p className="text-[8px] mt-1">Instagram</p>
            </div>

            <div className="text-center">
              <div className="w-9 h-9 rounded-full bg-black border border-gray-600 flex items-center justify-center">
                <span className="text-white">𝕏</span>
              </div>
              <p className="text-[8px] mt-1">Twitter</p>
            </div>

          </div>
        </div>

        {/* Direct Subordinates */}
        <div
          className="
            mt-4
            rounded-lg
            px-4
            py-3
            bg-gradient-to-r
            from-cyan-700
            to-blue-900
            flex
            justify-between
            items-center
            font-serif
            font-bold
          "
        >
          <span>My Direct Subordinates</span>
          <span className="text-cyan-200 text-sm">
            0 People ›
          </span>
        </div>

        {/* ================= REWARDS ================= */}
        <div className="grid grid-cols-4 gap-4 mt-5">

          {[
            ["1 People", "200.00"],
            ["2 People", "200.00"],
            ["3 People", "200.00"],
            ["4 People", "200.00"],
            ["8 People", "200.00"],
            ["7 People", "200.00"],
            ["6 People", "200.00"],
            ["5 People", "200.00"],
            ["9 People", "200.00"],
            ["10 People", "200.00"],
            ["20 People", "2,000.00"],
            ["30 People", "2,000.00"],
            ["70 People", "2,000.00"],
            ["60 People", "2,000.00"],
            ["50 People", "2,000.00"],
            ["40 People", "2,000.00"],
            ["80 People", "2,000.00"],
            ["90 People", "2,000.00"],
            ["100 People", "2,000.00"],
            ["120 People", "4,000.00"],
            ["200 People", "4,000.00"],
            ["180 People", "4,000.00"],
            ["160 People", "4,000.00"],
            ["140 People", "4,000.00"],
            ["230 People", "6,000.00"],
            ["260 People", "6,000.00"],
            ["290 People", "6,000.00"],
            ["320 People", "6,000.00"],
            ["500 People", "10,000.00"],
            ["450 People", "10,000.00"],
            ["400 People", "10,000.00"],
            ["350 People", "6,000.00"],
            ["1100 People", "20,000.00"],
            ["1000 People", "20,000.00"],
            ["900 People", "20,000.00"],
            ["800 People", "20,000.00"],
            ["1200 People", "20,000.00"],
            ["1300 People", "20,000.00"],
            ["1500 People", "40,000.00"],
            ["2000 People", "100,000.00"],
          ].map(([people, reward], index) => (
            <div
              key={index}
              className="
                text-center
                bg-[#071426]/60
                rounded-lg
                py-2
              "
            >
              <div className="text-3xl">
                🧰
              </div>

              <p className="text-[10px] mt-1">
                {people}
              </p>

              <p className="text-[10px] text-cyan-300 font-bold">
                {reward}
              </p>
            </div>
          ))}

        </div>

        {/* ================= ACTIVITY DESCRIPTION ================= */}
        <div className="mt-8 mb-20">

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-[1px] bg-cyan-800" />

            <h2 className="font-serif font-bold text-cyan-100">
              Activity Description
            </h2>

            <div className="flex-1 h-[1px] bg-cyan-800" />
          </div>

          <div
            className="
              text-[11px]
              leading-[18px]
              text-gray-200
              font-serif
            "
          >
            <p className="mb-3">
              Invite friends to open treasure chests. Different
              numbers of people will earn you corresponding
              treasure chest rewards, with a maximum of
              100,000.
            </p>

            <p className="mb-3">
              Invite friends must recharge ≥ 200 and bet ≥ 2000.
              All platform games count as valid bets.
            </p>

            <p className="mb-3">
              After receiving the event reward, you must complete
              a 1x turnover requirement before making a withdrawal.
            </p>

            <p className="mb-3">
              This activity is limited to normal manual operation
              by the account holder. Renting or using cheating
              software, bots, multi-account gambling, manual
              manipulation, arbitrage, APIs, protocols, exploiting
              vulnerabilities, group control or other technical
              means are prohibited.
            </p>

            <p className="mb-3">
              If the rewards may be canceled or deducted, they
              may be frozen or even blacklisted.
            </p>

            <p>
              To avoid ambiguity in the interpretation of the text,
              the platform reserves the right to the final
              interpretation of this event.
            </p>
          </div>

        </div>
        

      </div>
      <div className="mt-8 mb-20"></div>
    </div>
  );
}