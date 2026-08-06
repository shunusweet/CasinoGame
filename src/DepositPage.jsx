import React, { useState } from "react";
import {
  ArrowLeft,
  History,
  Smartphone,
} from "lucide-react";

export default function DepositPage() {
  const [selectedMethod, setSelectedMethod] = useState("S4");

  const channels = [
    "S4",
    "S8",
    "S12",
    "S18",
    "S22",
  ];

  return (
    <div
      className="
      min-h-screen
      bg-[#020617]
      text-white
      "
    >
      {/* ================= HEADER ================= */}

      <div
        className="
        sticky
        top-0
        z-50

        bg-[#04152e]

        border-b
        border-cyan-800

        px-4
        py-4

        flex
        items-center
        justify-between
        "
      >
        <button
          className="
          w-10
          h-10

          rounded-full

          bg-cyan-500/10

          border
          border-cyan-500

          flex
          items-center
          justify-center
          "
        >
          <ArrowLeft size={22} />
        </button>

        <h1
          className="
          text-2xl
          font-bold
          "
        >
          Deposit
        </h1>

        <button
          className="
          w-10
          h-10

          rounded-full

          bg-cyan-500/10

          border
          border-cyan-500

          flex
          items-center
          justify-center
          "
        >
          <History size={22} />
        </button>
      </div>

      {/* ================= BODY ================= */}

      <div className="p-4">

        {/* Recharge Method */}

        <h2
          className="
          text-3xl
          font-bold
          mb-4
          "
        >
          Recharge Method
        </h2>

        <div className="border-b border-cyan-700 mb-6"></div>

        <div
          className="
          w-36
          h-36

          rounded-3xl

          bg-gradient-to-br
          from-cyan-400
          via-blue-600
          to-blue-900

          border
          border-cyan-300

          flex
          items-center
          justify-center

          shadow-[0_0_25px_rgba(0,255,255,.35)]
          "
        >
          <div
            className="
            w-20
            h-20

            rounded-2xl

            bg-white

            flex
            items-center
            justify-center
            "
          >
            <Smartphone
              size={42}
              className="text-green-500"
            />
          </div>
        </div>

        {/* Recharge Channel */}

        <div
          className="
          flex
          items-center
          gap-3

          mt-8
          "
        >
          <div
            className="
            w-14
            h-14

            rounded-xl

            bg-white

            flex
            items-center
            justify-center
            "
          >
            <Smartphone
              size={28}
              className="text-green-500"
            />
          </div>

          <h2
            className="
            text-3xl
            font-bold
            "
          >
            Recharge Channel
          </h2>
        </div>

        <div className="border-b border-cyan-700 mt-4 mb-5"></div>

        {/* Continue in Part 2 */}
                {/* ================= Recharge Channel List ================= */}

        <div
          className="
          flex
          gap-4
          overflow-x-auto
          pb-3
          no-scrollbar
          "
        >
          {channels.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedMethod(item)}
              className={`
                min-w-[170px]
                h-[95px]

                rounded-3xl

                border

                transition-all
                duration-300

                flex
                flex-col
                items-center
                justify-center

                ${
                  selectedMethod === item
                    ? `
                    border-cyan-300
                    bg-gradient-to-br
                    from-cyan-400
                    via-blue-500
                    to-blue-800

                    shadow-[0_0_20px_rgba(0,255,255,.40)]
                    `
                    : `
                    border-cyan-700
                    bg-[#061b3a]
                    `
                }
              `}
            >
              <span className="text-2xl font-bold">
                Easypaisa
              </span>

              <span className="text-xl mt-2 font-semibold">
                {item}
              </span>
            </button>
          ))}
        </div>

        {/* ================= Recharge Amount ================= */}

        <h2
          className="
          text-3xl
          font-bold
          mt-8
          "
        >
          Recharge Amount
        </h2>

        <div className="border-b border-cyan-700 mt-4 mb-5"></div>

        {/* Continue in Part 3 */}
                {/* ================= Amount Buttons ================= */}

        <div className="grid grid-cols-3 gap-4">

          {[
            500,
            1000,
            2000,
            5000,
            10000,
            20000,
          ].map((amount) => (

            <button
              key={amount}
              className="
              h-[70px]

              rounded-2xl

              border
              border-cyan-500

              bg-[#061b3a]

              hover:bg-gradient-to-br
              hover:from-cyan-500
              hover:to-blue-700

              hover:border-cyan-300

              transition-all
              duration-300

              font-bold
              text-xl
              "
            >
              Rs {amount}
            </button>

          ))}

        </div>

        {/* ================= Custom Amount ================= */}

        <div className="mt-8">

          <label
            className="
            text-xl
            font-semibold
            text-cyan-200
            "
          >
            Enter Amount
          </label>

          <input
            type="number"
            placeholder="Minimum Rs 500"

            className="
            w-full
            mt-3

            h-14

            rounded-2xl

            bg-[#061b3a]

            border
            border-cyan-500

            px-5

            text-lg
            text-white

            outline-none

            focus:border-cyan-300
            focus:ring-2
            focus:ring-cyan-400/40

            placeholder:text-gray-400
            "
          />

        </div>

        {/* ================= Payment Info ================= */}

        <div
          className="
          mt-8

          rounded-2xl

          border
          border-cyan-700

          bg-[#04152e]

          p-5
          "
        >

          <div className="flex justify-between mb-3">
            <span className="text-gray-300">
              Selected Channel
            </span>

            <span className="font-bold">
              Easypaisa {selectedMethod}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">
              Minimum Deposit
            </span>

            <span className="font-bold text-cyan-300">
              Rs 500
            </span>
          </div>

        </div>

        {/* Continue in Part 4 */}
                {/* ================= Deposit Button ================= */}

        <button
          className="
          w-full
          h-16

          mt-8

          rounded-2xl

          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-blue-700

          text-2xl
          font-bold
          text-white

          shadow-[0_0_20px_rgba(0,255,255,.35)]

          hover:scale-[1.02]
          hover:shadow-[0_0_30px_rgba(0,255,255,.6)]

          transition-all
          duration-300
          "
        >
          Deposit
        </button>

        {/* ================= Info Box ================= */}

        <div
          className="
          mt-8

          rounded-2xl

          border
          border-cyan-700

          bg-[#061b3a]

          p-5

          text-sm
          text-cyan-100

          leading-7
          "
        >
          <p>
            • Deposit will be credited within <b>1-5 minutes.</b>
          </p>

          <p>
            • Please use your own Easypaisa account.
          </p>

          <p>
            • Minimum deposit amount is <b>Rs 500</b>.
          </p>

          <p>
            • Contact customer support if payment is delayed.
          </p>
        </div>

      </div>
    </div>
  );
}