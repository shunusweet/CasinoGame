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
        w-full
        bg-[#020617]
        text-white
      "
    >

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          w-full
          max-w-[540px]
          mx-auto
          min-h-screen
          bg-[#020617]
        "
      >

        {/* ================= HEADER ================= */}

        <div
          className="
            sticky
            top-0
            z-50

            w-full

            bg-[#04152e]
            border-b
            border-cyan-800

            px-3
            sm:px-4
            py-3
            sm:py-4

            flex
            items-center
            justify-between
          "
        >

          {/* Back */}

          <button
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10

              shrink-0

              rounded-full

              bg-cyan-500/10
              border
              border-cyan-500

              flex
              items-center
              justify-center

              hover:bg-cyan-500/20
              transition
              duration-300
            "
          >
            <ArrowLeft
              size={20}
              className="sm:w-[22px] sm:h-[22px]"
            />
          </button>


          {/* Title */}

          <h1
            className="
              text-xl
              sm:text-2xl
              font-bold
            "
          >
            Deposit
          </h1>


          {/* History */}

          <button
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10

              shrink-0

              rounded-full

              bg-cyan-500/10
              border
              border-cyan-500

              flex
              items-center
              justify-center

              hover:bg-cyan-500/20
              transition
              duration-300
            "
          >
            <History
              size={20}
              className="sm:w-[22px] sm:h-[22px]"
            />
          </button>

        </div>


        {/* ================= BODY ================= */}

        <div
          className="
            w-full
            px-3
            sm:px-4
            py-4
            sm:py-5
            pb-8
          "
        >

          {/* ================= RECHARGE METHOD ================= */}

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              mb-3
            "
          >
            Recharge Method
          </h2>

          <div className="border-b border-cyan-700 mb-5"></div>


          {/* Main Recharge Icon */}

          <div
            className="
              w-28
              h-28
              sm:w-36
              sm:h-36

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
                w-16
                h-16
                sm:w-20
                sm:h-20

                rounded-2xl

                bg-white

                flex
                items-center
                justify-center
              "
            >
              <Smartphone
                size={36}
                className="sm:w-[42px] sm:h-[42px] text-green-500"
              />
            </div>

          </div>


          {/* ================= RECHARGE CHANNEL ================= */}

          <div
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              mt-7
              sm:mt-8
            "
          >

            <div
              className="
                w-11
                h-11
                sm:w-14
                sm:h-14

                shrink-0

                rounded-xl

                bg-white

                flex
                items-center
                justify-center
              "
            >
              <Smartphone
                size={24}
                className="sm:w-7 sm:h-7 text-green-500"
              />
            </div>

            <h2
              className="
                text-xl
                sm:text-3xl
                font-bold
              "
            >
              Recharge Channel
            </h2>

          </div>

          <div className="border-b border-cyan-700 mt-3 sm:mt-4 mb-4 sm:mb-5"></div>


          {/* ================= CHANNEL LIST ================= */}

          <div
            className="
              flex
              gap-2
              sm:gap-3

              overflow-x-auto
              pb-3

              scrollbar-hide
            "
          >

            {channels.map((item) => (

              <button
                key={item}
                onClick={() => setSelectedMethod(item)}
                className={`
                  min-w-[145px]
                  sm:min-w-[170px]

                  h-[85px]
                  sm:h-[95px]

                  rounded-2xl
                  sm:rounded-3xl

                  border

                  transition-all
                  duration-300

                  flex
                  flex-col
                  items-center
                  justify-center

                  shrink-0

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

                <span
                  className="
                    text-lg
                    sm:text-2xl
                    font-bold
                  "
                >
                  Easypaisa
                </span>

                <span
                  className="
                    text-base
                    sm:text-xl
                    mt-1
                    sm:mt-2
                    font-semibold
                  "
                >
                  {item}
                </span>

              </button>

            ))}

          </div>


          {/* ================= RECHARGE AMOUNT ================= */}

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              mt-7
              sm:mt-8
            "
          >
            Recharge Amount
          </h2>

          <div className="border-b border-cyan-700 mt-3 sm:mt-4 mb-4 sm:mb-5"></div>


          {/* ================= AMOUNT BUTTONS ================= */}

          <div
            className="
              grid
              grid-cols-2
              min-[400px]:grid-cols-3
              gap-2
              sm:gap-4
            "
          >

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
                  h-14
                  sm:h-[70px]

                  rounded-xl
                  sm:rounded-2xl

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

                  text-base
                  sm:text-xl
                "
              >
                Rs {amount}
              </button>

            ))}

          </div>


          {/* ================= CUSTOM AMOUNT ================= */}

          <div className="mt-6 sm:mt-8">

            <label
              className="
                text-base
                sm:text-xl
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
                mt-2
                sm:mt-3

                h-12
                sm:h-14

                rounded-xl
                sm:rounded-2xl

                bg-[#061b3a]

                border
                border-cyan-500

                px-4
                sm:px-5

                text-base
                sm:text-lg
                text-white

                outline-none

                focus:border-cyan-300
                focus:ring-2
                focus:ring-cyan-400/40

                placeholder:text-gray-400
              "
            />

          </div>


          {/* ================= PAYMENT INFO ================= */}

          <div
            className="
              mt-6
              sm:mt-8

              rounded-xl
              sm:rounded-2xl

              border
              border-cyan-700

              bg-[#04152e]

              p-4
              sm:p-5
            "
          >

            <div
              className="
                flex
                justify-between
                items-center
                gap-3
                mb-3
                text-sm
                sm:text-base
              "
            >

              <span className="text-gray-300">
                Selected Channel
              </span>

              <span className="font-bold text-right">
                Easypaisa {selectedMethod}
              </span>

            </div>


            <div
              className="
                flex
                justify-between
                items-center
                gap-3
                text-sm
                sm:text-base
              "
            >

              <span className="text-gray-300">
                Minimum Deposit
              </span>

              <span className="font-bold text-cyan-300">
                Rs 500
              </span>

            </div>

          </div>


          {/* ================= DEPOSIT BUTTON ================= */}

          <button
            className="
              w-full

              h-14
              sm:h-16

              mt-6
              sm:mt-8

              rounded-xl
              sm:rounded-2xl

              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-blue-700

              text-xl
              sm:text-2xl

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


          {/* ================= INFO BOX ================= */}

          <div
            className="
              mt-6
              sm:mt-8

              rounded-xl
              sm:rounded-2xl

              border
              border-cyan-700

              bg-[#061b3a]

              p-4
              sm:p-5

              text-xs
              sm:text-sm

              text-cyan-100

              leading-6
              sm:leading-7
            "
          >

            <p>
              • Deposit will be credited within{" "}
              <b>1-5 minutes.</b>
            </p>

            <p>
              • Please use your own Easypaisa account.
            </p>

            <p>
              • Minimum deposit amount is{" "}
              <b>Rs 500</b>.
            </p>

            <p>
              • Contact customer support if payment is delayed.
            </p>

          </div>

        </div>

      </div>

      {/* ================= HIDE SCROLLBAR ================= */}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
}